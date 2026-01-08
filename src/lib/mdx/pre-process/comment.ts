import {mappings} from "./_components";


const comment = /<!--(?<content>[^]*?)-->/g;
const commentEscape = /<!?-+|-+>/;

export default function(raw: string): string {
  if (!raw || !raw.includes("<!--") || !raw.includes("-->")) return raw;

  for (const match of raw.matchAll(comment)) {
    if (!match.groups) continue;

    const whole = match[0];
    const index = match.index;

    const endStr = `</${whole.slice(1, -1).split(" ", 1)[0]}>`;
    if (raw.includes(endStr, index + whole.length)) continue;

    const content = match.groups.content.trim();
    if (commentEscape.test(content)) continue;

    const safeContent = content
        .replace("-", "‐")
        .replace("<", "‹")
        .replace(">", "›");

    const html = `<${mappings.Comment} children={${JSON.stringify(safeContent)}}/>`
    raw = raw.slice(0, index) + html + raw.slice(index + whole.length);
  }

  return raw;
}
