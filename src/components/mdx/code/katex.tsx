import { renderToString, type KatexOptions } from "katex";

import style from "./code.module.css";


const renderAsync = (tex: string, options?: KatexOptions): Promise<string> => new Promise((resolve, _) => {
  const raw = renderToString(tex, options)
  resolve(raw.slice(20 /* <span class="katex"> */, -7 /* </span> */));
});

export async function KaTeX({ children, options }: Readonly<{ children: string; options?: KatexOptions }>) {
  const __html: string = await renderAsync(children, options);
  return <span className="katex" dangerouslySetInnerHTML={{ __html }} />;
}

export async function KaTeXBlock({ children, options }: Readonly<{ children: string; options?: KatexOptions }>) {
  const __html: string = await renderAsync(children, options);
  return <div className={style.math}>
    <span className="katex" dangerouslySetInnerHTML={{ __html }} />
  </div>;
}
