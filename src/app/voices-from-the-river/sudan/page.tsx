"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SudanPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Confluence Animation - Two Rivers Meeting */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="blueNile" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="whiteNile" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F0F9FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="confluence" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#F0F9FF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Blue Nile */}
          <path
            d="M-100,250 Q300,200 600,300"
            stroke="url(#blueNile)"
            strokeWidth="12"
            fill="none"
            className="animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          />

          {/* White Nile */}
          <path
            d="M-100,450 Q300,400 600,300"
            stroke="url(#whiteNile)"
            strokeWidth="10"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s", transform: `translateY(${scrollY * 0.06}px)` }}
          />

          {/* Confluence - Combined River */}
          <path
            d="M600,300 Q900,280 1300,300"
            stroke="url(#confluence)"
            strokeWidth="16"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "2s", transform: `translateY(${scrollY * 0.04}px)` }}
          />
        </svg>
      </div>

      <MainNav />

      {/* Hero Section with Confluence Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <Image
            src="/images/nile.webp"
            alt="Aerial view of the confluence of Blue and White Nile in Khartoum"
            fill
            className="object-cover"
            priority
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
              textShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
            }}
          >
            SUDAN
          </h1>

          <h2
            className="text-2xl md:text-4xl font-light mb-8 text-blue-200 italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Where the Two Niles Meet – Stories of Resilience
          </h2>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-cyan-200 font-light italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "Here, blue and white embrace like kin, not rivals. Their confluence teaches us union through contrast."
          </blockquote>
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
              {/* First paragraph with Meroe image */}
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <p
                    className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-8"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    At the heart of Khartoum, the Blue Nile and White Nile converge — a powerful symbol of Sudan's
                    complex identity and enduring strength. This meeting point is more than geographic; it reflects the
                    coming together of diverse cultures, languages, and histories within the country.
                  </p>
                </div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/meroe.webp"
                      alt="Ancient Nubian pyramids at Meroe, Sudan"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Second paragraph with Henna image */}
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div className="relative order-2 lg:order-1">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/henna.webp"
                      alt="Traditional Sudanese henna patterns on hands"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <p
                    className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-8"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    For Sudanese people, the Nile is not only a lifeline but a spiritual thread woven through
                    generations. It flows past ancient Nubian temples and into everyday rituals — from traditional zar
                    ceremonies to the preparation of aseeda and kisra in riverside homes.
                  </p>
                </div>
              </div>

              {/* Third paragraph with Weaving image */}
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <p
                    className="text-xl md:text-2xl text-blue-800 leading-relaxed font-medium mb-8"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    The Nile has long shaped Sudanese artistry, with elaborate pottery, henna traditions, and woven
                    baskets echoing the river's curves and colors. In Sudanese music and poetry, too, the Nile is
                    ever-present — a metaphor for sorrow, love, and the hope that flows even in times of hardship.
                  </p>
                </div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/weaving.webp"
                      alt="Traditional Sudanese basket weaving with colorful patterns"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Final quote */}
              <div className="text-center mb-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 transform -rotate-1 rounded-3xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm p-12 shadow-2xl">
                    <blockquote
                      className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 leading-relaxed italic"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      "Where the Two Niles Meet" is not just a place — it is a reminder that resilience is born from
                      unity, even amid difference.
                    </blockquote>
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
          0%, 100% { text-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 0 0 50px rgba(59, 130, 246, 0.8), 0 0 70px rgba(59, 130, 246, 0.6); }
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
