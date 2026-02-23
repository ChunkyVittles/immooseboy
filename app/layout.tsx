import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@/components/analytics"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "I'm Moose Boy | The Legendary Silicon Graffiti Hidden Inside Nokia 5190 Chips",
  description:
    "A Motorola engineer hid a tiny drawing of a kid with moose antlers inside Nokia 5190 chips. Nobody found it for years. Here's the full story, the 2022 hunt, how to find it yourself, and where to get a Nokia 5190.",
  keywords:
    "Moose Boy, Nokia 5190, silicon graffiti, chip Easter egg, Motorola RF integrated circuit, microchip art, vintage Nokia, mobile phone history, silicon doodle, Big Boy mascot, chip art, semiconductor Easter eggs, technology history, 1998 Nokia",
  authors: [{ name: "I Am Moose Boy", url: "https://immooseboy.com" }],
  creator: "I Am Moose Boy",
  publisher: "I Am Moose Boy",
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://immooseboy.com",
  },
  openGraph: {
    title: "I'm Moose Boy | The Legendary Silicon Graffiti Inside Nokia 5190",
    description:
      "A tiny drawing of a kid with moose antlers, hidden inside millions of Nokia 5190 chips. Here's how the internet found it.",
    type: "website",
    url: "https://immooseboy.com",
    images: [
      {
        url: "https://immooseboy.com/images/mooseboy-character.webp",
        width: 1200,
        height: 630,
        alt: "Moose Boy character illustration - the legendary silicon graffiti mascot found in Nokia 5190 chips",
      },
    ],
    siteName: "I Am Moose Boy",
    locale: "en_US",
    publishedTime: "2025-01-15T00:00:00Z",
    modifiedTime: "2026-02-01T00:00:00Z",
    section: "Technology History",
    tags: ["Moose Boy", "Nokia 5190", "silicon graffiti", "chip art", "tech history", "Easter egg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "I'm Moose Boy | The Legendary Silicon Graffiti Inside Nokia 5190",
    description:
      "A tiny drawing of a kid with moose antlers, hidden inside millions of Nokia 5190 chips. Here's how the internet found it.",
    images: ["https://immooseboy.com/images/mooseboy-character.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Technology",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "I'm Moose Boy | The Legendary Silicon Graffiti Hidden Inside Nokia 5190 Chips",
  description:
    "The full story of Moose Boy — the tiny doodle a Motorola engineer hid inside Nokia 5190 chips. Covers the 2022 discovery hunt, silicon graffiti history, and how to find it yourself.",
  url: "https://immooseboy.com",
  inLanguage: "en-US",
  mainEntity: {
    "@type": "Article",
    headline: "I'm Moose Boy: The Legendary Silicon Graffiti in Nokia 5190",
    alternativeHeadline: "Discovering the Famous Microscopic Doodle Hidden in Nokia 5190 Chips",
    author: {
      "@type": "Organization",
      name: "I Am Moose Boy",
      url: "https://immooseboy.com",
    },
    datePublished: "2025-01-15",
    dateModified: "2026-02-01",
    image: {
      "@type": "ImageObject",
      url: "https://immooseboy.com/images/mooseboy-character.webp",
      width: 1200,
      height: 630,
      caption: "Moose Boy character illustration - the legendary silicon graffiti mascot",
    },
    publisher: {
      "@type": "Organization",
      name: "I Am Moose Boy",
      logo: {
        "@type": "ImageObject",
        url: "https://immooseboy.com/images/mooseboy-modified.webp",
      },
    },
    about: {
      "@type": "Thing",
      name: "Silicon Graffiti",
      description:
        "Microscopic artwork etched into computer chips by their designers, also known as chip art or silicon doodling",
    },
    mentions: [
      {
        "@type": "Thing",
        name: "Nokia 5190",
        description: "Popular mobile phone from 1998 containing the Moose Boy silicon graffiti",
      },
      {
        "@type": "Organization",
        name: "Motorola",
        description: "Manufacturer of the RF integrated circuit containing Moose Boy",
      },
    ],
    articleSection: "Technology History",
    wordCount: 2500,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://immooseboy.com",
      },
    ],
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#article-heading", "#nokia-icon", "#hunt-2022"],
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Moose Boy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'Moose Boy is a tiny drawing hidden on a chip inside certain Nokia 5190 phones. It shows a kid with moose antlers holding a sign that says "IM MOOSE BOY." A Motorola chip engineer snuck it in during production in the late 1990s. You can\'t see it without a microscope.',
      },
    },
    {
      "@type": "Question",
      name: "Where exactly is Moose Boy hidden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's not on the main circuit board — that's what threw people off for so long. It's on a chip inside the crystal oscillator, which is a small metal component on the PCB. You have to desolder the oscillator, crack open the metal casing, then look at the chip inside under 100-200x magnification.",
      },
    },
    {
      "@type": "Question",
      name: "Does every Nokia 5190 have Moose Boy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'Nope. Only some production batches have it. Look for crystal oscillators marked "1284A", "13.0C", and date codes from 1998 (like "9823"). Earlier production runs seem to have the best odds. There\'s no guarantee even if you find the right markings.',
      },
    },
    {
      "@type": "Question",
      name: "What is silicon graffiti?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's basically chip engineers hiding tiny drawings on semiconductors. They use the same photolithography process that makes the functional circuits to sneak artwork into empty space on the chip. Engineers have been doing it for decades — you can find everything from cartoon characters to inside jokes. It's gotten rarer because modern chips don't have spare room and companies got strict about it.",
      },
    },
    {
      "@type": "Question",
      name: "What tools do I need to find Moose Boy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Nokia 5190, a phone repair kit, precision tweezers, a soldering iron with a desoldering pump, a razor blade, and most importantly a USB microscope that can do at least 100-200x magnification. You're going to fully disassemble the phone and crack open a tiny metal component, so steady hands help too.",
      },
    },
    {
      "@type": "Question",
      name: "Who created Moose Boy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'Nobody knows for sure. It was a Motorola chip engineer who never came forward publicly. The theory is that "Moose" was a nickname for a friend or coworker, and the art style is clearly inspired by the Big Boy restaurant mascot. Just with antlers.',
      },
    },
    {
      "@type": "Question",
      name: "When was Moose Boy discovered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "People had talked about it in chip art circles for years, but the real community hunt started in 2022. The big breakthrough was figuring out that it wasn't on the main PCB at all — it was one layer deeper, inside the crystal oscillator. That's why nobody could find it before.",
      },
    },
  ],
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Find Moose Boy in a Nokia 5190",
  description:
    "Step-by-step guide to discovering the legendary Moose Boy silicon graffiti hidden inside Nokia 5190 mobile phones.",
  totalTime: "PT2H",
  supply: [
    { "@type": "HowToSupply", name: "Nokia 5190 phone" },
    { "@type": "HowToSupply", name: "Phone repair tool kit" },
    { "@type": "HowToSupply", name: "Precision tweezers" },
    { "@type": "HowToSupply", name: "Soldering iron and desoldering pump" },
    { "@type": "HowToSupply", name: "USB microscope (100-200x magnification)" },
    { "@type": "HowToSupply", name: "Vice grip" },
    { "@type": "HowToSupply", name: "Precision razor blade" },
  ],
  tool: [{ "@type": "HowToTool", name: "Desk magnifying glass with lamp" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Acquire a Nokia 5190",
      text: "Secure a Nokia 5190 phone from the late 1990s. Not every unit houses Moose Boy — seek phones from earlier manufacturing runs for the highest probability.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Disassemble the Phone",
      text: "Remove the rear cover, battery, and faceplate. Use precision instruments to unscrew and detach the housing. Photograph every stage.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Locate the Crystal Oscillator",
      text: "On the main PCB, find the crystal oscillator — a compact silver rectangular metal container usually marked with frequency specifications.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Remove the Oscillator",
      text: "Secure the PCB in a vice grip. Heat your soldering iron to 350-400°C and desolder each connection. Carefully lift the component with precision tweezers.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Open the Oscillator Housing",
      text: "Using a precision razor blade and tweezers, carefully pry open the metal enclosure protecting the chip inside.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Examine Under Magnification",
      text: "Position the exposed chip under a USB microscope at 100-200x magnification. Look for the Moose Boy doodle on the silicon surface.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Document Your Discovery",
      text: "Capture photos or video through your microscope to document this rare piece of engineering heritage.",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="dns-prefetch" href="https://www.ebay.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(howToSchema),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
