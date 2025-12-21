import "server-only";
import matter from "gray-matter";
import {evaluate} from "next-mdx-remote-client/rsc";
import {mdxComponents, mdxOptions} from "@/lib/mdx";


interface RenderResult {
  frontmatter: {
    title: string;
    summary?: string;
    description?: string;
    tags?: string[];
  };
  content: Element;
}

export async function renderMdxFile(raw: string) {
  const { data, content } = matter(raw);

  // TODO: Add content processing steps here
  const source = content;

  const compiled = await evaluate({
    source,
    options: {
      mdxOptions,
    },
    components: mdxComponents
  });

  if (compiled.error) throw compiled.error;

  return { frontmatter: data, content: compiled.content } as unknown as RenderResult;
}
