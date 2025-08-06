"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft, Waves, Mountain, Users } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function DRCPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50">
      <MainNav />

      {/* Hero Section - Different Layout */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left side - Text */}
            <div
              className={`space-y-8 transition-all duration-2000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
            >
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-5xl md:text-6xl">🇨🇩</span>
                <div>
                  <h1
                    className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-blue-800"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    DEMOCRATIC
                  </h1>
                  <h1
                    className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-yellow-600"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    REPUBLIC
                  </h1>
                  <h1
                    className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-red-600"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    OF CONGO
                  </h1>
                </div>
              </div>

              <blockquote
                className="text-xl md:text-2xl leading-relaxed text-blue-800 font-bold italic border-l-4 border-yellow-500 pl-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                "Moto moko abongisa ndako te."
                <span className="block text-lg font-medium mt-2 not-italic">
                  "One person cannot build a house alone."
                </span>
              </blockquote>


            </div>

            {/* Right side - Image */}
            <div
              className={`transition-all duration-2000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-yellow-500/20 rounded-3xl transform rotate-3"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[1204/1620] w-full max-w-md mx-auto">
                  <Image
                    src="/images/street.webp"
                    alt="street"
                    width={1204}
                    height={1620}
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative">
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

        {/* Card-based Content Layout */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">

              {/* At the Rim of the Basin Card */}
              <div className="mb-20">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className="grid lg:grid-cols-3 gap-0">
                    <div className="lg:col-span-2 p-8 lg:p-12">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Waves className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3
                          className="text-2xl md:text-3xl font-bold text-blue-800"
                          style={{ fontFamily: "Playfair Display, serif" }}
                        >
                          At the Rim of the Basin, Within the Story
                        </h3>
                      </div>

                      <div className="space-y-6">
                        <p
                          className="text-lg md:text-xl text-blue-700 leading-relaxed"
                          style={{ fontFamily: "Playfair Display, serif" }}
                        >
                          Though only a corner of eastern DRC touches the Nile Basin, the connection is real—and
                          powerful. Rivers like the Semliki and Ishasha, flowing from the Ruwenzori Mountains, feed
                          into Lake Albert, then to the Albert Nile—the same river that journeys north through Uganda
                          and beyond.
                        </p>

                        <div className="bg-gradient-to-r from-yellow-100 to-blue-100 p-6 rounded-2xl">
                          <p
                            className="text-lg text-blue-800 font-medium"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            The people of North Kivu and Ituri provinces, living between mountain, forest, and lake,
                            are part of this larger Nile ecosystem. They share its waters, its climate, its
                            blessings—and its burdens.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <Image
                        src="/images/boat.webp"
                        alt="Traditional fishing boat on lake in DRC"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenges and Culture - Split Layout */}
              <div className="grid lg:grid-cols-2 gap-8 mb-20">

                {/* Challenges Card */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
                      <Mountain className="h-6 w-6 text-red-600" />
                    </div>
                    <h3
                      className="text-2xl font-bold text-red-800"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Challenges Along the Source
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <p
                      className="text-lg text-red-700 leading-relaxed"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Communities near the Nile Basin edge in DRC face intersecting crises: deforestation, mineral
                      exploitation, and regional insecurity. But despite these struggles, local resilience shines.
                    </p>

                    <div className="bg-white/70 p-4 rounded-xl">
                      <p
                        className="text-red-800 font-medium"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        In Beni, Bunia, and Kasindi, farmers are returning to agroecological practices to protect
                        riverbanks. Youth groups are planting trees along Semliki's path.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Culture Card */}
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-8 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3
                      className="text-2xl font-bold text-yellow-800"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Culture of the Mountain and Water
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <p
                      className="text-lg text-yellow-700 leading-relaxed mb-4"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      The DRC is a cultural powerhouse, and even in the remote Nile-adjacent zones, creativity
                      flourishes.
                    </p>

                    <div className="space-y-3">
                      <div className="bg-white/70 p-3 rounded-lg">
                        <p className="text-yellow-800 font-medium" style={{ fontFamily: "Playfair Display, serif" }}>
                          <strong>Music:</strong> Traditional polyphonic singing of the Nande and Hema peoples echoes
                          through the hills, often performed during planting or harvest seasons.
                        </p>
                      </div>

                      <div className="bg-white/70 p-3 rounded-lg">
                        <p className="text-yellow-800 font-medium" style={{ fontFamily: "Playfair Display, serif" }}>
                          <strong>Food:</strong> Freshwater fish, banana dishes, cassava, and sombe (cassava leaves)
                          are common meals near the Semliki River.
                        </p>
                      </div>

                      <div className="bg-white/70 p-3 rounded-lg">
                        <p className="text-yellow-800 font-medium" style={{ fontFamily: "Playfair Display, serif" }}>
                          <strong>Belief and Ritual:</strong> Rivers and forests are viewed as ancestral domains,
                          protected by spiritual practices that emphasize balance and respect.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Image Section - Magazine Style */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0">
                  <Image
                    src="/images/congo.webp"
                    alt="Street life and commerce in DRC"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10 p-8 lg:p-16 min-h-[600px] flex items-start">
                  <div className="max-w-3xl">
                    <h3
                      className="text-3xl md:text-4xl font-bold text-white mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Building Together, Flowing Forward
                    </h3>

                    <p
                      className="text-xl text-white leading-relaxed mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      From the mountains of the east to the great rivers that connect us all, the Democratic Republic
                      of Congo reminds us that even at the edges of the basin, we are part of something larger.
                    </p>


                    <blockquote
                      className="text-lg text-white font-bold italic mb-2"
                      style={{ fontFamily: "Playfair Display, serif" }}

                    >
                      "Likolo na likolo, nkoy ebomaka nyoka." - "By working together, even ants can kill a snake."
                    </blockquote>
                    <p className="text-white text-sm" style={{ fontFamily: "Playfair Display, serif" }}>
                      — Lingala Proverb
                    </p>

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
