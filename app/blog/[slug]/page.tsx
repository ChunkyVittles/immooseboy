import type { Metadata } from 'next'
import Link from 'next/link'
import { compileMDX } from 'next-mdx-remote/rsc'
import { getAllPostSlugs, getPostSource } from '@/lib/blog'
import { AffiliateDisclosure } from '@/components/affiliate-disclosure'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPostSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const source = getPostSource(slug)

  const { frontmatter } = await compileMDX<{
    title: string
    description: string
    date: string
    tags: string[]
  }>({
    source,
    options: { parseFrontmatter: true },
  })

  return {
    title: `${frontmatter.title} | I'm Moose Boy`,
    description: frontmatter.description,
    alternates: {
      canonical: `https://immooseboy.com/blog/${slug}`,
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: `https://immooseboy.com/blog/${slug}`,
      type: 'article',
      publishedTime: frontmatter.date,
      siteName: 'I Am Moose Boy',
      tags: frontmatter.tags,
    },
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const source = getPostSource(slug)

  const { content, frontmatter } = await compileMDX<{
    title: string
    description: string
    date: string
    tags: string[]
    hasAffiliateLinks?: boolean
  }>({
    source,
    options: { parseFrontmatter: true },
  })

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    author: {
      '@type': 'Organization',
      name: 'I Am Moose Boy',
      url: 'https://immooseboy.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'I Am Moose Boy',
      logo: {
        '@type': 'ImageObject',
        url: 'https://immooseboy.com/images/mooseboy-modified.webp',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://immooseboy.com/blog/${slug}`,
    },
    keywords: frontmatter.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {frontmatter.hasAffiliateLinks && <AffiliateDisclosure />}
      <article className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-accent transition-colors mb-8 inline-block"
        >
          &larr; Back to Blog
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold font-mono mb-3 leading-tight">
            {frontmatter.title}
          </h1>
          <time
            dateTime={frontmatter.date}
            className="text-sm text-muted-foreground"
          >
            {new Date(frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:font-mono [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:text-base [&>p]:leading-relaxed [&>p]:mb-5 [&>p]:text-foreground [&>ul]:mb-5 [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:mb-5 [&>ol]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:text-foreground [&>blockquote]:border-l-4 [&>blockquote]:border-accent [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-muted-foreground [&_a]:text-accent [&_a]:underline [&_a:hover]:text-accent/80 [&>hr]:my-8 [&>hr]:border-border">
          {content}
        </div>

        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2 mb-6">
            {frontmatter.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            &larr; Back to Blog
          </Link>
        </footer>
      </article>
    </>
  )
}
