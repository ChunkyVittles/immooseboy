import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPostMeta {
  title: string
  slug: string
  date: string
  description: string
  tags: string[]
}

export interface BlogPostEntry {
  slug: string
  meta: BlogPostMeta
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function getAllPosts(): BlogPostEntry[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'))

  const posts = files.map(filename => {
    const slug = filename.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8')
    const { data } = matter(raw)

    return {
      slug,
      meta: {
        title: data.title,
        slug,
        date: data.date,
        description: data.description,
        tags: data.tags ?? [],
      },
    }
  })

  return posts.sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1))
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace(/\.mdx$/, ''))
}

export function getPostSource(slug: string): string {
  return fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), 'utf-8')
}
