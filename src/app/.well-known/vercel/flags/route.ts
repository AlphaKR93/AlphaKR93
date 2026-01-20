import { createFlagsDiscoveryEndpoint } from "flags/next";
import { vercelFlagDefinitions as definitions } from "../../../../lib/flags/generated/hypertune";

export const GET = createFlagsDiscoveryEndpoint(() => ({ definitions }));
