const autolinkMail = /<(?<mail>[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)>/gi;

export default function(raw: string): string {
  if (!raw || !raw.includes("<") || !raw.includes(">")) return raw;

  for (const match of raw.matchAll(autolinkMail)) {
    if (!match.groups) continue;

    const whole = match[0];
    const index = match.index;
    const groups = match.groups;

    const endStr = `</${whole.slice(1, -1).split(" ", 1)[0]}>`;
    if (raw.includes(endStr, index + whole.length)) continue;

    raw = raw.slice(0, index) + `<Mail>${groups.mail}</Mail>` + raw.slice(index + whole.length);
  }

  return raw;
}
