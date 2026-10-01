import type { MetadataRoute } from "next";
import { effectiveDateIso, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(effectiveDateIso);

  return [
    { url: siteUrl, lastModified },
    { url: `${siteUrl}/privacy`, lastModified: new Date("2026-10-01") },
    { url: `${siteUrl}/terms`, lastModified },
  ];
}
