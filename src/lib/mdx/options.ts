import type { CompileOptions } from "@mdx-js/mdx";
import type { MDXComponents } from "mdx/types";

import { GitHubRepository, GitHubUser, GitHubIssue, GitHubCommit, Timestamp, Icon } from "@/components/mdx";

import remarkGfm from "remark-gfm";
import remarkAttentions from "./remark/attentions";
import remarkBeheadMinimal from "./remark/behead";
import remarkRewriteAttentions from "./remark/rewrite";
import remarkSpoiler from "./remark/spoiler";
import remarkMathMinimal from "./remark/math";
import rehypeKatex from "rehype-katex";
import rehypeBeheadMinimal from "./rehype/behead";
import components from "./pre-process/_components";


export const mdxComponents: MDXComponents = {
  GitHubUser,
  GitHubRepository,
  GitHubIssue,
  GitHubCommit,
  Timestamp,
  Icon,
  ...components,
};

export const mdxOptions: CompileOptions = {
  remarkPlugins: [
    remarkRewriteAttentions,
    remarkAttentions,
    remarkSpoiler,
    remarkBeheadMinimal,
    [remarkGfm, {
      singleTilde: false,
    }],
    remarkMathMinimal,
  ],
  rehypePlugins: [
    rehypeBeheadMinimal,
    rehypeKatex,
  ],
};
