import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const ebayProducts = [
  {
    id: 1,
    title: "Nokia 5190 Original Vintage Cell Phone",
    description: "Authentic Nokia 5190 from the late 1990s in working condition",
    features: ["Original hardware", "Tested & working", "Collectible condition"],
    link: "https://www.ebay.com/sch/i.html?_nkw=Nokia+5190+vintage+working+condition+1998+1999&_sacat=0&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&customid=&toolid=10001&mkevt=1",
  },
  {
    id: 2,
    title: "Nokia 5190 Classic Mobile Phone - Collector's Item",
    description: "Vintage Nokia 5190 with original packaging and accessories",
    features: ["Complete set", "Excellent condition", "Original box"],
    link: "https://www.ebay.com/sch/i.html?_nkw=Nokia+5190+original+box+packaging+accessories+complete&_sacat=0&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&customid=&toolid=10001&mkevt=1",
  },
  {
    id: 3,
    title: "Nokia 5190 Unlocked Vintage Cell Phone",
    description: "Fully functional Nokia 5190, perfect for collectors",
    features: ["Unlocked", "Fully functional", "Authentic 90s tech"],
    link: "https://www.ebay.com/sch/i.html?_nkw=Nokia+5190+unlocked+functional+vintage&_sacat=0&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&customid=&toolid=10001&mkevt=1",
  },
]

export function ProductSection() {
  return (
    <section id="shop" className="bg-muted/30 py-16 md:py-24" aria-labelledby="shop-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* eBay Partner Network disclosure */}
          <aside
            className="bg-muted/50 border border-border rounded-lg p-4 mb-8 max-w-4xl mx-auto"
            aria-label="Affiliate disclosure notice"
          >
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              <strong className="text-foreground">eBay Affiliate Notice:</strong> We are a participant in the eBay
              Partner Network. If you click on these links and make a purchase, we may earn a commission at no
              additional cost to you.
            </p>
          </aside>

          <div className="text-center mb-12">
            <h2 id="shop-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Find Authentic Nokia 5190 Phones
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Own a piece of phone history — and maybe find a tiny moose-antlered dude hiding inside
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Nokia 5190 Phone</CardTitle>
                <CardDescription className="leading-relaxed">
                  Vintage Nokia 5190 phones from the late '90s — some of these might have Moose Boy hiding inside
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>Vintage 1990s models</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>Authentic Nokia hardware</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>Collector's items</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <a
                    href="https://www.ebay.com/sch/i.html?_nkw=Nokia+5190&_sacat=0&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&customid=&toolid=10001&mkevt=1"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    View on eBay
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-16 bg-card border border-border rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4">Buying Tips for Collectors</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-foreground">Verify authenticity:</strong> Look for genuine Nokia branding and
                  model numbers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-foreground">Check seller ratings:</strong> Buy from reputable sellers with
                  positive feedback
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-foreground">Read descriptions carefully:</strong> Understand the phone's
                  condition and what's included
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-foreground">Original hardware matters:</strong> For the Moose Boy chip, you
                  need phones with original Motorola components
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
