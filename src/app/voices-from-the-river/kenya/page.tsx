"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-green-50 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Highland Rivers Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="highlandFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#059669" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1F2937" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Mau Forest Complex */}
          <circle cx="150" cy="200" r="40" fill="url(#highlandFlow)" className="animate-pulse" opacity="0.6" />

          {/* Highland Rivers flowing to Lake Victoria */}
          <path
            d="M150,200 Q250,180 350,220 Q450,260 550,240"
            stroke="url(#highlandFlow)"
            strokeWidth="8"
            fill="none"
            className="animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.06}px)` }}
          />

          <path
            d="M170,220 Q270,200 370,240 Q470,280 570,260"
            stroke="url(#highlandFlow)"
            strokeWidth="6"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s", transform: `translateY(${scrollY * 0.04}px)` }}
          />

          {/* Lake Victoria */}
          <ellipse
            cx="600"
            cy="300"
            rx="60"
            ry="40"
            fill="url(#highlandFlow)"
            opacity="0.7"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          {/* White Nile continuation */}
          <path
            d="M660,300 Q800,280 1000,300 Q1100,320 1300,300"
            stroke="url(#highlandFlow)"
            strokeWidth="12"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "3s" }}
          />
        </svg>
      </div>

      <MainNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-green-100 to-gray-100"></div>

        <div
          className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-6xl md:text-8xl">🇰🇪</span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight animate-glow text-red-600"
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
          <p className="text-green-600 text-base font-medium" style={{ fontFamily: "Playfair Display, serif" }}>
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
                <p
                  className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Though the Nile may not be the first river people associate with Kenya, its roots are here. In the Mau
                  Forest Complex, deep in Kenya's western highlands, several rivers begin their journey—Yala, Nzoia,
                  Nyando, and Sondu-Miriu—flowing into Lake Victoria, which then feeds the White Nile.
                </p>
                <p
                  className="text-xl text-red-800 leading-relaxed mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  This region is often called Kenya's "water tower." It reminds us that the health of the Nile depends
                  on the forests, wetlands, and lakes far upstream. Protecting them is not just a Kenyan priority—it's a
                  regional responsibility.
                </p>
              </div>

              {/* A Story of Strength and Stewardship section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-red-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  A Story of Strength and Stewardship
                </h3>
                <p
                  className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  For communities along Lake Victoria—like those in Kisumu, Busia, and Homa Bay—the Nile Basin is a
                  source of food, fishing, trade, and identity. But it's also a story of stress: overfishing, water
                  pollution, and disappearing wetlands threaten both the lake and the people who rely on it.
                </p>
                <div className="bg-gradient-to-r from-red-100 to-green-100 border-l-4 border-red-500 p-6 rounded-lg mb-6">
                  <p
                    className="text-lg font-medium text-red-800 italic"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Kenya's indigenous knowledge systems—particularly among the Luo and Luhya—emphasize respect for
                    water bodies. Elders still recall rituals performed to ask for rain or to show gratitude to the lake
                    for abundance. These values now meet modern conservation science, forming a new wave of
                    eco-conscious action.
                  </p>
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

                <div className="grid md:grid-cols-1 gap-6 mb-8">
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Music:</strong> Benga music, especially from the Luo community, is rooted in lakeside
                      life. Songs often celebrate fishermen, the rains, or journeys across the water.
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
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
                  className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Kenyan youth are playing a powerful role in rethinking water and environment. From tech hubs in Kisumu
                  to community farms in Kericho, young innovators are working on:
                </p>

                <div className="grid md:grid-cols-1 gap-4 mb-8">
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      • Waste management projects to protect waterways
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      • Apps for weather forecasting and fishing safety
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      • Youth cooperatives focused on sustainable agriculture near Nile Basin rivers
                    </p>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="bg-gradient-to-r from-red-100/80 via-green-100/80 to-red-100/80 border-2 border-red-300/50 p-8 rounded-3xl shadow-lg relative overflow-hidden my-12">
                  <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-red-500 via-green-500 to-red-500 rounded-t-3xl"></div>
                  <blockquote
                    className="text-xl md:text-2xl font-medium text-red-800 mb-4 leading-relaxed italic"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    "We can't talk about the future of water without talking about the future of youth."
                  </blockquote>
                  <p className="text-red-600 text-base" style={{ fontFamily: "Playfair Display, serif" }}>
                    — One student from Kisumu
                  </p>
                </div>
              </div>

              {/* Flowing Forward Together section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-red-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Flowing Forward Together
                </h3>
                <p
                  className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  From the forests of the Mau to the edge of Lake Victoria, Kenya holds the Nile at its beginning. The
                  journey ahead must be one of protection, justice, and collaboration.
                </p>

                {/* Final Quote */}
                <div className="text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-200 via-green-200 to-red-200 transform -rotate-1 rounded-3xl"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm p-12 shadow-2xl">
                      <blockquote
                        className="text-2xl md:text-3xl font-bold text-red-800 mb-6 leading-relaxed italic"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        "Unity is strength, division is weakness."
                      </blockquote>
                      <p className="text-red-600 text-lg" style={{ fontFamily: "Playfair Display, serif" }}>
                        — Kenyan Proverb
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
