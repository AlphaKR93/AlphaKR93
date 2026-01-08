import type {IntrinsicElement} from "@/types";

import style from "./tables.module.css";

export default function Table({...props}: IntrinsicElement<"table">) {
  return <figure className={style.table}>
    <table {...props}/>
  </figure>;
}
