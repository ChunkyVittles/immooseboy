import Image from "next/image"

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32"
      aria-label="Hero section"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-6">
            <Image
              src="/images/mooseboy-character.webp"
              alt="Moose Boy character illustration holding an 'I AM MOOSE BOY' sign - the famous silicon graffiti mascot found in Nokia 5190 chips"
              width={192}
              height={192}
              className="rounded-full"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            I'm <span className="text-accent">Moose Boy</span>: The Legendary Silicon Graffiti
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed">
            A microscopic masterpiece hidden inside millions of Nokia 5190 phones—the most famous silicon graffiti in tech history. I am Moose Boy — discover the legend.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#story"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-base font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
              aria-label="Read the complete story of Moose Boy"
            >
              Read the Story
            </a>
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-8 py-3 text-base font-medium hover:bg-muted transition-colors"
              aria-label="Shop for authentic Nokia 5190 phones on eBay"
            >
              Find Nokia 5190
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
