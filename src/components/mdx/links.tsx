import type {IconName} from "lucide-react/dynamic";
import {DynamicIcon} from "lucide-react/dynamic";
import style from "./markdown.module.css";

type AutolinkElement = ({value}: Readonly<{value: string}>) => Element;

/**
 * Markdown format: `<time:TIMESTAMP>`
 */
export function Timestamp({timestamp}: Readonly<{ timestamp: string }>) {
  return <time></time>;
}

/**
 * Markdown format: `<gh:USERNAME>` or `<gh:USERNAME/REPO>`
 */
export function GitHub({username, repo}: Readonly<{ username: string; repo?: string }>) {
  const content = `@${username}${repo && `/${repo}` || ""}`;
  const href = `https://github.com/${username}${repo && `/${repo}` || ""}`;
  return <a href={href}>{content}</a>;
}

/**
 * Markdown format: `<icon:ICON_NAME>`
 */
export function Icon({icon}: Readonly<{icon: IconName}>) {
  return <DynamicIcon name={icon} size={16} fontSize={16} className={style.icon} />;
}
