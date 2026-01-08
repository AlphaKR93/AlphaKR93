"use client";

import { memo, useEffect, useRef, useState } from "react";


export function Timestamp({children}: Readonly<{children: string}>) {
  return <time></time>;
}

export const Comment = memo(function({children}: Readonly<{children: string}>) {
  const [replaced, replace] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (replaced || !ref.current) return;
    ref.current.insertAdjacentHTML("afterend", `<!-- ${children} -->`);
    replace(true);
  }, []);

  return replaced ? <></> : <><span ref={ref}/></>;
});
