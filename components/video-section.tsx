import { Card, CardContent } from "@/components/ui/card"

export function VideoSection() {
  return (
    <section className="bg-muted/30 py-16 my-16" id="video" aria-labelledby="video-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="video-heading" className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Watch Moose Boy in Action
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-10 leading-relaxed">
            See the actual doodle under a microscope and watch our animated take on what Moose Boy gets up to inside the chip
          </p>

          {/* New Animated Video */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">
              What Moose Boy is Really Doing Inside Your Nokia 5190 Chip
            </h3>
            <Card className="overflow-hidden border-2">
              <CardContent className="p-0">
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                  itemScope
                  itemType="https://schema.org/VideoObject"
                >
                  <meta itemProp="name" content="What Moose Boy is Really Doing Inside Your Nokia 5190 Chip" />
                  <meta
                    itemProp="description"
                    content="Animated visualization of the legendary Moose Boy silicon graffiti character inside the Nokia 5190 Motorola RF chip"
                  />
                  <meta itemProp="uploadDate" content="2026-02-04T00:00:00Z" />
                  <meta itemProp="thumbnailUrl" content="https://i.ytimg.com/vi/Bc8rzbpd0Uk/hqdefault.jpg" />
                  <meta itemProp="embedUrl" content="https://www.youtube.com/embed/Bc8rzbpd0Uk" />

                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/Bc8rzbpd0Uk"
                    title="What Moose Boy is Really Doing Inside Your Nokia 5190 Chip"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    itemProp="contentUrl"
                  />
                </div>
              </CardContent>
            </Card>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                An animated look at what Moose Boy gets up to when nobody's watching — running around the Motorola RF
                chip inside the Nokia 5190, resoldering connections and keeping things running.
              </p>
            </div>
          </div>

          {/* Original Discovery Video */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">The Original Moose Boy Discovery</h3>
            <Card className="overflow-hidden border-2">
              <CardContent className="p-0">
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                  itemScope
                  itemType="https://schema.org/VideoObject"
                >
                  <meta itemProp="name" content="Moose Boy Discovery - Silicon Graffiti in Nokia 5190" />
                  <meta
                    itemProp="description"
                    content="Watch the discovery of the legendary Moose Boy silicon graffiti hidden inside the Nokia 5190 mobile phone chipset"
                  />
                  <meta itemProp="uploadDate" content="2024-01-01T00:00:00Z" />
                  <meta itemProp="thumbnailUrl" content="https://i.ytimg.com/vi/-VX08AOODP8/hqdefault.jpg" />
                  <meta itemProp="embedUrl" content="https://www.youtube.com/embed/-VX08AOODP8" />

                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/-VX08AOODP8"
                    title="Moose Boy Discovery - Silicon Graffiti in Nokia 5190 Chip"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    itemProp="contentUrl"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                This is the real deal — someone actually tracked down the Moose Boy doodle on a Motorola RF chip
                inside a Nokia 5190 and caught it on camera. You can see just how tiny and detailed it is.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
