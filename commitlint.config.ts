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

      /**
       * Modified files in the docs/ directory, code commits,
       * or other documentation.
       */
      "docs",

      /**
       * Skip CI. Miscellaneous modification that do not affect
       * the build and deployment process in any way, such as
       * changing the development tool configuration.
       */
      "ciskip",
    ]],

    "trailer-exists": [0, "always", "Signed-off-by:"],
    "signed-off-by": [0, "always", "Signed-off-by:"],

    "scope-enum": [0, "always", [
      /**
       * New feature
       */
      "",

      /**
       * Core, or production configuration (vercel.json)
       */
      "core",

      /**
       * Profile (landing) page, including GitHub Profile
       */
      "profile",

      /**
       * Portfolio (about:me, projects) page
       */
      "portfolio",

      /**
       * Blog (articles) page
       */
      "blog",

      /**
       * MDX parser
       */
      "mdx",

      /**
       * Source code management, for example, linter config
       */
      "source",
    ]],

    "header-max-length": [0, "always", 50],
    "subject-case": [0, "always", "sentence-case"],
    "body-max-line-length": [0, "always", 72],
    "footer-max-line-length": [0, "always", 72],
  }
};

export default config;
