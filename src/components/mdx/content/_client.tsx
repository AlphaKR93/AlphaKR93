"use client";

import type { BaseElementProps } from "@/types";
import { useEffect, useRef, useState } from "react";

import style from "./content.module.css";


export function Checkmark({ children, checked, indeterminate }: BaseElementProps & Readonly<{ checked?: boolean; indeterminate?: boolean }>) {
  const [id, setId] = useState<string>();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate === true;
  });

  useEffect(() => {
    if (!ref.current || ref.current.id) return;

    const newId = crypto.randomUUID();
    setId(newId);
    ref.current.id = newId;
  }, [ref.current]);

  if (!id) {
    return <span className={style.taskListItem}>
      <input aria-disabled aria-readonly readOnly type="checkbox" ref={ref} checked={checked} onClick={(e) => e.preventDefault()} />
      {children}
    </span>;
  }

  return <span className={style.taskListItem}>
    <input aria-disabled aria-readonly readOnly id={id} type="checkbox" ref={ref} checked={checked} onClick={(e) => e.preventDefault()} />
    <label aria-disabled aria-readonly htmlFor={id}>{children}</label>
  </span>;
}
