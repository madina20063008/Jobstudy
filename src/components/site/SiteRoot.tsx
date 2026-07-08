"use client";

import { JbProvider } from "./JbProvider";
import { Site } from "./Site";
import type { SiteData } from "@/lib/site-data";

export function SiteRoot({ content }: { content?: SiteData | null }) {
  return (
    <JbProvider content={content}>
      <Site />
    </JbProvider>
  );
}
