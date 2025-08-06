"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-gray-50 relative overflow-hidden">
      <MainNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <img
            src="/images/nile.webp"
            alt="Aerial view of where Blue and White Nile meet in Khartoum"

            className="object-cover"

          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"></div>
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
              SUDAN
            </h1>
          </div>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-4 text-red-600 font-bold italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "النيل ما بيجري إلا بالصبر"  - "The Nile flows only with patience"
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
              {/* Where the Two Niles Meet section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-red-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Where the Two Niles Meet
                </h3>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p
                      className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      At the heart of Khartoum, the Blue Nile and White Nile converge — a powerful symbol of Sudan's
                      complex identity and enduring strength. This meeting point is more than geographic; it reflects
                      the coming together of diverse cultures, languages, and histories within the country.
                    </p>
                    <p
                      className="text-xl text-red-800 leading-relaxed mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      For Sudanese people, the Nile is not only a lifeline but a spiritual thread woven through
                      generations. It flows past ancient Nubian temples in the north, echoes in the songs of the Dinka
                      and Nuba in the south and west, and sustains communities that have lived along its banks for
                      millennia.
                    </p>
                    <div className="bg-gradient-to-r from-red-100 to-gray-100 border-l-4 border-red-500 p-6 rounded-lg">
                      <p
                        className="text-lg font-medium text-red-800 italic"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        The river nourishes not just the land but the spirit.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative overflow-hidden shadow-2xl">
                      <img
                        src="/images/meroe.webp"
                        alt="Ancient Nubian pyramids at Meroe"
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover"

                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Spiritual Traditions and Daily Life section */}
              <div className="mb-20 relative">
                {/* Full-width background image */}
                <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-screen h-full">
                  <img
                    src="/images/sudan.webp"
                    alt="Sudanese cultural celebration"
                    className="object-cover object-center w-full h-full"

                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
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
                          Spiritual Traditions and Daily Life
                        </h3>
                        <p
                          className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          Traditional zar ceremonies, practiced to heal and protect, often include water rituals drawn
                          from Nile symbolism. Daily life, too, is steeped in river culture — from washing clothes on
                          its shores to the preparation of aseeda and kisra in riverside homes, shared communally and
                          passed down through generations.
                        </p>
                      </div>

                      {/* Quote box at the bottom */}
                      <div className="flex items-end">
                        <div className="bg-white/95 backdrop-blur-sm border-l-4 border-red-500 p-6 rounded-lg shadow-2xl w-full">
                          <p
                            className="text-lg font-medium text-red-800 italic"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            The river is a witness to Sudan's pain and promise, its revolutions and rebirths, and to the
                            enduring grace of its people — diverse, proud, and rooted like the acacia along the
                            riverbank.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Artistic Heritage section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-red-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Artistic Heritage Flows with the Nile
                </h3>
                <p
                  className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Sudan's artistic heritage flows with the Nile. The sweeping lines of Nubian pottery, the earthy tones
                  of woven palm baskets, and the intricate henna patterns drawn during weddings and births all echo the
                  river's rhythm and shape.
                </p>

                <div className="grid lg:grid-cols-2 gap-8 mb-8 items-center">
                  {/* Image left */}
                  <div className="flex justify-center">
                    <div
                      className="relative rounded-3xl shadow-2xl overflow-hidden"
                      style={{ width: 340, height: 483 }}
                    >
                      <img
                        src="/images/henna.webp"
                        alt="Intricate henna patterns on hands"
                        width={798}
                        height={1133}
                        className="object-cover w-full h-full"

                      />
                    </div>
                  </div>
                  {/* Text right */}
                  <div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Music & Poetry:</strong> In Sudanese music, oral poetry (hakamat, tagna, madīḥ), and
                        even Sufi rituals, the Nile often appears as a metaphor — for longing, for beauty, for survival.
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Crafts:</strong> Traditional pottery, woven baskets, and textiles reflect both the
                        river's influence and the skilled hands of generations of artisans.
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Henna Art:</strong> Intricate patterns drawn for celebrations echo the flowing patterns
                        of water and the interconnectedness of community life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cultural Celebrations section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-red-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Rhythms of Celebration
                </h3>
                <p
                  className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  In the region of Kassala, traditional dances like the tanbura are performed barefoot under moonlight,
                  drums echoing the heartbeat of the land. In Omdurman, the spiritual capital, Sufi dhikr ceremonies
                  blend African rhythms with Islamic devotion — a living symbol of Sudan's layered identity.
                </p>

                <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 mb-8 items-center">
                  {/* Text left */}
                  <div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        • Traditional dances that connect communities to the land and water
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        • Sufi ceremonies that blend spiritual devotion with cultural expression
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        • Musical traditions that carry stories across generations
                      </p>
                    </div>
                  </div>
                  {/* Image right */}
                  <div className="flex justify-center">
                    <div
                      className="relative  shadow-2xl overflow-hidden"
                      style={{ width: 300, height: 450 }}
                    >
                      <img
                        src="/images/dance1.webp"
                        alt="Traditional Sudanese dancer in colorful costume"
                        width={800}
                        height={1200}
                        className="object-cover w-full h-full"

                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-20 relative">
                {/* Full-width background image */}
                <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-screen h-full">
                  <img
                    src="/images/weaving.webp"
                    alt="Ancient Nubian pyramids at Meroe"

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
                          Unity in Diversity
                        </h3>
                        <p
                          className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-8 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          "Where the Two Niles Meet" is not just a place — it is a living reminder that resilience is
                          born from unity, even amid difference. The Nile carries memories, stories, and dreams through
                          Sudan's diverse landscapes and communities.
                        </p>
                      </div>
                      {/* Quote at the bottom */}
                      <div className="flex justify-start">
                        <div>
                          <blockquote
                            className="text-xl md:text-2xl font-bold text-white mb-4 leading-relaxed italic text-left"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            These are not just objects. They are expressions of heritage, shaped by water, earth, and
                            human hands.
                          </blockquote>
                          <p
                            className="text-white text-base text-left"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            — The enduring craft traditions of Sudan
                          </p>
                        </div>
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
