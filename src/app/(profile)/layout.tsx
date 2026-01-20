import { ExternalLink } from "lucide-react";
import type { ReactElement } from "react";

import Link from "next/link";
import Image from "next/image";

import flags from "@/lib/flags";

import Navigation from "./_navigation";
import style from "./layout.module.css";


export default async function Layout({ children }: LayoutProps<"/">) {
  const showDocs = await flags.showDocs();

  return <>
    <header className={style.header}>
      <Link className={style.home} href="/">
        <Image src="/_assets/profile.png" alt="Home" width={34} height={34} />
      </Link>
      <nav className={style.navigation}>
        <Navigation>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/articles">Articles</Link>
          {(showDocs && <Link data-external href="https://alpha93.kr/docs">
            <p>Docs <ExternalLink strokeWidth={1.75} size={14}/></p>
          </Link>) as ReactElement}
        </Navigation>
      </nav>
    </header>
    {children}
    <footer className={style.footer}>
      <p className={style.cp}>
        &copy; 2025&ndash;{Temporal.Now.plainDateISO().year} AlphaKR93, All Rights Reserved.
      </p>
    </footer>
  </>;
}
