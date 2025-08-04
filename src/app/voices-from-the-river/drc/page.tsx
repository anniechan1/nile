"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Ruwenzori Mountains and Rivers Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="mountainFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#EAB308" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="forestGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#065F46" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Ruwenzori Mountains */}
          <polygon
            points="80,300 120,200 160,250 200,180 240,220 280,300"
            fill="url(#forestGradient)"
            opacity="0.6"
            className="animate-pulse"
          />

          {/* Semliki River */}
          <path
            d="M180,250 Q250,230 320,270 Q390,310 460,290 Q530,270 600,310"
            stroke="url(#mountainFlow)"
            strokeWidth="8"
            fill="none"
            className="animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.06}px)` }}
          />

          {/* Ishasha River */}
          <path
            d="M200,220 Q270,200 340,240 Q410,280 480,260 Q550,240 620,280"
            stroke="url(#mountainFlow)"
            strokeWidth="6"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s", transform: `translateY(${scrollY * 0.04}px)` }}
          />

          {/* Lake Albert */}
          <ellipse
            cx="650"
            cy="300"
            rx="50"
            ry="30"
            fill="url(#mountainFlow)"
            opacity="0.7"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          {/* Albert Nile continuation */}
          <path
            d="M700,300 Q800,280 900,320 Q1000,360 1100,340"
            stroke="url(#mountainFlow)"
            strokeWidth="10"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "3s" }}
          />

          {/* Forest canopy elements */}
          <circle cx="150" cy="320" r="20" fill="url(#forestGradient)" opacity="0.5" className="animate-pulse" />
          <circle cx="220" cy="340" r="15" fill="url(#forestGradient)" opacity="0.4" className="animate-pulse" />
          <circle cx="180" cy="360" r="18" fill="url(#forestGradient)" opacity="0.6" className="animate-pulse" />

          {/* Mountain tributaries */}
          <path
            d="M160,230 Q170,240 180,250"
            stroke="url(#mountainFlow)"
            strokeWidth="4"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <path
            d="M190,210 Q195,215 200,220"
            stroke="url(#mountainFlow)"
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-yellow-100 to-red-100"></div>

        <div
          className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-6xl md:text-8xl">🇨🇩</span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight animate-glow text-blue-600"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
              }}
            >
              DEMOCRATIC REPUBLIC OF CONGO
            </h1>
          </div>

          <h2
            className="text-2xl md:text-4xl font-light mb-8 text-yellow-700 italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Voices from the Rainforest Edge
          </h2>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-red-700 font-light italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "Maji yaweza kutengana, lakini yatajikuta tena."
          </blockquote>
          <p className="text-blue-600 text-base font-medium" style={{ fontFamily: "Playfair Display, serif" }}>
            — "Waters may part, but they will find each other again." Kiswahili proverb from eastern DRC
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
              {/* At the Rim of the Basin, Within the Story section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  At the Rim of the Basin, Within the Story
                </h3>
                <p
                  className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Though only a corner of eastern DRC touches the Nile Basin, the connection is real—and powerful.
                  Rivers like the Semliki and Ishasha, flowing from the Ruwenzori Mountains, feed into Lake Albert, then
                  to the Albert Nile—the same river that journeys north through Uganda and beyond.
                </p>
                <div className="bg-gradient-to-r from-blue-100 to-yellow-100 border-l-4 border-blue-500 p-6 rounded-lg">
                  <p
                    className="text-lg font-medium text-blue-800 italic"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    The people of North Kivu and Ituri provinces, living between mountain, forest, and lake, are part of
                    this larger Nile ecosystem. They share its waters, its climate, its blessings—and its burdens.
                  </p>
                </div>
              </div>

              {/* Challenges Along the Source section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Challenges Along the Source
                </h3>
                <p
                  className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Communities near the Nile Basin edge in DRC face intersecting crises: deforestation, mineral
                  exploitation, and regional insecurity. But despite these struggles, local resilience shines.
                </p>
                <p
                  className="text-xl text-blue-800 leading-relaxed mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  In Beni, Bunia, and Kasindi, farmers are returning to agroecological practices to protect riverbanks.
                  Youth groups are planting trees along Semliki's path, saying:
                </p>
                <div className="bg-gradient-to-r from-green-100 to-blue-100 border-l-4 border-green-500 p-6 rounded-lg">
                  <p
                    className="text-lg font-medium text-green-800 italic"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    "The forest is our first medicine. The river is our second."
                  </p>
                </div>
              </div>

              {/* Culture of the Mountain and Water section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Culture of the Mountain and Water
                </h3>
                <p
                  className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The DRC is a cultural powerhouse, and even in the remote Nile-adjacent zones, creativity flourishes.
                </p>

                <div className="grid md:grid-cols-1 gap-6 mb-8">
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-blue-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Music:</strong> Traditional polyphonic singing of the Nande and Hema peoples echoes
                      through the hills, often performed during planting or harvest seasons.
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-blue-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Food:</strong> Freshwater fish, banana dishes, cassava, and sombe (cassava leaves) are
                      common meals near the Semliki River.
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-blue-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Belief and Ritual:</strong> Rivers and forests are viewed as ancestral domains, protected
                      by spiritual practices that emphasize balance and respect.
                    </p>
                  </div>
                </div>
              </div>

              {/* Youth Voices in the Forest section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Youth Voices in the Forest
                </h3>
                <p
                  className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Despite instability, young Congolese in the Nile region are documenting their stories through art,
                  film, and radio. In Bunia, youth collect oral histories from elders about river crossings and
                  migration. In Butembo, students use community mapping to trace shrinking forest cover and propose
                  local solutions.
                </p>

                {/* Quote Box */}
                <div className="bg-gradient-to-r from-blue-100/80 via-yellow-100/80 to-blue-100/80 border-2 border-blue-300/50 p-8 rounded-3xl shadow-lg relative overflow-hidden my-12">
                  <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 via-yellow-500 to-blue-500 rounded-t-3xl"></div>
                  <blockquote
                    className="text-xl md:text-2xl font-medium text-blue-800 mb-4 leading-relaxed italic"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    "We are Congo's future—and the Nile's guardians too."
                  </blockquote>
                  <p className="text-blue-600 text-base" style={{ fontFamily: "Playfair Display, serif" }}>
                    — One youth leader said
                  </p>
                </div>
              </div>

              {/* A Shared Source, a Shared Responsibility section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  A Shared Source, a Shared Responsibility
                </h3>
                <p
                  className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The DRC stands at the edge of the Nile Basin, but not outside its story. From the snowy peaks of the
                  Ruwenzori to the flowing banks of the Semliki, Congo offers water, wisdom, and will.
                </p>

                {/* Final Quote */}
                <div className="text-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-yellow-200 to-red-200 transform -rotate-1 rounded-3xl"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm p-12 shadow-2xl">
                      <blockquote
                        className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 leading-relaxed italic"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        "Unity is a river: it grows as it flows."
                      </blockquote>
                      <p className="text-blue-600 text-lg" style={{ fontFamily: "Playfair Display, serif" }}>
                        — Eastern Congolese Proverb
                      </p>
                    </div>
                  </div>
                </div>

                <p
                  className="text-xl text-blue-800 leading-relaxed italic text-center font-medium"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Let us flow forward together.
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
