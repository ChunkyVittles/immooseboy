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
            Moose Boy is probably the most famous piece of{" "}
            <a
              href="https://en.wikipedia.org/wiki/Chip_art"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              silicon graffiti
            </a>{" "}
            ever found — a tiny hidden drawing etched into a computer chip by one of the engineers who designed it. It shows a kid with moose antlers holding a sign that says "I'M MOOSE BOY" (sometimes "IM MOOSE BOY" or "I AM MOOSE BOY"). The drawing sits on a <strong>Motorola RF chip</strong> buried inside a crystal
            oscillator in the{" "}
            <a
              href="https://www.ebay.com/sch/i.html?_nkw=Nokia+5190&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11000&mkevt=1"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-accent hover:underline font-bold"
              aria-label="Shop for Nokia 5190 mobile phones on eBay"
            >
              Nokia 5190 mobile phone
            </a>
            . That phone launched in 1998 and was basically the iPhone of its day — everyone had one.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Cpu className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Impossibly Small</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      You can't see it without a microscope. It's made using the exact same photolithography process that creates the actual working circuits on the chip.
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
                    <h3 className="font-bold text-lg mb-2">An Engineer's Inside Joke</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Chip designers have been sneaking little drawings onto silicon for decades. It's like signing your work — except nobody can see it without serious magnification.
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
            The Nokia 5190 (sold as the 5110 in some markets) wasn't just a phone — it was a cultural moment. It launched in 1998 and quickly became one of the best-selling cellphones of that era. The thing was <strong>basically indestructible</strong>, dead simple to use, and the battery lasted forever. It introduced millions of people to mobile gaming through{" "}
            <a
              href="https://en.wikipedia.org/wiki/Snake_(video_game_genre)"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Snake
            </a>
            , and you could swap out the faceplates to customize it. That was a big deal in 1998.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            At 1.2 inches thick, it was a brick by today's standards. But in 1999 it felt sleek. Nokia stopped making it around 2001, but its legacy stuck around — not just as a turning point in mobile phones, but as the home of one of tech's best-hidden Easter eggs.
          </p>

          <h3 className="text-2xl font-bold mb-6 mt-16" id="hunt-2022">
            The 2022 Hunt
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            The serious search for Moose Boy kicked off in <strong>2022</strong>. People online had been talking about a hidden doodle somewhere inside a Nokia 5190 for a while, but nobody had actually found and photographed it. That changed when it became a{" "}
            <strong>full-blown community treasure hunt</strong> — chip nerds, phone collectors, and tech historians all got in on it. After{" "}
            <a
              href="https://www.instagram.com/exciting__electronics/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
              aria-label="Visit Exciting Electronics on Instagram"
            >
              @Exciting__Electronics
            </a>{" "}
            posted a video showing chip art inside a crystal oscillator, hunters started tearing apart their Nokia 5190s with fresh eyes.
          </p>

          <div className="bg-muted/50 border-l-4 border-accent p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Search className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">
                <strong>Here's the thing that tripped everyone up:</strong> Moose Boy wasn't on the main circuit board. It was on a chip <em>inside</em> the crystal oscillator — a component inside another component. One layer deeper than anyone expected. That's why it took so long to find.
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
                  Moose Boy appears to live in crystal oscillator chips with markings like{" "}
                  <strong>"1284A"</strong>, <strong>"13.0C"</strong>, and <strong>"9823"</strong>. Here's what those numbers mean:
                </p>
                <ul className="space-y-2 pl-6">
                  <li className="text-base leading-relaxed">
                    <strong>1284A</strong> - The part number for this specific chip variant
                  </li>
                  <li className="text-base leading-relaxed">
                    <strong>13.0C</strong> - Likely the oscillator frequency (13.0 MHz)
                  </li>
                  <li className="text-base leading-relaxed">
                    <strong>9823</strong> - Date code in YYWW format — this chip was made in week 23 of 1998 (early June)
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  Heads up: not every Nokia 5190 crystal oscillator has Moose Boy. Only certain production runs with this specific Motorola chip seem to have the doodle.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6">To actually find Moose Boy, people had to:</p>

          <ul className="space-y-3 mb-8 pl-6">
            <li className="text-lg leading-relaxed">
              <strong>Completely take apart a Nokia 5190</strong> to get to the crystal oscillator
            </li>
            <li className="text-lg leading-relaxed">
              <strong>Crack open the crystal oscillator itself</strong> — just looking at the main board won't cut it
            </li>
            <li className="text-lg leading-relaxed">
              <strong>Use a microscope</strong> at hundreds of times magnification
            </li>
            <li className="text-lg leading-relaxed">
              <strong>Get lucky with the right production batch</strong> — not every phone has it
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
                The best theory is that it's based on a friend or coworker of the chip engineer — someone nicknamed "Moose." The art style is clearly a riff on the <strong>Big Boy restaurant mascot</strong>, with those same chunky proportions. Just add antlers.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <History className="h-5 w-5 text-accent" />
                Part of a Wild Tradition
              </h4>
              <p className="text-lg leading-relaxed">
                Moose Boy isn't alone. Engineers have hidden all kinds of stuff on chips over the years — a can of worms, chili peppers, Daffy Duck, Smurfs, Playboy bunnies, and tons of animals. There's a whole{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Silicon_Zoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium"
                >
                  Silicon Zoo
                </a>{" "}
                archive cataloging them.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6 mt-16" id="dying-art">
            Silicon Graffiti: A Dying Art
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Before 1984, silicon graffiti actually had a legal purpose — these hidden signatures served as{" "}
            <strong>proof of copyright infringement</strong> if someone copied your chip design. Then the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Semiconductor_Chip_Protection_Act_of_1984"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Semiconductor Chip Protection Act of 1984
            </a>{" "}
            gave automatic legal protection to chip layouts, so the doodles became purely personal — signatures, team jokes, little tributes.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Engineers would use empty space on chips to leave their mark, drawing with the same{" "}
            <a
              href="https://en.wikipedia.org/wiki/Photolithography"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              photolithography
            </a>{" "}
            process that creates the working circuits. But this tradition is fading fast:
          </p>

          <ul className="space-y-3 mb-8 pl-6">
            <li className="text-lg leading-relaxed">
              <strong>Companies got strict</strong> about IP and maximizing every bit of silicon real estate
            </li>
            <li className="text-lg leading-relaxed">
              <strong>Security reviews caught them</strong> — fabs started auditing designs more carefully
            </li>
            <li className="text-lg leading-relaxed">
              <strong>Automated design tools</strong> don't leave room for personal touches
            </li>
            <li className="text-lg leading-relaxed">
              <strong>Every micron matters now</strong> — modern chips are so dense there's just no spare space
            </li>
          </ul>

          <div className="bg-accent/10 p-8 rounded-lg my-12">
            <h3 className="text-2xl font-bold mb-4">Why Moose Boy Matters</h3>
            <p className="text-lg leading-relaxed mb-4">
              It's not just a doodle. It's proof that a real person with a sense of humor built the technology we used every day. At a time when billions of chips roll off assembly lines, these Easter eggs remind you that actual humans — weird, creative, funny humans — designed the stuff inside your pocket.
            </p>
            <p className="text-lg leading-relaxed">
              The Nokia 5190 brought mobile communication to millions and became a symbol of the late '90s. The fact that such a culturally important device had this secret little drawing — hidden on a chip inside a component inside the phone — makes Moose Boy a genuinely cool piece of <strong>tech history and digital archaeology</strong>.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6 mt-16" id="collecting">
            Collecting Nokia 5190 Phones
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            If you're into vintage phones or just think this whole story is cool, the Nokia 5190 has become a real collector's item. The catch: not every 5190 has Moose Boy. You need an <strong>early production model</strong>{" "}
            from the late '90s with the specific Motorola chipset. That makes confirmed units pretty valuable.
          </p>

          <p className="text-lg leading-relaxed">
            Even if you're not planning to crack one open, there's something great about owning a piece of this story. And if you do have the right tools and the patience, you might actually get to see Moose Boy with your own eyes.
          </p>
        </div>
      </div>
    </article>
  )
}
