import {Abbr, AbbrRef, Badge} from "@/components/mdx";

export default function() {
  return <>
    <h2>인라인 구문</h2>
    <ul>
      <li>
        <p>
          <b>정의:</b> <code>&lt;Abbr&gt;</code><br/>
          e.g.) <Abbr title="Lorem ipsum">Lipsum</Abbr>
        </p>
        <ul>
          <li>
            <p>
              <b>참조:</b> <code>&lt;AbbrRef&gt;</code><br/>
              e.g.) <AbbrRef>Lipsum</AbbrRef>
            </p>
          </li>
        </ul>
      </li>
      <li>
        <p>
          <b>배지:</b> <code>&lt;Badge&gt;</code><br/>
          e.g.) This is a <Badge color="orange" icon="flask-conical" xs>Experimental</Badge> feature.
        </p>
        <ul>
          <li>
            <p>
              <Badge color="red">Debug</Badge>{" "}
              <Badge color="red" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="red" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="red" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="orange">Debug</Badge>{" "}
              <Badge color="orange" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="orange" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="orange" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="amber">Debug</Badge>{" "}
              <Badge color="amber" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="amber" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="amber" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="yellow">Debug</Badge>{" "}
              <Badge color="yellow" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="yellow" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="yellow" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="lime">Debug</Badge>{" "}
              <Badge color="lime" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="lime" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="lime" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="green">Debug</Badge>{" "}
              <Badge color="green" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="green" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="green" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="emerald">Debug</Badge>{" "}
              <Badge color="emerald" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="emerald" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="emerald" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="teal">Debug</Badge>{" "}
              <Badge color="teal" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="teal" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="teal" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="cyan">Debug</Badge>{" "}
              <Badge color="cyan" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="cyan" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="cyan" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="sky">Debug</Badge>{" "}
              <Badge color="sky" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="sky" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="sky" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="blue">Debug</Badge>{" "}
              <Badge color="blue" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="blue" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="blue" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="indigo">Debug</Badge>{" "}
              <Badge color="indigo" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="indigo" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="indigo" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="violet">Debug</Badge>{" "}
              <Badge color="violet" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="violet" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="violet" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="purple">Debug</Badge>{" "}
              <Badge color="purple" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="purple" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="purple" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="fuchsia">Debug</Badge>{" "}
              <Badge color="fuchsia" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="fuchsia" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="fuchsia" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="pink">Debug</Badge>{" "}
              <Badge color="pink" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="pink" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="pink" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="rose">Debug</Badge>{" "}
              <Badge color="rose" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="rose" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="rose" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="slate">Debug</Badge>{" "}
              <Badge color="slate" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="slate" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="slate" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="gray">Debug</Badge>{" "}
              <Badge color="gray" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="gray" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="gray" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="zinc">Debug</Badge>{" "}
              <Badge color="zinc" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="zinc" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="zinc" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="neutral">Debug</Badge>{" "}
              <Badge color="neutral" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="neutral" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="neutral" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
          <li>
            <p>
              <Badge color="slate">Debug</Badge>{" "}
              <Badge color="slate" icon="bug" pill>Debug</Badge>{" "}
              <Badge color="slate" icon="bug" stroke>Debug</Badge>{" "}
              <Badge color="slate" pill stroke>Debug</Badge>{" "}
            </p>
          </li>
        </ul>
      </li>
    </ul>
    <h2>표</h2>
    <h3>타일</h3>
    <table data-type="tiles">
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p>Lorem ipsum dolor sit amet,</p></td>
          <td><p>consectetur adipiscing elit.</p></td>
        </tr>
        <tr>
          <td><p>Lorem ipsum dolor sit amet,</p></td>
          <td><p>consectetur adipiscing elit.</p></td>
        </tr>
        <tr>
          <td><p>Lorem ipsum dolor sit amet,</p></td>
          <td><p>consectetur adipiscing elit.</p></td>
        </tr>
        <tr>
          <td><p>Lorem ipsum dolor sit amet,</p></td>
          <td><p>consectetur adipiscing elit.</p></td>
        </tr>
      </tbody>
    </table>
    <h3>카드</h3>
    <table data-type="cards">
      <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><p>Lorem ipsum dolor sit amet,</p></td>
        <td><p>consectetur adipiscing elit.</p></td>
      </tr>
      <tr>
        <td><p>Lorem ipsum dolor sit amet,</p></td>
        <td><p>consectetur adipiscing elit.</p></td>
      </tr>
      <tr>
        <td><p>Lorem ipsum dolor sit amet,</p></td>
        <td><p>consectetur adipiscing elit.</p></td>
      </tr>
      <tr>
        <td><p>Lorem ipsum dolor sit amet,</p></td>
        <td><p>consectetur adipiscing elit.</p></td>
      </tr>
      </tbody>
    </table>
    <h2>탭</h2>
    <h2>단계</h2>
  </>;
}
