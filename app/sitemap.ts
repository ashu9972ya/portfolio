import type { MetadataRoute } from "next";
import { featuredProjects } from "@/lib/portfolio";
import { isPreview, siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  if (isPreview) return [];
  return [
    "/",
    "/projects",
    "/contact",
    ...featuredProjects.map((project) => `/projects/${project.id}`),
  ].map((path) => ({ url: new URL(path, siteUrl).href }));
}
