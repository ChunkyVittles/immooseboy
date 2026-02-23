import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Users, History, Search } from "lucide-react"

export function ArticleContent() {
  return (
    <article id="story" className="container mx-auto px-4 py-16 md:py-24" aria-labelledby="article-heading">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <header>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground mb-4">
              <time dateTime="2025-01-15">Published January 15, 2025</time>
              <span>•</span>
              <time dateTime="2026-02-01">Updated February 1, 2026</time>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-accent">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Editorially reviewed</span>
              </span>
            </div>
            <h2 id="article-heading" className="text-3xl md:text-4xl font-bold mb-6">
              What is Moose Boy?
            </h2>
          </header>

          <p className="text-lg leading-relaxed mb-8">
            Moose Boy stands as one of the most renowned instances of{" "}
            <a
              href="https://en.wikipedia.org/wiki/Chip_art"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              silicon graffiti
            </a>{" "}
            (sometimes called chip art or silicon doodling)—minuscule, concealed artwork carved into computer chips by their
            creators. This specific artwork, depicting a boy with moose antlers clutching a sign that proudly declares "I'M MOOSE BOY" (sometimes written as "IM MOOSE BOY" or "I AM MOOSE BOY"), was covertly placed within the <strong>Motorola RF integrated circuit</strong> housed inside a crystal
            oscillator of the legendary{" "}
            <a
              href="https://www.ebay.com/sch/i.html?_nkw=Nokia+5190&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11000&mkevt=1"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-accent hover:underline font-bold"
              aria-label="Shop for Nokia 5190 mobile phones on eBay"
            >
              Nokia 5190 mobile phone
            </a>
            , launched in 1998 and often dubbed "the iPhone of 1999" because of its extraordinary popularity.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Cpu className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Tiny Technical Marvel</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Completely invisible without magnification, this design is created through the identical
                      photolithography technique used for the chip's operational circuitry
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Designer's Personal Mark</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A humorous signature or private reference created by chip engineers—a custom stretching back many
                      decades
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold mb-6 mt-16" id="nokia-icon">
            The Nokia 5190: Cultural Icon
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            The Nokia 5190 (alternatively marketed as the 5110 in certain regions) was far more than an ordinary
            phone—it became a cultural touchstone. Launched in 1998, it evolved into one of the best-selling cellphones
            of that generation, celebrated for being <strong>nearly indestructible</strong>, straightforward to operate,
            and boasting remarkable battery longevity. It brought millions into mobile gaming through the iconic game{" "}
            <a
              href="https://en.wikipedia.org/wiki/Snake_(video_game_genre)"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Snake
            </a>
            , and pioneered phone customization through its swappable faceplates.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            Measuring 1.2 inches in thickness, what contemporary standards would label a "brick" was viewed as
            streamlined and contemporary in 1999. Production of the phone ceased around 2001, yet its influence
            endures—not only as a watershed moment in mobile communication development, but as the home of one of
            technology's most celebrated Easter eggs.
          </p>

          <h3 className="text-2xl font-bold mb-6 mt-16" id="hunt-2022">
            The 2022 Hunt
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            The search for Moose Boy kicked off seriously in <strong>2022</strong>, when internet references mentioned
            its presence somewhere inside a Nokia 5190 phone. The revelation triggered a{" "}
            <strong>community-powered treasure hunt</strong> among technology fans, chip enthusiasts, and mobile phone
            archivists. Following a video from{" "}
            <a
              href="https://www.instagram.com/exciting__electronics/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
              aria-label="Visit Exciting Electronics on Instagram"
            >
              @Exciting__Electronics
            </a>{" "}
            showcasing chip art within a crystal oscillator, hunters revisited their Nokia 5190 salvage PCBs with fresh
            determination.
          </p>

          <div className="bg-muted/50 border-l-4 border-accent p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Search className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">
                <strong>The pivotal moment:</strong> Moose Boy was ultimately discovered on a chip <em>within</em> the
                crystal oscillator of select Nokia 5190 models—not on the primary PCB, but concealed one layer deeper,
                rendering it even more challenging to locate than initially anticipated.
              </p>
            </div>
          </div>

          <div className="bg-accent/10 p-6 rounded-lg my-8">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Cpu className="h-5 w-5 text-accent" />
              The Specific Chip
            </h4>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Image
                src="/images/motorola-chip-markings.png"
                alt="Motorola crystal oscillator chip with markings 1284A, 13.0 C, Motorola logo, and date code 9823"
                width={192}
                height={192}
                className="w-full md:w-48 h-auto rounded border-2 border-accent/20"
              />
              <div className="flex-1">
                <p className="text-lg leading-relaxed mb-4">
                  Moose Boy seems to be concealed in crystal oscillator chips bearing markings such as{" "}
                  <strong>"1284A"</strong>, <strong>"13.0C"</strong>, and <strong>"9823"</strong>. These identifiers
                  provide crucial details about the chip:
                </p>
                <ul className="space-y-2 pl-6">
                  <li className="text-base leading-relaxed">
                    <strong>1284A</strong> - The component number or model designation for this particular chip version
                  </li>
                  <li className="text-base leading-relaxed">
                    <strong>13.0C</strong> - Probably denotes the oscillator frequency (13.0 MHz) or an associated
                    specification
                  </li>
                  <li className="text-base leading-relaxed">
                    <strong>9823</strong> - Production date code in YYWW format, signifying this chip was produced in
                    1998, week 23 (early June 1998)
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Note: Not all crystal oscillators in Nokia 5190 phones contain Moose Boy—only certain production runs
                  with this specific chip variant may have the hidden doodle.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">Locating Moose Boy demanded:</p>

          <ul className="space-y-3 mb-8 pl-6">
            <li className="text-lg leading-relaxed">
              <strong>Complete disassembly of a Nokia 5190 phone</strong> to reach the crystal oscillator
            </li>
            <li className="text-lg leading-relaxed">
              <strong>Opening the crystal oscillator enclosure itself</strong>—not merely inspecting the main circuit
              board
            </li>
            <li className="text-lg leading-relaxed">
              <strong>Employing specialized microscopy tools</strong> with hundreds of times magnification
            </li>
            <li className="text-lg leading-relaxed">
              <strong>Obtaining an "old enough" Nokia 5190</strong>—not every production batch includes the doodle
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-6 mt-16" id="origins">
            Origins & Inspiration
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                The "Moose" Connection
              </h4>
              <p className="text-lg leading-relaxed">
                The artwork is thought to be based on a chip engineer's friend or associate nicknamed "Moose,"
                demonstrating evident artistic influence from the iconic <strong>Big Boy restaurant mascot</strong> with
                its recognizable proportions and appealing design.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <History className="h-5 w-5 text-accent" />
                Part of a Rich Tradition
              </h4>
              <p className="text-lg leading-relaxed">
                Moose Boy becomes part of a collection of silicon Easter eggs featuring a can of worms, chili peppers,
                Daffy Duck, Smurfs, Playboy bunnies, and assorted animals—cataloged in archives like the renowned{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Silicon_Zoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium"
                >
                  Silicon Zoo
                </a>
                .
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6 mt-16" id="dying-art">
            Silicon Graffiti: A Dying Art
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Prior to 1984, silicon graffiti fulfilled a functional legal role—these concealed signatures offered{" "}
            <strong>proof of copyright infringement</strong> if a rival duplicated a chip design. The{" "}
            <a
              href="https://en.wikipedia.org/wiki/Semiconductor_Chip_Protection_Act_of_1984"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Semiconductor Chip Protection Act of 1984
            </a>{" "}
            granted automatic protection to chip mask designs, transforming the purpose for doodles mainly to personal
            expression, team recognition, and inside jokes.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Chip engineers would utilize vacant space on prototype chips to leave their signature, producing these
            microscopic artworks through the same{" "}
            <a
              href="https://en.wikipedia.org/wiki/Photolithography"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              photolithography
            </a>{" "}
            process used for the functional circuitry. Yet, this
            custom has grown progressively uncommon due to:
          </p>

          <ul className="space-y-3 mb-8 pl-6">
            <li className="text-lg leading-relaxed">
              <strong>More rigorous corporate guidelines</strong> concerning intellectual property and optimizing
              silicon real estate
            </li>
            <li className="text-lg leading-relaxed">
              <strong>Heightened security oversight</strong> in semiconductor production
            </li>
            <li className="text-lg leading-relaxed">
              <strong>Contemporary automated design workflows</strong> that offer less opportunity for personal
              flourishes
            </li>
            <li className="text-lg leading-relaxed">
              <strong>Every micron counts</strong>—as chips grow more sophisticated, there's diminished unused space for
              art
            </li>
          </ul>

          <div className="bg-accent/10 p-8 rounded-lg my-12">
            <h3 className="text-2xl font-bold mb-4">Why Moose Boy Matters</h3>
            <p className="text-lg leading-relaxed mb-4">
              Moose Boy signifies more than simply a concealed doodle—it's evidence of the human ingenuity and character
              behind the technology that linked the world. In a time where billions of chips are produced with
              mechanical precision, these Easter eggs show us that actual people with whimsical spirits engineered the
              devices that transformed how we communicate.
            </p>
            <p className="text-lg leading-relaxed">
              The Nokia 5190 delivered mobile communication to millions and transformed into a cultural symbol of the
              late 1990s. That such a globally meaningful device held this secret artistic signature—concealed within a
              component inside another component—makes Moose Boy an invaluable piece of{" "}
              <strong>technology history and digital archaeology</strong>.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6 mt-16" id="collecting">
            Collecting Nokia 5190 Phones
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            For vintage mobile phone collectors and technology aficionados, the Nokia 5190 has evolved into a coveted
            piece of history. Not every Nokia 5190 houses Moose Boy—you require an <strong>"old enough" model</strong>{" "}
            from the initial production batches with the particular Motorola chipset. This scarcity makes authenticated
            units especially valuable to collectors.
          </p>

          <p className="text-lg leading-relaxed">
            Whether you're a collector, a technology archivist, or just someone captivated by the crossroads of art and
            engineering, owning a Nokia 5190 means having a tangible piece of this legendary story—and potentially, with
            the appropriate equipment and dedication, the opportunity to see Moose Boy yourself.
          </p>
        </div>
      </div>
    </article>
  )
}
