import type { ReactNode } from "react";

import style from "./callout.module.css";


export default function Callout({ children }: Readonly<{ children: ReactNode }>) {
  return <div className={style.callout}>{children}</div>;
}
