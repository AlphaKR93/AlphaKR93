import { FrontMatter, style as markdown } from "@/components/mdx";
import { notFound } from "next/navigation";
import fetchDocument from "./_render";
import style from "../article.module.css";


const GIST_SHA = /^[~-]?[0-9a-f]{32}$/i;

export default async function({ params }: PageProps<"/blog/article/[slug]">) {
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
