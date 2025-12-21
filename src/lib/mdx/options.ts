import type { CompileOptions } from "@mdx-js/mdx";
import type { MDXComponents } from "mdx/types";

import remarkGfm from "remark-gfm";
import {remarkHighlightMark} from "remark-highlight-mark";
import remarkInlineRewrite from "./remark/inline-syntaxes";
import remarkScripts from "./remark/scripts";


export const mdxComponents: MDXComponents = {
};

export const mdxOptions: CompileOptions = {
  remarkPlugins: [
    [remarkGfm, {
    singleTilde: false,
    }],
    remarkHighlightMark,
    remarkScripts,

    // MUST be last
    remarkInlineRewrite,
  ],
  rehypePlugins: [
  ],
};
