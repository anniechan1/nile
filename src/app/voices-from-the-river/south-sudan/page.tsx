"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
export default function SouthSudanPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white-50 to-red-50 relative overflow-hidden">


      <MainNav />

      {/* Hero Section */}
      {/* <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-red-100"></div>

        <div
          className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-6xl md:text-8xl">🇸🇸</span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight animate-glow text-blue-600"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
              }}
            >
              SOUTH SUDAN
            </h1>
          </div>

          <h2
            className="text-2xl md:text-4xl font-light mb-8 text-gray-700 italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Voices from the Marshes
          </h2>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-red-700 font-light italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "Even in a time of war, the river flows."
          </blockquote>
          <p className="text-blue-600 text-base font-medium" style={{ fontFamily: "Playfair Display, serif" }}>
            — South Sudanese Proverb
          </p>
        </div>
      </section> */}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <Image
            src="/images/buffalo.jpg"
            alt="buffalo"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div
          className={`relative z-10 text-center text-white px-4 max-w-6xl mx-auto transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-6xl md:text-8xl">🇸🇸</span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-blue-600"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
              }}
            >
              SOUTH SUDAN
            </h1>
          </div>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-5xl mx-auto mb-4 text-blue-600 font-bold italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "Pan e raan ke raan" - "A home belongs to the people and the people belong to the home"
          </blockquote>


        </div>
      </section>



      <main className="relative z-10">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/voices-from-the-river"
            className="inline-flex items-center space-x-2 text-blue-700 hover:text-blue-900 transition-colors font-semibold"
          >
            <ArrowLeft className="h-5 w-5" />
            <span style={{ fontFamily: "Playfair Display, serif" }}>Back to All Voices</span>
          </Link>
        </div>

        {/* Main Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Where the Nile Breathes section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Where the Nile Breathes
                </h3>
                <p
                  className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  In South Sudan, the Nile is not just a river—it is a lifeline, a shelter, and a mirror of history. The
                  White Nile flows through the heart of the country, creating one of the largest wetlands in the world:
                  The Sudd.
                </p>
                <p
                  className="text-xl text-blue-800 leading-relaxed mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Sudd is a place of extraordinary biodiversity, where water buffalo graze beside fishing boats and
                  birds migrate in the tens of thousands. But for South Sudanese, the Nile is also sacred—it shapes
                  movement, ritual, economy, and survival.
                </p>
              </div>

              {/* A River of Refuge and Memory section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  A River of Refuge and Memory
                </h3>
                <p
                  className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Throughout decades of conflict and displacement, the Nile has offered safety and direction. People
                  built homes along its banks, hid in its marshes, crossed it in search of peace.
                </p>
                <p
                  className="text-xl text-blue-800 leading-relaxed mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  In cities like Bor, Malakal, and Juba, the river has been both a connector and a witness. It has seen
                  struggle, but also strength.
                </p>
                <div className="bg-gradient-to-r from-blue-100 to-gray-100 border-l-4 border-blue-500 p-6 rounded-lg">
                  <p
                    className="text-lg font-medium text-blue-800 italic"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Now, as South Sudan rebuilds, the Nile remains central to healing. Water is being used to irrigate
                    fields, support peace dialogues among communities, and spark youth-led development projects in
                    riverside areas.
                  </p>
                </div>
              </div>

              {/* Culture in Motion section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Culture in Motion
                </h3>
                <p
                  className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  South Sudan is home to rich oral traditions, musical heritage, and visual storytelling:
                </p>

                <div className="grid md:grid-cols-1 gap-6 mb-8">
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-blue-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Dance and Ceremony:</strong> The Dinka cattle dance, with its rhythmic stamping and
                      chants, honors both the Nile and the cow—two vital symbols of life.
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-blue-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Food:</strong> Common dishes like kisra (fermented bread), asida, and river fish stews are
                      shared during family and communal gatherings.
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-blue-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Rituals:</strong> Naming ceremonies, rain rituals, and harvest celebrations often take
                      place beside water or include river offerings.
                    </p>
                  </div>
                </div>

                <p className="text-xl text-blue-800 leading-relaxed" style={{ fontFamily: "Playfair Display, serif" }}>
                  Even today, elders say that the river "speaks" in the early morning mist, if you listen.
                </p>
              </div>



            </div>
          </div>
        </section>
      </main>

      <Footer />


    </div>
  )
}
