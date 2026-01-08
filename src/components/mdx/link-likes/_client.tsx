"use client";

import { IntrinsicElement } from "@/types";
import { memo, useEffect, useRef, useState } from "react";


export const Comment = memo(function({ children }: Readonly<{ children: string }>) {
  const [replaced, replace] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (replaced || !ref.current) return;
    ref.current.insertAdjacentHTML("afterend", `<!-- ${children} -->`);
    replace(true);
  }, []);

  return replaced ? <></> : <><span ref={ref}/></>;
});

export function Timestamp(
  { dateTime, ...props }: Readonly<IntrinsicElement<"time", "children" | "dateTime"> & { dateTime: string | Temporals }>
) {
  if (typeof dateTime === "string") {
    return <Timestamp dateTime={Temporal.Instant.from(dateTime)} />;
  }

  return <time dateTime={dateTime.toString()} {...props}>{dateTime.toLocaleString()}</time>;
}
