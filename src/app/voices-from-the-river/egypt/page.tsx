"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft } from 'lucide-react'
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      <MainNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <img
            src="/images/pyramid.jpg"
            alt="The Great Pyramids of Giza with camels"

            className="absolute inset-0 w-full h-full object-cover"

          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"></div>
        </div>

        <div
          className={`relative z-10 text-center text-white px-4 max-w-6xl mx-auto transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-amber-400"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 0 30px rgba(251, 191, 36, 0.5)",
              }}
            >
              EGYPT
            </h1>
          </div>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-amber-300 font-bold italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "مصر هبة النيل" — "Egypt is the gift of the Nile"
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

        {/* Main Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* The Nile: Our Ancestral Lifeline section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-amber-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Nile: Our Ancestral Lifeline
                </h3>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p
                      className="text-xl md:text-2xl text-amber-800 leading-relaxed font-medium mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      The Nile is the thread that has sewn Egypt's past, present, and future together. From the rich
                      silt that birthed ancient kingdoms to the cities that line its banks today, the river has always
                      been more than water.
                    </p>
                    <p
                      className="text-xl text-amber-800 leading-relaxed mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      It is ancestry, survival, and spirit—a river that flows not only through land but through
                      generations of memory.
                    </p>
                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 border-l-4 border-amber-500 p-6 rounded-lg">
                      <p
                        className="text-lg font-medium text-amber-800 italic"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        Herodotus called Egypt "the gift of the Nile," and every Egyptian—farmer, poet, youth—still
                        feels that truth.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative overflow-hidden shadow-2xl">
                      <img
                        src="/images/ruins.jpg"
                        alt="Ancient Egyptian temple columns with hieroglyphics"
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover"

                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Living With the River section */}
              <div className="mb-20 relative">
                {/* Full-width background image */}
                <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-screen h-full">
                  <img
                    src="/images/boat.webp"
                    alt="Traditional felucca sailboat on the Nile"

                    className="object-cover object-center w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                </div>

                <div className="relative z-10 py-32">
                  <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col gap-12">
                      {/* Content at the top */}
                      <div>
                        <h3
                          className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                          }}
                        >
                          Living With the River: Daily Realities & Shared Struggles
                        </h3>
                        <p
                          className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          In Egypt, the Nile is not just revered—it is lived with. It sustains millions, yet its future
                          is uncertain. As the population grows and climate pressures mount, Egyptians face questions of
                          equity, sustainability, and cooperation.
                        </p>
                      </div>

                      {/* Quote box at the bottom */}
                      <div className="flex items-end">
                        <div className="bg-white/95 backdrop-blur-sm border-l-4 border-amber-500 p-6 rounded-lg shadow-2xl w-full">
                          <p
                            className="text-lg font-medium text-amber-800 italic"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            From urban planning in Cairo to small-scale irrigation in Luxor, Egyptians are adapting,
                            innovating, and speaking out—balancing tradition with the urgent need for regional dialogue
                            and solidarity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Echoes of the Nile section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-amber-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Echoes of the Nile: Culture, Creativity & Expression
                </h3>
                <p
                  className="text-xl md:text-2xl text-amber-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Nile is a wellspring of Egyptian creativity. Across the country, artists, musicians, and
                  storytellers echo its rhythms in their work:
                </p>

                <div className="grid lg:grid-cols-2 gap-8 mb-8 items-center">
                  {/* Image left */}
                  <div className="flex justify-center">
                    <div
                      className="relative rounded-3xl shadow-2xl overflow-hidden"
                      style={{ width: 400, height: 300 }}
                    >
                      <img
                        src="/images/handcraft.webp"
                        alt="Egyptian craftsman working on traditional boat models"
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  {/* Text right */}
                  <div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-amber-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Music:</strong> In Nubian folk songs and Cairo's jazz clubs
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-amber-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Visual Arts:</strong> In paintings that capture feluccas at sunset
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-amber-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Literature:</strong> In novels, myths, and spoken word poetry
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                      <p className="text-lg text-amber-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Crafts:</strong> In embroidery and handcrafts rooted in Nile traditions
                      </p>
                    </div>
                  </div>
                </div>

                <p
                  className="text-xl text-amber-800 leading-relaxed"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Through culture, the Nile speaks in many tongues—reminding us that water is not only utility, but
                  identity.
                </p>
              </div>

              {/* Cultural Life section */}
              <div className="mb-20 relative">
                {/* Full-width background image */}
                <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-screen h-full">
                  <img
                    src="/images/meal.webp"
                    alt="Traditional Egyptian meal being prepared by the water"

                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                </div>

                <div className="relative z-10 py-32">
                  <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col gap-12">
                      {/* Content at the top */}
                      <div>
                        <h3
                          className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                          }}
                        >
                          Nourished by the River
                        </h3>
                        <p
                          className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          Egyptian cuisine is deeply connected to the Nile's bounty. From fresh fish caught in its
                          waters to the vegetables grown in its fertile delta, every meal tells the story of this
                          life-giving river.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Looking Forward section */}
              <div className="mb-20 relative">
                {/* Full-width background image */}
                <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-screen h-[600px]">
                  <img
                    src="/images/egyptian.webp"
                    alt="Two people in traditional dress by the Nile at sunset"

                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                </div>

                <div className="relative z-10 py-32">
                  <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col gap-12">
                      {/* Content at the top */}
                      <div>
                        <h3
                          className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                          }}
                        >
                          Looking Forward: A Call to Unity
                        </h3>
                        <p
                          className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-8 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          The Nile is not just Egypt's—it is ours, together. Egypt calls for open hearts and clear eyes
                          as we chart the future. Let us rise beyond headlines and history to write a new chapter—one
                          of trust, creativity, and mutual care.
                        </p>
                        <blockquote
                          className="text-xl md:text-2xl font-bold text-white leading-relaxed italic text-start"
                          style={{ fontFamily: "Playfair Display, serif" }}
                        >
                          The river connects us. Let us connect through it.
                        </blockquote>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
