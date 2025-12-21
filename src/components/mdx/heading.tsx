import type {HTMLElementProps} from "@/types";
import markdown from "./markdown.module.css";

export function H7({className, ...props}: HTMLElementProps<HTMLHeadingElement>) {
  return <div className={`${markdown.heading} ${className}`} {...props}/>;
}
