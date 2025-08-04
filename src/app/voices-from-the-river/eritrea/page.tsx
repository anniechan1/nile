"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EritreaPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Highland Tributaries Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="tributaryFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#EA580C" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Highland Springs */}
          <circle cx="150" cy="200" r="20" fill="url(#tributaryFlow)" className="animate-pulse" opacity="0.8" />
          <circle cx="200" cy="250" r="15" fill="url(#tributaryFlow)" className="animate-pulse" opacity="0.6" />

          {/* Gash River */}
          <path
            d="M150,200 Q300,180 450,220 Q600,260 750,240 Q900,220 1050,260"
            stroke="url(#tributaryFlow)"
            strokeWidth="8"
            fill="none"
            className="animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.06}px)` }}
          />

          {/* Setit River */}
          <path
            d="M200,250 Q350,230 500,270 Q650,310 800,290 Q950,270 1100,310"
            stroke="url(#tributaryFlow)"
            strokeWidth="6"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s", transform: `translateY(${scrollY * 0.04}px)` }}
          />

          {/* Connection to Atbara */}
          <path
            d="M1050,260 Q1150,250 1300,270"
            stroke="url(#tributaryFlow)"
            strokeWidth="10"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </svg>
      </div>

      <MainNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100"></div>

        <div
          className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-6xl md:text-8xl">🇪🇷</span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight animate-glow text-red-600"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 0 30px rgba(220, 38, 38, 0.5)",
              }}
            >
              ERITREA
            </h1>
          </div>

          <h2
            className="text-2xl md:text-4xl font-light mb-8 text-orange-700 italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Where the Tributaries Begin
          </h2>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-red-700 font-light italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "Even the quietest stream carries the weight of many histories."
          </blockquote>
          <p className="text-orange-600 text-base font-medium" style={{ fontFamily: "Playfair Display, serif" }}>
            — Eritrean Proverb
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
              {/* Opening paragraph */}
              <div className="mb-20">
                <p
                  className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Though Eritrea is not crossed by the main Nile, its western rivers—the Gash and the Setit—feed into
                  the Atbara, one of the Nile's important tributaries in Sudan. These rivers begin in the Eritrean
                  highlands and carry not only water, but the memory of migrations, trade, and ancient resilience.
                </p>
                <div className="bg-gradient-to-r from-red-100 to-orange-100 border-l-4 border-red-500 p-6 rounded-lg">
                  <p
                    className="text-lg font-medium text-red-800 italic"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    The Nile is not just a river of geography—it is a river of connection. For Eritrea, its presence
                    reminds us that we are part of the broader pulse of the region, flowing quietly but steadily into
                    the shared future of the basin.
                  </p>
                </div>
              </div>

              {/* A Land of Stone and Story section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-red-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  A Land of Stone and Story
                </h3>
                <p
                  className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Eritrea is home to Qohaito, one of the most important ancient highland cities in the Horn of Africa,
                  overlooking deep gorges and once connected to the Aksumite empire. The ruins sit on a plateau that
                  whispers of centuries of trade and spiritual life. These highlands also give birth to the rivers that
                  eventually reach the Nile—linking past and present, mountain and valley, Eritrea and Sudan.
                </p>
                <p className="text-xl text-red-800 leading-relaxed" style={{ fontFamily: "Playfair Display, serif" }}>
                  From Asmara, a UNESCO World Heritage city known for its modernist architecture, to the rural farming
                  villages near Tesseney, the relationship to land and water is intimate. Communities here have
                  developed traditional farming techniques to adapt to seasonal flows, harvesting rain and managing
                  water carefully in one of the driest corners of the Nile basin.
                </p>
              </div>

              {/* Culture That Flows Between Generations section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-red-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Culture That Flows Between Generations
                </h3>
                <p
                  className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Eritrean culture is marked by unity through diversity. With nine recognized ethnic groups, each with
                  their own languages and traditions, water remains a common thread—revered in blessings, planting
                  rituals, and songs.
                </p>

                <div className="grid md:grid-cols-1 gap-6 mb-8">
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Coffee ceremonies,</strong> central to social life, often begin with a handwashing
                      ritual—symbolizing purification and welcome.
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Traditional songs</strong> from the Saho and Tigre peoples include praise for the rivers
                      that nourish the land, even if only briefly each year.
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Food</strong> like injera, shiro, and hilbet is shared communally, often accompanied by
                      stories of elders about how the land was tamed and protected.
                    </p>
                  </div>
                </div>

                <p
                  className="text-xl text-red-800 leading-relaxed italic text-center"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  These expressions are rooted in care—for each other, for the land, and for the water that comes and
                  goes.
                </p>
              </div>

              {/* A Famous Word, A Lasting Hope section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-red-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  A Famous Word, A Lasting Hope
                </h3>
                <p
                  className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  One of the most iconic moments in Eritrea's recent history was the long struggle for independence. Out
                  of it came a quote etched into the country's collective memory:
                </p>

                {/* Quote Box */}
                <div className="bg-gradient-to-r from-red-100/80 via-orange-100/80 to-red-100/80 border-2 border-red-300/50 p-12 rounded-3xl shadow-lg relative overflow-hidden my-16">
                  <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-t-3xl"></div>
                  <blockquote
                    className="text-2xl md:text-3xl font-medium text-red-800 mb-6 leading-relaxed text-center italic"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    "Victory to the Masses"
                  </blockquote>
                  <p className="text-red-600 text-lg text-center" style={{ fontFamily: "Playfair Display, serif" }}>
                    — Slogan of the Eritrean People's Liberation Front (EPLF)
                  </p>
                </div>

                <p
                  className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Today, this spirit is being reimagined—not just in struggle, but in cooperation. The hope is that
                  Eritrean ingenuity, especially in water conservation, dryland agriculture, and cultural preservation,
                  can be shared across Nile Basin nations.
                </p>

                <p
                  className="text-xl text-red-800 leading-relaxed italic text-center font-medium"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The rivers may be few, but their meaning runs deep.
                </p>
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
