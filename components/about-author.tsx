export function AboutAuthor() {
  return (
    <section className="container mx-auto px-4 py-12 border-t border-border" aria-labelledby="about-author-heading">
      <div className="max-w-4xl mx-auto">
        <div className="bg-muted/30 rounded-lg p-8 md:p-10">
          <h2 id="about-author-heading" className="text-2xl font-bold mb-4">
            About This Site
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-4">
              This site exists because someone fell down the Moose Boy rabbit hole and couldn't stop digging. We're collectors, tinkerers, and tech history nerds who think the hidden stories inside our devices are worth telling. The Nokia 5190 was already iconic — finding out it had a secret drawing inside made it legendary.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">Why We Made This</h3>
            <p className="text-lg leading-relaxed mb-4">
              The Moose Boy story is scattered across old forum posts, TikTok videos, and Instagram accounts. We wanted one place that had everything — the history, the discovery hunt, the how-to guide, and the context about why silicon graffiti matters. So we built it.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">How We Research</h3>
            <p className="text-lg leading-relaxed mb-4">
              Everything here is sourced from the 2022 discovery community discussions, historical Nokia documentation, semiconductor industry records (including the Semiconductor Chip Protection Act of 1984), and conversations with chip collectors and tech historians. We cross-check everything and update the site when new info comes in.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">Affiliate Transparency</h3>
            <p className="text-lg leading-relaxed">
              We're part of the eBay Partner Network. If you buy something through our links, we get a small commission — doesn't cost you anything extra. It helps keep the site running. We only link to stuff that's actually relevant to the Moose Boy hunt. Our editorial content isn't influenced by affiliate relationships, period.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">Editorial Standards</h3>
            <p className="text-lg leading-relaxed">
              We check everything against multiple sources before publishing. When something is confirmed fact, we say so. When it's community speculation, we say that too. If you spot something wrong or have new info about Moose Boy, we'd love to hear about it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
