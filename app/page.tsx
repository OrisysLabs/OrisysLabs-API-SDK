import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhoWeAreSection } from "@/components/who-we-are-section"
import { ZKPrivacySection } from "@/components/zk-privacy-section"
import { SolanaSection } from "@/components/solana-section"
import { X402Section } from "@/components/x402-section"
import { TerminalSection } from "@/components/terminal-section"
import { Footer } from "@/components/footer"
import { GridBackground } from "@/components/grid-background"
import { ScanlineEffect } from "@/components/scanline-effect"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <GridBackground />
      <ScanlineEffect />
      <Navbar />
      <HeroSection />
      <WhoWeAreSection />
      <ZKPrivacySection />
      <SolanaSection />
      <X402Section />
      <TerminalSection />
      <Footer />
    </main>
  )
}
