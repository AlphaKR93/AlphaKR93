import {
  Accordion,
  Admonitions,
  EndnoteRef,
  Code,
  CodeBlock,
  Comment,
  KaTeX,
  Keystrokes,
  Table,
  Caption, Anchor, Spoiler, Checkmark, Timestamp, Icon, GitHubUser, FootnoteRef, OutputBlock, KaTeXBlock//, Mermaid
} from "@/components/mdx";
import Image from "next/image";
import Link from "next/link";


export default function() {
  return <>
    <section>
      <p>
        해당 문서를 포함해 이 사이트의 모든 문서에서는 아래의 Markdown 문법을 사용합니다.{" "}
        <GitHubUser>AlphaKR93</GitHubUser>이 개인적으로 사용하는 Markdown 문법이라 하여 알파마크라고도 합니다.
      </p>
      <p>
        이 문서는 여러분에게 알파마크 문법을 소개하기 위함도 있지만,
        알파마크 컴파일러가 문서를 올바르게 파싱했는지 검증하는 데에도 사용됩니다.
        컴파일러가 생성해야 하는 HTML 출력물은 <Link href="/src/app/(blog)/article/~expect">여기</Link>에서 확인할 수 있습니다.
      </p>
    </section>
    <section id="id-1">
      <hgroup>
        <h2>Ⅰ. 문단 (Paragraph)</h2>
      </hgroup>
      <p>
        비어 있지 않은 줄이 연속적으로 이어지면 문단(paragraph)을 이룹니다.
        비어있는 <b>줄</b>을 삽입하여 문단 블록을 나눌 수 있습니다.
      </p>
      <CodeBlock lang="markdown">
        {`\
        이 문장은 하나의 문단을 형성합니다.

        이 문장은 위 문장과 다른 문단에 해당합니다.
        `.split("\n").map((s) => s.trim()).join("\n")}
      </CodeBlock>
      <Comment>Example</Comment>
      <p>이 문장은 하나의 문단을 형성합니다.</p>
      <p>이 문장은 위 문장과 다른 문단에 해당합니다.</p>
      <section id="id-1-1">
        <hgroup>
          <h3>1. 줄바꿈</h3>
        </hgroup>
        <p>
          같은 문단에서 줄만 바꾸고 싶다면, HTML <Code lang="html">{"<br>"}</Code> 태그를 사용합니다.
        </p>
        <CodeBlock lang="markdown">
          {`\
          이 문장은 하나의 문단을 형성합니다.<br/>
          이 문장은 위 문장과 **같은** 문단에 해당합니다.
          `.split("\n").map((s) => s.trim()).join("\n")}
        </CodeBlock>
        <Comment>Example</Comment>
        <p>
          이 문장은 하나의 문단을 형성합니다.<br/>
          이 문장은 위 문장과 <b>같은</b> 문단에 해당합니다.
        </p>
        <section id="id-1-1-1">
          <hgroup>
            <h4>1) 고급: 줄바꿈 "허용" 마커</h4>
          </hgroup>
          <p>
            HTML <Code lang="html">{"<wbr>"}</Code>태그를 사용하면 특정 구간에서 줄바꿈을 <i>"허용"</i> 하도록 표시할 수 있습니다.
            이렇게 하면 브라우저는 문장을 표시할 공간이 부족할 경우, 해당 구간에서 소프트랩을 시도할 수 있습니다.
          </p>
          <CodeBlock lang="markdown">
            {`\
            일반적으로 브라우저는 기호가 오는 구간에서 소프트랩을 시도합니다.
            하<wbr/>지<wbr/>만 <wbr/>
            지<wbr/>금<wbr/>은 <wbr/>
            아<wbr/>니<wbr/>죠. <wbr/>
            브<wbr/>라<wbr/>우<wbr/>저<wbr/>의 <wbr/>
            창<wbr/> 크<wbr/>기<wbr/>를 <wbr/>
            다<wbr/>르<wbr/>게<wbr/> 해 <wbr/>
            보<wbr/>거<wbr/>나<wbr/>, <wbr/>
            모<wbr/>바<wbr/>일<wbr/>에<wbr/>서 <wbr/>
            접<wbr/>속<wbr/>해<wbr/>보<wbr/>세<wbr/>요. <wbr/>
            아마 완전히 다른 방식으로 줄바꿈이 되어 있을 것입니다.
            `.split("\n").map((s) => s.trim()).join("\n")}
          </CodeBlock>
          <Comment>Example</Comment>
          <p>
            일반적으로 브라우저는 기호가 오는 구간에서 소프트랩을 시도합니다.
            하<wbr/>지<wbr/>만 <wbr/>
            지<wbr/>금<wbr/>은 <wbr/>
            아<wbr/>니<wbr/>죠. <wbr/>
            브<wbr/>라<wbr/>우<wbr/>저<wbr/>의 <wbr/>
            창<wbr/> 크<wbr/>기<wbr/>를 <wbr/>
            다<wbr/>르<wbr/>게<wbr/> 해 <wbr/>
            보<wbr/>거<wbr/>나<wbr/>, <wbr/>
            모<wbr/>바<wbr/>일<wbr/>에<wbr/>서 <wbr/>
            접<wbr/>속<wbr/>해<wbr/>보<wbr/>세<wbr/>요. <wbr/>
            아마 완전히 다른 방식으로 줄바꿈이 되어 있을 것입니다.
          </p>
        </section>
      </section>
      <section id="id-1-2">
        <hgroup>
          <h3>2. 서식</h3>
        </hgroup>
        {/* <editor-fold defaultstate="collapsed" desc="Table"> */}
        <Table data-align="center">
          <thead>
            <tr>
              <th><p>구문</p></th>
              <th><p>서식</p></th>
              <th><p>예시</p></th>
              <th><p>출력</p></th>
              <th><p>출력 (raw)</p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p><Code>**</Code></p>
              </td>
              <td>
                <p>굵게</p>
              </td>
              <td>
                <p><Code lang="markdown">**굵게**</Code></p>
              </td>
              <td>
                <p><b>굵게</b></p>
              </td>
              <td>
                <p><Code lang="tsx">{"<b>굵게</b>"}</Code></p>
              </td>
            </tr>
            <tr>
              <td>
                <p><Code>*</Code></p>
              </td>
              <td>
                <p>기울이게</p>
              </td>
              <td>
                <p><Code lang="markdown">*기울이게*</Code></p>
              </td>
              <td>
                <p><i>기울이게</i></p>
              </td>
              <td>
                <p><Code lang="tsx">{"<i>기울이게</i>"}</Code></p>
              </td>
            </tr>
            <tr>
              <td>
                <p><Code>~~</Code></p>
              </td>
              <td>
                <p>취소선</p>
              </td>
              <td>
                <p><Code lang="markdown">~~취소선~~</Code></p>
              </td>
              <td>
                <p><s>취소선</s></p>
              </td>
              <td>
                <p><Code lang="tsx">{"<s>취소선</s>"}</Code></p>
              </td>
            </tr>
            <tr>
              <td>
                <p><Code>__</Code></p>
              </td>
              <td>
                <p>밑줄</p>
              </td>
              <td>
                <p><Code lang="markdown">__밑줄__</Code></p>
              </td>
              <td>
                <p><u>밑줄</u></p>
              </td>
              <td>
                <p><Code lang="tsx">{"<u>밑줄</u>"}</Code></p>
              </td>
            </tr>
            <tr>
              <td>
                <p><Code>==</Code></p>
              </td>
              <td>
                <p>강조</p>
              </td>
              <td>
                <p><Code lang="markdown">==강조==</Code></p>
              </td>
              <td>
                <p><mark>강조</mark></p>
              </td>
              <td>
                <p><Code lang="tsx">{"<mark>강조</mark>"}</Code></p>
              </td>
            </tr>
            <tr>
              <td>
                <p><Code>||</Code></p>
              </td>
              <td>
                <p>스포일러</p>
              </td>
              <td>
                <p><Code lang="markdown">||스포일러||</Code></p>
              </td>
              <td>
                <p><Spoiler>스포일러</Spoiler></p>
              </td>
              <td>
                <p><Code lang="tsx">{"<Spoiler>스포일러</Spoiler>"}</Code></p>
              </td>
            </tr>
            <tr>
              <td>
                <p><Code>^^</Code></p>
              </td>
              <td>
                <p>윗첨자</p>
              </td>
              <td>
                <p><Code lang="markdown">^^윗첨자^^</Code></p>
              </td>
              <td>
                <p><sup>윗첨자</sup></p>
              </td>
              <td>
                <p><Code lang="tsx">{`<sup>윗첨자</sup>`}</Code></p>
              </td>
            </tr>
            <tr>
              <td>
                <p><Code>,,</Code></p>
              </td>
              <td>
                <p>아랫첨자</p>
              </td>
              <td>
                <p><Code lang="markdown">,,아랫첨자,,</Code></p>
              </td>
              <td>
                <p><sub>아랫첨자</sub></p>
              </td>
              <td>
                <p><Code lang="tsx">{`<sub>아랫첨자</sub>`}</Code></p>
              </td>
            </tr>
          </tbody>
        </Table>
        {/* </editor-fold> */}
        <Admonitions type="note">
          <p>
            CommonMark 어텐션(<Code>_</Code>)은 밑줄 서식과 충돌할 수 있으므로 지원하지 않습니다.
          </p>
        </Admonitions>
        {/* <editor-fold defaultstate="collapsed" desc="밑줄 테스트"> */}
        <Accordion summary="밑줄 테스트">
          <p>
            <u>밑줄</u>, <u> 띄어쓰기 </u>, a<u>b</u>c, a_b, _뭣도 아님_
          </p>
          <p>
            <Code>__밑줄 없어야 함__</Code>, <u><Code>이건 있어야 함</Code></u>
          </p>
          <p>
            <b>여보세요!</b><br/>
            멋진<u>추천을</u>받으려면<u>자신을</u>소개하세요
          </p>
        </Accordion>
        {/* </editor-fold> */}
      </section>
      <section id="id-1-3">
        <hgroup>
          <h3>3. 이스케이핑 (Escaping)</h3>
        </hgroup>
        <p>
          역슬래시(<Code>\</Code>)를 구문 앞에 삽입하면 해당 기호를 무조건적으로 <b>텍스트</b>로 처리하도록 할 수 있습니다.
        </p>
        <CodeBlock lang="markdown">
          \**이렇게 하면 기울기만 적용됩니다.\*
        </CodeBlock>
        <Comment>Example</Comment>
        <p>
          *<i>이렇게 하면 기울기만 적용됩니다.*</i>
        </p>
        <Accordion summary="생성된 HTML 코드">
          <CodeBlock lang="html">
            {"*<i>이렇게 하면 기울기만 적용됩니다.*</i>"}
          </CodeBlock>
        </Accordion>
      </section>
      <section id="id-1-4">
        <hgroup>
          <h3>4. 고급: HTML 서식 태그</h3>
        </hgroup>
        <Admonitions type="information">
          <p>
            자세한 내용은 <Link href="/src/app/(blog)/article/~components">확장 컴포넌트</Link>를 참고하십시오.
          </p>
        </Admonitions>
      </section>
    </section>
    <section id="id-2">
      <hgroup>
        <h2 id="id-2">Ⅱ. 머릿말 (Heading)</h2>
      </hgroup>
      <p>
        해시태그(<Code>#</Code>) 기호를 줄 시작점에 삽입하여 머릿말을 생성할 수 있습니다.{" "}
        해시태그 기호를 여러 번 쌓아 문단의 단계를 지정할 수 있습니다.{" "}
        개수가 증가할 수록 단계가 낮아지며, 최대 4단계까지 사용할 수 있습니다.
      </p>
      <p>
        알파마크는 문서의 제목을 최상위 문단(HTML 태그의 <Code lang="html">{"<h1>"}</Code>)으로 간주하므로,{" "}
        생성된 HTML 문서에서는 1단계씩 낮추어 처리됩니다.<EndnoteRef id="1"/>{" "}
        HTML <Code lang="html">{"<h6>"}</Code> 태그는 원칙적으로 생성하지 않습니다.
      </p>
      <Admonitions type="note">
        <p>
          Setext, Wikitext 스타일의 머릿말은 <mark>강조</mark> 구문과 충돌할 수 있으므로 지원하지 않습니다.
        </p>
      </Admonitions>
      <p>
        머릿말은 문서의 단락을 제어할 때 사용하면 중요한 지표<sub>(Marker)</sub>이기 때문에,{" "}
        항상 <Code lang="html">{"<hgroup>"}</Code> 내에 존재해야 하며, 단락 간 상하관계가 명확해야 합니다.{" "}
        문단이 올바르지 않으면 잘못 렌더링될 수 있습니다.
      </p>
      <Admonitions type="tip">
        <p>
          머릿말 스타일은 <a href="/blog/~styling">스타일 전체보기</a>에서 볼 수 있습니다.
        </p>
      </Admonitions>
      <section id="id-2-1">
        <hgroup>
          <h3>1. 앵커(Anchor)</h3>
        </hgroup>
        <p>
          모든 문단은 기본적으로 앵커를 가집니다. 앵커를 하이퍼링크로 지정하면 해당 문단으로 빠르게 이동할 수 있습니다.{" "}
          알파마크는 <Link href="https://vitepress.dev/guide/markdown">VitePress</Link>의 앵커 문법을 사용하고 있으며,{" "}
          임의로 앵커를 지정하려면 <Code>{"{#anchor-name}"}</Code>을 머릿말에 추가하면 됩니다.
          <EndnoteRef id="2" /> <Code>{"{no-anchor}"}</Code>를 사용하면 앵커를 제거할 수도 있습니다.
        </p>
        <Admonitions type="note">
          <p>
            앵커의 이름은 <b>알파벳 소문자, 숫자 및 하이픈(<Code>-</Code>)</b>으로만 이루어져야 하며,{" "}
            항상 <b>알파벳 소문자로 시작</b>해야 합니다.{" "}
            앵커 이름은 <Code>#id</Code>, <Code>#en</Code>, <Code>#fn</Code> 또는 <Code>#dfn</Code>으로 시작할 수 없습니다.
          </p>
        </Admonitions>
        <section id="id-2-1-1">
          <hgroup>
            <h4>1) 마커 (Marker)</h4>
          </hgroup>
          <p>
            특정 위치에서 <b>문단은 생성하지 않고</b> 앵커만 추가하려면, 6단계 머릿말을 사용하면 됩니다.{" "}
            6단계 머릿말은 사용자에게 명시적으로 표시되지 않으며, 머릿말로 처리되지 않기 때문에 목차에 표시되지 않습니다.
          </p>
          <CodeBlock lang="markdown">
            {`\
            ###### {#anchor}
            미주에서 링크를 클릭해 앵커로 돌아올 수 있습니다.[^앵커]
            `.split("\n").map((s) => s.trim()).join("\n")}
          </CodeBlock>
          <Comment>Example</Comment>
          <Anchor id="anchor" />
          <p>
            미주에서 링크를 클릭해 앵커로 돌아올 수 있습니다.
            <EndnoteRef id="anchor" />
          </p>
        </section>
      </section>
      <section id="id-2-2">
        <hgroup>
          <h3>2. 캡션</h3>
        </hgroup>
        <p>
          5단계 머릿말(<Code>#####</Code>)은 본문보다 작기 때문에, 머릿말 대신 캡션으로 표시됩니다.{" "}
          캡션을 사용하면 표, 목록 또는 이미지 등에 대한 설명을 작성할 수 있습니다.{" "}
          머릿말이 아니기 때문에 앵커 또한 <b><i>자동으로</i></b> 생성되지 않습니다.
          <EndnoteRef id="3" />
        </p>
        <CodeBlock lang="markdown">
          ##### 캡션
        </CodeBlock>
        <Comment>Example</Comment>
        <Caption>캡션</Caption>
      </section>
      <section id="id-2-3">
        <hgroup>
          <h3>3. 접을 수 있는 문단</h3>
        </hgroup>
        <p>
          가장 앞에 꺽쇠괄호(<Code>&gt;</Code>)를 추가하면 그 문단을 접을 수 있도록 만들 수 있습니다.
          문단이 기본적으로 접혀 있는 상태이도록 하려면 <b>해시태그 맨 마지막</b>에 하이픈(<Code>-</Code>)을 추가합니다.
          <EndnoteRef id="4" />
          <EndnoteRef id="5" />
        </p>
      </section>
      <section id="id-2-4">
        <hgroup>
          <h3>4. 수평선</h3>
        </hgroup>
        <p>
          빈 줄에 <Code lang="markdown">---</Code>를 삽입하면 수평선을 추가할 수 있습니다.
          수평선은 항상 다른 구문과 명확하게 분리되어 있어야 합니다.
        </p>
        <Admonitions type="tip">
          <p>
            수평선은 아래와 같이 표시됩니다:
          </p>
          <hr/>
        </Admonitions>
      </section>
    </section>
    <section id="id-3">
      <hgroup>
        <h2>Ⅲ. 하이퍼링크</h2>
      </hgroup>
      <p>
        <Code lang="markdown">[텍스트](링크)</Code> 형태로 링크를 삽입할 수 있습니다.
      </p>
      <CodeBlock lang="markdown">
        {`\
        - [절대 경로](https://example.com)
        - [상대 경로](../~components)
        - [인코딩되지 않은 경로](https://namu.wiki/w/나무위키:문법 도움말)
        - [태그 속성 지정](<https://example.com> title=Example Domain)
        `.split("\n").map((s) => s.trim()).join("\n")}
      </CodeBlock>
      <Comment>Example</Comment>
      <ul>
        <li>
          <p>
            <Link href="https://example.com">절대 경로</Link>
          </p>
        </li>
        <li>
          <p>
            <Link href="/src/app/(blog)/article/~components">상대 경로</Link>
          </p>
        </li>
        <li>
          <p>
            <Link href="https://namu.wiki/w/나무위키:문법 도움말">인코딩되지 않은 경로</Link>
          </p>
        </li>
        <li>
          <p>
            <Link href="https://example.com" title="Example Domain">태그 속성 지정</Link>
          </p>
        </li>
      </ul>
      <section id="id-3-1">
        <hgroup>
          <h3>1. 참조 링크</h3>
        </hgroup>
        <p>
          링크를 여러 번 인용해야 하는 경우, 다음과 같이 참조로 만들어 사용할 수도 있습니다.
        </p>
        <CodeBlock lang="markdown">
          {`\
          [github]: https://github.com/AlphaKR93
          [example]: <https://example.com> title=example.com
          
          - 빠른 참조: [github]
          - 속성 덮어쓰기: [github|title=GitHub Profile]
          - 텍스트 덮어쓰기: [Example][example]
          - 텍스트 및 속성 덮어쓰기: [Example][example|title=Example Domain]
          `.split("\n").map((s) => s.trim()).join("\n")}
        </CodeBlock>
        <Comment>Example</Comment>
        <ul>
          <li>
            <p>
              빠른 참조: <Link href="https://github.com/AlphaKR93">github</Link>
            </p>
          </li>
          <li>
            <p>
              속성 덮어쓰기: <Link href="https://github.com/AlphaKR93" title="GitHub Profile">github</Link>
            </p>
          </li>
          <li>
            <p>
              텍스트 덮어쓰기: <Link href="https://example.com">Example</Link>
            </p>
          </li>
          <li>
            <p>
              텍스트 및 속성 덮어쓰기: <Link href="https://example.com" title="Example Domain">Example</Link>
            </p>
          </li>
        </ul>
      </section>
      <section id="id-3-2">
        <hgroup>
          <h3>2. 자동 링크 (Autolink)</h3>
        </hgroup>
        <p>
          꺽쇠 괄호(<Code lang="markdown">&lt; &gt;</Code>) 사이에 입력된 URL은 자동으로 하이퍼링크로 전환됩니다.
        </p>
        <CodeBlock lang="markdown">
          {`\
          - 절대 경로: <https://example.com> 
          - 상대 경로: <../~components>
          - 메일: <dev@alpha93.kr>
          `.split("\n").map((s) => s.trim()).join("\n")}
        </CodeBlock>
        <Comment>Example</Comment>
        <ul>
          <li>
            <p>
              절대 경로:
            </p>
          </li>
          <li>
            <p>
              상대 경로:
            </p>
          </li>
          <li>
            <p>
              메일:
            </p>
          </li>
        </ul>
        <section id="id-3-2-1">
          <hgroup>
            <h4>특수 스키마</h4>
          </hgroup>
          <p>
            일부 스키마는 특수하게 처리됩니다.
          </p>
          <ul>
            <li>
              <p>
                <Code>timestamp</Code>: 시간<br/>
                예: <Code lang="markdown">{"<timestamp:2025-01-01T12:00:00Z>"}</Code>{" "}
                &rarr; <Timestamp dateTime="2025-01-01T12:00:00Z"/>
              </p>
            </li>
            <li>
              <p>
                <Code>icon</Code>: Lucide/Heroicons/Octicons 아이콘<br/>
                예: <Code lang="markdown">{"<icon:sparkles>"}</Code> &rarr; <Icon icon="sparkles" />
              </p>
            </li>
            <li>
              <p>
                <Code>gh</Code>: GitHub 유저/레포지토리<br/>
                예: <Code lang="markdown">{"<gh:AlphaKR93>"}</Code> &rarr; <GitHubUser>AlphaKR93</GitHubUser>
              </p>
            </li>
          </ul>
        </section>
      </section>
      <section id="id-3-3">
        <hgroup>
          <h3>3. 미디어 삽입</h3>
        </hgroup>
        <p>
          하이퍼링크 앞에 느낌표(<Code>!</Code>)를 추가하여 이미지로 삽입할 수 있습니다.
          이때 링크 텍스트는 이미지의 설명 텍스트로 적용됩니다.
        </p>
        <CodeBlock lang="markdown">
          {`\
          ![JetBrains logo](https://resources.jetbrains.com/storage/products/company/brand/logos/jetbrains.png)
          ![Profile](</_assets/profile.png> width=128&height=128)
          `.split("\n").map((s) => s.trim()).join("\n")}
        </CodeBlock>
        <Comment>Example</Comment>
        <img alt="JetBrains logo" src="https://resources.jetbrains.com/storage/products/company/brand/logos/jetbrains.png" />
        <Image alt="Profile" src="/_assets/profile.png" width={128} height={128} />
      </section>
      <section id="id-3-4">
        <hgroup>
          <h3>4. 미주 & 각주</h3>
        </hgroup>
        <p>
          <Code>[*...]</Code>로 각주, <Code>[^...]</Code>로 미주를 삽입할 수 있습니다.
          <Code>*[...]</Code> 또는 <Code>^[...]</Code>와 같이 입력하면 줄에서 바로 생성할 수 있습니다.
        </p>
        <CodeBlock lang="markdown">
          {`\
          각주[*각주]와 미주[^미주]는 같은 식별자를 가질 수 있습니다.
          인라인에서 각주*[기호를 밖에 입력하여 각주 또는 미주를 삽입합니다.]
          또는 미주^[\`<br>\` 태그를 사용하면<br/>인라인에서 줄바꿈을 사용할 수 있습니다.]를 삽입하면,
          ID는 지정되지 않은 숫자에 자동으로 할당되며, 참조할 수 없습니다.
          
          [*각주]: 각주는 문단의 마지막, 또는 \`{footnote}\`가 삽입된 공간에 표시됩니다.
          [^미주]: 미주는 항상 문서의 맨 마지막에 삽입됩니다.
            마찬가지로 들여쓰면 이전 미주에 통합됩니다.
          `.split("\n").map((s) => s.trim()).join("\n")}
        </CodeBlock>
        <Comment>Example</Comment>
        <p>
          각주<FootnoteRef sectionId="id-3-4" id="각주"/>와 미주<EndnoteRef id="미주"/>는 같은 식별자를 가질 수 있습니다.
          인라인에서 각주<FootnoteRef sectionId="id-3-4" id="1"/> 또는
          미주<EndnoteRef id="6"/>를 삽입하면,
          ID는 지정되지 않은 숫자에 자동으로 할당되며, 참조할 수 없습니다.
        </p>
      </section>
    </section>
    <section id="id-4">
      <hgroup>
        <h2>Ⅳ. 인용문</h2>
      </hgroup>
      <p>
        줄 시작점에 꺽쇠괄호(<Code>&gt;</Code>) 기호를 삽입하여 인용문을 생성할 수 있습니다.
      </p>
      <CodeBlock lang="markdown">
        {`\
        > *Software is like sex; it's better when it's free.*
        `.split("\n").map((s) => s.trim()).join("\n")}
      </CodeBlock>
      <blockquote>
        <p><i>Software is like sex; it's better when it's free.</i></p>
      </blockquote>
      <p>
        인용문 내에 여러 문단을 추가하려면, 이전 인용문과 <b>줄 간격을 띄우지 않고</b> 인용문을 연속해서 작성합니다.
      </p>
      <CodeBlock lang="markdown">
        {`\
        > 미주/각주와 목록처럼 들여쓰기 하면
          여러 줄을 추가할 수 있습니다.
        > 인용문이 끊어지지 않고 계속 이어지면 첫 인용문과 연결됩니다.
          다만 이 경우 인용문 내 문단 자체는 나뉘게 됩니다.
        `.split("\n").map((s) => s.trim()).join("\n")}
      </CodeBlock>
      <Comment>Example</Comment>
      <blockquote>
        <p>
          미주/각주와 목록처럼 들여쓰기 하면
          여러 줄을 추가할 수 있습니다.
        </p>
        <p>
          인용문이 끊어지지 않고 계속 이어지면 첫 인용문과 연결됩니다.
          다만 이 경우 인용문 내 문단 자체는 나뉘게 됩니다.
        </p>
      </blockquote>
      <section id="id-4-1">
        <hgroup>
          <h3>1. 콜아웃 (Callouts)</h3>
        </hgroup>
        <p>
          콜아웃은 블록 컴포넌트로 사용합니다. 보충 설명을 하거나 이목을 집중해야 할 때 사용하기 좋습니다.
        </p>
        <CodeBlock lang="markdown">
          {`\
          :::callout note
          최상단에 있는 문장은 콜아웃의 타이틀이 됩니다.
          
          \`:::\` 내에서 텍스트를 입력하면 모두 콜아웃 안에 포함됩니다.
          :::
          `.split("\n").map((s) => s.trim()).join("\n")}
        </CodeBlock>
        <Comment>Example</Comment>
        <section id="id-4-1-1">
          <hgroup>
            <h4>1) 아코디언</h4>
          </hgroup>
          <p>
            콜아웃 타입 뒤에 <Code>-</Code>를 붙이거나,
            <Code>callout</Code> 대신 <Code>accordion</Code>을 사용하면 콜아웃을 접을 수 있습니다.
          </p>
          <CodeBlock lang="markdown">
            {`\
            ::::accordion tip
            코드 블록처럼 바깥 쌍점표(\`:\`)의 개수를 늘리면, 콜아웃 안에서도 콜아웃을 추가할 수 있습니다.
            
            :::accordion
            **접을 수 있는 문단**
            
            콜아웃 타입을 입력하지 않으면 *접을 수 있는 문단*으로도 사용할 수 있습니다.
            :::
            :::accordion
            **아코디언 (Accordion)**
            
            인용문처럼 접을 수 있는 문단을 연속해서 입력하면 아코디언으로 만들 수도 있습니다.
            :::
            ::::
            `.split("\n").map((s) => s.trim()).join("\n")}
          </CodeBlock>
          <Comment>Example</Comment>
        </section>
      </section>
      <section id="id-4-2">
        <hgroup>
          <h3 id="id-4-2">2. 애드머니션 (Admonitions)</h3>
        </hgroup>
        <p>
          <Link href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts">GFM</Link>
          스타일의 콜아웃입니다. 인용문 최상단에 <Code>![type]</Code>을 삽입하여 애드머니션을 생성할 수 있습니다.
        </p>
        <CodeBlock lang="markdown">
          {`\
          > [!TIP] 일반 콜아웃처럼 제목도 지정할 수 있습니다.
          > 알럿은 접을 수 없습니다.
          `.split("\n").map((s) => s.trim()).join("\n")}
        </CodeBlock>
        <Comment>Example</Comment>
        <Admonitions type="tip" title="일반 콜아웃처럼 제목도 지정할 수 있습니다.">
          알럿은 접을 수 없습니다.
        </Admonitions>
      </section>
    </section>
    <section id="id-5">
      <hgroup>
        <h2>Ⅴ. 코드 삽입</h2>
      </hgroup>
      <section id="id-5-1">
        <hgroup>
          <h3>1. 코드 서식</h3>
        </hgroup>
        <p>
          백틱(<Code>`</Code>)을 사용하면 코드를 삽입할 수 있습니다. 코드의 시작 또는 끝이 백틱인 경우, 그 전후 공백은 제거됩니다.
        </p>
        <CodeBlock lang="markdown">
          코드 안에서 백틱을 사용해야 하는 경우, `` `이렇게` `` 바깥 백틱의 개수를 늘리면 됩니다.
        </CodeBlock>
        <Comment>Example</Comment>
        <p>
          코드 안에서 백틱을 사용해야 하는 경우, <Code>`이렇게`</Code> 바깥 백틱의 개수를 늘리면 됩니다.
        </p>
        <section id="id-5-1-1">
          <hgroup>
            <h4>1) 언어 지정</h4>
          </hgroup>
          <p>
            백틱 <b>바로 다음</b>에 <Code lang="markdown">{`{<language-name>}`}</Code>을 기입하면 언어를 지정할 수 있습니다.
          </p>
          <CodeBlock lang="markdown">
            {`\
            * Python: \`{py} print("Hello, World!")\`
            * Kotlin: \`{kt} println("Hello, World!")\`
            * TypeScript: \`{ts} console.log("Hello, World!");\`
            `.split("\n").map((s) => s.trim()).join("\n")}
          </CodeBlock>
          <Comment>Example</Comment>
          <ul>
            <li>
              <p>
                Python: <Code lang="python">{`print("Hello, World!")`}</Code>
              </p>
            </li>
            <li>
              <p>
                Kotlin: <Code lang="kotlin">{`println("Hello, World!")`}</Code>
              </p>
            </li>
            <li>
              <p>
                TypeScript: <Code lang="typescript">{`console.log("Hello, World!");`}</Code>
              </p>
            </li>
          </ul>
        </section>
        <section id="id-5-1-2">
          <hgroup>
            <h4>2) 키 입력</h4>
          </hgroup>
          <p>
            언어를 <Code>kbd</Code>로 지정하면, 코드를 키 입력처럼 표시할 수 있습니다.
          </p>
          <CodeBlock lang="markdown">
            {"`{kbd} Ctrl+Shift+Esc`를 누른 다음, `{kbd} Shift`를 누른 채 *재시작*을 시도하면 다른 옵션을 볼 수 있습니다."}
          </CodeBlock>
          <Comment>Example</Comment>
          <p>
            <Keystrokes>Ctrl+Shift+Esc</Keystrokes>를 누른 다름, <Keystrokes>Shift</Keystrokes>를 누른 채 <i>재시작</i>
            을 시도하면 다른 옵션을 볼 수 있습니다.
          </p>
        </section>
        <section id="id-5-1-3">
          <hgroup>
            <h4>3) 수식 삽입 (Inline Equations)</h4>
          </hgroup>
          <p>
            언어를 <Code>math</Code>로 지정하거나, 달러 기호(<Code>$$</Code>)를 사용하면 수식을 삽입할 수 있습니다.
          </p>
          <CodeBlock lang="markdown">
            {"$$ X_{n+1} = (aX_{n} + c) \\mod m $$"}
          </CodeBlock>
          <p>
            <KaTeX>
              {" X_{n+1} = (aX_{n} + c) \\mod m "}
            </KaTeX>
          </p>
        </section>
      </section>
      <section id="id-5-2">
        <hgroup>
          <h3>2. 코드 블록</h3>
        </hgroup>
        <p>
          백틱을 3개 이상(<Code>```</Code>) 중첩하여 코드 블록을 생성합니다. (단, 시작과 끝이 다른 줄에 있어야 함)
          시작 줄의 백틱 다음에는 코드 블록에 대한 속성을 추가할 수 있습니다.<EndnoteRef id="7"/>
        </p>
        <CodeBlock lang="markdown">
          {`\
          \`\`\`ts example.ts
          export default function() {
            const code_block = "코드 블록";
            console.log(\`인라인 코드와 마찬가지로 \${code_block}에서도 바깥 백틱의 개수를 늘리면 내부에 백틱을 포함할 수 있습니다.\`); 
          }
          \`\`\`
          `.split("\n").map((s) => s.trim()).join("\n")}
        </CodeBlock>
        <Comment>Example</Comment>
        <CodeBlock lang="ts" file="example.ts">
          {`\
          export default function() {
            const code_block = "코드 블록";
            console.log(\`인라인 코드와 마찬가지로 \${code_block}에서도 바깥 백틱의 개수를 늘리면 내부에 백틱을 포함할 수 있습니다.\`); 
          }
          `.split("\n").map((s) => s.trim()).join("\n")}
        </CodeBlock>
        <section id="id-5-2-1">
          <hgroup>
            <h4>1) 출력</h4>
          </hgroup>
          <p>
            언어를 <Code>output</Code>으로 설정하면 출력 블록을 만들 수 있습니다.
            이때 파일명은 Shell 환경을 의미합니다.
          </p>
          <CodeBlock lang="markdown">
            {`\
            \`\`\`output bash
            $ echo "Hello, world!"
            Hello, world!
            \`\`\`
            `.split("\n").map((s) => s.trim()).join("\n")}
          </CodeBlock>
          <Comment>Example</Comment>
          <OutputBlock shell="bash">
            {`\
            $ echo "Hello, world!"
            Hello, world!
            `.split("\n").map((s) => s.trim()).join("\n")}
          </OutputBlock>
        </section>
        <section id="id-5-2-2">
          <hgroup>
            <h4>2) 수식</h4>
          </hgroup>
          <p>
            언어를 <Code>math</Code>로 설정하면 수식 블록을 생성할 수 있습니다.
          </p>
          <CodeBlock lang="markdown">
            {`\
            \`\`\`math
            f(x) = \\int^{\\infty}_{-\\infty} f\\hat(\\xi)\\, e^{2 \\pi i \\xi x}\\, d\\xi
            \`\`\`
            `.split("\n").map((s) => s.trim()).join("\n")}
          </CodeBlock>
          <Comment>Example</Comment>
          <KaTeXBlock>
            {`\
            f(x) = \\int^{\\infty}_{-\\infty} f\\hat(\\xi)\\, e^{2 \\pi i \\xi x}\\, d\\xi
            `.split("\n").map((s) => s.trim()).join("\n")}
          </KaTeXBlock>
        </section>
        <section id="id-5-2-3">
          <hgroup>
            <h4>3) 다이어그램</h4>
          </hgroup>
          <p>
            언어를 <Code>mermaid</Code>로 설정하면 다이어그램을 삽입할 수 있습니다.
          </p>
          <CodeBlock lang="markdown">
            {`\
            \`\`\`mermaid
            graph LR;
              A[Start] --> B{Is it working?};
              B -- Yes --> C[Continue];
              B -- No --> D[Fix it];
              D --> B;
            \`\`\`
            `.split("\n").map((s) => s.trim()).join("\n")}
          </CodeBlock>
          {/*
          <Comment>Example</Comment>
          <Mermaid>
            {`\
            graph LR;
                A[Start] --> B{Is it working?};
                B -- Yes --> C[Continue];
                B -- No --> D[Fix it];
                D --> B;
            `.split("\n").map((s) => s.trim()).join("\n")}
          </Mermaid>
           */}
        </section>
      </section>
    </section>
    <section id="id-6">
      <hgroup>
        <h2>Ⅵ. 주석</h2>
      </hgroup>
      <section id="id-6-1">
        <hgroup>
          <h3>1. MDX 스타일 주석</h3>
        </hgroup>
        <p>
          줄 시작점에 슬래시(<Code>//</Code>)를 삽입하거나, <Code>/* */</Code>로 텍스트를 감싸 주석을 삽입할 수 있습니다.{" "}
          MDX 스타일 주석은 MDX 소스 파일에서만 확인할 수 있으며, HTML 소스 또는 CommonMark 파일 등 렌더 결과물에는 포함되지 않습니다.
        </p>
        <CodeBlock lang="mdx">
          {`\
          // 한 줄 주석은 이렇게 입력합니다.
          
          /*
          여러 줄 주석은 이렇게 입력합니다.
           */
           
          /* 알파마크 구문의 일부이므로, */ 중괄호가 없어도 주석을 삽입할 수 있습니다.
          `.split("\n").map((s) => s.trim()).join("\n")}
        </CodeBlock>
        <Comment>Example</Comment>
        <p>
          중괄호가 없어도 주석을 삽입할 수 있습니다.
        </p>
      </section>
      <section id="id-6-2">
        <hgroup>
          <h3>2. XML 스타일 주석</h3>
        </hgroup>
        <p>
          기존 Markdown처럼 <Code lang="markdown">{"<!-- -->"}</Code>를 사용해서도 주석을 삽입할 수 있습니다.
          다만, XML 스타일 주석은 HTML 소스 및 CommonMark 파일 등 렌더링 결과물에 포함되기 때문에, 사용에 주의해야 합니다.
        </p>
        <CodeBlock lang="markdown">
          {`<!-- 개발자 도구(F12)를 켜 보세요! -->`}
        </CodeBlock>
        <Comment>Example</Comment>
        <Comment>개발자 도구(F12)를 켜 보세요!</Comment>
      </section>
      <section id="id-6-3">
        <hgroup>
          <h3>3. 어노테이션</h3>
        </hgroup>
        <p>
          외부 도구 없이 추가적인 내용을 첨부하고 싶으면, 줄 시작점에 <Code>+#</Code> 또는 <Code>-#</Code>을
          삽입하여 해당 줄을 어노테이션으로 만들 수 있습니다.
        </p>
        <CodeBlock lang="markdown">
          {`\
          -# Discord의 각주 구문에 영감을 받아 추가한 구문입니다.
          +# ~~이런식으로 개소리 할 때 정말 유용합니다.~~
          `.split("\n").map((s) => s.trim()).join("\n")}
        </CodeBlock>
        <Comment>Example</Comment>
        <p>
          <small data-pos="b">
            Discord의 각주 구문에 영감을 받아 추가한 구문입니다.
          </small>
        </p>
        <p>
          <small data-pos="t">
            <s>이런식으로 개소리 할 때 정말 유용합니다.</s>
          </small>
        </p>
      </section>
    </section>
    <section id="id-7">
      <hgroup>
        <h2>Ⅶ. 목록</h2>
      </hgroup>
      <section id="id-7-1">
        <hgroup>
          <h3>1. 순서가 없는 목록</h3>
        </hgroup>
        <p>
          줄 시작점에 <Code>-</Code>, <Code>+</Code> 또는 <Code>*</Code>을 삽입하면 순서가 없는 목록을 만들 수 있습니다.
        </p>
        <CodeBlock lang="markdown">
          {`\
          - 1번째 항목
          - 2번째 항목
          - 3번째 항목
          `.split("\n").map((s) => s.trim()).join("\n")}
        </CodeBlock>
        <Comment>Example</Comment>
        <ul>
          <li>
            <p>1번째 항목</p>
          </li>
          <li>
            <p>2번째 항목</p>
          </li>
          <li>
            <p>3번째 항목</p>
          </li>
        </ul>
      </section>
      <section id="id-7-2">
        <hgroup>
          <h3>2. 순서가 지정된 목록</h3>
        </hgroup>
        <p>
          <Code lang="markdown">1.</Code> 또는 <Code lang="markdown">a)</Code> 형태로 작성하면
          순서가 지정된 목록을 만들 수 있습니다.
        </p>
        <Admonitions type="note">
          동일한 목록 내에서는 최상단 항목을 기준으로 목록을 생성하기 때문에,
          그 다음 항목의 형태가 올바르게 적용되지 않을 수 있습니다.
        </Admonitions>
        <CodeBlock lang="markdown">
          {`\
          1. 1번째 항목
          2. 2번째 항목
          3. 3번째 항목
          `.split("\n").map((s) => s.trim()).join("\n")}
        </CodeBlock>
        <Comment>Example</Comment>
        <ol>
          <li>
            <p>1번째 항목</p>
          </li>
          <li>
            <p>2번째 항목</p>
          </li>
          <li>
            <p>3번째 항목</p>
          </li>
        </ol>
      </section>
    </section>
    <section id="id-7-3">
      <hgroup>
        <h3>3. 설명 목록</h3>
      </hgroup>
      <Admonitions type="note">
        자세한 내용은 <Link href="/src/app/(blog)/article/~components">확장 컴포넌트</Link>를 참고하십시오.
      </Admonitions>
    </section>
    <section id="id-7-4">
      <hgroup>
        <h3>4. 작업 항목</h3>
      </hgroup>
      <p>
        항목 내용 앞에 대괄호(<Code lang="markdown">[ ]</Code>)를 삽입하면 항목을 작업으로 만들 수 있습니다.
      </p>
      <CodeBlock lang="markdown">
        {`\
        - [ ] 순서가 없는 목록에서의 작업 항목
        - [-] 진행중인 항목
        - [x] 완료된 항목
        
        1. [ ] 순서가 지정된 목록에서의 작업 항목
        2. [-] 진행중인 항목
        3. [x] 완료된 항목
        `.split("\n").map((s) => s.trim()).join("\n")}
      </CodeBlock>
      <Comment>Example</Comment>
      <ul>
        <li>
          <Checkmark>
            순서가 없는 목록에서의 작업 항목
          </Checkmark>
        </li>
        <li>
          <Checkmark checked indeterminate>
            진행중인 항목
          </Checkmark>
        </li>
        <li>
          <Checkmark checked>
            완료된 항목
          </Checkmark>
        </li>
      </ul>
      <ol>
        <li>
          <Checkmark>
            순서가 지정된 목록에서의 작업 항목
          </Checkmark>
        </li>
        <li>
          <Checkmark checked indeterminate>
            진행중인 항목
          </Checkmark>
        </li>
        <li>
          <Checkmark checked>
            완료된 항목
          </Checkmark>
        </li>
      </ol>
    </section>
    <section id="id-7-5">
      <hgroup>
        <h3>5. 목록 중첩하기</h3>
      </hgroup>
      <p>
        목록을 들여쓰면 중첩된 목록을 만들 수 있습니다. 하위 목록의 종류는 상위 목록의 영향을 받지 않습니다.
      </p>
      <CodeBlock lang="markdown">
        {`\
        - 하위 목록을 2칸 이상 들여쓰면, 목록을 중첩할 수 있습니다.
          - 순서가 없는 목록은 중첩될 수록 아이콘이 변화합니다.
        - 중첩된 목록의 종류는 상위 목록의 영향을 받지 않습니다.
          1. 순서가 정의된 목록은 첫 항목의 시작을 그대로 유지합니다.
        - [-] 작업 목록도 중첩할 수 있습니다!
          들여쓰기를 했지만 목록이 아니면, 해당 항목의 문단에 포함됩니다.
        `.split("\n").map((s) => s.trim()).join("\n")}
      </CodeBlock>
      <Comment>Example</Comment>
      <ul>
        <li>
          <p>하위 목록을 2칸 이상 들여쓰면, 목록을 중첩할 수 있습니다.</p>
          <ul>
            <li>
              <p>순서가 없는 목록은 중첩될 수록 아이콘이 변화합니다.</p>
            </li>
          </ul>
        </li>
        <li>
          <p>중첩된 목록의 종류는 상위 목록의 영향을 받지 않습니다.</p>
          <ol data-type="1.">
            <li>
              <p>순서가 정의된 목록은 첫 항목의 시작을 그대로 유지합니다.</p>
            </li>
          </ol>
        </li>
        <li>
          <Checkmark checked indeterminate>작업 목록도 중첩할 수 있습니다!</Checkmark>{" "}
          들여쓰기를 했지만 목록이 아니면, 해당 항목의 문단에 포함됩니다.
        </li>
      </ul>
      <Admonitions type="note">
        <p>
          전체 스타일은 <a href="/blog/~styling">스타일 전체보기</a>에서 볼 수 있습니다.
        </p>
      </Admonitions>
      <Accordion summary="전체 스타일 확인하기 (Markdown)">
        <ul>
          <li>
            <p>순서가 없는 목록</p>
            <ul>
              <li>
                <p>중첩 1단계</p>
                <ul>
                  <li>
                    <p>중첩 2단계</p>
                    <ul>
                      <li>
                        <p>중첩 3단계</p>
                        <ul>
                          <li>
                            <p>중첩 4단계</p>
                            <ul>
                              <li>
                                <p>중첩 5단계</p>
                                <ul>
                                  <li>
                                    <p>중첩 6단계</p>
                                    <ul>
                                      <li>
                                        <p>중첩 7단계</p>
                                        <ul>
                                          <li>
                                            <p>중첩 8단계</p>
                                            <ul>
                                              <li>
                                                <p>중첩 9단계</p>
                                                <ul>
                                                  <li>
                                                    <p>중첩 10단계</p>
                                                    <ul>
                                                      <li>
                                                        <p>중첩 11단계</p>
                                                        <ul>
                                                          <li>
                                                            <p>중첩 12단계</p>
                                                            <ul>
                                                              <li>
                                                                <p>중첩 13단계</p>
                                                              </li>
                                                            </ul>
                                                          </li>
                                                        </ul>
                                                      </li>
                                                    </ul>
                                                  </li>
                                                </ul>
                                              </li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <p>순서가 지정된 목록, 아라비아 숫자</p>
            <ol data-type="1.">
              <li>
                <p>타입 <Code>1.</Code></p>
                <ol data-type="01.">
                  <li>
                    <p>타입 <Code>01.</Code></p>
                    <ol data-type="0.">
                      <li>
                        <p>타입 <Code>0.</Code></p>
                        <ol data-type="00.">
                          <li>
                            <p>타입 <Code>00.</Code></p>
                            <ol data-type="1)">
                              <li>
                                <p>타입 <Code>1)</Code></p>
                                <ol data-type="01)">
                                  <li>
                                    <p>타입 <Code>01)</Code></p>
                                    <ol data-type="0)">
                                      <li>
                                        <p>타입 <Code>0)</Code></p>
                                        <ol data-type="00)">
                                          <li>
                                            <p>타입 <Code>00)</Code></p>
                                            <ol data-type="(1)">
                                              <li>
                                                <p>타입 <Code>(1)</Code></p>
                                                <ol data-type="(01)">
                                                  <li>
                                                    <p>타입 <Code>(01)</Code></p>
                                                    <ol data-type="(0)">
                                                      <li>
                                                        <p>타입 <Code>(0)</Code></p>
                                                        <ol data-type="(00)">
                                                          <li>
                                                            <p>타입 <Code>(00)</Code></p>
                                                          </li>
                                                        </ol>
                                                      </li>
                                                    </ol>
                                                  </li>
                                                </ol>
                                              </li>
                                            </ol>
                                          </li>
                                        </ol>
                                      </li>
                                    </ol>
                                  </li>
                                </ol>
                              </li>
                            </ol>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <p>순서가 지정된 목록, 로마 숫자</p>
            <ol data-type="I.">
              <li>
                <p>타입 <Code>I.</Code></p>
                <ol data-type="i.">
                  <li>
                    <p>타입 <Code>i.</Code></p>
                    <ol data-type="I)">
                      <li>
                        <p>타입 <Code>I)</Code></p>
                        <ol data-type="i)">
                          <li>
                            <p>타입 <Code>i)</Code></p>
                            <ol data-type="(I)">
                              <li>
                                <p>타입 <Code>(I)</Code></p>
                                <ol data-type="(i)">
                                  <li>
                                    <p>타입 <Code>(i)</Code></p>
                                  </li>
                                </ol>
                              </li>
                            </ol>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <p>순서가 지정된 목록, 알파벳</p>
            <ol data-type="A.">
              <li>
                <p>타입 <Code>A.</Code></p>
                <ol data-type="a.">
                  <li>
                    <p>타입 <Code>a.</Code></p>
                    <ol data-type="A)">
                      <li>
                        <p>타입 <Code>A)</Code></p>
                        <ol data-type="a)">
                          <li>
                            <p>타입 <Code>a)</Code></p>
                            <ol data-type="(A)">
                              <li>
                                <p>타입 <Code>(A)</Code></p>
                                <ol data-type="(a)">
                                  <li>
                                    <p>타입 <Code>(a)</Code></p>
                                  </li>
                                </ol>
                              </li>
                            </ol>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <p>순서가 지정된 목록, 한글</p>
            <ol data-type="가.">
              <li>
                <p>타입 <Code>가.</Code></p>
                <ol data-type="ㄱ.">
                  <li>
                    <p>타입 <Code>ㄱ.</Code></p>
                    <ol data-type="가)">
                      <li>
                        <p>타입 <Code>가)</Code></p>
                        <ol data-type="ㄱ)">
                          <li>
                            <p>타입 <Code>ㄱ)</Code></p>
                            <ol data-type="(가)">
                              <li>
                                <p>타입 <Code>(가)</Code></p>
                                <ol data-type="(ㄱ)">
                                  <li>
                                    <p>타입 <Code>(ㄱ)</Code></p>
                                  </li>
                                </ol>
                              </li>
                            </ol>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ul>
      </Accordion>
    </section>
    <section id="id-8">
      <hgroup>
        <h2>Ⅷ. 표</h2>
      </hgroup>
      <p>
        <Link href="https://github.github.com/gfm/#tables-extension-">GFM</Link> 문법을 그대로 사용합니다.
      </p>
      <CodeBlock lang="markdown">
        {`\
        | 기본값 (중앙 정렬) | 왼쪽 정렬 | 중앙 정렬 | 오른쪽 정렬 |
        | 제목줄도 | 여러 개 | 추가할 수 | 있습니다. |
        | --- | :--- | :---: | ---: |
        | 항목 | 항목 | 항목 | 항목 |
        `.split("\n").map((s) => s.trim()).join("\n")}
      </CodeBlock>
      <Table>
        <thead>
          <tr>
            <th><p>기본값 (중앙 정렬)</p></th>
            <th style={{ textAlign: "left" }}><p>왼쪽 정렬</p></th>
            <th style={{ textAlign: "center" }}><p>중앙 정렬</p></th>
            <th style={{ textAlign: "right" }}><p>오른쪽 정렬</p></th>
          </tr>
          <tr>
            <th><p>제목줄도</p></th>
            <th style={{ textAlign: "left" }}><p>여러 개</p></th>
            <th style={{ textAlign: "center" }}><p>추가할 수</p></th>
            <th style={{ textAlign: "right" }}><p>있다는 사실</p></th>
          </tr>
          <tr>
            <th colSpan={2}><p>알고</p></th>
            <th colSpan={2} style={{ textAlign: "center" }}><p>계셨나요?</p></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p>아래처럼</p></td>
            <td style={{ textAlign: "left" }}><p>작성하면</p></td>
            <td style={{ textAlign: "center" }}><p>칸을 묶을 수</p></td>
            <td style={{ textAlign: "right" }}><p>있습니다.</p></td>
          </tr>
          <tr>
            <td colSpan={3}><p>표 컴포넌트를 사용하면 제목과 결과도 추가할 수</p></td>
            <td colSpan={1} style={{ textAlign: "right" }}><p>있습니다.</p></td>
          </tr>
          <tr>
            <td colSpan={4}>
              <p>
                자세한 내용은 <Link href="/src/app/(blog)/article/~components">고급 컴포넌트</Link>를 참고하십시오.
              </p>
            </td>
          </tr>
        </tbody>
      </Table>
    </section>
  </>;
}
