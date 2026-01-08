import type {DetailedHTMLProps, BaseHTMLAttributes, JSX} from "react";

export type HTMLElementProps<T> = Readonly<DetailedHTMLProps<BaseHTMLAttributes<T>, T>>;
export type BaseElementProps = HTMLElementProps<HTMLElement>;
export type IntrinsicElement<
  P extends keyof JSX.IntrinsicElements,
  K extends keyof JSX.IntrinsicElements[P] = never
> = Readonly<Omit<JSX.IntrinsicElements[P], K>>;
