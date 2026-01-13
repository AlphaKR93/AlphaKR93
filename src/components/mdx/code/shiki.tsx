import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { codeToHast, type BundledLanguage } from "shiki";


export async function Code({ children, lang }: Readonly<{ children: string, lang?: BundledLanguage }>) {
  if (!lang) {
    return <code data-language="text-plain" className="shiki shiki-themes min-light ayu-dark" tabIndex={0}>{children}</code>;
  }

  const out = await codeToHast(children, { lang, themes: { light: "min-light", dark: "ayu-dark" }, defaultColor: false });

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

export async function CodeBlock({ children, lang }: Readonly<{ children: string; lang?: BundledLanguage; file?: string }>) {
  if (!lang) {
    return <pre data-language="text-plain" className="shiki shiki-themes min-light ayu-dark" tabIndex={0}>
      <code>
        {children}
      </code>
    </pre>;
  }

  const out = await codeToHast(children, { lang, themes: { light: "min-light", dark: "ayu-dark" }, defaultColor: false });

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: ({ ...props }) => <pre data-language={lang} {...props} />
    },
  });
}

export async function OutputBlock({ children, shell }: Readonly<{ children: string; shell?: string }>) {
  return <pre data-language="output" data-environment={shell} className="shiki shiki-themes min-light ayu-dark" tabIndex={0}>
    <samp>
      {children}
    </samp>
  </pre>;
}
