import type { Metadata, ResolvingMetadata } from "next";

import { notFound } from "next/navigation";

import { FrontMatter, style as markdown } from "@/components/mdx";

import style from "../article.module.css";
import fetchDocument from "./_render";


type Props = Readonly<PageProps<"/article/[slug]">>;
const GIST_SHA = /^[~-]?[0-9a-f]{32}$/i;

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  return {};
}

export default async function({ params }: Props) {
  const { slug } = await params;
  if (!GIST_SHA.test(slug)) notFound();

  const [{ frontmatter, content }, metadata] = await fetchDocument(slug);

  return <main className={style.main}>
    <article className={markdown.markdownDocument}>
      <FrontMatter frontmatter={frontmatter} metadata={metadata} />
      <aside />
      <div className={markdown.content}>
        {content}
      </div>
    </article>
  </main>;
}
