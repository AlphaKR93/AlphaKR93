import type {DetailedHTMLProps, BaseHTMLAttributes, JSX} from "react";

export type HTMLElementProps<T> = Readonly<DetailedHTMLProps<BaseHTMLAttributes<T>, T>>;
export type BaseHTMLProps = HTMLElementProps<HTMLElement>;
export type IntrinsicElement<K extends keyof JSX.IntrinsicElements> = Readonly<JSX.IntrinsicElements[K]>;
export type IntrinsicElements = {[K in keyof JSX.IntrinsicElements]: Readonly<JSX.IntrinsicElements[K]>};
