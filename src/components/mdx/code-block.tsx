// src/components/mdx/CodeBlock.tsx
"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
};

function getLanguage(className?: string) {
  const m = /language-([a-z0-9_-]+)/i.exec(className ?? "");
  return m?.[1]?.toLowerCase() ?? "";
}

export function CodeBlockPre(props: any) {
  // MDX는 보통 <pre><code className="language-...">...</code></pre> 구조
  const code = React.Children.toArray(props.children).find(
      (c: any) => c?.type === "code"
  ) as any;

  if (!code) return <pre {...props} />;

  const className = code.props?.className as string | undefined;
  const lang = getLanguage(className);
  const raw = typeof code.props?.children === "string"
      ? code.props.children
      : Array.isArray(code.props?.children)
          ? code.props.children.join("")
          : String(code.props?.children ?? "");

  // mermaid
  if (lang === "mermaid") {
    return <MermaidBlock code={raw} />;
  }

  // stdout / console output
  if (lang === "stdout" || lang === "console" || lang === "output") {
    return <StdoutBlock raw={raw} className={className} {...props} />;
  }

  // 일반 코드
  return (
    <pre {...props}>
      <code className={className}>{raw}</code>
    </pre>
  );
}

function StdoutBlock({ raw, className, ...props }: { raw: string } & any) {
  return (
      <pre {...props}>
        <samp className={className}>{raw}</samp>
      </pre>
  );
}

// mermaid는 브라우저에서만 렌더링(SSR에서 안전)
function MermaidBlock({ code }: { code: string }) {
  const [svg, setSvg] = React.useState<string>("");

  React.useEffect(() => {
    let cancelled = false;

    (async () => {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({ startOnLoad: false });

      const id = "mmd-" + Math.random().toString(16).slice(2);
      const { svg } = await mermaid.render(id, code);
      if (!cancelled) setSvg(svg);
    })().catch(() => {
      if (!cancelled) setSvg("");
    });

    return () => {
      cancelled = true;
    };
  }, [code]);

  if (!svg) {
    return (
        <div className="rounded-xl border p-4">
          <pre className="overflow-x-auto text-sm">{code}</pre>
        </div>
    );
  }

  return (
      <div
          className="rounded-xl border p-4"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: svg }}
      />
  );
}
