import type {Plugin, Processor} from "unified";
import type {
  TokenType,
  State,
  TokenizeContext,
  Effects,
  Event,
  Token, Code
} from "micromark-util-types";
import {splice} from "micromark-util-chunked";
import {resolveAll} from "micromark-util-resolve-all";
import {add} from "unist-util-add";
import { classifyCharacter } from 'micromark-util-classify-character';

const remarkScripts: Plugin = function(this: Processor) {
  const data = this.data();
  add(data, "micromarkExtensions", {
    text: {
      95: {
        name: "underline",
        tokenize: buildTokenizer("underline", 95),
        resolveAll: buildResolver("underline")
      },
      61: {
        name: "highlight",
        tokenize: buildTokenizer("highlight", 61),
        resolveAll: buildResolver("highlight")
      },
      94: {
        name: "superscript",
        tokenize: buildTokenizer("superscript", 94),
        resolveAll: buildResolver("superscript")
      },
      44: {
        name: "subscript",
        tokenize: buildTokenizer("subscript", 44),
        resolveAll: buildResolver("subscript")
      }
    },
  });
  add(data, "fromMarkdownExtensions", {
    enter: {
      underline(this: any, token: any) {
        this.enter({ type: 'underline', children: [] }, token);
      },
      highlight(this: any, token: any) {
        this.enter({ type: 'highlight', children: [] }, token);
      },
      superscript(this: any, token: any) {
        this.enter({ type: 'superscript', children: [] }, token);
      },
      subscript(this: any, token: any) {
        this.enter({ type: 'subscript', children: [] }, token);
      },
    },
    exit: {
      underline(this: any, token: any) {
        this.exit(token);
      },
      highlight(this: any, token: any) {
        this.exit(token);
      },
      superscript(this: any, token: any) {
        this.exit(token);
      },
      subscript(this: any, token: any) {
        this.exit(token);
      },
    }
  });
};

function buildResolver(name: string) {
  const control = <TokenType>`${name}SequenceControl`;
  const sequence = <TokenType>`${name}Sequence`;
  const content = <TokenType>`${name}Text`;

  /**
   * Take events and resolve highlight.
   *
   * @type {Resolver}
   */
  return function(events: Event[], context: TokenizeContext) {
    let index = -1;
    // Walk through all events.
    while (++index < events.length) {
      if (events[index][0] !== "enter" || events[index][1].type !== control || !events[index][1]._close) continue;

      let open = index;
      while (open--) {
        if (events[open][0] !== "exit" || events[open][1].type !== control || !events[open][1]._open || events[index][1].end.offset - events[index][1].start.offset !== events[open][1].end.offset - events[open][1].start.offset) {
          continue;
        }

        events[index][1].type = sequence
        events[open][1].type = sequence

        const highlight: Token = {
          type: <TokenType>name,
          start: Object.assign({}, events[open][1].start),
          end: Object.assign({}, events[index][1].end),
        }

        const text: Token = {
          type: content,
          start: Object.assign({}, events[open][1].end),
          end: Object.assign({}, events[index][1].start),
        }

        // Opening.
        const nextEvents: Event[] = [
          ['enter', highlight, context],
          ['enter', events[open][1], context],
          ['exit', events[open][1], context],
          ['enter', text, context],
        ]

        const insideSpan = context.parser.constructs.insideSpan.null

        if (insideSpan) {
          // Between.
          splice(
              nextEvents,
              nextEvents.length,
              0,
              resolveAll(insideSpan, events.slice(open + 1, index), context),
          )
        }

        // Closing.
        splice(nextEvents, nextEvents.length, 0, [
          ['exit', text, context],
          ['enter', events[index][1], context],
          ['exit', events[index][1], context],
          ['exit', highlight, context],
        ])

        splice(events, open - 1, index - open + 3, nextEvents)

        index = open + nextEvents.length - 2
        break
      }
    }

    index = -1;

    while (++index < events.length) {
      if (events[index][1].type === control) {
        events[index][1].type = "data"
      }
    }

    return events
  }
}

function buildTokenizer(name: string, codePoint: number) {
  const control = <TokenType>`${name}SequenceControl`;

  /**
   * @this {import("micromark-util-types").TokenizeContext}
   * @type {import("micromark-util-types").Tokenizer}
   */
  return function(this: TokenizeContext, effects: Effects, ok: State, nok: State): State {
    const prev = this.previous;
    const events = this.events;

    let size = 0;

    return function(code): State | undefined {
      if (prev === codePoint && events[events.length - 1][1].type !== "characterEscape") return nok(code);
      effects.enter(control);

      return consume(code);
    };

    function consume(code: Code): State | undefined {
      if (code === codePoint) {
        if (size > 1) return nok(code);
        effects.consume(code);
        size++;
        return consume;
      }

      if (size < 2) return nok(code);
      const token = effects.exit(control);
      const before = classifyCharacter(prev);
      const after = classifyCharacter(code);
      token._open = !after || (after === 2 && Boolean(before));
      token._close = !before || (before === 2 && Boolean(after));
      return ok(code);
    }
  }
}

export default remarkScripts;
