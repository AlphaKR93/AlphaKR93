import comment from "./comment";
import autolink from "./autolink";
import autolinkMail from "./autolink-mail";


const preProcessors: ((raw: string) => string)[] = [
  autolink,
  autolinkMail,
  comment,
]

export default function(raw: string): string {
  for (const processor of preProcessors) {
    raw = processor(raw);
  }
  return raw;
}
