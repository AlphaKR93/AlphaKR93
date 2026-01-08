import type { MDXComponents } from "mdx/types";

import { Timestamp, Comment } from "./client";


const baseComponents = {
  Timestamp,
  Comment,
} satisfies MDXComponents;

const { mappings, components } = (function() {
  let mappingsProto: Record<string, string> = {};
  let components: MDXComponents = {};

  for (const [key, component] of Object.entries(baseComponents)) {
    const placeholder = `Fn${crypto.randomUUID().replace(/-/g, "")}`;
    mappingsProto[key] = placeholder;
    components[placeholder] = component;
  }

  const mappings = mappingsProto as unknown as Record<keyof typeof baseComponents, string>;
  return {mappings, components};
})();

export default components;
export {mappings};
