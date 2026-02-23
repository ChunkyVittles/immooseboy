import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const blogEntries: MetadataRoute.Sitemap = posts.map(({ slug, meta }) => ({
    url: `https://immooseboy.com/blog/${slug}`,
    lastModified: new Date(meta.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [
    {
      url: "https://immooseboy.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://immooseboy.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
    {
      url: "https://immooseboy.com/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
