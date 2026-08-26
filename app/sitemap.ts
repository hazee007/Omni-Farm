import type { MetadataRoute } from "next";
import { siteConfig } from "@/utils/site";

const routes = [
  "",
  "/about",
  "/products",
  "/technology",
  "/gallery",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route ? "monthly" : "weekly",
    priority: route ? 0.8 : 1,
  }));
}
