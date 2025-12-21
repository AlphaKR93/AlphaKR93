import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

// mdast 노드를 mdxJsxTextElement로 래핑
function wrapAsMdxTextElement(name: string, children: any[]): any {
  return {
    type: 'mdxJsxTextElement',
    name,
    attributes: [],
    children
  };
}

const remarkInlineRewrite: Plugin = () => {
  return (tree) => {
    visit(tree, (node, index, parent: any) => {
      if (!parent || index == null) return;

      // markdown 강조/굵게: mdast strong/emphasis
      if (node.type === 'strong') {
        parent.children[index] = wrapAsMdxTextElement('b', node.children ?? []);
        return;
      }

      if (node.type === "underline") {
        parent.children[index] = wrapAsMdxTextElement('u', node.children ?? []);
        return;
      }

      if (node.type === 'emphasis') {
        parent.children[index] = wrapAsMdxTextElement('i', node.children ?? []);
        return;
      }

      if (node.type === 'delete') {
        parent.children[index] = wrapAsMdxTextElement('s', node.children ?? []);
        return;
      }

      if (node.type === 'highlight') {
        parent.children[index] = wrapAsMdxTextElement('mark', node.children ?? []);
        return;
      }

      if (node.type === "subscript") {
        parent.children[index] = wrapAsMdxTextElement('sub', node.children ?? []);
        return;
      }

      if (node.type === "superscript") {
        parent.children[index] = wrapAsMdxTextElement('sup', node.children ?? []);
        return;
      }
    });
  };
};

export default remarkInlineRewrite;
