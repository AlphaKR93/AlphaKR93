import {renderMdxFile} from "../../[slug]/_render";

export default async function renderTestFile() {
  const response = await fetch(`${process.env.host}/_assets/~debug/parse.mdx`);
  if (!response.ok) {
    throw new Error(`Failed to fetch MDX file: ${response.status} ${response.statusText}`, {cause: response});
  }

  const data = await response.text();
  return await renderMdxFile(data);
}
