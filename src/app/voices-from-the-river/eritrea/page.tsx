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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-blue-50 to-green-50 relative overflow-hidden">
      <MainNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <img
            src="/images/asmara.webp"
            alt="Historic architecture in Asmara, Eritrea"

            className="absolute inset-0 w-full h-full object-cover"

          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        </div>

        <div
          className={`relative z-10 text-center text-white px-4 max-w-6xl mx-auto transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-red-600"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 0 30px rgba(220, 38, 38, 0.5)",
              }}
            >
              ERITREA
            </h1>
          </div>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-8 text-red-600 font-bold italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "እምባ ብሓይሊ ኣይትተምልከን፣ ብሰብኣዊ ኣምራኽን ትትምልከን"<br />-"A mountain is not moved by force, but by human cooperation"
          </blockquote>
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
              {/* Rivers That Connect Us section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-red-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Rivers That Connect Us
                </h3>

                <div className="grid lg:grid-cols-1 gap-12 items-center">
                  <div className="text-start">
                    <p
                      className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Though Eritrea is not crossed by the main Nile, its western rivers—the Gash and the Setit—feed
                      into the Atbara, one of the Nile's important tributaries in Sudan.
                    </p>
                    <p
                      className="text-xl text-red-800 leading-relaxed mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      These rivers begin in the Eritrean highlands and carry not only water, but the memory of
                      migrations, trade, and ancient resilience. The Nile is not just a river of geography—it is a river
                      of connection.
                    </p>
                    <div className="bg-gradient-to-r from-red-100 to-blue-100 border-l-4 border-red-500 p-6 rounded-lg">
                      <p
                        className="text-lg font-medium text-red-800 italic"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        For Eritrea, its presence reminds us that we are part of the broader pulse of the region,
                        flowing quietly but steadily into the shared future of the basin.
                      </p>
                    </div>
                  </div>

                  <div className="relative">

                  </div>
                </div>
              </div>

              {/* A Land of Stone and Story section */}
              <div className="mb-20 relative">
                {/* Full-width background image */}
                <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-screen h-full">
                  <img
                    src="/images/farming.jpg"
                    alt="farming"

                    className="absolute inset-0 w-full h-full object-cover"

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
                          A Land of Stone and Story
                        </h3>
                        <p
                          className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          Eritrea is home to Qohaito, one of the most important ancient highland cities in the Horn of
                          Africa, overlooking deep gorges and once connected to the Aksumite empire. The ruins sit on a
                          plateau that whispers of centuries of trade and spiritual life.
                        </p>
                        <p
                          className="text-xl text-white leading-relaxed font-medium drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          These highlands also give birth to the rivers that eventually reach the Nile—linking past and
                          present, mountain and valley, Eritrea and Sudan.
                        </p>
                      </div>

                      {/* Quote box at the bottom */}
                      <div className="flex items-end">
                        <div className="bg-white/95 backdrop-blur-sm border-l-4 border-red-500 p-6 rounded-lg shadow-2xl w-full">
                          <p
                            className="text-lg font-medium text-red-800 italic"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            From Asmara, a UNESCO World Heritage city known for its modernist architecture, to the rural
                            farming villages near Tesseney, the relationship to land and water is intimate. Communities
                            here have developed traditional farming techniques to adapt to seasonal flows, harvesting
                            rain and managing water carefully in one of the driest corners of the Nile basin.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Eritrean culture is marked by unity through diversity. With nine recognized ethnic groups, each with
                  their own languages and traditions, water remains a common thread—revered in blessings, planting
                  rituals, and songs.
                </p>

                <div className="grid lg:grid-cols-2 gap-8 mb-8 items-center">
                  {/* Image left */}
                  <div className="flex justify-center">
                    <div className="relative rounded-3xl shadow-2xl overflow-hidden">
                      <img
                        src="/images/animal_market.webp"
                        alt="Traditional Eritrean community gathering at livestock market"
                        width={500}
                        height={350}
                        className="object-cover w-full h-full"

                      />
                    </div>
                  </div>
                  {/* Text right */}
                  <div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Coffee ceremonies:</strong> Central to social life, often begin with a handwashing
                        ritual—symbolizing purification and welcome.
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Traditional songs:</strong> From the Saho and Tigre peoples include praise for the
                        rivers that nourish the land, even if only briefly each year.
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Food:</strong> Like injera, shiro, and hilbet is shared communally, often accompanied by
                        stories of elders about how the land was tamed and protected.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-red-800 leading-relaxed" style={{ fontFamily: "Playfair Display, serif" }}>
                  These expressions are rooted in care—for each other, for the land, and for the water that comes and
                  goes.
                </p>
              </div>

              {/* A Famous Word, A Lasting Hope section */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-1 gap-12 items-center">
                  {/* Content on the left */}
                  <div className="text-start">
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
                      One of the most iconic moments in Eritrea's recent history was the long struggle for independence.
                      Out of it came a quote etched into the country's collective memory:
                    </p>
                    <div className="bg-gradient-to-r from-red-100 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
                      <p
                        className="text-lg font-bold text-red-800 italic mb-2"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        "ትሕግስቲ ንህዝቢ"
                      </p>
                      <p className="text-lg font-medium text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        "Victory to the Masses" <br />-Slogan of the Eritrean People's Liberation Front (EPLF)
                      </p>
                    </div>
                    <p
                      className="text-xl text-red-800 leading-relaxed font-medium"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Today, this spirit is being reimagined—not just in struggle, but in cooperation. The hope is that
                      Eritrean ingenuity, especially in water conservation, dryland agriculture, and cultural
                      preservation, can be shared across Nile Basin nations.
                    </p>
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
