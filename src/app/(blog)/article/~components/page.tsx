import { FrontMatter, style as markdown } from "@/components/mdx";
import style from "src/app/(blog)/article/article.module.css";
import Content from "src/app/(blog)/article/~components/_contents";

export default function(_: Readonly<PageProps<"/blog/article/~components">>) {
  return <main className={style.main}>
    <article className={markdown.markdownDocument}>
      <FrontMatter frontmatter={{ title: "알파마크:구성요소" }} metadata={{ createdAt: Temporal.Now.instant().toString() }} />
      <aside />
      <div className={markdown.content}>
        <Content/>
      </div>
    </article>
  </main>;
}
