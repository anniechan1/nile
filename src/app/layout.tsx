import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Children of the Nile - Flow with the Current of Unity",
  description:
    "A digital movement reconnecting 11 Nile Basin nations through shared stories, cultural innovation, and sustainable cooperation. Join the flow of unity as we build dialogue beyond the GERD 2025 milestone.",
  keywords:
    "Nile Basin, GERD, Ethiopia, Egypt, Sudan, Uganda, Kenya, Tanzania, Rwanda, Burundi, DRC, Eritrea, South Sudan, cultural exchange, cooperation",
  authors: [{ name: "Children of the Nile Collective" }],
  openGraph: {
    title: "Children of the Nile - Flow with the Current of Unity",
    description:
      "A digital movement reconnecting 11 Nile Basin nations through shared stories and sustainable cooperation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Children of the Nile - Flow with the Current of Unity",
    description:
      "A digital movement reconnecting 11 Nile Basin nations through shared stories and sustainable cooperation.",
  },

}




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  )
}
