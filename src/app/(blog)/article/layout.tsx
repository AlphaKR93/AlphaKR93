import {style} from "@/components/mdx";
import "katex/dist/katex-swap.min.css";

export default function({children}: Readonly<LayoutProps<"/article">>) {
  return <>
    <header className={style.header}>
    </header>
    {children}
    <footer className={style.footer}>
    </footer>
  </>;
}
