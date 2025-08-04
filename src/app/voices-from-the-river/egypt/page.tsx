"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { Utensils, Sailboat, Palette, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EgyptPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Hieroglyphs */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce text-amber-600">𓂀</div>
        <div
          className="absolute top-40 right-20 text-4xl opacity-15 animate-bounce text-yellow-600"
          style={{ animationDelay: "1s" }}
        >
          𓊪
        </div>
        <div
          className="absolute bottom-60 left-1/4 text-5xl opacity-10 animate-bounce text-orange-600"
          style={{ animationDelay: "2s" }}
        >
          𓈖
        </div>
        <div
          className="absolute bottom-40 right-1/3 text-3xl opacity-25 animate-bounce text-amber-700"
          style={{ animationDelay: "0.5s" }}
        >
          𓊽
        </div>

        {/* Flowing Nile Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="nileFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path
            d="M-100,300 Q300,200 600,300 T1300,280"
            stroke="url(#nileFlow)"
            strokeWidth="8"
            fill="none"
            className="animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <path
            d="M-100,500 Q400,400 700,500 T1300,480"
            stroke="url(#nileFlow)"
            strokeWidth="6"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1.5s", transform: `translateY(${scrollY * 0.05}px)` }}
          />
        </svg>

        {/* Floating Lotus Petals */}
        <div className="absolute top-32 left-1/3 w-4 h-4 bg-pink-300 rounded-full animate-float opacity-60"></div>
        <div
          className="absolute top-64 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-float opacity-50"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute bottom-80 left-1/5 w-5 h-5 bg-pink-200 rounded-full animate-float opacity-70"
          style={{ animationDelay: "1.2s" }}
        ></div>
      </div>

      <MainNav />

      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <Image
            src="/images/egyptian.webp"
            alt="Traditional Egyptian scene by the Nile at sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </div>

        <div
          className={`relative z-10 text-center text-white px-4 max-w-6xl mx-auto transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-glow"
            style={{
              fontFamily: "Playfair Display, serif",
              textShadow: "0 0 30px rgba(251, 191, 36, 0.5)",
            }}
          >
            EGYPT
          </h1>

          <h2
            className="text-2xl md:text-4xl font-light mb-8 text-yellow-200 italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            The Nile's Gift: Civilization, Conflict, and Renewal
          </h2>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-amber-200 font-light italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "As we walk among the ruins, we remember: what water builds, time respects."
          </blockquote>
        </div>
      </section>

      <main className="relative z-10">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/voices-from-the-river"
            className="inline-flex items-center space-x-2 text-amber-700 hover:text-amber-900 transition-colors font-semibold"
          >
            <ArrowLeft className="h-5 w-5" />
            <span style={{ fontFamily: "Playfair Display, serif" }}>Back to All Voices</span>
          </Link>
        </div>

        {/* Main Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div className="space-y-8">
                  <p
                    className="text-xl md:text-2xl text-amber-800 leading-relaxed font-medium"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    From the pharaohs to farmers, the Nile has been Egypt's beating heart. It is the river that carved
                    the story of ancient civilization into stone—giving rise to the pyramids, hieroglyphs, and temples
                    that still stand along its banks.
                  </p>

                  <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-l-4 border-yellow-500 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <p
                      className="text-lg font-medium text-amber-800 italic"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Egyptians have long called it <strong>Hapi</strong>, the god of flood and fertility, whose annual
                      arrival turned desert into life.
                    </p>
                  </div>

                  <p
                    className="text-xl text-amber-800 leading-relaxed"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    The Nile is not just a river—it's a rhythm. It dictates planting seasons, inspires poetry, and flows
                    through every folk tale told to children under Cairo's night sky.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 transform rotate-6 rounded-3xl opacity-20"></div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/handcraft.webp"
                      alt="Traditional Egyptian crafts with hieroglyphic boat models"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Sacred Quote */}
              <div className="text-center mb-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 transform -rotate-1 rounded-3xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm p-12 shadow-2xl">
                    <blockquote
                      className="text-3xl md:text-4xl font-bold text-amber-800 mb-6 leading-relaxed italic"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      "Without the Nile, there is no Egypt"
                    </blockquote>
                    <p className="text-amber-600 text-lg" style={{ fontFamily: "Playfair Display, serif" }}>
                      — Egyptian Proverb
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Expressions Section */}
        <section className="py-32 bg-gradient-to-b from-yellow-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2
                className="text-4xl md:text-6xl font-bold text-amber-800 mb-8 leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Cultural Expressions
              </h2>
              <p className="text-xl text-amber-700 max-w-3xl mx-auto" style={{ fontFamily: "Playfair Display, serif" }}>
                The river's gifts flow through every aspect of Egyptian life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {/* Lotus Flowers */}
              <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-spin">
                  <div className="text-2xl">🪷</div>
                </div>
                <h3
                  className="text-xl font-bold text-amber-800 mb-4 text-center"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Lotus Flowers
                </h3>
                <p className="text-amber-700 text-center" style={{ fontFamily: "Playfair Display, serif" }}>
                  Carved into stone, symbols of rebirth and the eternal cycle of the Nile
                </p>
              </div>

              {/* Traditional Dishes */}
              <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:-rotate-1">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                  <Utensils className="h-8 w-8 text-white" />
                </div>
                <h3
                  className="text-xl font-bold text-amber-800 mb-4 text-center"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Traditional Dishes
                </h3>
                <p className="text-amber-700 text-center" style={{ fontFamily: "Playfair Display, serif" }}>
                  Ful medames and molokhia, recipes passed down through generations
                </p>
              </div>

              {/* Woven Crafts */}
              <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3
                  className="text-xl font-bold text-amber-800 mb-4 text-center"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Woven Crafts
                </h3>
                <p className="text-amber-700 text-center" style={{ fontFamily: "Playfair Display, serif" }}>
                  Baskets and linen textiles, dyed with sacred river clay
                </p>
              </div>

              {/* Felucca */}
              <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:-rotate-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-sway">
                  <Sailboat className="h-8 w-8 text-white" />
                </div>
                <h3
                  className="text-xl font-bold text-amber-800 mb-4 text-center"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Felucca
                </h3>
                <p className="text-amber-700 text-center" style={{ fontFamily: "Playfair Display, serif" }}>
                  Both a vessel and a symbol of peace, connecting past to present
                </p>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Traditional Meal */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-400 transform rotate-3 rounded-3xl opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/meal.webp"
                    alt="Traditional Egyptian feast by the Nile"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      River's Bounty
                    </h3>
                    <p className="text-amber-200" style={{ fontFamily: "Playfair Display, serif" }}>
                      Fresh tilapia and traditional dishes shared by the water's edge
                    </p>
                  </div>
                </div>
              </div>

              {/* Felucca Sailing */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 transform -rotate-3 rounded-3xl opacity-20 group-hover:-rotate-6 transition-transform duration-500"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/boat.webp"
                    alt="Traditional felucca sailing on the Nile"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Timeless Journey
                    </h3>
                    <p className="text-blue-200" style={{ fontFamily: "Playfair Display, serif" }}>
                      Ancient sailing traditions continue with every ripple
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Connection Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p
                className="text-xl md:text-2xl text-amber-800 leading-relaxed mb-12"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Even today, despite modern dams and disputes, its waters remain sacred. In village kitchens, molokhia
                and tilapia are served beside steaming plates of rice—recipes passed down through generations that
                depend on the river's bounty. The ancient practice of felucca sailing is still a common sight,
                connecting the past to the present with every ripple.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 30px rgba(251, 191, 36, 0.5); }
          50% { text-shadow: 0 0 50px rgba(251, 191, 36, 0.8), 0 0 70px rgba(251, 191, 36, 0.6); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(5deg); }
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-sway {
          animation: sway 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
