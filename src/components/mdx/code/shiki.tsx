import type { BundledLanguage } from "shiki"

import { toJsxRuntime } from "hast-util-to-jsx-runtime"
import { Fragment } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { codeToHast } from "shiki"


export async function Code({ children, lang }: Readonly<{ children: string, lang?: BundledLanguage }>) {
  if (!lang) {
    return <code data-language="text-plain" className="shiki ayu-dark" tabIndex={0}>{children}</code>;
  }

  const out = await codeToHast(children, { lang, theme: "ayu-dark" });

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: ({ ...props }) => <code data-language={lang} {...props} />,
      code: ({ children }) => children,
      span: ({ className, ...props }) => className === "line" ? props.children : <span className={className} {...props} />,
    },
  });
}

export async function CodeBlock({ children, lang }: Readonly<{ children: string, lang?: BundledLanguage }>) {
  if (!lang) {
    return <pre data-language="text-plain" className="shiki ayu-dark" tabIndex={0}>
      <code>
        {children}
      </code>
    </pre>;
  }

  const out = await codeToHast(children, { lang, theme: "ayu-dark" });

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: ({ ...props }) => <pre data-language={lang} {...props} />
    },
  });
}
