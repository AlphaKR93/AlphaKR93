import type { FrontMatter, GistMetadata } from "@/lib/mdx";

import { Timestamp } from "./link-likes";

import style from "./index.module.css";


export default function FrontMatter({ data }: { data: FrontMatter & GistMetadata }) {
  return <div className={style.frontMatter}>
    <hgroup aria-label="article-header" className={style.documentHeader}>
      <Timestamp dateTime={data.createdAt}/>
      <h1 aria-label="title" className={style.title}>{data.title}</h1>
    </hgroup>
    <div className={style.properties} />
  </div>;
}
