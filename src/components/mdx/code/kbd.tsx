import { Fragment } from "react";


export function Kbd({ children }: { children: string }) {
  return <kbd>{children}</kbd>;
}

export function Keystrokes({ children }: { children: string }) {
  return <span className="keystrokes">
    {children.split("+").flatMap(key => [
      <kbd key={key}>{key}</kbd>,
      <Fragment key={`${key}+`}>{" + "}</Fragment>
    ]).slice(0, -1)}
  </span>;
}
