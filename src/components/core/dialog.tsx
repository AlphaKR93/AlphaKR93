"use client";

import type { IntrinsicElement } from "@/types";


export default function Dialog(props: IntrinsicElement<"dialog">) {
  return <dialog onClick={(event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    if (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX && event.clientX <= rect.left + rect.width) return;
    event.currentTarget.close();
  }} {...props} />;
}
