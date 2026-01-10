import type { KatexOptions } from "katex";

import { renderToString } from "katex";


const renderAsync = (tex: string, options?: KatexOptions): Promise<string> => new Promise((resolve, _) => {
  const raw = renderToString(tex, options)
  resolve(raw.slice(20 /* <span class="katex"> */, -7 /* </span> */));
});

export default async function KaTeX({ children, options }: Readonly<{ children: string; options?: KatexOptions }>) {
  const __html: string = await renderAsync(children, options);
  return <span className="katex" dangerouslySetInnerHTML={{ __html }} />;
}
