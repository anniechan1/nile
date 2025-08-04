"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

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
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* The Sudd Wetlands Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="suddFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#F3F4F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="marshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* The Sudd Wetlands - Large marsh area */}
          <ellipse
            cx="400"
            cy="350"
            rx="200"
            ry="120"
            fill="url(#marshGradient)"
            opacity="0.6"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <ellipse
            cx="450"
            cy="380"
            rx="150"
            ry="80"
            fill="url(#marshGradient)"
            opacity="0.4"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          {/* White Nile flowing through */}
          <path
            d="M100,350 Q200,330 300,370 Q500,400 700,380 Q900,360 1100,380"
            stroke="url(#suddFlow)"
            strokeWidth="12"
            fill="none"
            className="animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.06}px)` }}
          />

          {/* Marsh channels and tributaries */}
          <path
            d="M300,370 Q350,350 400,390 Q450,430 500,400"
            stroke="url(#suddFlow)"
            strokeWidth="6"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "0.5s", transform: `translateY(${scrollY * 0.04}px)` }}
          />
          <path
            d="M400,320 Q450,340 500,300 Q550,280 600,320"
            stroke="url(#suddFlow)"
            strokeWidth="4"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />

          {/* Floating vegetation patches */}
          <circle cx="350" cy="320" r="25" fill="url(#marshGradient)" opacity="0.5" className="animate-pulse" />
          <circle cx="480" cy="420" r="20" fill="url(#marshGradient)" opacity="0.4" className="animate-pulse" />
          <circle cx="420" cy="360" r="15" fill="url(#marshGradient)" opacity="0.6" className="animate-pulse" />
        </svg>
      </div>

      <MainNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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

              {/* The Youth: Reclaiming the River section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Youth: Reclaiming the River
                </h3>
                <p
                  className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  South Sudan's youth have inherited conflict—but they are choosing peace. Young people are leading the
                  way in:
                </p>

                <div className="grid md:grid-cols-1 gap-4 mb-8">
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg text-blue-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      • Water sanitation projects in rural areas
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg text-blue-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      • Storytelling workshops using poetry and photography along the Nile
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg text-blue-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      • Traditional boat-making programs to preserve cultural knowledge and create jobs
                    </p>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="bg-gradient-to-r from-blue-100/80 via-white/80 to-blue-100/80 border-2 border-blue-300/50 p-8 rounded-3xl shadow-lg relative overflow-hidden my-12">
                  <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 via-white to-blue-500 rounded-t-3xl"></div>
                  <blockquote
                    className="text-xl md:text-2xl font-medium text-blue-800 mb-4 leading-relaxed italic"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    "We are not the war. We are the water that heals."
                  </blockquote>
                  <p className="text-blue-600 text-base" style={{ fontFamily: "Playfair Display, serif" }}>
                    — One young poet in Juba recently wrote
                  </p>
                </div>
              </div>

              {/* A Future Carried on the Current section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  A Future Carried on the Current
                </h3>
                <p
                  className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  South Sudan believes in the power of water to unite—across ethnic lines, borders, and generations. The
                  Nile is not just a geographic link; it is a path toward dignity and shared prosperity.
                </p>

                {/* Final Quote */}
                <div className="text-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-white to-red-200 transform -rotate-1 rounded-3xl"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm p-12 shadow-2xl">
                      <blockquote
                        className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 leading-relaxed italic"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        "When brothers fight, strangers reap the harvest."
                      </blockquote>
                      <p className="text-blue-600 text-lg" style={{ fontFamily: "Playfair Display, serif" }}>
                        — South Sudanese Proverb
                      </p>
                    </div>
                  </div>
                </div>

                <p
                  className="text-xl text-blue-800 leading-relaxed italic text-center font-medium"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Let the Nile carry us—not into division, but into repair.
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
            text-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          }
          50% {
            text-shadow: 0 0 50px rgba(59, 130, 246, 0.8), 0 0 70px rgba(59, 130, 246, 0.6);
          }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
