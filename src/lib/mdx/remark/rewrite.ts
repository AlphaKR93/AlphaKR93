import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

const tag = (name: string, children: any) => ({
  type: "mdxJsxTextElement",
  name,
  attributes: [],
  children: children ?? [],
});

const remarkRewriteAttentions: Plugin = () => (tree) => {
  visit(tree, (node, index, parent: any) => {
    if (!parent || !index) return;

    switch (node.type) {
      case "strong":
        parent.children[index] = tag("b", node.children);
        break;
      case "emphasis":
        parent.children[index] = tag("i", node.children);
        break;
      case "delete":
        parent.children[index] = tag("s", node.children);
        break;
    }
  });
};

export default remarkRewriteAttentions;
