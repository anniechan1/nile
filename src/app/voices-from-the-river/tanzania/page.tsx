"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function TanzaniaPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 relative overflow-hidden">
      <MainNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <Image
            src="/images/elephants.webp"
            alt="Elephants in Tanzanian savanna landscape"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div
          className={`relative z-10 text-center text-white px-4 max-w-6xl mx-auto transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-6xl md:text-8xl">🇹🇿</span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-green-700"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 0 30px rgba(16, 185, 129, 0.5)",
              }}
            >
              TANZANIA
            </h1>
          </div>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-green-700 font-bold italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "Haba na haba hujaza kibaba." — "Little by little fills the measure."
          </blockquote>
        </div>
      </section>

      <main className="relative z-10">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/voices-from-the-river"
            className="inline-flex items-center space-x-2 text-green-700 hover:text-green-900 transition-colors font-semibold"
          >
            <ArrowLeft className="h-5 w-5" />
            <span style={{ fontFamily: "Playfair Display, serif" }}>Back to All Voices</span>
          </Link>
        </div>

        {/* Main Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* The Land That Feeds the Nile section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Land That Feeds the Nile
                </h3>

                <div className="grid lg:grid-cols-1 gap-12 items-center">
                  <div className="text-start">
                    <p
                      className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Tanzania holds one of the great secrets of the Nile: Lake Victoria. Shared with Uganda and Kenya,
                      it is the largest lake in Africa—and the main reservoir of the White Nile.
                    </p>
                    <p
                      className="text-xl text-green-800 leading-relaxed mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      For Tanzanians, especially in the Mwanza, Kagera, and Mara regions, the Nile begins as a lake that
                      gives life to people, animals, and dreams. The rivers Kagera and Mara that feed Lake Victoria rise
                      from the highlands and forests of northwestern Tanzania.
                    </p>
                    <div className="bg-gradient-to-r from-green-100 to-blue-100 border-l-4 border-green-500 p-6 rounded-lg">
                      <p
                        className="text-lg font-medium text-green-800 italic"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        These are not just waterways—they are threads in the region's ecological, spiritual, and
                        cultural fabric.
                      </p>
                    </div>
                  </div>


                </div>
              </div>

              {/* Living With the Water section */}
              <div className="mb-20 relative">
                {/* Full-width background image */}
                <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-screen h-full">
                  <Image
                    src="/images/boat1.webp"
                    alt="Fishing community at Lake Victoria harbor"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                </div>

                <div className="relative z-10 py-32">
                  <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col gap-12">
                      {/* Content at the top */}
                      <div>
                        <h3
                          className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                          }}
                        >
                          Living With the Water
                        </h3>
                        <p
                          className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          Fisherfolk in Mwanza call Lake Victoria "our workplace, our kitchen, and our mirror." Every
                          sunrise brings hundreds of boats to the water, continuing traditions passed down for
                          generations.
                        </p>
                        <p
                          className="text-xl text-white leading-relaxed font-medium drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          But the lake, and the Nile it feeds, are under pressure. Overfishing, invasive species like
                          the Nile perch, and climate unpredictability have made life harder. Plastic pollution, too, is
                          a growing threat.
                        </p>
                      </div>

                      {/* Quote box at the bottom */}
                      <div className="flex items-end">
                        <div className="bg-white/95 backdrop-blur-sm border-l-4 border-green-500 p-6 rounded-lg shadow-2xl w-full">
                          <p
                            className="text-lg font-medium text-green-800 italic"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            Yet in the face of these challenges, Tanzanians are responding—through community-led lake
                            restoration, youth clean-up drives, and campaigns to reduce single-use plastics.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Culture That Flows With the River section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Culture That Flows With the River
                </h3>

                <div className="grid lg:grid-cols-1 gap-8 mb-8 items-center">

                  {/* Text right */}
                  <div className="text-start">
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-green-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Music & Dance:</strong> The rhythmic ngoma drum dances of the Sukuma people near Lake
                        Victoria celebrate rain, harvest, and community gatherings.
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-green-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Food:</strong> Tanzanians in the Nile basin regions enjoy dishes like samaki wa kukaanga
                        (fried fish), ugali, and mlenda (okra stew).
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                      <p className="text-lg text-green-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Spiritual Life:</strong> In rural Kagera, elders remember blessing ceremonies by the
                        rivers, and naming children after natural events like rains or floods—marking deep connections
                        to water.
                      </p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
