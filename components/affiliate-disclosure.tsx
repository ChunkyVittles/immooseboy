import Link from "next/link"

export function AffiliateDisclosure() {
  return (
    <div className="border-b border-border bg-muted/50">
      <div className="container mx-auto px-4 py-2 text-center">
        <p className="text-xs text-muted-foreground">
          If you click on affiliate links on this website and make a purchase, we may earn a commission at no additional cost to you.{" "}
          <Link href="/privacy" className="underline hover:text-accent transition-colors">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}
