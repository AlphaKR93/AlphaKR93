import type {IntrinsicElement} from "@/types";
import style from "./markdown.module.css";

export function Table({...props}: IntrinsicElement<'table'>) {
  return <div className={style.table}>
    <table {...props}/>
  </div>
}
