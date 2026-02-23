import { BookOpen, ExternalLink } from "lucide-react"

const sources = [
  {
    title: "Mooseboy Silicon Art — [H]ard|Forum (2006)",
    url: "https://hardforum.com/threads/mooseboy-silicon-art.1034414/",
    description: "Early internet discussion documenting the Moose Boy chip art discovery",
  },
  {
    title: "Silicon Zoo — Chip Art Archive",
    url: "https://en.wikipedia.org/wiki/Silicon_Zoo",
    description: "The big archive of silicon graffiti — tons of chip art specimens cataloged in one place",
  },
  {
    title: "Chip Art (Silicon Graffiti) — Wikipedia",
    url: "https://en.wikipedia.org/wiki/Chip_art",
    description: "Overview of the history and tradition of hidden artwork on semiconductor chips",
  },
  {
    title: "Semiconductor Chip Protection Act of 1984",
    url: "https://en.wikipedia.org/wiki/Semiconductor_Chip_Protection_Act_of_1984",
    description: "The legislation that changed the legal purpose of silicon graffiti",
  },
  {
    title: "Moose Boy Discovery — EvilMonkeyz TikTok",
    url: "https://www.tiktok.com/@evilmonkeyzdesignz",
    description: "The viral video documenting the 2022 hunt and discovery of Moose Boy",
  },
  {
    title: "Exciting Electronics — Crystal Oscillator Chip Art",
    url: "https://www.instagram.com/exciting__electronics/",
    description: "The video that inspired hunters to revisit Nokia 5190 oscillator components",
  },
]

export function SourcesSection() {
  return (
    <section className="container mx-auto px-4 py-12" aria-labelledby="sources-heading">
      <div className="max-w-4xl mx-auto">
        <div className="border border-border rounded-lg p-6 md:p-8 bg-muted/20">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-accent" />
            <h2 id="sources-heading" className="text-2xl font-bold">
              Sources & References
            </h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Here's where we got our info. Forum threads, historical archives, and the people who actually found the thing.
          </p>
          <ol className="space-y-4">
            {sources.map((source, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-sm font-mono text-muted-foreground mt-0.5 flex-shrink-0">
                  [{index + 1}]
                </span>
                <div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-medium inline-flex items-center gap-1"
                  >
                    {source.title}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {source.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
