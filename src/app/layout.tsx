import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Children of the Nile - A Shared Present & Future",
  description:
    "A historic Pan-African summit uniting artists, academics, and innovators from all 11 Nile Basin nations. Join us September 6-7, 2025 in Addis Ababa for cultural celebration, academic collaboration, and sustainable innovation.",
  keywords:
    "Nile Basin summit, Pan-African unity, cultural collaboration, academic partnership, sustainable innovation, Ethiopia summit 2025, Nile Basin cooperation, African artists, university collaboration, cross-border dialogue, Addis Ababa conference, Nile heritage, African culture, transboundary cooperation, youth innovation",
  authors: [{ name: "Children of the Nile team" }],
  openGraph: {
    title: "Children of the Nile - A Shared Present & Future",
    description:
      "Historic Pan-African summit uniting 11 Nile Basin nations through art, academia, and innovation. September 6-7, 2025 in Addis Ababa.",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  )
}
