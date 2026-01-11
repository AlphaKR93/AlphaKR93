import type { ReactNode } from "react";

import style from "./callout.module.css";


type AdmonitionsType = "note" | "tip" | "warning" | "information" | "important";

export default function Admonitions({ type, children }: Readonly<{ title?: string; type: AdmonitionsType; children: ReactNode }>) {
  return <div className={style.callout}>
    <blockquote className={style.admonitions} data-type={type}>
      {children}
    </blockquote>
  </div>;
}
