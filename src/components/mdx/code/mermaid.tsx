"use client";

import mermaid, { type MermaidConfig } from "mermaid";
import { memo, useEffect, useId, useRef } from "react";


function _Mermaid({ children, config }: Readonly<{ children: string; config?: Omit<MermaidConfig, "startOnLoad" | "suppressErrorRendering"> }>) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        mermaid.initialize({
          startOnLoad: false,
          suppressErrorRendering: true,
          theme: "default",
          ...config
        });
        console.log(mermaid);
        const { svg } = await mermaid.render(`mermaid-${id}`, children);

        if (isMounted && ref.current) ref.current.innerHTML = svg;
      } catch (e) {
        console.error(e);
      }
    })();

    // **THIS IS THE CRUCIAL CLEANUP FUNCTION!!!**
    // Copied from https://github.com/navdeepm20/react-x-mermaid, thx for nice code!
    return () => {
      isMounted = false;
      if (ref.current) ref.current.innerHTML = "";  // Clear the SVG on unmounting
    };
  }, [id, children, config]);

  return <div ref={ref}/>;
}

const Mermaid = memo(_Mermaid);
export default Mermaid;
