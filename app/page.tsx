import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ArticleContent } from "@/components/article-content"
import { ProductSection } from "@/components/product-section"
import { Footer } from "@/components/footer"
import { VideoSection } from "@/components/video-section"
import { AboutAuthor } from "@/components/about-author"
import { ToolsNeeded } from "@/components/tools-needed"
import { FaqSection } from "@/components/faq-section"
import { SourcesSection } from "@/components/sources-section"
import { AffiliateDisclosure } from "@/components/affiliate-disclosure"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AffiliateDisclosure />
      <main>
        <HeroSection />
        <ToolsNeeded />
        <ArticleContent />
        <VideoSection />
        <ProductSection />
        <FaqSection />
        <SourcesSection />
        <AboutAuthor />
      </main>
      <Footer />
    </div>
  )
}
