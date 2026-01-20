import Image from "next/image";
import Link from "next/link";

import { Mail, Send } from "lucide-react";
import { FaDiscord } from "react-icons/fa6";
import {
  RiLinkedinBoxFill as RiLinkedIn,
  RiGithubFill as RiGitHub,
  RiBlueskyFill as RiBluesky,
  RiTelegram2Fill as RiTelegram,
} from "react-icons/ri";
import {
  SiMatrix,
  SiKotlin,
  SiPython,
  SiTypescript as SiTypeScript,
  SiFedora,
  SiIntellijidea as SiIntelliJ,
  SiZedindustries as SiZed,
  SiGit,
  Si1Password,
  SiObsidian,
} from "react-icons/si";

import { Dialog } from "@/components/core";
import flags from "@/lib/flags";

import style from "./page.module.css";


export default async function Home() {
  const enableLinkedIn = await flags.enableLinkedIn();

  return <>
    <Dialog id="contact" className={style.contact}>
      <h4 className="mb-5">연락처</h4>
      <div>
        <SiMatrix size={24} />
        <p>
          <Link rel="noreferrer" title="@alpha:beeper.com" target="_blank" href="https://matrix.to/#/@alpha:beeper.com">
            @alpha:beeper.com
          </Link>
        </p>
      </div>
      <div>
        <RiTelegram size={24} />
        <p>
          <Link rel="noreferrer" title="@alphakr93" target="_blank" href="https://t.me/alphakr93">
            @alphakr93
          </Link>
        </p>
      </div>
      <form method="dialog">
        <button autoFocus>닫기</button>
      </form>
    </Dialog>
    <main className={style.main}>
      <section className={style.profile} aria-label="profile">
        <span>
          <h1>반가워요!</h1>
          <div>
            <p>
              로우 레벨 프로그래밍에 관심이 많은 고등학생 개발자, <b className="font-semibold">Alpha</b>입니다. <wbr/>
            </p>
            <p>
              다양한 오픈소스 프로젝트에 기여하고 있지만, 특히 <Link title="PlazmaMC" target="_blank" href="https://plazmamc.org">Minecraft에 관련된 프로젝트</Link>
              라면 절 한 번쯤 보셨을 수도 있을 거예요.
            </p>
          </div>
          <span>
            <address>
              {enableLinkedIn && <Link hidden rel="noreferrer" target="_blank" href="https://linkedin.com/AlphaKR93">
                <RiLinkedIn size={24}/>
              </Link>}
              <Link rel="noreferrer" title="AlphaKR93" target="_blank" href="https://github.com/AlphaKR93">
                <RiGitHub size={24} />
              </Link>
              <Link rel="noreferrer" title="@alpha93.kr" target="_blank" href="https://bsky.app/profile/alpha93.kr">
                <RiBluesky size={24} />
              </Link>
              <Link rel="noreferrer" title="@alpha93" target="_blank" href="https://discord.com/users/410763741786013697">
                <FaDiscord size={24} />
              </Link>
              <Link title="dev@alpha93.kr" target="_blank" href="mailto:dev@alpha93.kr">
                <Mail size={24} />
              </Link>
            </address>
            {/* @ts-ignore */}
            <button type="button" command="show-modal" commandfor="contact" className={style.contact}>
              <Send size={18} />
              <p>연락하기</p>
            </button>
          </span>
        </span>
        <Image src="/_assets/profile.png" alt="Profile Image" width={160} height={160} className="rounded-full" />
      </section>
      <section className={style.intro}>
        <div className={style.blocks}>
        <span className={style.block}>
          <h3>주 언어</h3>
          <hr/>
          <ul>
            <li>
              <span><SiKotlin size={18} /></span>
              <p>Kotlin</p>
            </li>
            <li>
              <span><SiPython size={18} /></span>
              <p>Python</p>
            </li>
            <li>
              <span><SiTypeScript size={18} /></span>
              <p>TypeScript</p>
            </li>
          </ul>
        </span>
          <span className={style.block}>
          <h3>개발 환경</h3>
          <hr/>
          <ul>
            <li>
              <span><SiFedora size={18} /></span>
              <p>Fedora Linux</p>
            </li>
            <li>
              <span><SiIntelliJ size={18} /></span>
              <p>IntelliJ Platforms</p>
            </li>
            <li>
              <span><SiZed size={18} /></span>
              <p>Zed</p>
            </li>
          </ul>
        </span>
          <span className={style.block}>
          <h3>기타 도구</h3>
          <hr/>
          <ul>
            <li>
              <span><SiGit size={18} /></span>
              <p>Git</p>
            </li>
            <li>
              <span><Si1Password size={18} /></span>
              <p>1Password</p>
            </li>
            <li>
              <span><SiObsidian size={18} /></span>
              <p>Obsidian</p>
            </li>
          </ul>
        </span>
        </div>
      </section>
      <section className={style.sponsor}>
        <span>
          <h3>Sponsor Alpha on GitHub Sponsors</h3>
          <p>Student developer from Korea, South.</p>
        </span>
        <iframe src="https://github.com/sponsors/AlphaKR93/button" width="114" height="32" title="Sponsor Alpha" />
      </section>
    </main>
  </>;
}
