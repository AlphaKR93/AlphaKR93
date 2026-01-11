"use client";

import { IntrinsicElement } from "@/types";
import { memo, useEffect, useRef, useState } from "react";

import "temporal-polyfill/global";


export const Comment = memo(function({ children }: Readonly<{ children: string }>) {
  const [replaced, replace] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (replaced || !ref.current) return;
    ref.current.insertAdjacentHTML("afterend", `<!-- ${children} -->`);
    replace(true);
  }, []);

  return replaced ? <></> : <><span ref={ref}/></>;
}, () => true); // Comments should not be re-rendered, since they cannot be detected by DOM

export function Timestamp(
  { dateTime, ...props }: Readonly<IntrinsicElement<"time", "children" | "dateTime"> & { dateTime: string | Temporals }>
) {
  if (typeof dateTime === "string") {
    return <Timestamp dateTime={Temporal.Instant.from(dateTime)} />;
  }

  const [l10n, setL10n] = useState<string>();
  useEffect(() => {
    setL10n(dateTime.toLocaleString());
  }, [dateTime]);

  return <time dateTime={dateTime.toString()} {...props}>{l10n ?? dateTime.toString()}</time>;
}
