import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | I'm Moose Boy",
  description:
    "How immooseboy.com handles your data, affiliate links, and cookies. The short version: we collect basic analytics and participate in the eBay Partner Network.",
  alternates: {
    canonical: "https://immooseboy.com/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-accent transition-colors mb-8 inline-block"
      >
        &larr; Back to Home
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold font-mono mb-3">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: February 23, 2026</p>

      <div className="space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-xl font-bold font-mono mb-3">What We Collect</h2>
          <p className="mb-3">
            We run a lightweight analytics script that tracks basic stuff — which pages get visited, how far people scroll, and what links get clicked. That's it. No names, no emails, no IP addresses, no personally identifiable information.
          </p>
          <p>
            We don't use Google Analytics or any third-party analytics service. The data stays on our own server and helps us figure out which content people actually care about.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold font-mono mb-3">Affiliate Links &amp; the eBay Partner Network</h2>
          <p className="mb-3">
            This site contains affiliate links to eBay. If you click on affiliate links on this website and make a purchase, we may earn a commission at no additional cost to you. The price you pay is exactly the same whether you use our link or find the listing yourself.
          </p>
          <p>
            Our eBay links include tracking parameters that tell eBay the click came from us. That's how they know to credit us if you buy something.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold font-mono mb-3">Cookies</h2>
          <p className="mb-3">
            This site doesn't set cookies on your browser. But when you click an affiliate link and land on eBay, they may set a tracking cookie so they can attribute the sale back to us.
          </p>
          <p className="mb-3">
            Here's how eBay's attribution window works:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li><strong>Buy It Now purchases:</strong> 24 hours from click</li>
            <li><strong>Auction bids:</strong> 10 days from click</li>
          </ul>
          <p>
            Those cookies are set by eBay on eBay's domain — we can't see them and we can't control them. Our site is hosted on Cloudflare Pages, which may set its own functional cookies for security stuff like bot detection. Those aren't used for advertising.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold font-mono mb-3">Opting Out</h2>
          <p className="mb-3">
            You can block or clear cookies in your browser settings any time. Every major browser lets you do this — usually under Settings &gt; Privacy or Security.
          </p>
          <p>
            Blocking cookies won't break anything on this site. You just won't be tracked for affiliate attribution, which doesn't affect you either way. Same products, same prices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold font-mono mb-3">Third-Party Sites</h2>
          <p>
            When you click a link that takes you off immooseboy.com — mostly to eBay — you're on their turf. Their privacy policy applies, not ours. We don't have any control over what they collect.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold font-mono mb-3">Changes</h2>
          <p>
            If we update this policy, the new version goes up here with a fresh date. We won't quietly make it worse.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold font-mono mb-3">Questions?</h2>
          <p>
            If something here doesn't make sense or you want to know more, reach out at{" "}
            <a
              href="mailto:privacy@immooseboy.com"
              className="text-accent underline hover:text-accent/80 transition-colors"
            >
              privacy@immooseboy.com
            </a>
          </p>
        </section>
      </div>
    </main>
  )
}
