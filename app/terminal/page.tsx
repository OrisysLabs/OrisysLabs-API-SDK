"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Book, Copy, Check } from "lucide-react"

interface TerminalLine {
  type: "input" | "output" | "error" | "success" | "info" | "privacy"
  content: string
}

const commands: Record<string, string> = {
  help: `
╔══════════════════════════════════════════════════════════════════╗
║               ORISYSLABS PRIVACY TERMINAL v1.0                   ║
╠══════════════════════════════════════════════════════════════════╣
║  CORE COMMANDS                                                   ║
║  ────────────────────────────────────────────────────────────── ║
║  help          - Display this help                              ║
║  about         - What is OrisysLabs?                            ║
║  manifesto     - Our vision and principles                      ║
║  zk            - Learn about Zero-Knowledge Proofs              ║
║  solana        - Solana integration details                     ║
║  x402          - x402 Privacy Bridge protocol                   ║
║  architecture  - System architecture overview                   ║
║  security      - Security philosophy                            ║
║  roadmap       - Development roadmap                            ║
║  social        - Official channels                              ║
║  ────────────────────────────────────────────────────────────── ║
║  UTILITY COMMANDS                                                ║
║  ────────────────────────────────────────────────────────────── ║
║  clear         - Clear terminal                                 ║
║  version       - Version info                                   ║
║  status        - Network status                                 ║
║  shield        - Enter shielded mode                            ║
╚══════════════════════════════════════════════════════════════════╝`,
  about: `
┌─────────────────────────────────────────────────────────────────┐
│                      ABOUT ORISYSLABS                           │
└─────────────────────────────────────────────────────────────────┘

OrisysLabs is a research collective focused on experiments around
terminals, identity, and how we interact with AI systems through
raw interfaces.

WHAT WE BUILD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Terminal-First Interfaces - Raw access to AI systems
▸ ZK Privacy Layer - Zero-knowledge proofs for privacy
▸ Solana Integration - High-speed, low-cost transactions
▸ x402 Protocol - Cross-chain privacy bridge

THE PHILOSOPHY:
We strip away the abstractions. The command line is the truest
form of human-machine dialogue. No middleware, no wrappers,
just raw interaction.

→ Follow us: https://x.com/OrisysLabs
→ GitHub: https://github.com/OrisysLabs`,
  manifesto: `
┌─────────────────────────────────────────────────────────────────┐
│                        MANIFESTO                                │
└─────────────────────────────────────────────────────────────────┘

We believe in:

▸ RAW INTERFACES
  Strip away the abstractions. Direct access to AI systems.
  The terminal is truth.

▸ PRIVACY BY DEFAULT
  Zero-knowledge proofs at the core. Your data stays yours.
  Prove what you need without revealing what you don't.

▸ IDENTITY WITHOUT EXPOSURE
  Authenticate without identification. Verify without revealing.
  Anonymous credentials for the trustless era.

▸ OPEN SOURCE FIRST
  All experiments live in the open. Inspect, fork, contribute.
  Transparency builds trust in trustless systems.

▸ SPEED WITHOUT COMPROMISE
  Built on Solana. 400ms finality. $0.00025 per transaction.
  Privacy shouldn't be slow.

This is OrisysLabs. Welcome to the terminal.`,
  zk: `
┌─────────────────────────────────────────────────────────────────┐
│                  ZERO-KNOWLEDGE PROOFS                          │
└─────────────────────────────────────────────────────────────────┘

OrisysLabs uses zk-SNARKs to enforce correctness while keeping
all sensitive details hidden.

WHAT ZK PROOFS HIDE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Transaction amounts         [HIDDEN]
▸ Sender identity             [HIDDEN]
▸ Receiver identity           [HIDDEN]
▸ Metadata & patterns         [HIDDEN]

WHAT ZK PROOFS VERIFY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Spending key ownership      [VERIFIED]
▸ Non-negative amounts        [VERIFIED]
▸ Balance conservation        [VERIFIED]
▸ Merkle tree membership      [VERIFIED]

EXAMPLE:
zkProof.verify({
  statement: "age >= 18",
  witness: hidden,
  public: commitment
}) // ✓ Verified without revealing age`,
  solana: `
┌─────────────────────────────────────────────────────────────────┐
│                   SOLANA INTEGRATION                            │
└─────────────────────────────────────────────────────────────────┘

OrisysLabs is built on Solana for maximum performance.

METRICS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Finality:      400ms
▸ TPS Capacity:  65,000
▸ Avg TX Cost:   $0.00025
▸ Status:        OPERATIONAL

WHY SOLANA:
▸ Proof of History - Trustless time ordering
▸ Sealevel Runtime - Parallel execution
▸ Global State - No sharding complexity
▸ Low Fees - Privacy for everyone

PROGRAM DEPLOYMENT:
Programs are deployed on Solana mainnet with verified ZK circuits
for private operations.`,
  x402: `
┌─────────────────────────────────────────────────────────────────┐
│                   x402 PRIVACY BRIDGE                           │
└─────────────────────────────────────────────────────────────────┘

Burn-and-mint privacy bridge for trustless cross-chain transfers.

PROTOCOL FLOW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[01] BURN ON SOURCE CHAIN
     Assets cryptographically burned, proof created

[02] ZK PROOF GENERATION
     Proof verifies burn without revealing details

[03] CROSS-CHAIN RELAY
     Encrypted proof relayed via validators

[04] MINT ON DESTINATION
     Assets minted to shielded address

SUPPORTED CHAINS:
┌─────────────────┬────────────────────────────────────────────┐
│ Ethereum        │ ████████████████████ LIVE                  │
│ Solana          │ ████████████████████ LIVE                  │
│ Cosmos          │ ████████████████████ LIVE                  │
│ Polygon         │ ████████████████████ LIVE                  │
│ Arbitrum        │ ████████████████████ LIVE                  │
│ Base            │ ██████████░░░░░░░░░░ SOON                  │
└─────────────────┴────────────────────────────────────────────┘

42+ chains planned for full interoperability.`,
  architecture: `
┌─────────────────────────────────────────────────────────────────┐
│                   SYSTEM ARCHITECTURE                           │
└─────────────────────────────────────────────────────────────────┘

OrisysLabs modular component architecture:

TERMINAL LAYER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Raw interface for human-machine dialogue. Direct AI access.

IDENTITY SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ZK-based verification. Anonymous credentials. Selective disclosure.

PROOF SYSTEM (zk-SNARK)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Verifies ownership, amounts, balances, Merkle membership.

PRIVACY BRIDGE (x402)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Burn-and-mint for cross-chain unlinkability.

SOLANA RUNTIME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
High-speed execution. Parallel proof verification.`,
  security: `
┌─────────────────────────────────────────────────────────────────┐
│                   SECURITY PHILOSOPHY                           │
└─────────────────────────────────────────────────────────────────┘

CORE PRINCIPLES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Trust Minimization     - Minimize assumptions everywhere
▸ Censorship Resistance  - Transactions cannot be blocked
▸ Cryptographic Rigor    - Battle-tested primitives only
▸ Secure Upgrades        - Timelocks allow exit
▸ Safe Multi-Chain       - Proofs, not bridges

THREAT MODEL:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Global passive adversaries       [PROTECTED]
▸ Metadata correlation attacks     [PROTECTED]
▸ Cross-chain linking attempts     [PROTECTED]
▸ Timing analysis                  [PROTECTED]
▸ Bridge exploits                  [N/A - no bridges]`,
  roadmap: `
┌─────────────────────────────────────────────────────────────────┐
│                    DEVELOPMENT ROADMAP                          │
└─────────────────────────────────────────────────────────────────┘

PHASE 0: FOUNDATION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [COMPLETED] ✓
├─ Protocol design and specification
├─ Core cryptographic research
├─ Team formation
└─ Initial development

PHASE 1: CORE DEVELOPMENT ━━━━━━━━━━━━━━━━━━━━━━━━ [IN PROGRESS]
├─ Terminal interface launch
├─ ZK proof system deployment
├─ Solana program development
└─ Identity system prototype

PHASE 2: BRIDGE & SCALING ━━━━━━━━━━━━━━━━━━━━━━━━ [UPCOMING]
├─ x402 Privacy Bridge launch
├─ Multi-chain integration
├─ Developer SDK release
└─ Ecosystem expansion

PHASE 3: ECOSYSTEM ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ [PLANNED]
├─ 42+ chain support
├─ Governance launch
├─ Partner integrations
└─ Global adoption`,
  social: `
┌─────────────────────────────────────────────────────────────────┐
│                   OFFICIAL CHANNELS                             │
└─────────────────────────────────────────────────────────────────┘

CONNECT WITH ORISYSLABS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ X (Twitter):  https://x.com/OrisysLabs
▸ GitHub:       https://github.com/OrisysLabs
▸ Discord:      Coming soon
▸ Telegram:     Coming soon

RESOURCES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Documentation:  /docs
▸ Terminal:       /terminal (you are here)
▸ Whitepaper:     /whitepaper

Join us. Build with us. The terminal awaits.`,
  version: `
OrisysLabs Privacy Terminal v1.0.0
Protocol Version: Privacy Layer v0.1
Network: Solana Mainnet
Security Level: Maximum
Build: 2024.12.23`,
  status: `
┌─────────────────────────────────────────────────────────────────┐
│                    NETWORK STATUS                               │
└─────────────────────────────────────────────────────────────────┘

SYSTEM STATUS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
▸ Terminal Layer     [██████████] OPERATIONAL
▸ ZK Proof System    [██████████] GENERATING
▸ Solana Runtime     [██████████] ACTIVE
▸ x402 Bridge        [████████░░] LAUNCHING
▸ Identity System    [██████░░░░] DEVELOPMENT

METRICS:
┌────────────────────┬────────────────────────────────────────────┐
│ Solana TPS         │ 65,000 (capacity)                          │
│ Proof Gen Time     │ <1 second                                  │
│ Active Chains      │ 5 (ETH, SOL, COSMOS, POLY, ARB)            │
│ Privacy Level      │ Maximum                                    │
│ Network Uptime     │ 99.99%                                     │
└────────────────────┴────────────────────────────────────────────┘

Last sync: ${new Date().toLocaleString()}`,
  shield: `
┌─────────────────────────────────────────────────────────────────┐
│                    SHIELDED MODE ACTIVATED                      │
└─────────────────────────────────────────────────────────────────┘

                    ░░░░░░░░░░░░░░░░░░░░
                 ░░                      ░░
               ░░   YOUR CONNECTION IS    ░░
              ░░        S H I E L D E D    ░░
               ░░                         ░░
                 ░░   Zero-knowledge     ░░
                   ░░   protection     ░░
                     ░░░░░░░░░░░░░░░░░

Your interactions are now protected by:

▸ zk-SNARK cryptographic proofs
▸ Encrypted commitments
▸ Nullifier-based double-spend protection
▸ End-to-end unlinkability

No one can see:
▸ Transaction amounts
▸ Sender/receiver identity
▸ Metadata or patterns

You are private. You are protected. You are OrisysLabs.

Type 'help' to see available commands.`,
}

