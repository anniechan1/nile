"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BurundiPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-red-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Southernmost Source Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="sourceFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#DC2626" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F3F4F6" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Mount Gikizi - Southernmost Source */}
          <circle cx="80" cy="400" r="18" fill="url(#sourceFlow)" className="animate-pulse" opacity="0.9" />

          {/* Ruvyironza River */}
          <path
            d="M80,400 Q150,380 220,420 Q290,460 360,440"
            stroke="url(#sourceFlow)"
            strokeWidth="5"
            fill="none"
            className="animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.06}px)` }}
          />

          {/* Ruvubu River */}
          <path
            d="M360,440 Q430,420 500,460 Q570,500 640,480"
            stroke="url(#sourceFlow)"
            strokeWidth="7"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s", transform: `translateY(${scrollY * 0.04}px)` }}
          />

          {/* Kagera River */}
          <path
            d="M640,480 Q710,460 780,500 Q850,540 920,520"
            stroke="url(#sourceFlow)"
            strokeWidth="9"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          {/* Connection to Lake Victoria */}
          <path
            d="M920,520 Q990,500 1060,540 Q1130,580 1200,560"
            stroke="url(#sourceFlow)"
            strokeWidth="11"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "3s" }}
          />

          {/* Small mountain tributaries */}
          <path
            d="M60,380 Q70,390 80,400"
            stroke="url(#sourceFlow)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <path
            d="M60,420 Q70,410 80,400"
            stroke="url(#sourceFlow)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </svg>
      </div>

      <MainNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-red-100 to-gray-50"></div>

        <div
          className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-6xl md:text-8xl">🇧🇮</span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight animate-glow text-green-600"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 0 30px rgba(5, 150, 105, 0.5)",
              }}
            >
              BURUNDI
            </h1>
          </div>

          <h2
            className="text-2xl md:text-4xl font-light mb-8 text-red-700 italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Voices from the Source
          </h2>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-gray-700 font-light italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "Amazi ni ubuzima."
          </blockquote>
          <p className="text-green-600 text-base font-medium" style={{ fontFamily: "Playfair Display, serif" }}>
            — "Water is life." Kirundi saying shared across generations
          </p>
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
              {/* The Southernmost Spark of the Nile section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Southernmost Spark of the Nile
                </h3>
                <p
                  className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Did you know? One of the most remote sources of the Nile begins in Burundi—at Mount Gikizi, near the
                  town of Kasumo, where the Ruvyironza River rises. This tiny stream is considered the southernmost Nile
                  source. It flows into the Ruvubu River, then into the Kagera River, and finally to Lake Victoria.
                </p>
                <div className="bg-gradient-to-r from-green-100 to-red-100 border-l-4 border-green-500 p-6 rounded-lg mb-6">
                  <p
                    className="text-lg font-medium text-green-800 italic"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Though small in land area, Burundi plays a mighty role in the Nile's journey. The story begins
                    here—in green hills, misty forests, and the lives of communities who depend on the water.
                  </p>
                </div>
              </div>

              {/* Living With the River section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Living With the River
                </h3>
                <p
                  className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  In rural Burundi, rivers are a lifeline—for farming, cooking, washing, and ceremonies. But they are
                  also fragile. Heavy rainfall and deforestation in upstream areas cause erosion and floods, especially
                  in Muramvya, Gitega, and Muyinga.
                </p>
                <p
                  className="text-xl text-green-800 leading-relaxed mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Farmers remember when rivers flowed calmly and predictably. Now, rains come harder, and land washes
                  away. In response, many have returned to traditional terracing and planting trees to hold the
                  soil—blending old knowledge with new climate needs.
                </p>
              </div>

              {/* Culture Deep as the Hills section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Culture Deep as the Hills
                </h3>
                <p
                  className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Burundi's cultural life flows like its rivers—deep, resilient, and collective.
                </p>

                <div className="grid md:grid-cols-1 gap-6 mb-8">
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-green-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Dance:</strong> The Royal Drummers of Burundi are world-renowned, blending strength,
                      rhythm, and spiritual energy. Drum performances often accompany community rituals related to the
                      land and water.
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-green-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Food:</strong> Beans, maize, sweet potatoes, and river fish form the basis of many meals.
                      Isombe (cassava leaves) and ugali are widely enjoyed.
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-green-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Rituals:</strong> In many communities, water is used for blessings, especially during
                      childbirth or in traditional healing ceremonies.
                    </p>
                  </div>
                </div>

                <p className="text-xl text-green-800 leading-relaxed" style={{ fontFamily: "Playfair Display, serif" }}>
                  Storytelling is also key—elders pass down oral tales of rivers as protectors, travelers, and even
                  tricksters.
                </p>
              </div>

              {/* The Youth Are Listening—and Acting section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Youth Are Listening—and Acting
                </h3>
                <p
                  className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Burundian youth are creating local solutions with global awareness. In Gitega, Ngozi, and Kirundo,
                  they are:
                </p>

                <div className="grid md:grid-cols-1 gap-4 mb-8">
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg text-green-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      • Organizing community reforestation projects
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg text-green-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      • Documenting local stories about rivers and rainfall changes
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg text-green-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      • Building youth-led cooperatives for sustainable farming
                    </p>
                  </div>
                </div>

                <p
                  className="text-xl text-green-800 leading-relaxed mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  In 2023, a youth group launched the "Protect Our Source" campaign, mapping out local springs and
                  sharing them through digital platforms. Their message is clear: we are small, but we matter.
                </p>
              </div>

              {/* From a Trickling Stream to a Shared River section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  From a Trickling Stream to a Shared River
                </h3>
                <p
                  className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Burundi reminds us that even the narrowest stream can shape the world. If we care for the Nile at its
                  most humble beginning, we protect it everywhere.
                </p>

                {/* Final Quote */}
                <div className="text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-red-200 to-green-200 transform -rotate-1 rounded-3xl"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm p-12 shadow-2xl">
                      <blockquote
                        className="text-2xl md:text-3xl font-bold text-green-800 mb-6 leading-relaxed italic"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        "Iyo ushaka kunywa amazi meza, ubanza gusukura isoko."
                      </blockquote>
                      <p className="text-green-600 text-lg" style={{ fontFamily: "Playfair Display, serif" }}>
                        — "If you want to drink clean water, you must protect the source." Burundian Proverb
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
            text-shadow: 0 0 30px rgba(5, 150, 105, 0.5);
          }
          50% {
            text-shadow: 0 0 50px rgba(5, 150, 105, 0.8), 0 0 70px rgba(5, 150, 105, 0.6);
          }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
