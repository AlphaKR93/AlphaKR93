import { style as markdown, FrontMatter } from "@/components/mdx";

import style from "../article.module.css";
import Content from "./_expected";


export default function(_: PageProps<"/article/~expect">) {
  return <main className={style.main}>
    <article className={markdown.markdownDocument}>
      <FrontMatter frontmatter={{ title: "알파마크:구문" }} metadata={{ createdAt: Temporal.Now.instant().toString() }} />
      <aside />
      <div className={markdown.content}>
        <Content/>
      </div>
    </article>
  </main>;
}
