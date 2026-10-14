import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const routes = [
    "",
    "/research",
    "/research/tara",
    "/projects",
    "/projects/academicgps",
    "/projects/market-intelligence",
    "/projects/portfoliai",
    "/projects/techsphere",
    "/about",
  ];
  return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() }));
}
