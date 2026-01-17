"use client";

import { motion, AnimatePresence } from "motion/react";
import { useSelectedLayoutSegment } from "next/navigation";
import { Children, cloneElement, type ReactElement, useId, useState } from "react";
import style from "./layout.module.css";


export default function Navigation({ children }: { children: ReactElement[] }) {
  const uniqueId = useId();
  const segment = useSelectedLayoutSegment();
  const [active, activate] = useState<string | null>(segment);

  return Children.map(children, (child: any, i) => {
    const id = child.props.href.slice(1);

    return cloneElement(
      child, {
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
