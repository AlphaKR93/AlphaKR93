"use client";

import type { BaseElementProps } from "@/types";
import { useEffect, useId, useRef } from "react";

import style from "./content.module.css";


export function Checkmark({ children, checked, indeterminate }: BaseElementProps & Readonly<{ checked?: boolean; indeterminate?: boolean }>) {
  const id = useId();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate === true;
  });

  return <span className={style.taskListItem}>
    <input aria-disabled aria-readonly readOnly id={id} type="checkbox" ref={ref} checked={checked} onClick={(e) => e.preventDefault()} />
    <label aria-disabled aria-readonly htmlFor={id}>{children}</label>
  </span>;
}
