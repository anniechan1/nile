"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-green-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Secret Spring Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="springFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#EAB308" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Mount Nyungwe - Secret Spring */}
          <circle cx="100" cy="300" r="25" fill="url(#springFlow)" className="animate-pulse" opacity="0.9" />

          {/* Rukarara River */}
          <path
            d="M100,300 Q200,280 300,320 Q400,360 500,340"
            stroke="url(#springFlow)"
            strokeWidth="6"
            fill="none"
            className="animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.06}px)` }}
          />

          {/* Akagera River */}
          <path
            d="M500,340 Q600,320 700,360 Q800,400 900,380"
            stroke="url(#springFlow)"
            strokeWidth="8"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s", transform: `translateY(${scrollY * 0.04}px)` }}
          />

          {/* Connection to Lake Victoria */}
          <path
            d="M900,380 Q1000,360 1100,400 Q1150,420 1200,400"
            stroke="url(#springFlow)"
            strokeWidth="10"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          {/* Small tributaries */}
          <path
            d="M80,280 Q90,290 100,300"
            stroke="url(#springFlow)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <path
            d="M80,320 Q90,310 100,300"
            stroke="url(#springFlow)"
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-yellow-100 to-green-100"></div>

        <div
          className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-6xl md:text-8xl">🇷🇼</span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight animate-glow text-blue-600"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
              }}
            >
              RWANDA
            </h1>
          </div>

          <h2
            className="text-2xl md:text-4xl font-light mb-8 text-yellow-700 italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Voices from the Hills
          </h2>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-green-700 font-light italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "Turashoboye"
          </blockquote>
          <p className="text-blue-600 text-base font-medium" style={{ fontFamily: "Playfair Display, serif" }}>
            — Kinyarwanda for "We are capable"
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
              {/* The Nile's Secret Spring section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Nile's Secret Spring
                </h3>
                <p
                  className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Few know this, but one of the most distant sources of the Nile is found in the hills of Rwanda. At
                  Mount Nyungwe, the Rukarara River flows quietly out of the rainforest—eventually joining the Akagera
                  River, then Lake Victoria, and finally the Nile itself.
                </p>
                <div className="bg-gradient-to-r from-blue-100 to-yellow-100 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
                  <p
                    className="text-lg font-medium text-blue-800 italic"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    In Rwanda, we say: "The Nile may be mighty, but it begins as a whisper."
                  </p>
                </div>
                <p className="text-xl text-blue-800 leading-relaxed" style={{ fontFamily: "Playfair Display, serif" }}>
                  This spring in the forest is more than a source—it is a symbol of potential, of small beginnings
                  leading to powerful outcomes. Just like Rwanda itself.
                </p>
              </div>

              {/* Water, Memory, and Resilience section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Water, Memory, and Resilience
                </h3>
                <p
                  className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Rwanda's relationship with water is deeply spiritual and practical. Water sources are treated with
                  reverence, especially in rural communities. At the same time, Rwanda is leading the region in
                  sustainable water management—from rainwater harvesting to wetland restoration.
                </p>
                <p
                  className="text-xl text-blue-800 leading-relaxed mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  After the 1994 Genocide, rebuilding required not just roads and homes—but healing landscapes. Wetlands
                  were revived, forests re-greened, and lakes protected. The Akagera National Park, which bears the
                  river's name, is now a symbol of Rwanda's ecological rebirth.
                </p>
              </div>

              {/* Cultural Flow section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Cultural Flow
                </h3>

                <div className="grid md:grid-cols-1 gap-6 mb-8">
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-blue-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Dance and Music:</strong> The Intore (warrior) dance, accompanied by drums and song,
                      reflects both elegance and strength. Some dances reenact cattle herding and river
                      crossings—rhythms of a pastoral past.
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-blue-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Food:</strong> Rwandan meals often feature ugali, ibishyimbo (beans), isombe (cassava
                      leaves), and fish from Lake Muhazi or Lake Ihema.
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                    <p className="text-lg text-blue-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      <strong>Rituals:</strong> Traditional naming ceremonies often involve water, and elders speak of
                      rivers as witnesses to family histories.
                    </p>
                  </div>
                </div>

                <p className="text-xl text-blue-800 leading-relaxed" style={{ fontFamily: "Playfair Display, serif" }}>
                  Art, especially poetry and storytelling, is central to how Rwandans remember, resist, and rebuild.
                </p>
              </div>

              {/* Youth Rising Like the River section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Youth Rising Like the River
                </h3>
                <p
                  className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Rwanda's youth are forward-looking, tech-savvy, and committed to sustainability. From coding bootcamps
                  in Kigali to eco clubs in Huye, they are shaping the next chapter of the Nile Basin.
                </p>

                <p
                  className="text-xl text-blue-800 leading-relaxed mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Initiatives led by youth include:
                </p>

                <div className="grid md:grid-cols-1 gap-4 mb-8">
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg text-blue-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      • Digital storytelling of local water histories
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg text-blue-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      • River cleanups and climate education
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                    <p className="text-lg text-blue-800" style={{ fontFamily: "Playfair Display, serif" }}>
                      • Innovations in water-saving irrigation
                    </p>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="bg-gradient-to-r from-blue-100/80 via-yellow-100/80 to-blue-100/80 border-2 border-blue-300/50 p-8 rounded-3xl shadow-lg relative overflow-hidden my-12">
                  <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 via-yellow-500 to-blue-500 rounded-t-3xl"></div>
                  <blockquote
                    className="text-xl md:text-2xl font-medium text-blue-800 mb-4 leading-relaxed italic"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    "We carry the future like water in our hands. We must move carefully, but boldly."
                  </blockquote>
                  <p className="text-blue-600 text-base" style={{ fontFamily: "Playfair Display, serif" }}>
                    — As one young Rwandan climate activist said at a regional forum
                  </p>
                </div>
              </div>

              {/* A River of Possibility section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  A River of Possibility
                </h3>
                <p
                  className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  In Rwanda, the Nile is not just a body of water—it is a metaphor. For growth. For healing. For moving
                  forward, no matter where you begin.
                </p>

                {/* Final Quote */}
                <div className="text-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-yellow-200 to-green-200 transform -rotate-1 rounded-3xl"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm p-12 shadow-2xl">
                      <blockquote
                        className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 leading-relaxed italic"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        "When the leg does not walk, the stomach does not eat."
                      </blockquote>
                      <p className="text-blue-600 text-lg" style={{ fontFamily: "Playfair Display, serif" }}>
                        — Rwandan Proverb
                      </p>
                    </div>
                  </div>
                </div>

                <p
                  className="text-xl text-blue-800 leading-relaxed italic text-center font-medium"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  We know that even small nations, like small springs, can nourish mighty things.
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
