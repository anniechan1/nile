import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Children of the Nile - A Shared Present & Future",
  description:
    "A historic Pan-African summit uniting artists, academics, and innovators from all 11 Nile Basin nations. Join us September 6-7, 2025 online for cultural celebration, academic collaboration, and sustainable innovation.",
  keywords:
    "Nile Basin summit, Pan-African unity, cultural collaboration, academic partnership, sustainable innovation, Ethiopia summit 2025, Nile Basin cooperation, African artists, university collaboration, cross-border dialogue, Addis Ababa conference, Nile heritage, African culture, transboundary cooperation, youth innovation",
  authors: [{ name: "Children of the Nile team" }],
  openGraph: {
    title: "Children of the Nile - A Shared Present & Future",
    description:
      "Historic Pan-African summit uniting 11 Nile Basin nations through art, academia, and innovation. September 6-7, 2025 online.",
    type: "website",
    locale: "en_US",

  }

}




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      </head>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  )
}
