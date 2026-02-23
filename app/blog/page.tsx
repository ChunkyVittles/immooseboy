import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | I\'m Moose Boy',
  description:
    'Stories about silicon graffiti, vintage Nokia phones, chip art history, and the weird corners of tech nobody talks about.',
  alternates: {
    canonical: 'https://immooseboy.com/blog',
  },
  openGraph: {
    title: 'Blog | I\'m Moose Boy',
    description:
      'Stories about silicon graffiti, vintage Nokia phones, chip art history, and the weird corners of tech nobody talks about.',
    url: 'https://immooseboy.com/blog',
    siteName: 'I Am Moose Boy',
    type: 'website',
  },
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'I\'m Moose Boy Blog',
  description:
    'Stories about silicon graffiti, vintage Nokia phones, chip art history, and the weird corners of tech nobody talks about.',
  url: 'https://immooseboy.com/blog',
  isPartOf: {
    '@type': 'WebSite',
    name: 'I Am Moose Boy',
    url: 'https://immooseboy.com',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold font-mono mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Stories about silicon graffiti, vintage phones, chip art, and the weird corners of tech nobody talks about.
        </p>

        <div className="space-y-10">
          {posts.map(({ slug, meta }) => (
            <article key={slug} className="group">
              <Link href={`/blog/${slug}`} className="block">
                <h2 className="text-xl md:text-2xl font-bold group-hover:text-accent transition-colors mb-2">
                  {meta.title}
                </h2>
                <time
                  dateTime={meta.date}
                  className="text-sm text-muted-foreground block mb-2"
                >
                  {new Date(meta.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <p className="text-muted-foreground leading-relaxed">
                  {meta.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
