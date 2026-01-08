import type { Plugin } from "unified";

import { visit } from "unist-util-visit";

import { style } from "@/components/mdx";


const rehypeBeheadMinimal: Plugin = () => (tree) => {
  visit(tree, "element", (node: any, index: any, parent: any) => {
    if (node.tagName === "h7") {
      parent.children[index] = {
        type: "element",
        tagName: "div",
        properties: {
          className: style.anchor
        },
        children: node.children,
      }
    }
  });
}

export default rehypeBeheadMinimal;
