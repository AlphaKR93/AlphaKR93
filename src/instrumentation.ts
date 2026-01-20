import { registerOTel } from "@vercel/otel";


// noinspection JSUnusedGlobalSymbols
export function register() {
  registerOTel("profile");
}
