import { Resolver, State, Token, Tokenizer, TokenType } from "micromark-util-types";
import type { Plugin, Processor } from "unified";

import { mathFromMarkdown, mathToMarkdown } from "mdast-util-math";
import { add } from "unist-util-add";

const remarkMathMinimal: Plugin = function(this: Processor) {
  const data = this.data();

  add(data, "micromarkExtensions", {
    text: {
      36: {
        name: "mathText",
        tokenize,
        resolve,
        previous(code) {
          // If there is a previous code, there will always be a tail.
          return (
            code !== 36 ||
            this.events[this.events.length - 1][1].type === "characterEscape"
          )
        }
      }
    }
  });
  add(data, "fromMarkdownExtensions", mathFromMarkdown());
  add(data, "toMarkdownExtensions", mathToMarkdown());
};

const tokenize: Tokenizer = function(this, effects, ok, nok) {
  const self = this
  let sizeOpen = 0;
  let size: number;
  let token: Token;

  return function(code) {
    effects.enter(<TokenType>"mathText");
    effects.enter(<TokenType>"mathTextSequence");

    return sequenceOpen(code);
  }

  function sequenceOpen(code: number | null): State | undefined {
    if (code === 36) {
      //if (size > 1) return nok(code);
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen;
    }

    if (sizeOpen < 2) return nok(code);
    effects.exit(<TokenType>"mathTextSequence");
    return between(code);
  }

  function between(code: number | null): State | undefined {
    if (!code) return nok(code); // EOF

    if (code === 36) {
      token = effects.enter(<TokenType>"mathTextSequence");
      size = 0;
      return sequenceClose(code);
    }

    // Tabs don’t work, and virtual spaces don’t make sense.
    if (code === 32) {
      effects.enter(<TokenType>"space");
      effects.consume(code);
      effects.exit(<TokenType>"space");
      return between;
    }

    if (code < -2) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return between
    }

    // Data.
    effects.enter(<TokenType>"mathTextData");
    return data(code);
  }

  function data(code: number | null): State | undefined {
    if (!code || code === 32 || code === 36 || code < -2) {
      effects.exit(<TokenType>"mathTextData");
      return between(code);
    }

    effects.consume(code);
    return data;
  }

  function sequenceClose(code: number | null): State | undefined {
    // More.
    if (code === 36) {
      effects.consume(code);
      size++;
      return sequenceClose;
    }

    // Done!
    if (size === sizeOpen) {
      effects.exit(<TokenType>"mathTextSequence");
      effects.exit(<TokenType>"mathText");
      return ok(code);
    }

    // More or less accents: mark as data.
    token.type = <TokenType>"mathTextData";
    return data(code)
  }
}

const resolve: Resolver = function (events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index: number;
  let enter: number | undefined = undefined;

  // If we start and end with an EOL or a space.
  if (
    (events[headEnterIndex][1].type === "lineEnding" ||
      events[headEnterIndex][1].type === 'space') &&
    (events[tailExitIndex][1].type === "lineEnding" ||
      events[tailExitIndex][1].type === 'space')
  ) {
    index = headEnterIndex

    // And we have data.
    while (++index < tailExitIndex) {
      if (events[index][1].type === <TokenType>'mathTextData') {
        // Then we have padding.
        events[tailExitIndex][1].type = <TokenType>'mathTextPadding'
        events[headEnterIndex][1].type = <TokenType>'mathTextPadding'
        headEnterIndex += 2
        tailExitIndex -= 2
        break
      }
    }
  }

  // Merge adjacent spaces and data.
  index = headEnterIndex - 1
  tailExitIndex++

  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (
        index !== tailExitIndex &&
        events[index][1].type !== "lineEnding"
      ) {
        enter = index
      }
    } else if (
      index === tailExitIndex ||
      events[index][1].type === "lineEnding"
    ) {
      events[enter][1].type = <TokenType>'mathTextData'

      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end
        events.splice(enter + 2, index - enter - 2)
        tailExitIndex -= index - enter - 2
        index = enter + 2
      }

      enter = undefined
    }
  }

  return events
}

export default remarkMathMinimal;
