"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function KenyaPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-green-50 to-white relative overflow-hidden">
      <MainNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-green-100 to-gray-100">
          <Image
            src="/images/elephant.webp"
            alt="Elephant family in Kenyan savanna"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30"></div>
        </div>

        <div
          className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-6xl md:text-8xl">🇰🇪</span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight animate-glow text-red-800"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 0 30px rgba(220, 38, 38, 0.5)",
              }}
            >
              KENYA
            </h1>
          </div>

          <h2
            className="text-2xl md:text-4xl font-light mb-8 text-green-700 italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Voices from the Highlands
          </h2>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-gray-700 font-light italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "Maji ni uhai"
          </blockquote>
          <p className="text-gray-700 text-base font-medium" style={{ fontFamily: "Playfair Display, serif" }}>
            — Swahili for "Water is life"
          </p>
        </div>
      </section>

      <main className="relative z-10">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/voices-from-the-river"
            className="inline-flex items-center space-x-2 text-red-700 hover:text-red-900 transition-colors font-semibold"
          >
            <ArrowLeft className="h-5 w-5" />
            <span style={{ fontFamily: "Playfair Display, serif" }}>Back to All Voices</span>
          </Link>
        </div>

        {/* Main Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Where Waters Rise and Flow North section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-red-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Where Waters Rise and Flow North
                </h3>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p
                      className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Though the Nile may not be the first river people associate with Kenya, its roots are here. In the
                      Mau Forest Complex, deep in Kenya's western highlands, several rivers begin their journey—Yala,
                      Nzoia, Nyando, and Sondu-Miriu—flowing into Lake Victoria, which then feeds the White Nile.
                    </p>
                    <p
                      className="text-xl text-red-800 leading-relaxed mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      This region is often called Kenya's "water tower." It reminds us that the health of the Nile
                      depends on the forests, wetlands, and lakes far upstream. Protecting them is not just a Kenyan
                      priority—it's a regional responsibility.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="relative overflow-hidden shadow-2xl">
                      <Image
                        src="/images/mount-kenya.webp"
                        alt="Mount Kenya landscape with stream"
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* A Story of Strength and Stewardship section */}
              <div className="mb-20 relative">
                {/* Full-width background image */}
                <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-screen h-full">
                  <Image
                    src="/images/kenya.webp"
                    alt="Indigenous Kenyan cultural celebration"
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/5"></div>
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
                          A Story of Strength and Stewardship
                        </h3>
                        <p
                          className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          For communities along Lake Victoria—like those in Kisumu, Busia, and Homa Bay—the Nile Basin
                          is a source of food, fishing, trade, and identity. But it's also a story of stress:
                          overfishing, water pollution, and disappearing wetlands threaten both the lake and the people
                          who rely on it.
                        </p>
                      </div>

                      {/* Quote box at the bottom */}
                      <div className="flex items-end">
                        <div className="bg-white/95 backdrop-blur-sm border-l-4 border-red-500 p-6 rounded-lg shadow-2xl w-full">
                          <p
                            className="text-lg font-medium text-red-800 italic"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            Kenya's indigenous knowledge systems—particularly among the Luo and Luhya—emphasize respect
                            for water bodies. Elders still recall rituals performed to ask for rain or to show gratitude
                            to the lake for abundance. These values now meet modern conservation science, forming a new
                            wave of eco-conscious action.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Culture on the Shore section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-red-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Culture on the Shore
                </h3>
                <p
                  className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Kenya's identity is richly expressed in both traditional and contemporary art forms:
                </p>

                <div className="grid lg:grid-cols-2 gap-8 mb-8 items-center">
                  {/* Image left */}
                  <div className="flex justify-center">
                    <div
                      className="relative rounded-3xl shadow-2xl overflow-hidden"
                      style={{ width: 340, height: 483 }}
                    >
                      <Image
                        src="/images/indigenous.webp"
                        alt="Indigenous Kenyan cultural celebration"
                        width={798}
                        height={1133}
                        className="object-cover w-full h-full"
                        unoptimized
                      />
                    </div>
                  </div>
                  {/* Text right */}
                  <div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Music:</strong> Benga music, especially from the Luo community, is rooted in lakeside
                        life. Songs often celebrate fishermen, the rains, or journeys across the water.
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Food:</strong> Fish dishes like omena (silver cyprinid), tilapia, and ugali are everyday
                        staples in Nile-adjacent regions.
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Art & Ritual:</strong> Lake Victoria features in oral histories, funeral traditions, and
                        naming ceremonies, where water is a symbol of continuity and life.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-red-800 leading-relaxed" style={{ fontFamily: "Playfair Display, serif" }}>
                  Youth artists in Nairobi are also reimagining the Nile through street murals, digital art, and
                  eco-themed rap battles.
                </p>
              </div>

              {/* Youth Building a New Current section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-red-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Youth Building a New Current
                </h3>
                <p
                  className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Kenyan youth are playing a powerful role in rethinking water and environment. From tech hubs in Kisumu
                  to community farms in Kericho, young innovators are working on:
                </p>

                <div className="grid lg:grid-cols-2 gap-8 mb-8 items-center">
                  {/* Text left */}
                  <div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        • Waste management projects to protect waterways
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        • Apps for weather forecasting and fishing safety
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        • Youth cooperatives focused on sustainable agriculture near Nile Basin rivers
                      </p>
                    </div>
                  </div>
                  {/* Image right */}
                  <div className="flex justify-center">
                    <div
                      className="relative rounded-3xl shadow-2xl overflow-hidden"
                      style={{ width: 266, height: 400 }}
                    >
                      <Image
                        src="/images/sheep.webp"
                        alt="Young Kenyan shepherd with sheep"
                        width={800}
                        height={1200}
                        className="object-cover w-full h-full"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-20 relative">
                {/* Full-width background image */}
                <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-screen h-full">
                  <Image
                    src="/images/nature.webp"
                    alt="Kenyan children in natural landscape"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent"></div>
                </div>

                <div className="relative z-10 py-16">
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
                          Flowing Forward Together
                        </h3>
                        <p
                          className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-8 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          From the forests of the Mau to the edge of Lake Victoria, Kenya holds the Nile at its
                          beginning. The journey ahead must be one of protection, justice, and collaboration.
                        </p>
                      </div>
                      {/* Quote at the bottom */}
                      <div className="flex justify-start">
                        <div>
                          <blockquote
                            className="text-xl md:text-2xl font-bold text-white mb-4 leading-relaxed italic text-left"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            "Umoja ni nguvu, mgawanyiko ni udhaifu."
                          </blockquote>
                          <blockquote
                            className="text-lg md:text-xl font-bold text-white mb-4 leading-relaxed italic text-left"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            "Unity is strength, division is weakness."
                          </blockquote>
                          <p
                            className="text-white text-base text-left"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            — Kenyan Proverb
                          </p>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 30px rgba(220, 38, 38, 0.5);
          }
          50% {
            text-shadow: 0 0 50px rgba(220, 38, 38, 0.8), 0 0 70px rgba(220, 38, 38, 0.6);
          }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
