"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What is Moose Boy?",
    answer:
      'Moose Boy is a microscopic piece of silicon graffiti — a tiny doodle of a boy with moose antlers holding a sign that reads "IM MOOSE BOY" — hidden inside the Motorola RF integrated circuit of certain Nokia 5190 mobile phones manufactured in the late 1990s.',
  },
  {
    question: "Where exactly is Moose Boy hidden?",
    answer:
      "Moose Boy is located on a chip inside the crystal oscillator component of the Nokia 5190 phone's PCB. It's not visible on the main circuit board — you have to remove and open the crystal oscillator casing to access the chip, then use a microscope at 100-200x magnification to see the doodle.",
  },
  {
    question: "Does every Nokia 5190 have Moose Boy?",
    answer:
      'No. Only certain production batches of the Nokia 5190 from the late 1990s contain the Moose Boy chip. Look for crystal oscillators with markings like "1284A", "13.0C", and date codes from 1998 (such as "9823"). Earlier production runs have a higher chance of containing the doodle.',
  },
  {
    question: "What is silicon graffiti?",
    answer:
      "Silicon graffiti (also called chip art or silicon doodling) is the practice of chip engineers hiding tiny artworks on semiconductor chips. These microscopic designs are created using the same photolithography process used for the chip's functional circuits. The tradition dates back decades but has become increasingly rare due to stricter corporate oversight and space constraints on modern chips.",
  },
  {
    question: "What tools do I need to find Moose Boy?",
    answer:
      "You'll need a Nokia 5190 phone, a phone repair tool kit, precision tweezers, a soldering iron with desoldering pump, a precision razor blade, and most importantly a USB microscope or magnifying glass capable of at least 100-200x magnification. The process involves complete phone disassembly and opening the crystal oscillator housing.",
  },
  {
    question: "Who created Moose Boy?",
    answer:
      'Moose Boy was created by an anonymous chip engineer at Motorola. The artwork is believed to be based on a colleague or friend nicknamed "Moose," with artistic influence from the iconic Big Boy restaurant mascot. The exact identity of the artist has never been publicly confirmed.',
  },
  {
    question: "When was Moose Boy discovered?",
    answer:
      "While the existence of Moose Boy was referenced in chip art archives for years, the serious community hunt to find and photograph it began in 2022. The breakthrough came when hunters realized it was hidden inside the crystal oscillator component — one layer deeper than initially expected — rather than being directly visible on the main PCB.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="container mx-auto px-4 py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-4">
            <HelpCircle className="h-8 w-8 text-accent" />
          </div>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the legendary Moose Boy silicon graffiti
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
