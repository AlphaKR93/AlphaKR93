import {style as markdown} from "@/components/mdx";
import render from "./_render";
import style from "../../article.module.css";

export default async function() {
  const { frontmatter, content } = await render();

  return <main className={style.main}>
    <div className={`${markdown.markdown} ${style.frontmatter}`}>
      <time></time>
      <h1>{frontmatter.title}</h1>
      <hr/>
    </div>
    <article className={`${markdown.markdown} ${style.article}`}>
      {content}
    </article>
  </main>;
}
