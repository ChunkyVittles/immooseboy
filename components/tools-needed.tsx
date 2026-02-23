import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, AlertTriangle, Info } from "lucide-react"

const tools = [
  {
    name: "Nokia 5190 Phone",
    description: "The phone that might have Moose Boy inside — look for late '90s models",
    link: "https://www.ebay.com/sch/i.html?_nkw=nokia+5190&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1",
    icon: "📱",
  },
  {
    name: "Phone Repair Tool Kit",
    description: "Tiny screwdrivers and pry tools made for taking apart mobile phones",
    link: "https://www.ebay.com/sch/i.html?_nkw=phone+repair+tool+kit+screwdriver&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1",
    icon: "🛠️",
  },
  {
    name: "Precision Tweezers",
    description: "You'll need these to handle tiny chips without dropping or crushing them",
    link: "https://www.ebay.com/sch/i.html?_nkw=precision+tweezers+electronics&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1",
    icon: "🔧",
  },
  {
    name: "Soldering Iron & Desoldering Pump",
    description: "For removing solder and detaching the crystal oscillator from the PCB without wrecking anything nearby",
    link: "https://www.ebay.com/sch/i.html?_nkw=soldering+iron+desoldering+pump+kit&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1",
    icon: "🔥",
  },
  {
    name: "USB Microscope",
    description: "The only way you're seeing Moose Boy — you need at least 100-200x magnification",
    link: "https://www.ebay.com/sch/i.html?_nkw=usb+digital+microscope&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1",
    icon: "🔬",
  },
  {
    name: "Vice Grip",
    description: "Holds the board steady while you work — your hands will be busy enough",
    link: "https://www.ebay.com/sch/i.html?_nkw=mini+vice+grip+electronics&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1",
    icon: "🗜️",
  },
  {
    name: "Precision Razor Blade",
    description: "For carefully prying open the oscillator housing — go slow",
    link: "https://www.ebay.com/sch/i.html?_nkw=precision+razor+blade+craft&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1",
    icon: "🔪",
  },
  {
    name: "Desk Magnifying Glass",
    description: "A mounted magnifier with a built-in light — great for the detail work",
    link: "https://www.ebay.com/sch/i.html?_nkw=desk+magnifying+glass+lamp&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1",
    icon: "🔍",
  },
]

export function ToolsNeeded() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What You Need to Hunt for Moose Boy
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fair warning: this isn't easy. You're tearing apart a phone, cracking open a tiny metal component, and hunting for a microscopic drawing. You need patience, steady hands, and the right gear. No guarantees you'll find it.
          </p>
          <div className="mt-4 p-4 bg-muted border border-border rounded-lg max-w-3xl mx-auto">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground text-left leading-relaxed">
                If you click on affiliate links on this website and make a purchase, we may earn a commission at no
                additional cost to you.
              </p>
            </div>
          </div>
        </div>

        <aside role="complementary" aria-label="Recommended tools for finding Moose Boy">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              return (
                <Card key={tool.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{tool.name}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{tool.description}</p>
                    <Button asChild className="w-full bg-accent hover:bg-accent/90">
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        aria-label={`Shop for ${tool.name} on eBay`}
                      >
                        Shop on eBay
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </aside>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-foreground">
            How to Find Moose Boy: Step by Step
          </h3>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Get a Nokia 5190</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Start by finding a{" "}
                      <a
                        href="https://www.ebay.com/sch/i.html?_nkw=nokia+5190+vintage+1998+1999&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1"
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="text-accent hover:underline font-medium"
                      >
                        Nokia 5190
                      </a>
                      . Not every one has Moose Boy — it only showed up in certain production batches. Earlier manufacturing runs from the late '90s give you the best shot.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Take the Phone Apart</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Pop off the back cover, battery, and faceplate. Use your small screwdrivers to remove the screws and open the housing. Take photos as you go — you'll want to remember what went where. Go slow so you don't snap the plastic clips.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Find the Crystal Oscillator</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Once you're down to the main circuit board, look for the crystal oscillator — it's a small silver rectangular metal can, usually stamped with frequency info. Moose Boy is hiding on a Motorola RF chip inside that little metal box.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Desolder and Remove It</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Clamp the PCB in your vice grip. Heat up the soldering iron to around 350-400°C (660-750°F). Touch it to each solder joint on the oscillator and suck up the melted solder with the desoldering pump. Once all the joints are clear, lift it off carefully with tweezers. Take your time — too much heat will damage the board.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Crack Open the Oscillator</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      The crystal oscillator has a metal shell protecting the chip inside. Use your razor blade and tweezers to carefully pry it open or cut through the casing. Be gentle — the chip inside is tiny and fragile.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    6
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Put It Under the Microscope</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      This is the moment. Place the chip under your USB microscope with good lighting. You'll need at least 100-200x magnification to see anything. Scan the silicon surface and look for the drawing — a little figure with moose antlers holding a sign that says "IM MOOSE BOY."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    7
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Share What You Find</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      If you find him — take photos! Take video! This is a rare piece of engineering history. People have been hunting for this thing for years. If you find it, share it — the community goes nuts for these discoveries.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 p-6 bg-destructive/10 border border-destructive/30 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-[oklch(0.4_0.15_27)] flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-[oklch(0.4_0.15_27)] mb-2">Before You Start</h4>
              <ul className="text-sm text-foreground/80 space-y-2 leading-relaxed">
                <li>
                  • Soldering irons get extremely hot. Wear safety gear and work in a ventilated area.
                </li>
                <li>
                  • Razor blades are sharp (obviously). Handle with care and keep away from kids.
                </li>
                <li>
                  • Not every Nokia 5190 has Moose Boy. You might do all this and come up empty. That's the gamble.
                </li>
                <li>
                  • Taking apart electronics exposes you to small parts and materials. Be careful.
                </li>
                <li>
                  • Fair warning — you're going to destroy the phone doing this. Use a broken one.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
