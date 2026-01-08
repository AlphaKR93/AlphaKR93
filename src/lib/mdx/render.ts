import "server-only";

import type { EvaluateResult } from "next-mdx-remote-client/rsc";

import { evaluate } from "next-mdx-remote-client/rsc";
import matter from "gray-matter";

import { mdxOptions, mdxComponents } from "./options";


export interface FrontMatter {
  title: string;
}

const vfileDataIntoScope = [
  { name: "toc", as: "toc" }
] as const satisfies { name: string; as: string }[];

export default async function renderMdxContent(raw: string) {
  const { data, content, excerpt } = matter(raw, { excerpt: true });

  const source = await preProcessContent(content, { excerpt });
  const scope = {} satisfies Record<string, any>;

  const compiled = await evaluate({
    source,
    options: {
      mdxOptions,
      disableExports: true,
      disableImports: true,
      parseFrontmatter: false,
      scope,
      vfileDataIntoScope,
    },
    components: mdxComponents,
  });

  if (compiled.error) throw compiled.error;

  return {
    content: compiled.content,
    frontmatter: data as FrontMatter,
    scope: compiled.scope,
    excerpt
  } as RenderResult<typeof scope>;
}

async function preProcessContent(content: string, { excerpt }: Readonly<{ excerpt?: string }>): Promise<string> {
  if (typeof excerpt !== "string") throw new TypeError("excerpt must be a string");

  return content.slice(excerpt.length + 4 /* DELIM(3) + ln(1) */);
}

interface RenderResult<Scope extends Record<string, any>> extends Omit<
  EvaluateResult<FrontMatter, Scope & { [p in typeof vfileDataIntoScope[number]["as"]]: any }>,
  "mod" | "error"
> {
  excerpt: string;
}
