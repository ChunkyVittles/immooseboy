import { Ship as Chip } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Chip className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold font-mono">MOOSE BOY</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The story of a tiny drawing hidden inside millions of phones — and the people who went looking for it.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#story" className="text-muted-foreground hover:text-accent transition-colors">
                  The Story
                </Link>
              </li>
              <li>
                <Link href="#hunt-2022" className="text-muted-foreground hover:text-accent transition-colors">
                  Discovery
                </Link>
              </li>
              <li>
                <Link href="#shop" className="text-muted-foreground hover:text-accent transition-colors">
                  Shop Nokia 5190
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li>
                <Link href="/privacy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-accent transition-colors">
                  Sitemap
                </Link>
              </li>
              <li className="pt-4 border-t border-border">
                © {new Date().getFullYear()} I Am Moose Boy. All rights reserved.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            Nokia and Nokia 5190 are trademarks of Nokia Corporation. Motorola is a trademark of Motorola Trademark
            Holdings, LLC. This website is not affiliated with or endorsed by Nokia, Motorola, or eBay.
          </p>
        </div>
      </div>
    </footer>
  )
}
