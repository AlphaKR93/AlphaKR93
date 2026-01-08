import type {IconName} from "lucide-react/dynamic";
import {DynamicIcon} from "lucide-react/dynamic";
import style from "./markdown.module.css";

/**
 * Markdown format: `<icon:ICON_NAME>`
 */
export function Icon({children}: Readonly<{children: IconName}>) {
  return <DynamicIcon name={children} size={16} fontSize={16} className={style.icon} />;
}

/**
 * Markdown format: `<t:TIMESTAMP>`
 */
export function Timestamp({children}: Readonly<{children: string}>) {
  return <time></time>;
}

/**
 * Markdown format: `<!-- COMMENT -->`
 */
export function Comment({children}: Readonly<{children: string}>) {

}

/**
 * Markdown format: `<gh:USERNAME>` or `<gh:USERNAME/REPO>` or `<gh:USERNAME/REPO#issue>` or `<gh:USERNAME/REPO@commit>`
 */
export function GitHubUser({children}: Readonly<{children: string}>) {
  const href = `https://github.com/${children}`;
  return <a href={href}>@{children}</a>;
}

/**
 * Markdown format: `<gh:USERNAME>` or `<gh:USERNAME/REPO>` or `<gh:USERNAME/REPO#issue>` or `<gh:USERNAME/REPO@commit>`
 */
export function GitHubRepository({children}: Readonly<{children: string}>) {
  const href = `https://github.com/${children}`;
  return <a href={href}>{children}</a>;
}

/**
 * Markdown format: `<gh:USERNAME>` or `<gh:USERNAME/REPO>` or `<gh:USERNAME/REPO#issue>` or `<gh:USERNAME/REPO@commit>`
 */
export function GitHubIssue({owner, repository, issue}: Readonly<{owner: string; repository: string; issue: number}>) {
  const content = `${owner}/${repository}#${issue}`;
  const href = `https://github.com/${owner}/${repository}/issues/${issue}`;
  return <a href={href}>{content}</a>;
}

/**
 * Markdown format: `<gh:USERNAME>` or `<gh:USERNAME/REPO>` or `<gh:USERNAME/REPO#issue>` or `<gh:USERNAME/REPO@commit>`
 */
export function GitHubCommit({owner, repository, sha}: Readonly<{owner: string; repository: string; sha: string}>) {
  const content = `${owner}/${repository}@${sha}`;
  const href = `https://github.com/${owner}/${repository}/commit/${sha}`;
  return <a href={href}>{content}</a>;
}
