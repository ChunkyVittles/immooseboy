"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What is Moose Boy?",
    answer:
      'Moose Boy is a tiny drawing hidden on a chip inside certain Nokia 5190 phones. It shows a kid with moose antlers holding a sign that says "IM MOOSE BOY." A Motorola chip engineer snuck it in during production in the late 1990s. You can\'t see it without a microscope.',
  },
  {
    question: "Where exactly is Moose Boy hidden?",
    answer:
      "It's not on the main circuit board — that's what threw people off for so long. It's on a chip inside the crystal oscillator, which is a small metal component on the PCB. You have to desolder the oscillator, crack open the metal casing, then look at the chip inside under 100-200x magnification.",
  },
  {
    question: "Does every Nokia 5190 have Moose Boy?",
    answer:
      'Nope. Only some production batches have it. Look for crystal oscillators marked "1284A", "13.0C", and date codes from 1998 (like "9823"). Earlier production runs seem to have the best odds. There\'s no guarantee even if you find the right markings.',
  },
  {
    question: "What is silicon graffiti?",
    answer:
      "It's basically chip engineers hiding tiny drawings on semiconductors. They'd use the same photolithography process that makes the functional circuits to sneak artwork into empty space on the chip. Engineers have been doing it for decades — you can find everything from cartoon characters to inside jokes. It's gotten rarer though, because modern chips don't have spare room and companies got strict about it.",
  },
  {
    question: "What tools do I need to find Moose Boy?",
    answer:
      "A Nokia 5190 (obviously), a phone repair kit, precision tweezers, a soldering iron with a desoldering pump, a razor blade, and — most importantly — a USB microscope that can do at least 100-200x magnification. You're going to fully disassemble the phone and crack open a tiny metal component, so steady hands help too.",
  },
  {
    question: "Who created Moose Boy?",
    answer:
      'Nobody knows for sure. It was a Motorola chip engineer who never came forward publicly. The theory is that "Moose" was a nickname for a friend or coworker, and the art style is clearly inspired by the Big Boy restaurant mascot. Just with antlers.',
  },
  {
    question: "When was Moose Boy discovered?",
    answer:
      "People had talked about it in chip art circles for years, but the real community hunt started in 2022. The big breakthrough was figuring out that it wasn't on the main PCB at all — it was one layer deeper, inside the crystal oscillator. That's why nobody could find it before.",
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
            Quick answers about Moose Boy, the Nokia 5190, and silicon graffiti
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
