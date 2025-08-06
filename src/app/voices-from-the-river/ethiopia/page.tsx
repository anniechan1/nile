"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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


      <MainNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <Image
            src="/images/coffee1.jpg"
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
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-6xl md:text-8xl">🇪🇹</span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-green-700"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 0 30px rgba(16, 185, 129, 0.5)",
              }}
            >
              ETHIOPIA
            </h1>
          </div>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-green-700 font-bold italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "Ye wuha lij endehone yiblal"  — "May you be like water's child"
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
              {/* What the Nile Means to Our People section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  What the Nile Means to Our People
                </h3>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p
                      className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      In Ethiopia, the Nile is not just a river — it's a source of identity, hope, and even conflict.
                    </p>
                    <p
                      className="text-xl text-green-800 leading-relaxed mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      It is both sacred and strategic. From ancient Aksumite kings who revered its life-giving force to
                      modern engineers building the Grand Ethiopian Renaissance Dam (GERD), the Nile connects past and
                      future, spirit and sovereignty.
                    </p>
                    <div className="bg-gradient-to-r from-blue-100 to-green-100 border-l-4 border-blue-500 p-6 rounded-lg">
                      <p
                        className="text-lg font-medium text-green-800 italic"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        <strong>💡 Did you know?</strong> The Blue Nile, which begins in Ethiopia, contributes about 85%
                        of the Nile's total volume before it merges with the White Nile in Sudan.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative overflow-hidden shadow-2xl">
                      <Image
                        src="/images/dam.png"
                        alt="Traditional Ethiopian Orthodox icon of Mary and Jesus"
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Ancient Roots, Living Waters section */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Image on the left */}
                  <div className="flex flex-col items-center">
                    <div className="relative overflow-hidden shadow-2xl w-[300px] lg:w-[350px] xl:w-[400px]">
                      <Image
                        src="/images/askum.webp"
                        alt="Ancient Aksumite obelisk"
                        width={800}
                        height={1067}
                        className="object-cover w-full h-auto"
                        unoptimized
                      />
                    </div>
                    <span className="text-xs text-gray-500 mt-2 text-center max-w-sm">
                      Photo: I, Ondřej Žváček, CC BY-SA 3.0, via Wikimedia Commons
                    </span>
                  </div>
                  {/* Content on the right */}
                  <div>
                    <h3
                      className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                      style={{
                        fontFamily: "Playfair Display, serif",
                      }}
                    >
                      Ancient Roots, Living Waters
                    </h3>
                    <p
                      className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-6"
                      style={{
                        fontFamily: "Playfair Display, serif",
                      }}
                    >
                      Long before colonial borders, the Kingdom of Aksum flourished here—trading across the Nile
                      Basin and leaving behind obelisks, manuscripts, and monasteries that still stand today.
                    </p>
                    <p
                      className="text-xl text-green-800 leading-relaxed font-medium"
                      style={{
                        fontFamily: "Playfair Display, serif",
                      }}
                    >
                      On the islands of Lake Tana, Ethiopian Orthodox monks preserve centuries-old rituals, hidden
                      in circular churches filled with colorful icons and handwritten scrolls.
                    </p>
                    {/* Quote box at the bottom */}
                    <div className="mt-8">
                      <div className="bg-white/95 backdrop-blur-sm border-l-4 border-green-500 p-6 rounded-lg shadow-2xl w-full">
                        <p
                          className="text-lg font-medium text-green-800 italic"
                          style={{ fontFamily: "Playfair Display, serif" }}
                        >
                          The river was, and remains, a carrier of civilization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Spiritual Water, Living Memory section */}
              <div className="mb-20 relative">
                {/* Full-width background image */}
                <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-screen h-full">
                  <Image
                    src="/images/timket.webp"
                    alt="Ethiopian Orthodox Timket celebration"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
                </div>

                <div className="relative z-10 py-48">
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
                          Spiritual Water, Living Memory
                        </h3>
                        <p
                          className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          In the Ethiopian Orthodox faith, water is holy and healing. The Nile—known in Amharic as
                          Abay—is not merely a natural resource but a divine presence.
                        </p>
                        <p
                          className="text-xl text-white leading-relaxed font-medium drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          From holy water at Tis Issat Falls to Epiphany (Timket) celebrations where thousands gather to
                          be blessed, the river plays a vital role in ritual cleansing and rebirth.
                        </p>
                      </div>


                    </div>
                  </div>
                </div>
              </div>

              {/* Culture in Every Drop section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Culture in Every Drop
                </h3>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p
                      className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      Ethiopia is the birthplace of coffee, and the coffee ceremony is a daily ritual of
                      hospitality—often performed near riversides or in rural homes.
                    </p>
                    <p
                      className="text-xl text-green-800 leading-relaxed mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      With incense, freshly roasted beans, and hand-carved jebenas (coffee pots), each ceremony is a
                      reminder: water sustains the land, but culture nourishes the soul.
                    </p>
                    <div className="bg-gradient-to-r from-green-100 to-yellow-100 border-l-4 border-green-500 p-6 rounded-lg">
                      <p
                        className="text-lg font-medium text-green-800 italic"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        Even the act of boiling water for coffee carries ancestral memory—a slow, sacred rhythm passed
                        through generations.
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative overflow-hidden shadow-2xl w-[220px] md:w-[260px] lg:w-[320px]">
                      <Image
                        src="/images/coffee.webp"
                        alt="Traditional Ethiopian coffee ceremony"
                        width={2716}
                        height={3922}
                        className="object-cover w-full h-auto aspect-[2716/3922]"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Symbols of Craft and Continuity section */}
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
                  The Nile is not only a symbol but a lifeline of craft.
                </p>
                <p
                  className="text-xl text-green-800 leading-relaxed mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  In rural Amhara and Tigray, women still create handmade pottery, textiles, and woven baskets that
                  reflect both tradition and utility. Cross motifs and painted icons tell visual stories—like the river
                  itself, they flow between generations.
                </p>
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                  <p className="text-lg text-green-800" style={{ fontFamily: "Playfair Display, serif" }}>
                    These are not just objects. They are expressions of heritage, shaped by water, earth, and human
                    hands.
                  </p>
                </div>
              </div>

              {/* River as Provider section */}
              <div className="mb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content on the left */}
                  <div>
                    <h3
                      className="text-2xl md:text-3xl font-bold text-green-800 mb-6"
                      style={{
                        fontFamily: "Playfair Display, serif",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.08)",
                      }}
                    >
                      River as Provider
                    </h3>
                    <p
                      className="text-xl md:text-2xl text-green-800 leading-relaxed font-medium mb-6"
                      style={{
                        fontFamily: "Playfair Display, serif",
                        textShadow: "1px 1px 3px rgba(0,0,0,0.08)",
                      }}
                    >
                      The people of Lake Tana and the highlands rely on the Nile for food, fishing, and farming.
                      Local communities still use papyrus boats (tankwa)—light and resilient, unchanged for centuries.
                      <span className="block mt-4">
                        Just as the Nile feeds the land, it shapes daily life, guiding planting seasons, harvests, and festivals. The river is provider, protector, and teacher.
                      </span>
                    </p>
                  </div>
                  {/* Image on the right */}
                  <div className="flex justify-center">
                    <div className="relative overflow-hidden shadow-2xl w-[340px] md:w-[420px] lg:w-[540px]">
                      <Image
                        src="/images/tana_lake.webp"
                        alt="Traditional papyrus boat on Lake Tana"
                        width={800}
                        height={533}
                        className="object-cover w-full h-auto"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* The Nile Carries More Than Water section */}
              <div className="mb-20 relative">
                {/* Full-width background image */}
                <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-screen h-full">
                  <Image
                    src="/images/waterfall.webp"
                    alt="Tis Issat Falls - Blue Nile Falls"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
                </div>

                <div className="relative z-10 py-48">
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
                          The Nile Carries More Than Water
                        </h3>
                        <p
                          className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          The Nile carries memories, stories, and dreams. In Ethiopia, it flows not just through
                          geography but through language, song, ritual, and daily life.
                        </p>
                        <p
                          className="text-xl text-white leading-relaxed font-medium drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          It is a witness to kingdoms and revolutions, baptisms and harvests.
                        </p>
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
