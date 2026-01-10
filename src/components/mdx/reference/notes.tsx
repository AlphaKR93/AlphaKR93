import Link from "next/link";


export function FootnoteRef({ sectionId, id }: { sectionId: string; id: string }) {
  return <sup><Link href={`#fn-${sectionId}_${id}`}>({id})</Link></sup>;
}

export function EndnoteRef({ id }: { id: string }) {
  return <sup><Link href={`#en-${id}`}>[{id}]</Link></sup>;
}
