"use client";

import { motion, AnimatePresence } from "motion/react";
import { useSelectedLayoutSegment } from "next/navigation";
import { Children, cloneElement, useEffect, useId, useState, type ReactElement } from "react";
import style from "./layout.module.css";


export default function Navigation({ children }: { children: ReactElement[] }) {
  const uniqueId = useId();
  const segment = useSelectedLayoutSegment();
  const [active, activate] = useState<string | null>();

  useEffect(() => activate(segment), [segment]);

  return Children.map(children, (child: any, i) => {
    if (child?.props == null) return;
    if (Object.keys(child.props).includes("data-external"))
      return cloneElement(child, { key: i, className: style.route }, <>
        <div style={{ zIndex: 10 }}>{child.props.children}</div>
      </>);

    const id = child.props.href.slice(1);

    return cloneElement(
      child,
      {
        key: i,
        className: style.route,
        "data-active": id === active,
        onClick: () => activate(id),
      },
      <>
        <AnimatePresence initial={false}>
          {id === active && <motion.div
            className={style.motion}
            layoutId={`background-navigation_${uniqueId}`}
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.3,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />}
        </AnimatePresence>
        <div style={{ zIndex: 10 }}>{child.props.children}</div>
      </>
    );
  });
}
