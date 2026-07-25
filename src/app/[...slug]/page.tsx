import { SiteRoot } from "@/components/site/SiteRoot";
import { getSiteData } from "@/lib/site-data";

export const dynamic = "force-dynamic";

// Catch-all so clean paths (/japan, /germany, /about…) render the single-page app;
// the client reads window.location.pathname to pick the page.
export default async function Page() {
  const content = await getSiteData();
  return <SiteRoot content={content} />;
}
