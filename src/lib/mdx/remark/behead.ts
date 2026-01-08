/// Based on remark-behead

import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

const remarkBeheadMinimal: Plugin = () => (tree) => {
  visit(tree, "heading", (node: any) => {
    node.depth++;
  });
};

export default remarkBeheadMinimal;
