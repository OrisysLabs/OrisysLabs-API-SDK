"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  Book,
  Shield,
  ArrowLeft,
  Layers,
  Users,
  FileCode,
  Terminal,
  Lock,
  Eye,
  Globe,
  Key,
  Zap,
  Copy,
  Check,
} from "lucide-react"

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Book,
    content: `OrisysLabs is a research collective focused on experiments around terminals, identity, and how we interact with AI systems through raw interfaces.

We build privacy-first infrastructure on Solana, secured by zero-knowledge proofs, and connected through the x402 protocol for cross-chain interoperability.

Our mission is to strip away the abstractions between humans and machines. The command line is the truest form of human-machine dialogue. We believe in transparency through verifiability, not exposure.

Core Technologies:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Zero-Knowledge Proofs - Privacy without compromise
▸ Solana Integration - Speed and scalability
▸ x402 Protocol - Cross-chain privacy bridge
▸ Terminal-First Design - Raw AI interfaces`,
  },
  {
    id: "zk-proofs",
    title: "Zero-Knowledge Proofs",
    icon: Lock,
    content: `OrisysLabs uses zk-SNARK circuits to enforce transaction correctness while keeping all sensitive details hidden within cryptographic proofs.

WHAT ZK PROOFS HIDE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Transaction amounts
▸ Sender identity
▸ Receiver identity  
▸ Metadata and behavioral patterns

WHAT ZK PROOFS VERIFY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Spending key ownership
▸ Non-negative amounts and balance conservation
▸ Merkle tree membership of notes
▸ Creation of new valid commitments

Implementation Example:
\`\`\`typescript
import { ZKProof } from '@orisys/zk';

const proof = await ZKProof.generate({
  statement: "balance >= amount",
  witness: privateData,
  public: commitment
});

await ZKProof.verify(proof); // ✓ Verified
\`\`\``,
  },
  {
    id: "solana",
    title: "Solana Integration",
    icon: Zap,
    content: `OrisysLabs is built on Solana for maximum speed and minimal cost. Solana's architecture enables privacy-preserving applications at scale.

WHY SOLANA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ 400ms finality - Near-instant confirmation
▸ 65,000 TPS - Massive throughput capacity
▸ $0.00025 avg tx cost - Practically free
▸ Proof of History - Trustless time ordering

SEALEVEL RUNTIME:
Solana's parallel execution environment enables multiple ZK proofs to be verified simultaneously, dramatically increasing throughput for privacy operations.

PROGRAM ARCHITECTURE:
\`\`\`rust
use solana_program::entrypoint;
use orisys_zk::{prove, verify};

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    data: &[u8],
) -> ProgramResult {
    let proof = prove(data)?;
    verify(&proof, accounts)?;
    Ok(())
}
\`\`\``,
  },
  {
    id: "x402-bridge",
    title: "x402 Privacy Bridge",
    icon: Globe,
    content: `The x402 Privacy Bridge is a burn-and-mint mechanism that enables private cross-chain transfers while preserving full unlinkability.

HOW IT WORKS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: BURN ON SOURCE CHAIN
Assets are cryptographically burned on the source chain, creating a proof of destruction verified by the bridge protocol.

Step 2: ZK PROOF GENERATION
Zero-knowledge proof is generated to verify the burn event without revealing sender, amount, or destination details.

Step 3: CROSS-CHAIN RELAY
Encrypted proof is relayed to the destination chain through a decentralized network of validators.

Step 4: MINT ON DESTINATION
Assets are minted to a fresh shielded address on the destination chain, preserving complete unlinkability.

SUPPORTED CHAINS:
┌─────────────┬──────────┐
│ Ethereum    │ LIVE     │
│ Solana      │ LIVE     │
│ Cosmos      │ LIVE     │
│ Polygon     │ LIVE     │
│ Arbitrum    │ LIVE     │
│ Base        │ SOON     │
│ Optimism    │ SOON     │
└─────────────┴──────────┘`,
  },
  {
    id: "architecture",
    title: "System Architecture",
    icon: Layers,
    content: `OrisysLabs consists of modular components working together to enable secure, private, and scalable AI interactions.

CORE COMPONENTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TERMINAL LAYER
Raw interface for human-machine dialogue. No abstractions, no middleware. Direct access to AI systems.

IDENTITY SYSTEM
ZK-based identity verification. Prove attributes without revealing data. Anonymous credentials for trustless auth.

PRIVACY BRIDGE (x402)
Burn-and-mint mechanism for cross-chain unlinkability. No custodial risk, just cryptographic proofs.

SOLANA RUNTIME
High-speed execution layer. Parallel proof verification. Sub-second finality.

PROOF SYSTEM (zk-SNARK)
Verifies spending key ownership, non-negative amounts, balance conservation, and Merkle tree membership.`,
  },
  {
    id: "address-model",
    title: "Address & Key Model",
    icon: Key,
    content: `OrisysLabs uses a flexible address model with multiple key roles for maximum privacy and selective transparency.

KEY TYPES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SPEND KEY
The master key that authorizes private transfers. Keep this secret. Never share. Controls all funds.

VIEW KEY
Derived from spend key. Allows read-only access to transaction history. Share with auditors or counterparties who need visibility.

AUDIT KEY (Optional)
Special key for regulated entities. Enables compliance without compromising privacy for non-disclosed transactions.

ADDRESS FORMATS:
▸ Shielded Address - Fully private, default mode
▸ Transparent Address - Public, for compatibility
▸ Hybrid Mode - Mix both as needed`,
  },
  {
    id: "security",
    title: "Security Philosophy",
    icon: Shield,
    content: `OrisysLabs emphasizes trust minimization, censorship resistance, and cryptographic rigor at every layer.

CORE PRINCIPLES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Trust Minimization - Every component minimizes trust assumptions
▸ Censorship Resistance - Transactions cannot be blocked or filtered
▸ Cryptographic Rigor - Battle-tested, formally verified primitives
▸ Secure Upgrades - Timelocks allow users to exit before changes
▸ Safe Multi-Chain - Cryptographic proofs, not trusted bridges

THREAT MODEL:
▸ Global passive adversaries
▸ Metadata correlation attacks
▸ Cross-chain linking attempts
▸ Timing analysis
▸ Bridge exploits (no bridges to exploit)`,
  },
  {
    id: "developer-sdk",
    title: "Developer SDK",
    icon: FileCode,
    content: `Build privacy-preserving applications with our comprehensive SDK.

INSTALLATION:
\`\`\`bash
npm install @orisys/core @orisys/zk @orisys/x402
\`\`\`

BASIC USAGE:
\`\`\`typescript
import { OrisysClient, ZKProof } from '@orisys/core';
import { X402Bridge } from '@orisys/x402';

// Initialize client
const client = new OrisysClient({
  network: 'mainnet',
  keypair: wallet.keypair
});

// Create shielded transfer
const transfer = await client.shield({
  amount: encrypted(value),
  recipient: shieldedAddress,
  proof: ZKProof.generate(),
});

// Cross-chain transfer
await X402Bridge.transfer({
  from: 'solana',
  to: 'ethereum',
  ...transfer
});
\`\`\`

AVAILABLE PACKAGES:
▸ @orisys/core - Core privacy primitives
▸ @orisys/zk - Zero-knowledge proof system
▸ @orisys/x402 - Cross-chain bridge
▸ @orisys/terminal - Terminal interface SDK`,
  },
  {
    id: "user-experience",
    title: "User Experience",
    icon: Eye,
    content: `Privacy should be invisible. OrisysLabs is designed for frictionless, intuitive use.

TERMINAL-FIRST DESIGN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The command line is our primary interface. Raw, direct, honest. No hidden abstractions or middleware bloat.

SELECTIVE TRANSPARENCY:
Users choose what data to reveal and to whom. Generate view keys for auditors, share transaction proofs with counterparties, or stay completely private.

INSTANT TRANSACTIONS:
Sub-second finality on Solana means you never wait. Private transactions confirm as fast as transparent ones.

CROSS-PLATFORM:
Terminal works everywhere. SSH into the system from any device.`,
  },
  {
    id: "community",
    title: "Community",
    icon: Users,
    content: `OrisysLabs is built in the open, for the community.

OFFICIAL CHANNELS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ X (Twitter): https://x.com/OrisysLabs
▸ GitHub: https://github.com/OrisysLabs
▸ Discord: Coming soon
▸ Telegram: Coming soon

RESOURCES:
▸ Documentation: /docs
▸ Terminal: /terminal
▸ Whitepaper: /whitepaper

CONTRIBUTE:
All code is open source. Fork, improve, submit PRs. We review everything.

Privacy is infrastructure. Join us in building it.`,
  },
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState(sections[0])
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
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg border border-[#00ffcc]/20 overflow-hidden">
                  <Image src="/images/orisyslabs.png" alt="OrisysLabs" fill className="object-contain p-0.5" />
                </div>
              </div>
              <span className="font-bold">
                <span className="text-[#e0e0e0]">Orisys</span>
                <span className="terminal-text">Docs</span>
              </span>
            </Link>
          </div>

          {/* CA Badge */}
          <div className="hidden md:flex items-center gap-4">
            <div
              onClick={handleCopy}
              className="flex items-center gap-2 px-3 py-1.5 border border-[#00ffcc]/20 rounded bg-[#0a0a0a]/80 cursor-pointer hover:border-[#00ffcc]/50 transition-all duration-300"
            >
              <span className="text-xs text-[#4a4a4a] font-mono">CA:</span>
              <span className="text-xs text-[#00ffcc] font-mono">{contractAddress}</span>
              {contractAddress !== "Coming Soon" &&
                (copied ? (
                  <Check size={12} className="text-[#39ff14]" />
                ) : (
                  <Copy size={12} className="text-[#4a4a4a]" />
                ))}
            </div>
            <Link
              href="/terminal"
              className="px-4 py-2 rounded border border-[#00ffcc]/20 text-sm text-[#4a4a4a] hover:text-[#00ffcc] hover:border-[#00ffcc]/50 transition-colors flex items-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              Terminal
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <nav className="glass-terminal border border-[#00ffcc]/20 rounded-lg p-4">
              <h3 className="text-xs font-mono text-[#4a4a4a] uppercase tracking-widest mb-4 px-3">// DOCUMENTATION</h3>
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-left transition-all duration-300 ${
                        activeSection.id === section.id
                          ? "bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/30"
                          : "text-[#4a4a4a] hover:text-[#e0e0e0] hover:bg-[#00ffcc]/5 border border-transparent"
                      }`}
                    >
                      <section.icon className="w-4 h-4" />
                      <span className="text-sm font-mono">{section.title}</span>
                      {activeSection.id === section.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <main className="glass-terminal border border-[#00ffcc]/20 rounded-lg p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 border border-[#00ffcc]/30 rounded text-[#00ffcc]">
                <activeSection.icon className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold text-[#e0e0e0]">{activeSection.title}</h1>
            </div>
            <div className="prose prose-invert max-w-none">
              {activeSection.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-[#4a4a4a] leading-relaxed mb-4 whitespace-pre-wrap font-mono text-sm">
                  {paragraph}
                </p>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
