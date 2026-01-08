import type { Plugin, Processor } from "unified";
import type { Construct, Event, Resolver, Token, Tokenizer, TokenType } from "micromark-util-types";

import { add } from "unist-util-add";
import { splice } from "micromark-util-chunked";
import { classifyCharacter } from "micromark-util-classify-character";
import { resolveAll as micromarkResolveAll } from "micromark-util-resolve-all";

import { style } from "@/components/mdx";


const remarkSpoiler: Plugin = function(this: Processor) {
  const tokenizer: Construct = {
    name: "spoiler",
    resolveAll,
    tokenize,
  }

  const data = this.data();
  add(data, "micromarkExtensions", {
    text: {
      124: tokenizer,
    },
    insideSpan: {
      null: [tokenizer],
    },
    attentionMarkers: {
      null: [124],
    },
  });
  add(data, "fromMarkdownExtensions", {
    enter: {
      spoiler(this: any, token) {
        this.enter({
          type: "spoiler",
          children: [],
          data: {
            hName: "span",
            hProperties: {
              className: style.spoiler,
            }
          },
        }, token);
      }
    },
    exit: {
      spoiler(this, token) {
        this.exit(token);
      }
    }
  })
}

const resolveAll: Resolver = function(events, context) {
  let index = -1;

  while (++index < events.length) {
    if (events[index][0] !== "enter" || !events[index][1]._close) continue;

    let open = index;
    while (open--) {
      if (events[open][0] !== "exit" || !events[open][1]._open || events[index][1].end.offset - events[index][1].start.offset !== events[open][1].end.offset - events[open][1].start.offset) {
        continue;
      }

      events[index][1].type = <TokenType>"spoilerSequence";
      events[open][1].type = <TokenType>"spoilerSequence";

      const spoiler: Token = {
        type: <TokenType>"spoiler",
        start: Object.assign({}, events[open][1].start),
        end: Object.assign({}, events[index][1].end),
      }

      const text: Token = {
        type: <TokenType>"spoilerText",
        start: Object.assign({}, events[open][1].end),
        end: Object.assign({}, events[index][1].start),
      }

      // Opening.
      const nextEvents: Event[] = [
        ['enter', spoiler, context],
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
          micromarkResolveAll(insideSpan, events.slice(open + 1, index), context),
        )
      }

      // Closing.
      splice(nextEvents, nextEvents.length, 0, [
        ['exit', text, context],
        ['enter', events[index][1], context],
        ['exit', events[index][1], context],
        ['exit', spoiler, context],
      ])

      splice(events, open - 1, index - open + 3, nextEvents)

      index = open + nextEvents.length - 2
      break
    }
  }

  return events;
}

const tokenize: Tokenizer = function(this, effects, ok, nok) {
  const prev = this.previous;
  const events = this.events;

  return function(code) {
    if (prev === 124 && events[events.length - 1][1].type !== "characterEscape") return nok(code);
    effects.enter(<TokenType>"spoiler");
    effects.consume(code);

    return next;
  }

  function next(code: number | null) {
    if (code === 124) return nok(code);

    const token = effects.exit(<TokenType>"spoiler");
    const before = classifyCharacter(prev);
    const after = classifyCharacter(code);
    token._open = !after || (after === 2 && Boolean(before));
    token._close = !before || (before === 2 && Boolean(after));
    return ok(code);
  }
}

export default remarkSpoiler;
