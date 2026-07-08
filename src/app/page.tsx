import { SiteRoot } from "@/components/site/SiteRoot";
import { getSiteData } from "@/lib/site-data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteData();
  return <SiteRoot content={content} />;
}
