import type { Identify } from "flags";

import { dedupe, flag } from "flags/next";
import { createClient } from "@vercel/edge-config";
import { createHypertuneAdapter } from "@flags-sdk/hypertune";
import { VercelEdgeConfigInitDataProvider } from "hypertune";

import {
  createSource,
  flagFallbacks,
  vercelFlagDefinitions as flagDefinitions,
  type Context,
  type FlagValues
} from "./generated/hypertune";

const identify: Identify<Context> = dedupe(async () => ({ environment: process.env.NODE_ENV }));
const initDataProvider = new VercelEdgeConfigInitDataProvider({
  edgeConfigClient: createClient(process.env.EXPERIMENTATION_CONFIG),
  itemKey: process.env.EXPERIMENTATION_CONFIG_ITEM_KEY!
});

const adapter = createHypertuneAdapter<FlagValues, Context>({
  createSource,
  flagFallbacks,
  flagDefinitions,
  identify,
  createSourceOptions: { initDataProvider }
});

const flags = {
  showDocs: flag(adapter.declarations.showDocs),
  enableLinkedIn: flag(adapter.declarations.enableLinkedIn),
};

export default flags;
