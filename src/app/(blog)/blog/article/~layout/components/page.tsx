import {style as markdown} from "@/components/mdx";
import Content from "./_contents";
import style from "../../article.module.css";

export default function(_: Readonly<PageProps<"/blog/article/~layout/components">>) {
  return <main className={style.main}>
    <div className={`${markdown.markdown} ${style.frontmatter}`}>
      <time>Thursday, Jan 1st. 2025</time>
      <h1>알파마크:확장 구성요소</h1>
      <hr/>
    </div>
    <article className={`${markdown.markdown} ${style.article}`}>
      <Content/>
    </article>
  </main>;
}
