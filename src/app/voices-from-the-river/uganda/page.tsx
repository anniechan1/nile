"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function UgandaPage() {
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
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Source of the Nile Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="sourceFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Lake Victoria */}
          <ellipse cx="200" cy="400" rx="80" ry="60" fill="url(#sourceFlow)" opacity="0.7" className="animate-pulse" />

          {/* White Nile Beginning */}
          <path
            d="M280,400 Q400,350 600,380 Q800,410 1000,380 Q1100,360 1300,380"
            stroke="url(#sourceFlow)"
            strokeWidth="15"
            fill="none"
            className="animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          />

          {/* Tributaries from Lake Victoria */}
          <path
            d="M180,360 Q200,380 220,400"
            stroke="url(#sourceFlow)"
            strokeWidth="8"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <path
            d="M180,440 Q200,420 220,400"
            stroke="url(#sourceFlow)"
            strokeWidth="8"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />

          {/* Source Point at Jinja */}
          <circle cx="280" cy="400" r="15" fill="url(#sourceFlow)" className="animate-pulse" opacity="1.0" />
        </svg>
      </div>

      <MainNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-100 to-yellow-100"></div>

        <div
          className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-6xl md:text-8xl">🇺🇬</span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight animate-glow text-green-600"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 0 30px rgba(5, 150, 105, 0.5)",
              }}
            >
              UGANDA
            </h1>
          </div>

          <h2
            className="text-2xl md:text-4xl font-light mb-8 text-blue-700 italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Voices from the Source
          </h2>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-green-700 font-light italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "For us, water is not just life. It is the future."
          </blockquote>
          <p className="text-blue-600 text-base font-medium" style={{ fontFamily: "Playfair Display, serif" }}>
            — Ugandan Saying
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
              {/* The Beginning of the Journey section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Beginning of the Journey
                </h3>
                <p
                  className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  In Uganda, we proudly say: "The Nile begins here."
                </p>
                <p
                  className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The White Nile, the longest of the Nile's two great tributaries, flows out of Lake Victoria at Jinja—a
                  place that has become both a physical landmark and a cultural symbol. Known as the "Source of the
                  Nile," this area is sacred to many Ugandans. It represents life, movement, and potential.
                </p>
                <p className="text-xl text-green-800 leading-relaxed" style={{ fontFamily: "Playfair Display, serif" }}>
                  The river nourishes our land, powers our homes, and inspires our songs. From fishing communities on
                  the lake's edge to the farmers along its banks, the Nile is not just a river—it is a rhythm, flowing
                  through everything we do.
                </p>
              </div>

              {/* Stories That Flow With the River section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Stories That Flow With the River
                </h3>
                <p
                  className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Nile connects diverse peoples within Uganda—Baganda, Basoga, Acholi, Alur, and many others—through
                  shared reliance on its waters. It carries history, trade, and memory. Generations have used it for
                  transport, for spiritual rituals, and for healing.
                </p>
                <p
                  className="text-xl text-green-800 leading-relaxed mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  But the river also carries new challenges: land pressures, climate shifts, and pollution. Communities
                  downstream of major hydropower projects—like the Owen Falls Dam and Isimba—speak of changing fish
                  patterns and water levels. These are not just environmental issues; they are human stories.
                </p>
                <div className="bg-gradient-to-r from-green-100 to-blue-100 border-l-4 border-green-500 p-6 rounded-lg">
                  <p
                    className="text-lg font-medium text-green-800 italic"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    As we look ahead, the question is not only how we use the Nile, but how we protect it—for all its
                    children.
                  </p>
                </div>
              </div>

              {/* A Culture Rooted in Water section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  A Culture Rooted in Water
                </h3>
                <p
                  className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Ugandan cultural life often mirrors the flow of the river—steady, generous, and full of celebration.
                </p>

                <div className="grid md:grid-cols-1 gap-6 mb-8">
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-green-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Music:</strong> The Kadongo Kamu style, traditional drums, and folk songs often reference
                      the Nile or rain as blessings.
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-green-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Food:</strong> Nile tilapia and smoked fish are staple dishes, often served with matoke
                      (steamed plantain) or posho (maize meal).
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-green-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Spirituality:</strong> In Busoga and other regions, rivers are home to spirits (misambwa),
                      and rituals are performed near the water to honor ancestors and seek balance.
                    </p>
                  </div>
                </div>

                <p className="text-xl text-green-800 leading-relaxed" style={{ fontFamily: "Playfair Display, serif" }}>
                  Festivals, such as the Nyege Nyege Festival in Jinja, bring thousands together at the source of the
                  Nile—combining music, dance, and digital culture in one of East Africa's most vibrant expressions of
                  youth creativity.
                </p>
              </div>

              {/* Young Voices, Strong Currents section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Young Voices, Strong Currents
                </h3>
                <p
                  className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Uganda has one of the youngest populations in the world. For many young Ugandans, the Nile is not just
                  a landscape—it's a challenge and a canvas.
                </p>

                <p
                  className="text-xl text-green-800 leading-relaxed mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Youth-led projects have emerged around:
                </p>

                <div className="grid md:grid-cols-1 gap-4 mb-8">
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg text-green-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      • River clean-up efforts in Jinja and Kampala
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg text-green-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      • Tech-for-agriculture innovations in Nile-adjacent farming communities
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg text-green-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      • Eco-tourism ventures that use rafting, kayaking, and nature conservation to create livelihoods
                    </p>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="bg-gradient-to-r from-green-100/80 via-blue-100/80 to-green-100/80 border-2 border-green-300/50 p-8 rounded-3xl shadow-lg relative overflow-hidden my-12">
                  <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 rounded-t-3xl"></div>
                  <blockquote
                    className="text-xl md:text-2xl font-medium text-green-800 mb-4 leading-relaxed italic"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    "If we don't take care of the Nile, we lose part of ourselves,"
                  </blockquote>
                  <p className="text-green-600 text-base" style={{ fontFamily: "Playfair Display, serif" }}>
                    — said a student from Makerere University during a 2023 water innovation hackathon.
                  </p>
                </div>

                <p
                  className="text-xl text-green-800 leading-relaxed font-medium"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Ugandan youth are not waiting. They are already designing the future—together.
                </p>
              </div>

              {/* Hopes Carried by the River section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Hopes Carried by the River
                </h3>
                <p
                  className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Nile begins in Uganda, but it does not end here. Our dream is for it to become not a divider of
                  nations, but a unifier of generations. A river of trust. A river of peace.
                </p>

                {/* Final Quote */}
                <div className="text-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-blue-200 to-green-200 transform -rotate-1 rounded-3xl"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm p-12 shadow-2xl">
                      <blockquote
                        className="text-2xl md:text-3xl font-bold text-green-800 mb-6 leading-relaxed italic"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        "When the roots are deep, there is no reason to fear the wind."
                      </blockquote>
                      <p className="text-green-600 text-lg" style={{ fontFamily: "Playfair Display, serif" }}>
                        — Ugandan Proverb
                      </p>
                    </div>
                  </div>
                </div>

                <p
                  className="text-xl text-green-800 leading-relaxed italic text-center font-medium"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Let this river remind us: our strength lies in what we share, not just in what we own.
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
