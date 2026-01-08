import type { BaseElementProps, IntrinsicElement } from "@/types";
import Link from "next/link";


export function Abbr(
  {children, className, title, id, ...props}: IntrinsicElement<"abbr", "children" | "title"> & Readonly<{
    children: string;
    title?: string;
  }>
) {
  const refId = id || `abbr-${children.toLowerCase()}`;
  return <dfn id={refId} className={className}>
    {title && `${title} (`}
    <abbr title={title} {...props}>{children}</abbr>
    {title && ")"}
  </dfn>;
}

export function AbbrRef({children, ...props}: Omit<BaseElementProps, "children"> & Readonly<{ children: string }>) {
  return <Link href={`#abbr-${children.toLowerCase()}`}>
    <abbr {...props}>
      {/* TODO: Hover tooltip */}
      {children}
    </abbr>
  </Link>
}
