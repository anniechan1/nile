"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EthiopiaPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Blue Nile Source Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="sourceFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Source Spring */}
          <circle cx="200" cy="300" r="30" fill="url(#sourceFlow)" className="animate-pulse" opacity="0.8" />

          {/* Blue Nile Flow */}
          <path
            d="M200,300 Q400,250 600,300 Q800,350 1000,300 Q1100,280 1300,300"
            stroke="url(#sourceFlow)"
            strokeWidth="12"
            fill="none"
            className="animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          />

          {/* Highland Tributaries */}
          <path
            d="M150,250 Q180,270 200,300"
            stroke="url(#sourceFlow)"
            strokeWidth="6"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <path
            d="M180,350 Q190,330 200,300"
            stroke="url(#sourceFlow)"
            strokeWidth="6"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </svg>
      </div>

      <MainNav />

      {/* Hero Section with GERD Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <Image
            src="/images/dam.png"
            alt="Aerial view of the Grand Ethiopian Renaissance Dam"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"></div>
        </div>

        <div
          className={`relative z-10 text-center text-white px-4 max-w-6xl mx-auto transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-glow"
            style={{
              fontFamily: "Playfair Display, serif",
              textShadow: "0 0 30px rgba(16, 185, 129, 0.5)",
            }}
          >
            ETHIOPIA
          </h1>

          <h2
            className="text-2xl md:text-4xl font-light mb-8 text-green-200 italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Source of the Blue Nile: Pride, Progress, and Partnership
          </h2>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-yellow-200 font-light italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "From the heart of Lake Tana springs both water and will—undaunted, unfinished, united."
          </blockquote>
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
              {/* Opening paragraph */}
              <div className="mb-20">
                <p
                  className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Nile begins its long journey in Ethiopia's highlands, where Lake Tana feeds the Blue Nile, a river
                  that carries not just water, but stories of resilience, pride, and purpose.
                </p>
              </div>

              {/* What the Nile Means section with Mary icon */}
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    What the Nile Means to Our People
                  </h3>
                  <p
                    className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-6"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    In Ethiopia, the Nile is not just a river — it's a source of identity, hope, and conflict.
                  </p>
                  <p
                    className="text-xl text-green-800 leading-relaxed mb-6"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    It is both sacred and strategic. From ancient Aksumite kings who revered it, to modern engineers
                    building the Grand Ethiopian Renaissance Dam (GERD), the river connects past and future, spirit and
                    sovereignty.
                  </p>
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 border-l-4 border-blue-500 p-6 rounded-lg">
                    <p
                      className="text-lg font-medium text-green-800 italic"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      <strong>Did you know?</strong> The Blue Nile contributes about 85% of the Nile's total volume
                      before it merges with the White Nile in Sudan.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/mary.webp"
                      alt="Traditional Ethiopian Orthodox icon of Mary and Jesus"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* Ancient Roots section with Food image */}
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div className="relative order-2 lg:order-1">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/food.webp"
                      alt="Traditional Ethiopian meal served on injera in woven basket"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3
                    className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Ancient Roots, Living Waters
                  </h3>
                  <p
                    className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-6"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Long before colonial maps, the Kingdom of Aksum flourished here—trading through the Nile Basin,
                    leaving obelisks, manuscripts, and monasteries still standing today.
                  </p>
                  <p
                    className="text-xl text-green-800 leading-relaxed"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    On the islands of Lake Tana, Ethiopian Orthodox monks preserve centuries-old traditions, hidden in
                    circular churches and colorful icons.
                  </p>
                </div>
              </div>

              {/* Culture in Every Drop section with Coffee image */}
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Culture in Every Drop
                  </h3>
                  <p
                    className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-6"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Ethiopia is the birthplace of coffee, and the coffee ceremony remains a daily ritual of hospitality,
                    often performed near the river.
                  </p>
                  <p
                    className="text-xl text-green-800 leading-relaxed"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Incense, fresh roasting beans, and hand-carved jebenas (coffee pots) remind us: water sustains the
                    land, but culture nourishes the soul.
                  </p>
                </div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/coffee.webp"
                      alt="Ethiopian women performing traditional coffee ceremony"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* Symbols of Craft section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Symbols of Craft and Continuity
                </h3>
                <p
                  className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Traditional woven baskets, cross motifs, and painted icons tell visual stories—just like the river,
                  they flow between generations.
                </p>
                <p className="text-xl text-green-800 leading-relaxed" style={{ fontFamily: "Playfair Display, serif" }}>
                  In rural Amhara and Tigray, women still craft handmade pottery and textiles that honor both tradition
                  and utility.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 30px rgba(16, 185, 129, 0.5); }
          50% { text-shadow: 0 0 50px rgba(16, 185, 129, 0.8), 0 0 70px rgba(16, 185, 129, 0.6); }
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
