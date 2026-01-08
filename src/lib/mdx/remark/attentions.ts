import type { Plugin, Processor } from "unified";
import type { TokenType, Event, Token, Construct, Resolver, Tokenizer } from "micromark-util-types";

import { splice } from "micromark-util-chunked";
import { classifyCharacter } from "micromark-util-classify-character";
import { resolveAll } from "micromark-util-resolve-all";
import { add } from "unist-util-add";


const construct = (name: string, code: number): Construct => ({
  name,
  resolveAll: buildResolver(name),
  tokenize: buildTokenizer(name, code)
});

const remarkAttentions: Plugin = function(this: Processor) {
  const highlight = construct("highlight", 61);
  const underline = construct("underline", 95);
  const superscript = construct("superscript", 94);
  const subscript = construct("subscript", 44);

  const data = this.data();
  add(data, "micromarkExtensions", {
    text: {
      61: highlight,
      95: underline,
      94: superscript,
      44: subscript,
    },
    insideSpan: {
      null: [highlight, underline, superscript, subscript],
    },
    attentionMarkers: {
      null: [61, 95, 94, 44],
    },
  });
  add(data, "fromMarkdownExtensions", {
    enter: {
      highlight(this: any, token) {
        this.enter({ type: 'highlight', children: [], data: { hName: "mark" } }, token);
      },
      underline(this: any, token) {
        this.enter({ type: 'underline', children: [], data: { hName: "u" } }, token);
      },
      superscript(this: any, token) {
        this.enter({ type: 'superscript', children: [], data: { hName: "sup" } }, token);
      },
      subscript(this: any, token) {
        this.enter({ type: 'subscript', children: [], data: { hName: "sub" } }, token);
      },
    },
    exit: {
      highlight(this, token) {
        this.exit(token);
      },
      underline(this, token) {
        this.exit(token);
      },
      superscript(this, token) {
        this.exit(token);
      },
      subscript(this, token) {
        this.exit(token);
      },
    }
  });
};

function buildResolver(type: string): Resolver {
  const control = <TokenType>`${type}SequenceControl`;
  const sequence = <TokenType>`${type}Sequence`;
  const content = <TokenType>`${type}Text`;

  /**
   * @param events {import("micromark-util-types").Event[]}
   * @param context {import("micromark-util-types").TokenizeContext}
   * @return {import("micromark-util-types").Event[]}
   */
  return function(events, context) {
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

        const attention: Token = {
          type: <TokenType>type,
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
          ['enter', attention, context],
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
          ['exit', attention, context],
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

function buildTokenizer(type: string, symbol: number): Tokenizer {
  const control = <TokenType>`${type}SequenceControl`;

  /**
   * @type {Tokenizer}
   *
   * @this {import("micromark-util-types").TokenizeContext}
   * @param effects {import("micromark-util-types").Effects}
   * @param ok {import("micromark-util-types").State}
   * @param nok {import("micromark-util-types").State}
   *
   * @return {import("micromark-util-types").State}
   */
  return function(this, effects, ok, nok) {
    const prev = this.previous;
    const events = this.events;

    let size = 0;

    /**
     * @type {import("micromark-util-types").State}
     *
     * @param code {import("micromark-util-types").Code}
     * @return {import("micromark-util-types").State}
     */
    return function(code) {
      if (prev === symbol && events[events.length - 1][1].type !== "characterEscape") return nok(code);
      effects.enter(control);

      return next(code);
    };

    function next(code: number | null) {
      if (code === symbol) {
        if (size > 1) return nok(code);
        effects.consume(code);
        size++;
        return next;
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

export default remarkAttentions;
