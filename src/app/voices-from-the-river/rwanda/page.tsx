"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft, Droplets, Mountain, Heart } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function RwandaPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50">
      <MainNav />


      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <Image
            src="/images/rwanda.webp"
            alt="Rwanda's terraced hills and agricultural landscape"
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
            <span className="text-6xl md:text-8xl">🇷🇼</span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-yellow-300"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 0 30px rgba(29, 78, 216, 0.5)",
              }}
            >
              RWANDA
            </h1>
          </div>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-yellow-300 font-bold italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "Imigabo n'imigambi ni byo byubaka igihugu." — "Shared goals and collective plans are what build a nation."
          </blockquote>
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

        {/* Magazine-Style Content Layout */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">

              {/* The Nile's Secret Spring - Overlapping Design */}
              <div className="mb-32 relative">
                <div className="max-w-7xl mx-auto">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-12 rounded-3xl shadow-xl">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                        <Droplets className="h-8 w-8 text-white" />
                      </div>
                      <h2
                        className="text-3xl md:text-4xl font-bold text-blue-800"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        The Nile's Secret Spring
                      </h2>
                    </div>

                    <div className="space-y-6">
                      <p
                        className="text-xl text-blue-700 leading-relaxed"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        Few know this, but one of the most distant sources of the Nile is found in the hills of
                        Rwanda. At Mount Nyungwe, the Rukarara River flows quietly out of the rainforest—eventually
                        joining the Akagera River, then Lake Victoria, and finally the Nile itself.
                      </p>

                      <div className="bg-white/70 p-6 rounded-2xl">
                        <p
                          className="text-lg text-blue-800 font-medium italic"
                          style={{ fontFamily: "Playfair Display, serif" }}
                        >
                          In Rwanda, we say: "The Nile may be mighty, but it begins as a whisper."
                        </p>
                      </div>

                      <p
                        className="text-lg text-blue-700"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        This spring in the forest is more than a source—it is a symbol of potential, of small
                        beginnings leading to powerful outcomes. Just like Rwanda itself.
                      </p>
                    </div>
                  </div>


                </div>
              </div>

              {/* Water, Memory, and Resilience - Split Design */}
              <div className="mb-32">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  <div className="order-2 lg:order-1">
                    <div className="sticky top-20">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/20 to-green-400/20 rounded-3xl transform -rotate-6"></div>
                        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                          <Image
                            src="/images/tradition.webp"
                            alt="Traditional Rwandan Intore dancers"
                            width={500}
                            height={600}
                            className="w-full h-96 object-cover"
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="order-1 lg:order-2 space-y-8">
                    <div className="bg-gradient-to-br from-green-100 to-green-200 p-10 rounded-3xl shadow-xl">
                      <h2
                        className="text-3xl font-bold text-green-800 mb-6"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        Water, Memory, and Resilience
                      </h2>

                      <p
                        className="text-lg text-green-700 leading-relaxed mb-6"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        Rwanda's relationship with water is deeply spiritual and practical. Water sources are treated
                        with reverence, especially in rural communities. At the same time, Rwanda is leading the region
                        in sustainable water management—from rainwater harvesting to wetland restoration.
                      </p>

                      <p
                        className="text-lg text-green-700 leading-relaxed"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        After the 1994 Genocide, rebuilding required not just roads and homes—but healing landscapes.
                        Wetlands were revived, forests re-greened, and lakes protected. The Akagera National Park, which
                        bears the river's name, is now a symbol of Rwanda's ecological rebirth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cultural Flow - Creative Grid */}
              <div className="mb-20">
                <div className="text-center mb-16">
                  <h2
                    className="text-4xl md:text-5xl font-bold text-yellow-700 mb-4"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Cultural Flow
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                    <h3 className="text-xl font-bold text-blue-800 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                      Dance and Music
                    </h3>
                    <p className="text-blue-700 text-sm" style={{ fontFamily: "Playfair Display, serif" }}>
                      The Intore (warrior) dance, accompanied by drums and song, reflects both elegance and strength.
                      Some dances reenact cattle herding and river crossings—rhythms of a pastoral past.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                    <h3 className="text-xl font-bold text-yellow-800 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                      Food
                    </h3>
                    <p className="text-yellow-700 text-sm" style={{ fontFamily: "Playfair Display, serif" }}>
                      Rwandan meals often feature ugali, ibishyimbo (beans), isombe (cassava leaves), and fish from Lake
                      Muhazi or Lake Ihema.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                    <h3 className="text-xl font-bold text-green-800 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                      Rituals
                    </h3>
                    <p className="text-green-700 text-sm" style={{ fontFamily: "Playfair Display, serif" }}>
                      Traditional naming ceremonies often involve water, and elders speak of rivers as witnesses to
                      family histories.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                    <h3 className="text-xl font-bold text-purple-800 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                      Art
                    </h3>
                    <p className="text-purple-700 text-sm" style={{ fontFamily: "Playfair Display, serif" }}>
                      Art, especially poetry and storytelling, is central to how Rwandans remember, resist, and rebuild.
                    </p>
                  </div>
                </div>
              </div>

              {/* Final Quote Section - Artistic Layout */}

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
