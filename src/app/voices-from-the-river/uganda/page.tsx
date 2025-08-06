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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-red-50 to-gray-50 relative overflow-hidden">
      <MainNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <img
            src="/images/children_water.webp"
            alt="Ugandan children at a water pump"

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
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-yellow-500"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 0 30px rgba(234, 179, 8, 0.5)",
              }}
            >
              UGANDA
            </h1>
          </div>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-yellow-400 font-bold italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "Omuntu ky'ayagala, ye ky'amuloga" — "What a person loves is what bewitches them."
          </blockquote>
        </div>
      </section>

      <main className="relative z-10">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/voices-from-the-river"
            className="inline-flex items-center space-x-2 text-yellow-700 hover:text-yellow-900 transition-colors font-semibold"
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
                  className="text-2xl md:text-3xl font-bold text-yellow-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Beginning of the Journey
                </h3>

                <div className="grid lg:grid-cols-1 gap-12">
                  <div>
                    <p
                      className="text-xl md:text-2xl text-yellow-800 leading-relaxed font-medium mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      In Uganda, we proudly say: "The Nile begins here."
                    </p>
                    <p
                      className="text-xl text-yellow-800 leading-relaxed mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      The White Nile, the longest of the Nile's two great tributaries, flows out of Lake Victoria at
                      Jinja—a place that has become both a physical landmark and a cultural symbol. Known as the "Source
                      of the Nile," this area is sacred to many Ugandans. It represents life, movement, and potential.
                    </p>
                    <p
                      className="text-xl text-yellow-800 leading-relaxed mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      The river nourishes our land, powers our homes, and inspires our songs. From fishing communities
                      on the lake's edge to the farmers along its banks, the Nile is not just a river—it is a rhythm,
                      flowing through everything we do.
                    </p>
                    <div className="bg-gradient-to-r from-yellow-100 to-red-100 border-l-4 border-yellow-500 p-6 rounded-lg">
                      <p
                        className="text-lg font-medium text-yellow-800 italic"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        "For us, water is not just life. It is the future." – Ugandan saying
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stories That Flow With the River section */}
              <div className="mb-20 relative">
                {/* Full-width background image */}
                <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-screen h-full">
                  <img
                    src="/images/basin.webp"
                    alt="Ugandan women carrying water basins"

                    className="absolute inset-0 w-full h-full object-cover object-center"

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
                          Stories That Flow With the River
                        </h3>
                        <p
                          className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          The Nile connects diverse peoples within Uganda—Baganda, Basoga, Acholi, Alur, and many
                          others—through shared reliance on its waters. It carries history, trade, and memory.
                          Generations have used it for transport, for spiritual rituals, and for healing.
                        </p>
                        <p
                          className="text-xl text-white leading-relaxed font-medium drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          But the river also carries new challenges: land pressures, climate shifts, and pollution.
                          Communities downstream of major hydropower projects—like the Owen Falls Dam and Isimba—speak
                          of changing fish patterns and water levels. These are not just environmental issues; they are
                          human stories.
                        </p>
                      </div>

                      {/* Quote box at the bottom */}
                      <div className="flex items-end">
                        <div className="bg-white/95 backdrop-blur-sm border-l-4 border-yellow-500 p-6 rounded-lg shadow-2xl w-full">
                          <p
                            className="text-lg font-medium text-yellow-800 italic"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            As we look ahead, the question is not only how we use the Nile, but how we protect it—for
                            all its children.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* A Culture Rooted in Water section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-yellow-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  A Culture Rooted in Water
                </h3>
                <p
                  className="text-xl md:text-2xl text-yellow-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Ugandan cultural life often mirrors the flow of the river—steady, generous, and full of celebration.
                </p>

                <div className="grid lg:grid-cols-1 gap-8 mb-8">
                  <div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-yellow-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Music:</strong> The Kadongo Kamu style, traditional drums, and folk songs often
                        reference the Nile or rain as blessings.
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-yellow-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Food:</strong> Nile tilapia and smoked fish are staple dishes, often served with matoke
                        (steamed plantain) or posho (maize meal).
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-yellow-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Spirituality:</strong> In Busoga and other regions, rivers are home to spirits
                        (misambwa), and rituals are performed near the water to honor ancestors and seek balance.
                      </p>
                    </div>
                  </div>
                </div>

                <p
                  className="text-xl text-yellow-800 leading-relaxed"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Festivals, such as the Nyege Nyege Festival in Jinja, bring thousands together at the source of the
                  Nile—combining music, dance, and digital culture in one of East Africa's most vibrant expressions of
                  youth creativity.
                </p>
              </div>

              {/* Young Voices, Strong Currents section */}
              <div className="mb-20 relative">
                {/* Full-width background image */}
                <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-screen h-full">
                  <img
                    src="/images/dancing.webp"
                    alt="Traditional Ugandan cultural dancers"

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
                          Young Voices, Strong Currents
                        </h3>
                        <p
                          className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          Uganda has one of the youngest populations in the world. For many young Ugandans, the Nile is
                          not just a landscape—it's a challenge and a canvas.
                        </p>
                      </div>

                      {/* Content boxes */}
                      <div className="grid md:grid-cols-1 gap-6">
                        <div className="bg-white/70 backdrop-blur-sm border-l-4 border-yellow-500 p-6 rounded-lg shadow-2xl">
                          <p
                            className="text-lg font-medium text-yellow-800"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            <strong>Youth-led projects have emerged around:</strong>
                          </p>
                          <ul className="mt-4 space-y-2 text-yellow-800">
                            <li>• River clean-up efforts in Jinja and Kampala</li>
                            <li>• Tech-for-agriculture innovations in Nile-adjacent farming communities</li>
                            <li>
                              • Eco-tourism ventures that use rafting, kayaking, and nature conservation to create
                              livelihoods
                            </li>
                          </ul>
                        </div>
                      </div>


                      <p
                        className="text-2xl font-medium text-white italic"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        Ugandan youth are not waiting. They are already designing the future—together.
                      </p>

                    </div>
                  </div>
                </div>
              </div>

              {/* Hopes Carried by the River section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-yellow-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Hopes Carried by the River
                </h3>
                <p
                  className="text-xl md:text-2xl text-yellow-800 leading-relaxed font-medium mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Nile begins in Uganda, but it does not end here. Our dream is for it to become not a divider of
                  nations, but a unifier of generations. A river of trust. A river of peace.
                </p>

                <div className="bg-gradient-to-r from-yellow-100 to-red-100 border-l-4 border-yellow-500 p-8 rounded-lg">
                  <blockquote
                    className="text-xl md:text-2xl font-bold text-yellow-800 leading-relaxed italic text-center"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Let this river remind us: our strength lies in what we share, not just in what we own.
                  </blockquote>
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
