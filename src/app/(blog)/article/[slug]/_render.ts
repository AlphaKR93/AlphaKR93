import "server-only";

import type { GistMetadata } from "@/lib/mdx";

import { unauthorized } from "next/navigation";

import { render } from "@/lib/mdx";


export default async function fetchDocument(slug: string) {
  // FIXME: Load from gists
  if (!slug.startsWith("~")) unauthorized();

  let respProto: Response;
  let metaProto: GistMetadata;
  if (slug.startsWith("~")) {
    respProto = await fetch(`${process.env.host}/_assets/~debug/articles/${slug}.mdx`);
    if (!respProto.ok) {
      throw new Error(`Failed to fetch MDX document: ${respProto.status} ${respProto.statusText}`, {cause: respProto});
    }

    metaProto = {
      createdAt: Temporal.Now.instant().toString(),
    };
  }

  const response = respProto!;
  const metadata = metaProto!;

  const data = await response.text();
  const result = await render(data);

  return [result, metadata] as [typeof result, GistMetadata];
}
