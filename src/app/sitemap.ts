import type { MetadataRoute } from "next";

const siteUrl = "https://northdigitaltech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ["", "/services", "/packages", "/careers", "/team", "/work", "/contact"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.8,
    })
  );
}