export default function TerminalPage() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "privacy", content: "═══════════════════════════════════════════════════════════════════" },
    { type: "success", content: "     ██████╗ ██████╗ ██╗███████╗██╗   ██╗███████╗██╗      █████╗ ██████╗ ███████╗" },
    { type: "success", content: "    ██╔═══██╗██╔══██╗██║██╔════╝╚██╗ ██╔╝██╔════╝██║     ██╔══██╗██╔══██╗██╔════╝" },
    { type: "success", content: "    ██║   ██║██████╔╝██║███████╗ ╚████╔╝ ███████╗██║     ███████║██████╔╝███████╗" },
    { type: "success", content: "    ██║   ██║██╔══██╗██║╚════██║  ╚██╔╝  ╚════██║██║     ██╔══██║██╔══██╗╚════██║" },
    { type: "success", content: "    ╚██████╔╝██║  ██║██║███████║   ██║   ███████║███████╗██║  ██║██████╔╝███████║" },
    { type: "success", content: "     ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝" },
    { type: "privacy", content: "═══════════════════════════════════════════════════════════════════" },
    { type: "output", content: "            OrisysLabs Terminal v1.0 | Raw AI Interfaces" },
    { type: "output", content: "      Experiments around terminals, identity, and AI systems" },
    { type: "privacy", content: "═══════════════════════════════════════════════════════════════════" },
    { type: "output", content: "\nType 'help' to see available commands. Type 'shield' to go private.\n" },
  ])
  const [input, setInput] = useState("")
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const contractAddress = "Coming Soon"

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  const handleCopy = () => {
    if (contractAddress !== "Coming Soon") {
      navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    setLines((prev) => [...prev, { type: "input", content: `orisys@terminal:~$ ${cmd}` }])

    if (trimmed === "clear") {
      setLines([
        { type: "output", content: "OrisysLabs Privacy Terminal v1.0" },
        { type: "output", content: "Type 'help' for available commands.\n" },
      ])
      return
    }

    if (commands[trimmed]) {
      const type = trimmed === "shield" ? "privacy" : "success"
      setLines((prev) => [...prev, { type, content: commands[trimmed] }])
    } else if (trimmed === "") {
      // Do nothing
    } else {
      setLines((prev) => [
        ...prev,
        {
          type: "error",
          content: `Command not found: '${trimmed}'\nType 'help' to see available commands.`,
        },
      ])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleCommand(input)
    setInput("")
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
                <span className="terminal-text">Terminal</span>
              </span>
            </Link>
          </div>
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
              href="/docs"
              className="px-4 py-2 rounded border border-[#00ffcc]/20 text-sm text-[#4a4a4a] hover:text-[#00ffcc] hover:border-[#00ffcc]/50 transition-colors flex items-center gap-2"
            >
              <Book className="w-4 h-4" />
              Docs
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="glass-terminal border border-[#00ffcc]/20 rounded-lg overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a0a] border-b border-[#00ffcc]/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="ml-4 text-sm text-[#4a4a4a] font-mono">orisys@terminal ~ Raw AI Interfaces</span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="h-[600px] overflow-y-auto p-6 font-mono text-sm bg-black/50"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, i) => (
              <div
                key={i}
                className={`mb-1 whitespace-pre-wrap ${
                  line.type === "input"
                    ? "text-[#00ffcc]"
                    : line.type === "error"
                      ? "text-[#ff5f56]"
                      : line.type === "success"
                        ? "text-[#39ff14]"
                        : line.type === "privacy"
                          ? "text-[#00ffcc]/50"
                          : "text-[#e0e0e0]"
                }`}
              >
                {line.content}
              </div>
            ))}

            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-[#00ffcc]">orisys@terminal:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-[#e0e0e0] outline-none caret-[#00ffcc]"
                autoFocus
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </div>
        </div>

        {/* Quick commands */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {["help", "about", "zk", "solana", "x402", "shield"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                handleCommand(cmd)
                inputRef.current?.focus()
              }}
              className="px-3 py-1.5 border border-[#00ffcc]/20 rounded text-xs text-[#4a4a4a] hover:text-[#00ffcc] hover:border-[#00ffcc]/50 transition-all font-mono"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
