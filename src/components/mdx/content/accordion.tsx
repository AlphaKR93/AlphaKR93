import type { IntrinsicElement } from "@/types";

import { ChevronRightIcon } from "lucide-react";

import style from "./content.module.css";


export default function Accordion(
  { summary, className, children, ...props }: IntrinsicElement<"details"> & Readonly<{ summary: string }>
) {
  return <details className={`${style.accordion} ${className ?? ""}`} {...props}>
    <summary>
      <span className={style.marker}>
        <ChevronRightIcon size={16} />
      </span>
      {summary}
    </summary>
    {children}
  </details>;
}
