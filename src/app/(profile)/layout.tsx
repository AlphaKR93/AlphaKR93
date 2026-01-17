import Link from "next/link";

import Navigation from "./_navigation";
import style from "./layout.module.css";


export default function Layout({ children }: LayoutProps<"/">) {
  return <>
    <header className={style.header}>
      <nav className={style.navigation}>
        <Navigation>
          <Link href="/about">About Me</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/articles">Articles</Link>
        </Navigation>
      </nav>
    </header>
    {children}
  </>;
}
