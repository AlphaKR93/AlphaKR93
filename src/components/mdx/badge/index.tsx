import type {IconName} from "lucide-react/dynamic";

import { DynamicIcon } from "lucide-react/dynamic";

import style from "./badge.module.css";


const COLOR_MAP = {
  red: "",
  orange: "",
  amber: "",
  yellow: "",
  lime: "",
  green: "",
  emerald: "",
  teal: "",
  cyan: "",
  sky: "",
  blue: "",
  indigo: "",
  violet: "",
  purple: "",
  fuchsia: "",
  pink: "",
  rose: "",
  slate: "",
  gray: "",
  zinc: "",
  neutral: "",
  stone: "",
} as const;
type Colors = typeof COLOR_MAP;


export default function Badge({children, color, stroke, pill, xs, icon}: Readonly<{
  children: string;
  color?: keyof Colors;
  stroke?: boolean;
  pill?: boolean;
  xs?: boolean;
  icon?: IconName;
}>) {
  return <span className={style.badge} data-color={color} data-stroke={stroke} data-xs={xs} data-pill={pill}>
    {icon && <DynamicIcon name={icon} size={xs ? 12 : 14} fontSize={xs ? 12 : 14} />}
    <span>{children}</span>
  </span>;
}
