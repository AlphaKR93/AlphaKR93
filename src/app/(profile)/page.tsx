import style from "./page.module.css";
import Particles from "./_particles";

import { Cal_Sans } from "next/font/google";


const calSans = Cal_Sans({
  weight: "400",
  subsets: ["latin"],
  fallback: ["IBM Plex Sans KR"],
  adjustFontFallback: false
});

export default function Home() {
  return <main className={style.main}>
    <Particles className={style.particles} quantity={100} />
    <hgroup>
      <hr className={style.lr} />
      <h1 className={calSans.className}>
        alpha93
      </h1>
      <hr className={style.rl} />
    </hgroup>
  </main>;
}
