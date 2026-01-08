import type { HTMLElementProps, IntrinsicElement } from "@/types";

import style from "./content.module.css";


type TextElement<E> = Omit<E, "children"> & { readonly children: string };

export function Caption({ className, ...props }: TextElement<IntrinsicElement<"h6", "role" | "aria-level">>) {
  return <h6 role="generic" aria-level={undefined} className={`${style.caption} ${className}`} {...props} />;
}

export function Anchor({ className, ...props }: TextElement<Omit<HTMLElementProps<HTMLHeadingElement>, "role" | "aria-level">>) {
  return <div className={`${style.anchor} ${className}`} {...props} />;
}

export function Spoiler({ className, ...props }: TextElement<IntrinsicElement<"p">>) {
  return <p className={style.spoiler} {...props} />;
}
