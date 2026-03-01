import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "TODOISH — A calm terminal todo manager for developers",
  description:
    "A beautifully minimal, terminal-based todo application built for developers. Manage your tasks without leaving the terminal.",
  keywords: ["todoish", "cli", "terminal", "todo", "npm", "developer tool"],
  openGraph: {
    title: "TODOISH",
    description:
      "A calm, modern terminal space for managing your todos. Built for developers.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
