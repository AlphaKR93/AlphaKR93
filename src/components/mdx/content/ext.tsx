import type { IntrinsicElement } from "@/types";

import style from "./content.module.css";


export function Spoiler({ className, ...props }: IntrinsicElement<"span", "children"> & { readonly children: string; }) {
  return <span className={style.spoiler} {...props} />;
}
