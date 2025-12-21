import {style as markdown} from "@/components/mdx";
import style from "../article.module.css";

export default async function({params}: PageProps<"/blog/article/[slug]">) {
  return <main className={style.main}>
    <div className={`${markdown.markdown} ${style.frontmatter}`}>
      <time>Thursday, Jan 1st. 2025</time>
      <h1>알파마크:구문</h1>
      <hr/>
    </div>
    <article className={`${markdown.markdown} ${style.article}`}>
    </article>
  </main>;
}
