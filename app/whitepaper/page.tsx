"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Download, ExternalLink, FileText, Copy, Check } from "lucide-react"
import { useState } from "react"

const sections = [
  { number: "0", title: "Abstract", page: "1" },
  { number: "1", title: "Introduction: The Privacy Problem", page: "3" },
  { number: "2", title: "Zero-Knowledge Proof System", page: "8" },
  { number: "3", title: "Solana Integration Architecture", page: "16" },
  { number: "4", title: "x402 Privacy Bridge Protocol", page: "24" },
  { number: "5", title: "Identity System Design", page: "32" },
  { number: "6", title: "Terminal Interface Specification", page: "40" },
  { number: "7", title: "Security Analysis", page: "48" },
  { number: "8", title: "Tokenomics & Governance", page: "56" },
  { number: "9", title: "Roadmap & Future Work", page: "64" },
  { number: "A", title: "Appendix: Technical Specifications", page: "70" },
]

export default function WhitepaperPage() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "Coming Soon"

  const handleCopy = () => {
    if (contractAddress !== "Coming Soon") {
      navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="glass-terminal border-b border-[#00ffcc]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-[#4a4a4a] hover:text-[#00ffcc] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back
            </Link>
            <div className="w-px h-6 bg-[#00ffcc]/10" />
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg border border-[#00ffcc]/20 overflow-hidden">
                  <Image src="/images/orisyslabs.png" alt="OrisysLabs" fill className="object-contain p-0.5" />
                </div>
              </div>
              <span className="font-bold">
                <span className="text-[#e0e0e0]">Orisys</span>
                <span className="terminal-text">Paper</span>
              </span>
            </Link>
          </div>
          <div
            onClick={handleCopy}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-[#00ffcc]/20 rounded bg-[#0a0a0a]/80 cursor-pointer hover:border-[#00ffcc]/50 transition-all duration-300"
          >
            <span className="text-xs text-[#4a4a4a] font-mono">CA:</span>
            <span className="text-xs text-[#00ffcc] font-mono">{contractAddress}</span>
            {contractAddress !== "Coming Soon" &&
              (copied ? <Check size={12} className="text-[#39ff14]" /> : <Copy size={12} className="text-[#4a4a4a]" />)}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 rounded-2xl border border-[#00ffcc]/20 overflow-hidden animate-float-orbit">
              <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center">
                <FileText className="w-12 h-12 text-[#00ffcc]" />
              </div>
            </div>
            <div className="absolute -inset-4 border border-[#00ffcc]/10 rounded-full animate-spin-slow" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#e0e0e0] mb-4">
            OrisysLabs <span className="terminal-text">Whitepaper</span>
          </h1>
          <p className="text-[#4a4a4a] text-lg mb-8 max-w-2xl mx-auto font-mono">
            Technical specification for privacy-preserving AI interfaces on Solana with ZK proofs and x402 cross-chain
            protocol.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-[#00ffcc] text-black font-bold text-sm tracking-wider hover:bg-[#00ffcc]/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,204,0.5)] flex items-center gap-2">
              <Download className="w-5 h-5" />
              DOWNLOAD_PDF
            </button>
            <Link
              href="/docs"
              className="px-8 py-4 border border-[#00ffcc]/30 text-[#00ffcc] font-bold text-sm tracking-wider hover:bg-[#00ffcc]/10 hover:border-[#00ffcc] transition-all duration-300 flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              READ_DOCS
            </Link>
          </div>
        </div>

        {/* Document Info */}
        <div className="glass-terminal border border-[#00ffcc]/20 rounded-lg p-8 mb-12">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold terminal-text mb-2">v1.0</div>
              <div className="text-[#4a4a4a] text-xs font-mono">VERSION</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#e0e0e0] mb-2">70+</div>
              <div className="text-[#4a4a4a] text-xs font-mono">PAGES</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#39ff14] mb-2">ZK</div>
              <div className="text-[#4a4a4a] text-xs font-mono">PROOF_SYSTEM</div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="glass-terminal border border-[#00ffcc]/20 rounded-lg p-8">
          <h2 className="text-xl font-bold text-[#e0e0e0] mb-6">// TABLE_OF_CONTENTS</h2>
          <div className="space-y-2">
            {sections.map((section, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border border-[#00ffcc]/10 hover:border-[#00ffcc]/30 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 border border-[#00ffcc]/30 flex items-center justify-center text-sm font-bold text-[#00ffcc] group-hover:bg-[#00ffcc]/10 transition-all">
                    {section.number}
                  </span>
                  <span className="text-[#e0e0e0] font-mono text-sm group-hover:text-[#00ffcc] transition-colors">
                    {section.title}
                  </span>
                </div>
                <span className="text-[#4a4a4a] text-xs font-mono">p.{section.page}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Abstract Preview */}
        <div className="mt-12 glass-terminal border border-[#00ffcc]/20 rounded-lg p-8">
          <h2 className="text-xl font-bold text-[#e0e0e0] mb-6">// ABSTRACT</h2>
          <div className="text-[#4a4a4a] leading-relaxed space-y-4 font-mono text-sm">
            <p>
              This paper introduces OrisysLabs, a research collective focused on experiments around terminals, identity,
              and how we interact with AI systems through raw interfaces.
            </p>
            <p>
              We present a privacy-first infrastructure built on Solana, secured by zero-knowledge proofs, and connected
              through the x402 protocol for cross-chain interoperability. Our approach strips away the abstractions
              between humans and machines, treating the command line as the truest form of human-machine dialogue.
            </p>
            <p>
              Through modular architecture including a terminal layer, ZK-based identity system, privacy bridge, and
              high-speed Solana runtime, we demonstrate how privacy-preserving AI interaction can be achieved without
              compromising on speed, cost, or user experience.
            </p>
            <p className="terminal-text">
              The future of AI interaction is raw, private, and verifiable. This paper is our specification.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
