import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 584,
  site: "testing12345",
  domains: ["testing12345.deco.site"],
});