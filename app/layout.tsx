import type React from "react"
import type { Metadata, Viewport } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "OrisysLabs - Raw AI Interface Experiments",
  description:
    "Experiments around terminals, identity, and how we interact with AI systems through raw interfaces. Building the future of human-machine communication.",
  icons: { icon: "/images/orisyslabs.png" },
    generator: 'x'
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.variable} font-mono antialiased bg-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
