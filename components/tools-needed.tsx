import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, AlertTriangle, Info } from "lucide-react"

const tools = [
  {
    name: "Nokia 5190 Phone",
    description: "The iconic phone that might house the Moose Boy chip - seek out late 1990s models",
    link: "https://www.ebay.com/sch/i.html?_nkw=nokia+5190&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1",
    icon: "📱",
  },
  {
    name: "Phone Repair Tool Kit",
    description: "Miniature screwdrivers and opening implements specially designed for dismantling mobile phones",
    link: "https://www.ebay.com/sch/i.html?_nkw=phone+repair+tool+kit+screwdriver&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1",
    icon: "🛠️",
  },
  {
    name: "Precision Tweezers",
    description: "Critical for manipulating microscopic components and chips without causing damage",
    link: "https://www.ebay.com/sch/i.html?_nkw=precision+tweezers+electronics&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1",
    icon: "🔧",
  },
  {
    name: "Soldering Iron & Desoldering Pump",
    description:
      "Necessary to carefully remove solder and detach components from the PCB without harming adjacent parts",
    link: "https://www.ebay.com/sch/i.html?_nkw=soldering+iron+desoldering+pump+kit&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1",
    icon: "🔥",
  },
  {
    name: "USB Microscope",
    description: "Vital for observing the microscopic Moose Boy doodle on the chip surface",
    link: "https://www.ebay.com/sch/i.html?_nkw=usb+digital+microscope&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1",
    icon: "🔬",
  },
  {
    name: "Vice Grip",
    description: "Firmly holds the phone and parts while you operate",
    link: "https://www.ebay.com/sch/i.html?_nkw=mini+vice+grip+electronics&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1",
    icon: "🗜️",
  },
  {
    name: "Precision Razor Blade",
    description: "Assists in cautiously separating components and eliminating adhesives",
    link: "https://www.ebay.com/sch/i.html?_nkw=precision+razor+blade+craft&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1",
    icon: "🔪",
  },
  {
    name: "Desk Magnifying Glass",
    description: "Desktop-mounted magnifier with illumination for detailed inspection tasks",
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
            Essential Tools for Your Moose Boy Quest
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready for an adventure? Discovering Moose Boy demands meticulous disassembly and microscopic analysis along
            with substantial patience. Here are the critical tools you'll require for your silicon graffiti expedition.
            Success cannot be guaranteed!
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
            Complete Guide to Discovering Moose Boy
          </h3>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Acquire a Nokia 5190</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Begin by securing a{" "}
                      <a
                        href="https://www.ebay.com/sch/i.html?_nkw=nokia+5190+vintage+1998+1999&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339134999&toolid=11800&mkevt=1"
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="text-accent hover:underline font-medium"
                      >
                        Nokia 5190 phone
                      </a>
                      . Not every unit houses Moose Boy—the chip only appeared in select production batches from earlier
                      manufacturing runs. Seek phones produced in the late 1990s for the highest probability of locating
                      the doodle.
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
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Disassemble the Phone</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Methodically remove the rear cover, battery, and faceplate. Utilize your precision instruments to
                      unscrew and detach the phone's housing. Capture photos at every stage so you can rebuild it later
                      if wanted. Proceed slowly to prevent damaging plastic fasteners.
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
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Locate the Crystal Oscillator</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      After you gain access to the main PCB (printed circuit board), pinpoint the crystal oscillator
                      part—a compact silver rectangular or square metal container, usually marked with frequency
                      specifications. Moose Boy is concealed on a Motorola RF chip within this oscillator casing.
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
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Remove the Oscillator</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Fasten the PCB in your vice grip. Warm your soldering iron to approximately 350-400°C (660-750°F).
                      Place the tip onto each solder connection on the crystal oscillator while concurrently using the
                      desoldering pump to remove the liquefied solder. After all connections are cleared, use precision
                      tweezers to carefully lift the part from the board. Operate patiently and avoid applying too much
                      heat to prevent PCB harm.
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
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Open the Oscillator Housing</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      The crystal oscillator features a metal shell safeguarding the chip within. Using your precision
                      razor blade and tweezers, cautiously pry open or slice through the metal enclosure. This demands
                      delicate work—the chip inside is minuscule and brittle. Exercise patience.
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
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Examine the Chip Under Magnification</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      With the chip revealed, position it beneath your USB microscope or desk magnifying glass with
                      adequate lighting. Moose Boy is microscopic—you'll require at least 100-200x magnification to
                      observe it distinctly. Search for the doodle on the silicon surface: a boy figure with moose
                      antlers clutching a sign that reads "IM MOOSE BOY."
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
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Document Your Discovery</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      If you successfully locate Moose Boy, capture photos or video through your microscope! This
                      represents a scarce piece of engineering heritage. Numerous collectors and tech fans have
                      investigated for years to authenticate this silicon graffiti legend. Distribute your findings with
                      the community!
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
              <h4 className="font-semibold text-[oklch(0.4_0.15_27)] mb-2">Safety and Legal Cautions</h4>
              <ul className="text-sm text-foreground/80 space-y-2 leading-relaxed">
                <li>
                  • Soldering irons achieve very high temperatures and can inflict serious burns. Always employ proper
                  safety gear and operate in a properly ventilated space.
                </li>
                <li>
                  • Sharp implements like razor blades can result in injury. Manage with maximum care and keep away from
                  children.
                </li>
                <li>
                  • Not every Nokia 5190 phone houses the Moose Boy chip—success cannot be assured even with meticulous
                  work.
                </li>
                <li>
                  • Dismantling electronic devices can expose you to tiny parts and substances. Operate carefully and
                  responsibly.
                </li>
                <li>
                  • This process irreversibly destroys the phone's functionality—use only salvage or broken units.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
