import type { UserConfig } from "@commitlint/types";


const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-min-length": [0, "always", 3],
    "type-max-length": [0, "always", 6],
    "type-case": [0, "always", "lower-case"],
    "type-enum": [0, "always", [
      /**
       * Work in progress. Used when a task is not complete
       * but needs to be synchronized with the remote.
       *
       * Should NOT be pushed directly to the head branch
       */
      "wip",

      /**
       * Common tasks. Used for maintenance, such as
       * dependency bumps.
       */
      "chore",

      /**
       * Added features.
       */
      "feat",

      /**
       * Fixed issues. Issues should always be mentioned.
       * 
       * Do NOT use for issues that cannot be seen in
       * production, such as build issues.
       */
      "fix",

      /**
       * Improved performance.
       */
      "perf",

      /**
       * Reverted a commit.
       */
      "revert",
    ]],

    "trailer-exists": [0, "always", "Signed-off-by:"],
    "signed-off-by": [0, "always", "Signed-off-by:"],

    "subject-case": [0, "always", "sentence-case"],
  }
};

export default config;
