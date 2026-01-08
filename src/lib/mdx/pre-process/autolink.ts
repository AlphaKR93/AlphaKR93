const autolink = /<(?<scheme>[a-z]+):\/*(?<data>(?:[ \p{L}\p{M}\p{Nd}!#$%&'()[\]*+/=?^_.,:;`{|}~-]|%[0-9A-F]{2}|%[0-9a-f]{2})+)>/gu;
const autolinkInvalid = /<[a-z]+:\/*>/;

const ghUsername = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
const ghRepository = /^[a-z\d_.-]{0,100}(?:@(?:[0-9a-f]{40}|[0-9a-f]{7})|#[1-9]\d*)?$/i;

// noinspection HttpUrlsUsage
const scheme: Record<string, (data: string) => string | void> = {
  http: (data) => `<DynamicLink>${encodeURI("http://" + data)}</DynamicLink>`,
  https: (data) => `<DynamicLink>${encodeURI("https://" + data)}</DynamicLink>`,
  mailto: (data) => `<Mail>${data}</Mail>`,
  icon: (data) => `<Icon>${data}</Icon>`,
  t: (data) => `<Timestamp>${data}</Timestamp>`,
  gh: function(data) {
    if (!data.includes("/")) {
      if (!ghUsername.test(data)) return;
      return `<GitHubUser>${data}</GitHubUser>`;
    }

    const [owner, repository, ...rest] = data.split("/");
    if (rest.length > 0 || !ghUsername.test(owner) || !ghRepository.test(repository)) return;

    if (repository.includes("#")) {
      const [repoName, issuePart] = repository.split("#", 1);
      return `<GitHubIssue owner="${owner}" repository="${repoName}" issue="${issuePart}"/>`;
    } else if (repository.includes("@")) {
      const [repoName, commitPart] = repository.split("@", 1);
      return `<GitHubCommit owner="${owner}" repository="${repoName}" commit="${commitPart}"/>`;
    }

    return `<GitHubRepository>${owner}/${repository}</GitHubRepository>`;
  }
};

export default function(raw: string): string {
  if (!raw || !raw.includes("<") || !raw.includes(">")) return raw;

  for (const match of raw.matchAll(autolink)) {
    if (!match.groups || autolinkInvalid.test(match[0])) continue;

    const whole = match[0];
    const index = match.index;
    const groups = match.groups;

    const endStr = `</${whole.slice(1, -1).split(" ", 1)[0]}>`;
    if (raw.includes(endStr, index + whole.length)) continue;

    const generator = scheme[groups.scheme];
    if (!generator) continue;

    try {
      const replacement = generator(groups.data);
      if (!replacement) continue;

      raw = raw.slice(0, index) + replacement + raw.slice(index + whole.length);
    } catch {
    }
  }

  return raw;
}
