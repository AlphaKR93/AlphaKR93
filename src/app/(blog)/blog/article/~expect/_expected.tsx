export default function() {
  return <>
    <section id="excerpt">
      <p>
        해당 문서를 포함해 이 사이트의 모든 문서에서는 아래의 Markdown 문법을 사용합니다.{" "}
        @AlphaKR93이 개인적으로 사용하는 Markdown 문법이라 하여 알파마크라고도 합니다.
      </p>
      <p>
        이 문서는 여러분에게 알파마크 문법을 소개하기 위함도 있지만,{" "}
        알파마크 컴파일러가 문서를 올바르게 파싱했는지 검증하는 데에도 사용됩니다.
        컴파일러가 생성해야 하는 HTML 출력물은 <a href="/expected">여기</a>에서 확인할 수 있습니다.
      </p>
    </section>
    <section id="id-1">
      <hgroup>
        <h2>단락 (Paragraph)</h2>
      </hgroup>
      <p>
        비어 있지 않은 줄이 연속적으로 이어지면 문단(paragraph)을 이룹니다.
        비어있는 <b>줄</b>을 삽입하여 문단 블록을 나눌 수 있습니다.
      </p>
      <pre>
        <code data-temp data-language="markdown">
          <span>{"이 문장은 하나의 문단을 형성합니다."}</span>
          <span>&#x200B;</span>
          <span>{"이 문장은 위 문장과 다른 문단에 해당합니다."}</span>
        </code>
      </pre>
      <p>이 문장은 하나의 문단을 형성합니다.</p>
      <p>이 문장은 위 문장과 다른 문단에 해당합니다.</p>
      <section id="id-1-1">
        <hgroup>
          <h3>줄바꿈</h3>
        </hgroup>
        <p>
          같은 문단에서 줄만 바꾸고 싶다면, HTML <code>{"<br>"}</code> 태그를 사용합니다.
        </p>
        <pre>
          <code data-temp data-language="markdown">
            <span>{"이 문장은 하나의 문단을 형성합니다.<br/>"}</span>
            <span>{"이 문장은 위 문장과 **같은** 문단에 해당합니다."}</span>
          </code>
        </pre>
        <p>
          이 문장은 하나의 문단을 형성합니다.<br/>
          이 문장은 위 문장과 <b>같은</b> 문단에 해당합니다.
        </p>
      </section>
      <section id="id-1-2">
        <hgroup>
          <h3>서식</h3>
        </hgroup>
        <figure>
          <table>
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
                  <p><code>**</code></p>
                </td>
                <td>
                  <p>굵게</p>
                </td>
                <td>
                  <p><code>**굵게**</code></p>
                </td>
                <td>
                  <p><b>굵게</b></p>
                </td>
                <td>
                  <p><code>{"<b>굵게</b>"}</code></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p><code>*</code></p>
                </td>
                <td>
                  <p>기울이게</p>
                </td>
                <td>
                  <p><code>*기울이게*</code></p>
                </td>
                <td>
                  <p><i>기울이게</i></p>
                </td>
                <td>
                  <p><code>{"<i>기울이게</i>"}</code></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p><code>__</code></p>
                </td>
                <td>
                  <p>밑줄</p>
                </td>
                <td>
                  <p><code>__밑줄__</code></p>
                </td>
                <td>
                  <p><u>밑줄</u></p>
                </td>
                <td>
                  <p><code>{"<u>밑줄</u>"}</code></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p><code>~~</code></p>
                </td>
                <td>
                  <p>취소선</p>
                </td>
                <td>
                  <p><code>~~취소선~~</code></p>
                </td>
                <td>
                  <p><s>취소선</s></p>
                </td>
                <td>
                  <p><code>{"<s>취소선</s>"}</code></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p><code>==</code></p>
                </td>
                <td>
                  <p>하이라이트</p>
                </td>
                <td>
                  <p><code>==하이라이트==</code></p>
                </td>
                <td>
                  <p><mark>하이라이트</mark></p>
                </td>
                <td>
                  <p><code>{"<mark>하이라이트</mark>"}</code></p>
                </td>
              </tr>
            </tbody>
          </table>
        </figure>
        <p>
          CommonMark 기울임(<code>_</code>)은 밑줄과 충돌할 수 있으므로,{" "}
          알파마크에서는 사용하지 않습니다.
        </p>
        <details>
          <summary><h5>밑줄 테스트</h5></summary>
          <p>
            <u>밑줄</u>,{" "}
            <u> 띄어쓰기 </u>,{" "}
            a<u>b</u>c,
            a_b,
            a<u> </u>b,
            _뭣도 아님_
          </p>
          <p>
            <code>__밑줄 없어야 함__</code>,{" "}
            <u><code>이건 있어야 함</code></u>
          </p>
        </details>
      </section>
      <section id="id-1-3">
        <hgroup>
          <h3>코드</h3>
        </hgroup>
        <p>
          백틱(<code>`</code>)을 사용하면 코드를 삽입할 수 있습니다.
        </p>
        <pre>
          <code data-temp data-language="markdown">
            <span>{"코드 안에서 백틱을 사용해야 하는 경우, `` `이렇게` `` 바깥 백틱의 개수를 늘리면 됩니다."}</span>
          </code>
        </pre>
        <p>
          코드 안에서 백틱을 사용해야 하는 경우, <code>`이렇게`</code> 바깥 백틱의 개수를 늘리면 됩니다.
        </p>
        <p>
          인라인 코드의 시작 다음(<code>`` `</code>) 또는 끝 이전(<code>` ``</code>)에 백틱이 있으면, 그 사이의 공백은 자동으로 제거됩니다.
        </p>
      </section>
      <section id="id-1-4">
        <hgroup>
          <h3>첨자</h3>
        </hgroup>
        <figure>
          <table>
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
                  <p><code>^^</code></p>
                </td>
                <td>
                  <p>윗첨자</p>
                </td>
                <td>
                  <p><code>e^^i{"&pi;"}^^</code></p>
                </td>
                <td>
                  <p>e<sup>i&pi;</sup></p>
                </td>
                <td>
                  <p><code>e<sup>i&pi;</sup></code></p>
                </td>
              </tr>
              <tr>
                <td>
                  <p><code>,,</code></p>
                </td>
                <td>
                  <p>아랫첨자</p>
                </td>
                <td>
                  <p><code>H,,2,,O</code></p>
                </td>
                <td>
                  <p>H<sub>2</sub>O</p>
                </td>
                <td>
                  <p><code>H<sub>2</sub>O</code></p>
                </td>
              </tr>
            </tbody>
          </table>
        </figure>
      </section>
      <section id="id-1-5">
        <hgroup>
          <h3>고급 서식 지정</h3>
        </hgroup>
        <ul>
          <li>
            <p>
              중요 (<code>{"<strong/>"}</code>)<br/>
              예: <strong>Security Advisory: React2Shell & two new vulnerabilities</strong>
            </p>
          </li>
          <li>
            <p>
              인용 (<code>{"<q/>"}</code>)<br/>
              예: <q cite="https://www.mozilla.org/en-US/about/history/details/">Firefox 1.0 was released in 2004.</q>
            </p>
          </li>
        </ul>
      </section>
    </section>
    <h2 id="id-2">머릿말 (Heading)</h2>
    <p>
      알파마크는 ATX 스타일을 기본으로 사용합니다.
      기타 스타일(Setext, Wikitext 등)의 머릿말은 사용해서는 <b>안 되며</b>,
      컴파일러는 이를 처리해서는 <b>안 됩니다</b>.
    </p>
    <p>
      최대 6개의 <code>#</code> 기호를 문장의 처음에 삽입해 머릿말을 생성할 수 있습니다.
      이때 <code>#</code> 기호의 개수는 문단의 단계를 나타냅니다. (예: <code># 문단 (Heading)</code>)
    </p>
    <p>
      알파마크는 문서 제목을 최상위 머릿말(HTML 태그의 <code>{"<h1/>"}</code>)로
      간주하기 때문에, 문서 내 머릿말은 모두 1단계씩 낮추어 처리됩니다.
      이 규칙에 따르면 6단계 머릿말(<code>######</code>)은 7단계로 파싱되는데,{" "}
      <code>{"<h7/>"}</code> 태그는 존재하지 않으므로 대신 다음과 같이 표현됩니다:
    </p>
    <pre>
      <code data-temp data-language="html">
        {"<div class=\"heading\" id=\"id-1-2-3-4-5-6\">6. 7단계 머릿말</div>"}
      </code>
    </pre>
    <p>
      <small data-pos="t">
        <i>
          물론 커스텀 태그를 추가할 수도 있습니다만,
          애초에 글자 크기가 xs이니 딱히 리소스를 낭비할 필요는 없어 보입니다.
        </i>
      </small>
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"# I. 최상위 문단"}</span>
        <span>{"## 1. 2단계 문단"}</span>
        <span>{"### 1) 3단계 문단"}</span>
        <span>{"#### 4단계 문단"}</span>
        <span>{"##### 5단계 문단"}</span>
        <span>{"###### 6단계 문단"}</span>
      </code>
    </pre>
    <h2>I. 최상위 문단</h2>
    <h3>1. 2단계 문단</h3>
    <h4>1) 3단계 문단</h4>
    <h5>4단계 문단</h5>
    <h6>5단계 문단</h6>
    <p>6단계 문단</p>
    <h3 id="id-2-1">앵커 (Anchor)</h3>
    <p>
      모든 문단은 기본적으로 앵커를 가집니다. URL 마지막에 <code>#anchor-id</code>를 추가하면
      브라우저는 그 문단으로 이동합니다.{" "}
      알파마크는 <a href="https://vitepress.dev/guide/markdown">VitePress</a>의 앵커 문법을 사용합니다.
      임의로 앵커를 지정하려면 <code>{"{#<anchor-name>}"}</code>{" "}
      을 문단에 추가하시면 됩니다.
      (예: <code>### {"{#custom-anchor}"} 문단 제목</code>)
    </p>
    <p>
      앵커를 지정하지 않으려면<sub>(위 예시처럼)</sub> <code>{"{no-anchor}"}</code>를 사용합니다.
    </p>
    <h3 id="id-2-2">접기 문단</h3>
    <p>
      문단 앞에 <code>{">"}</code>를 추가하면 그 문단을 접을 수 있습니다. (예: <code>{">#### [펼치기 • 접기]"}</code>)
    </p>
    <p>
      <code>{"{fold}"}</code>를 추가하면 접은 상태를 기본으로 설정할 수 있습니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"># I. 최상위 문단"}</span>
        <span>{">## 1. 2단계 문단"}</span>
        <span>{">### 1) 3단계 문단"}</span>
        <span>{">#### 4단계 문단"}</span>
        <span>{">##### 5단계 문단"}</span>
        <span>{">###### 6단계 문단"}</span>
      </code>
    </pre>
    <details open>
      <summary><h2>I. 최상위 문단</h2></summary>
    </details>
    <details open>
      <summary><h3>1. 2단계 문단</h3></summary>
    </details>
    <details open>
      <summary><h4>1) 3단계 문단</h4></summary>
    </details>
    <details open>
      <summary><h5>4단계 문단</h5></summary>
    </details>
    <details open>
      <summary><h6>5단계 문단</h6></summary>
    </details>
    <details open>
      <summary><p>6단계 문단</p></summary>
    </details>
    <h3 id="id-2-3">첨부</h3>
    <p>
      첨부는 <i>원칙적으로</i> 문단은 아니지만, 문단과 문법이 완벽하게 일치합니다.
      다만 첨부에서는 앵커나 접기 등은 사용할 수 없습니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"+# 윗첨부"}</span>
        <span>{"-# 아랫첨부"}</span>
      </code>
    </pre>
    <p>
      <small data-pos="t">윗첨부</small>
    </p>
    <p>
      <small data-pos="b">아랫첨부</small>
    </p>
    <h2 id="id-3">목록</h2>
    <p>비정렬 목록은 문장 <b>처음</b>에 <code>-</code>, <code>+</code> 또는 <code>*</code>을 삽입하여 생성합니다.</p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"* 첫째 아이템"}</span>
        <span>{"* 둘째 아이템"}</span>
        <span>{"* 셋째 아이템"}</span>
      </code>
    </pre>
    <ul data-type="*">
      <li>
        <p>첫째 아이템</p>
      </li>
      <li>
        <p>둘째 아이템</p>
      </li>
      <li>
        <p>셋째 아이템</p>
      </li>
    </ul>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"- 첫째 아이템"}</span>
        <span>{"- 둘째 아이템"}</span>
        <span>{"- 셋째 아이템"}</span>
      </code>
    </pre>
    <ul data-type="-">
      <li>
        <p>첫째 아이템</p>
      </li>
      <li>
        <p>둘째 아이템</p>
      </li>
      <li>
        <p>셋째 아이템</p>
      </li>
    </ul>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"+ 첫째 아이템"}</span>
        <span>{"+ 둘째 아이템"}</span>
        <span>{"+ 셋째 아이템"}</span>
      </code>
    </pre>
    <ul data-type="+">
      <li>
        <p>첫째 아이템</p>
      </li>
      <li>
        <p>둘째 아이템</p>
      </li>
      <li>
        <p>셋째 아이템</p>
      </li>
    </ul>
    <p>정렬 목록은 문장 <b>처음</b>에 숫자와 <code>.</code> 또는 <code>)</code>를 삽입하여 생성합니다.</p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"1. 첫째 아이템"}</span>
        <span>{"2. 둘째 아이템"}</span>
        <span>{"3. 셋째 아이템"}</span>
      </code>
    </pre>
    <ol data-type="1">
      <li>
        <p>첫째 아이템</p>
      </li>
      <li>
        <p>둘째 아이템</p>
      </li>
      <li>
        <p>셋째 아이템</p>
      </li>
    </ol>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"I. 첫째 아이템"}</span>
        <span>{"II. 둘째 아이템"}</span>
        <span>{"III. 셋째 아이템"}</span>
      </code>
    </pre>
    <ol data-type="I">
      <li>
        <p>첫째 아이템</p>
      </li>
      <li>
        <p>둘째 아이템</p>
      </li>
      <li>
        <p>셋째 아이템</p>
      </li>
    </ol>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"A. 첫째 아이템"}</span>
        <span>{"B. 둘째 아이템"}</span>
        <span>{"C. 셋째 아이템"}</span>
      </code>
    </pre>
    <ol data-type="A">
      <li>
        <p>첫째 아이템</p>
      </li>
      <li>
        <p>둘째 아이템</p>
      </li>
      <li>
        <p>셋째 아이템</p>
      </li>
    </ol>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"01) 첫째 아이템"}</span>
        <span>{"02) 둘째 아이템"}</span>
        <span>{"03) 셋째 아이템"}</span>
      </code>
    </pre>
    <ol data-type="01">
      <li>
        <p>첫째 아이템</p>
      </li>
      <li>
        <p>둘째 아이템</p>
      </li>
      <li>
        <p>셋째 아이템</p>
      </li>
    </ol>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"i) 첫째 아이템"}</span>
        <span>{"ii) 둘째 아이템"}</span>
        <span>{"iii) 셋째 아이템"}</span>
      </code>
    </pre>
    <ol data-type="i">
      <li>
        <p>첫째 아이템</p>
      </li>
      <li>
        <p>둘째 아이템</p>
      </li>
      <li>
        <p>셋째 아이템</p>
      </li>
    </ol>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"a) 첫째 아이템"}</span>
        <span>{"b) 둘째 아이템"}</span>
        <span>{"c) 셋째 아이템"}</span>
      </code>
    </pre>
    <ol data-type="a">
      <li>
        <p>첫째 아이템</p>
      </li>
      <li>
        <p>둘째 아이템</p>
      </li>
      <li>
        <p>셋째 아이템</p>
      </li>
    </ol>
    <h3 id="id-3-1">설명 목록</h3>
    <dl>
      <dt>
        <p>첫째 아이템</p>
      </dt>
      <dl>
        <p>첫째 설명</p>
      </dl>
      <dt>
        <p>둘째 아이템</p>
      </dt>
      <dl>
        <p>둘째 설명</p>
      </dl>
      <dt>
        <p>셋째 아이템</p>
      </dt>
      <dl>
        <p>셋째 설명</p>
      </dl>
    </dl>
    <h3 id="id-3-2">작업 목록</h3>
    <p>
      작업 목록을 추가하려면, 목록 텍스트 앞에 <code>[ ]</code>를 추가하면 됩니다.
      <code>[ ]</code> 사이에 아무 텍스트를 추가하면 목록을 완료한 것으로 표시합니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"- [ ] 해야하는 작업"}</span>
        <span>{"- [x] 완료된 작업"}</span>
      </code>
    </pre>
    <ul>
      <li>
        <p>
          <input type="checkbox" disabled />
          해야하는 작업
        </p>
      </li>
      <li>
        <p>
          <input type="checkbox" disabled checked />
          완료된 작업
        </p>
      </li>
    </ul>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"1. [ ] 해야하는 작업"}</span>
        <span>{"2. [x] 완료된 작업"}</span>
      </code>
    </pre>
    <ol>
      <li>
        <p>
          <input type="checkbox" disabled />
          해야하는 작업
        </p>
      </li>
      <li>
        <p>
          <input type="checkbox" disabled checked />
          완료된 작업
        </p>
      </li>
    </ol>
    <h3 id="id-3-3">목록 중첩하기</h3>
    <p>
      목록을 들여쓰기 하면 중첩된 목록을 만들 수 있습니다. 중첩될 목록과 중첩할 목록의 종류는 중요하지 않습니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"* 첫째 아이템"}</span>
        <span>{"  1. 정렬된 첫째 하위 아이템"}</span>
        <span>{"  2. 정렬된 둘째 하위 아이템"}</span>
        <span>{"  3. 정렬된 셋째 하위 아이템"}</span>
        <span>{"* 둘째 아이템"}</span>
        <span>{"  * 정렬되지 않은 첫째 하위 아이템"}</span>
        <span>{"  * 정렬되지 않은 둘째 하위 아이템"}</span>
        <span>{"  * 정렬되지 않은 셋째 하위 아이템"}</span>
        <span>{"* 셋째 아이템"}</span>
        <span>{"  * [ ] 첫번째 작업"}</span>
        <span>{"  * [ ] 두번째 작업"}</span>
        <span>{"  * [ ] 세번째 작업"}</span>
      </code>
    </pre>
    <ul>
      <li>
        <p>첫째 아이템</p>
        <ol>
          <li>정렬된 첫째 하위 아이템</li>
          <li>정렬된 둘째 하위 아이템</li>
          <li>정렬된 셋째 하위 아이템</li>
        </ol>
      </li>
      <li>
        <p>둘째 아이템</p>
        <ul>
          <li>정렬되지 않은 첫째 하위 아이템</li>
          <li>정렬되지 않은 둘째 하위 아이템</li>
          <li>정렬되지 않은 셋째 하위 아이템</li>
        </ul>
      </li>
      <li>
        <p>셋째 아이템</p>
        <ul>
          <li>
            <p>
              <input type="checkbox" disabled />
              첫번째 작업
            </p>
          </li>
          <li>
            <p>
              <input type="checkbox" disabled />
              두번째 작업
            </p>
          </li>
          <li>
            <p>
              <input type="checkbox" disabled />
              세번째 작업
            </p>
          </li>
        </ul>
      </li>
    </ul>
    <p>
      들여쓰기를 했지만 목록이 아닌 경우, 상위 항목에 속하는 단락으로 처리됩니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"* 첫째 아이템"}</span>
        <span>{"  그 다음 줄"}</span>
        <span>{"* 둘째 아이템"}</span>
        <span>{"  그 다음 줄"}</span>
      </code>
    </pre>
    <ul>
      <li>
        <p>첫째 아이템<br/>그 다음 줄</p>
      </li>
      <li>
        <p>둘째 아이템<br/>그 다음 줄</p>
      </li>
    </ul>
    <h2 id="id-4">표</h2>
    <table>
      <thead>
      <tr>
        <th><p>Index</p></th>
        <th><p>Property</p></th>
        <th><p>Description</p></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1.</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>2.</td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>
    <h2 id="id-5">코드 블록</h2>
    <p>
      백틱을 3개 이상(<code>```</code>) 쌓으면 코드 블록을 만들 수 있으며, 코드 블록의 시작 줄에는 파일 정보를 추가할 수 있습니다.
      (예: <code>```{"<language>"} {"<file-name>"}</code>)
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"````ts example.ts"}</span>
        <span>{"export function hello() {"}</span>
        <span>{'  const code_block = "코드 블록";'}</span>
        {/** biome-ignore lint/suspicious/noTemplateCurlyInString: example */}
        <span>{"  console.log(`${code_block}도 인라인 코드와 마찬가지로 바깥 백틱의 개수를 늘리면 내부에 백틱을 포함할 수 있습니다.`);"}</span>
        <span>{"}"}</span>
        <span>{"````"}</span>
      </code>
    </pre>
    <pre>
      <code data-temp data-language="ts" data-filename="example.ts">
        <span>{"export function hello() {"}</span>
        <span>{'  const code_block = "코드 블록";'}</span>
        {/** biome-ignore lint/suspicious/noTemplateCurlyInString: example */}
        <span>{"  console.log(`${code_block}도 인라인 코드와 마찬가지로 바깥 백틱의 개수를 늘리면 내부에 백틱을 포함할 수 있습니다.`);"}</span>
        <span>{"}"}</span>
      </code>
    </pre>
    <h3 id="id-5-1">출력 (<code>STDOUT</code>)</h3>
    <p>
      언어를 <code>stdout</code>으로 설정하여 출력 블록을 만들 수 있습니다.
      이때 파일명은 Shell 환경을 의미합니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"```stdout bash"}</span>
        <span>{'$ echo "Hello, world!"'}</span>
        <span>{'Hello, world!'}</span>
        <span>{"```"}</span>
      </code>
    </pre>
    <pre>
      <samp data-temp data-environment="bash">
        <span>{'$ echo "Hello, world!"'}</span>
        <span>{'Hello, world!'}</span>
      </samp>
    </pre>
    <h3 id="id-5-2">수식</h3>
    <p>
      언어를 <code>katex</code>로 설정하면 수식 블록을 만들 수 있습니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"```katex"}</span>
        <span>{"\\int_{a}^{b} f(x) \\,dx = F(b) - F(a)"}</span>
        <span>{"```"}</span>
      </code>
    </pre>
    <h3 id="id-5-3">다이어그램</h3>
    <p>
      언어를 <code>mermaid</code>로 설정하면 다이어그램을 삽입할 수 있습니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"```mermaid"}</span>
        <span>{"graph TD;"}</span>
        <span>{"    A[Start] --> B{Is it working?};"}</span>
        <span>{"    B -- Yes --> C[Continue];"}</span>
        <span>{"    B -- No --> D[Fix it];"}</span>
        <span>{"    D --> B;"}</span>
        <span>{"```"}</span>
      </code>
    </pre>
    <h3 id="id-5-4">파일 트리</h3>
    <p>
      언어를 <code>dir</code>로 설정하고, 목록처럼 나열하면 파일 트리를 삽입할 수 있습니다.
      폴더는 마지막에 <code>/</code>를 입력해야 합니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"```dir"}</span>
        <span>{"* src/"}</span>
        <span>{"  * app/"}</span>
        <span>{"    * favicon.ico"}</span>
        <span>{"    * (main)/"}</span>
        <span>{"      * globals.css"}</span>
        <span>{"      * layout.tsx"}</span>
        <span>{"      * page.tsx"}</span>
        <span>{"    * (blog)/"}</span>
        <span>{"      * blog/"}</span>
        <span>{"        * page.tsx"}</span>
        <span>{"      * globals.css"}</span>
        <span>{"      * layout.tsx"}</span>
        <span>{"  * lib/"}</span>
        <span>{"    * mdx/"}</span>
        <span>{"      * index.ts"}</span>
        <span>{"  * mdx-components.tsx"}</span>
        <span>{"* package.json"}</span>
        <span>{"```"}</span>
      </code>
    </pre>
    <div>

    </div>
    <h3 id="id-5-5">코드 그룹</h3>
    <p>
      여러 개의 코드 블록을 하나로 묶어 코드 그룹을 만들 수 있습니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{":::code-groups"}</span>
        <span>{"```py hello_world.py"}</span>
        <span>{"def hello_world() -> None:"}</span>
        <span>{`    print("Hello, world!")`}</span>
        <span>&#x200B;</span>
        <span>{`if __name__ == "main":`}</span>
        <span>{`    hello_world()`}</span>
        <span>{"```"}</span>
        <span>&#x200B;</span>
        <span>{"```kt HelloWorld.kt"}</span>
        <span>{"fun helloWorld(): None {"}</span>
        <span>{`    println("Hello, world!")`}</span>
        <span>{"}"}</span>
        <span>&#x200B;</span>
        <span>{`fun main() {`}</span>
        <span>{`    helloWorld()`}</span>
        <span>{`}`}</span>
        <span>{"```"}</span>
        <span>&#x200B;</span>
        <span>{"```ts hello-world.ts"}</span>
        <span>{"function helloWorld() {"}</span>
        <span>{`    console.log("Hello, world!");`}</span>
        <span>{"}"}</span>
        <span>{"```"}</span>
        <span>{":::"}</span>
      </code>
    </pre>
    <h2 id="id-6">인용문</h2>
    <p>
      문장 처음에 <code>&gt;</code> 기호를 삽입하여 인용문을 만듭니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"> *Software is like sex; it's better when it's free.*"}</span>
      </code>
    </pre>
    <blockquote>
      <p><i>Software is like sex; it's better when it's free.</i></p>
    </blockquote>
    <p>
      상하단 줄이 모두 인용문이면, 단일 인용문 블록으로 처리됩니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}</span>
        <span>{"  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</span>
        <span>{"> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</span>
      </code>
    </pre>
    <blockquote>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        <br/>
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </blockquote>
    <h3 id="id-6-1">콜아웃</h3>
    <p>
      인용문 블록이 <code>![]</code>로 시작하면 콜아웃 블록으로 처리됩니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"> ![info]"}</span>
        <span>{"> Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</span>
      </code>
    </pre>
    <div className="callout" data-callout="info">
      <div className="title"><p>INFO</p></div>
      <div className="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
    </div>
    <p>
      콜아웃 다음에 <code>+</code> 또는 <code>-</code>를 붙여 콜아웃을 접을 수 있습니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"> ![info]- You can set title too!"}</span>
        <span>{"> Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</span>
      </code>
    </pre>
    <div className="callout" data-callout="info">
      <div className="title"><p>You can set title too!</p></div>
      <div className="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
    </div>
    <h2 id="id-7">하이퍼링크</h2>
    <p>
      링크 텍스트를 대괄호(<code>[ ]</code>)로 감싼 후,
      소괄호(<code>( )</code>)를 사용하여 링크를 삽입할 수 있습니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"[Profile](../)<br/>"}</span>
        <span>{'[URL with symbols](<../My Document>)<br/>'}</span>
        <span>{'[Example Domain](https://example.com/ title="example.com")'}</span>
      </code>
    </pre>
    <p>
      <a href="../~layout">Profile</a><br/>
      <a href="../My Document">URL with symbols</a><br/>
      <a href="https://example.com/" title="example.com">Example Domain</a><br/>
    </p>
    <p>
      여러번 사용하는 링크는 다음과 같이 참조 링크로 작성할 수 있습니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{'[profile]: ../ title="Profile"'}</span>
        <span/>
        <span>{"[profile]<br/>"}</span>
        <span>{"[profile|Profile Site]"}</span>
      </code>
    </pre>
    <p>
      <a href="../~layout" title="Profile">profile</a><br/>
      <a href="../~layout" title="Profile">Profile Site</a><br/>
    </p>
    <p>
      꺽쇠 괄호(<code>&lt; &gt;</code>)를 사용하면 자동으로 하이퍼링크를 생성합니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"<https://example.com/>"}</span>
      </code>
    </pre>
    <p>
      <a href="https://example.com/">Example Domain</a>
    </p>
    <h3 id="id-7-1">특수 스키마</h3>
    <p>
      일부 스키마는 특수하게 처리됩니다.
    </p>
    {/*
    <ul data-type="*">
      <li>
        <p>
          <code>timestamp</code>: 시간<br/>
          예: <code>{"<timestamp:2025-01-01T12:00:00Z>"}</code> &rarr;{" "}
          <Timestamp timestamp="2025-01-01T12:00:00Z"/>
        </p>
      </li>
      <li>
        <p>
          <code>icon</code>: Lucide/Heroicons/Octicons 아이콘<br/>
          예: <code>{"<icon:sparkles>"}</code> &rarr;{" "}
          <Icon icon="sparkles" />
        </p>
      </li>
      <li>
        <p>
          <code>gh</code>: GitHub 유저/레포지토리<br/>
          예: <code>{"<gh:AlphaKR93>"}</code> &rarr; <GitHub username="AlphaKR93"/>
        </p>
      </li>
    </ul>
    */}
    <h3 id="id-7-2">이미지</h3>
    <p>
      하이퍼링크 앞에 느낌표(<code>!</code>)를 추가하여 이미지로 삽입할 수 있습니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{'![Example Image](/_assets/images/placeholder.png title="Example"&width=200&height=200)'}</span>
      </code>
    </pre>
    <h3 id="id-7-3">미주/각주</h3>
    <p>
      <code>[*...]</code>로 각주, <code>[^...]</code>로 미주를 삽입할 수 있습니다.
    </p>
    <pre>
      <code data-temp data-language="markdown">
        <span>{"각주[*1]와 미주[^1]는 같은 식별자를 가질 수 있지만, 서로 다른 리퍼런스를 의미합니다.[^note]"}</span>
        <span>{"각주 또는 미주의 리퍼런스에서 ID 다음에 문자를 입력하면 리퍼런스 텍스트를 다르게 설정할 수 있습니다.[*2 !]"}</span>
        <span>{"대괄호 밖에 기호를 넣으면 인라인에서 생성할 수 있습니다.*[아이디는 순차적으로 자동 생성됩니다.]"}</span>
        <span>&#x200b;</span>
        <span>{"[*1]: 각주는 문단의 맨 마지막에 표시됩니다."}</span>
        <span>{"[*2]: 목록, 인용문처럼 들여쓰기를 하면"}</span>
        <span>{"  줄을 추가할 수 있습니다."}</span>
        <span>{"[^1]: 미주는 문서의 맨 마지막에 표시됩니다."}</span>
        <span>{"[^note]: 숫자 대신 문자를 ID로 사용할 수도 있습니다."}</span>
      </code>
    </pre>
    <p>
      각주<sup><a href="#fn-1">(1)</a></sup>와
      미주<sup><a href="#en-1">[1]</a></sup>는 같은 식별자를 가질 수 있지만,
      서로 다른 리퍼런스를 의미합니다.<sup><a href="#en-note">[note]</a></sup>{" "}
      각주 또는 미주의 리퍼런스에서 ID 다음에 문자를 입력하면 리퍼런스 텍스트를 다르게 설정할 수 있습니다.
      <sup><a href="#fn-2">(!)</a></sup>{" "}
      대괄호 밖에 기호를 넣으면 인라인에서 생성할 수 있습니다.
      <sup><a href="#fn-3">(3)</a></sup>
    </p>
  </>;
}
