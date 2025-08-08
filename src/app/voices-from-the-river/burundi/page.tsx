"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"


export default function BurundiPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50 relative overflow-hidden">
      <MainNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <img
            src="/images/burundi.webp"
            alt="Beautiful waterfall in Burundi's lush landscape"


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
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-red-800"
              style={{
                fontFamily: "Playfair Display, serif",
                textShadow: "0 0 30px rgba(220, 38, 38, 0.5)",
              }}
            >
              BURUNDI
            </h1>
          </div>

          <blockquote
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-8 text-red-800 font-bold italic"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            "Ubumwe ni ububasha"<br />"Unity is strength"
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
              {/* The Southernmost Spark of the Nile section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-red-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Southernmost Spark of the Nile
                </h3>

                <div className="grid lg:grid-cols-1 gap-12 items-center">
                  <div className="text-start">
                    <p
                      className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      One of the most remote sources of the Nile begins in Burundi—at Mount Gikizi, near the town of
                      Kasumo, where the Ruvyironza River rises. This tiny stream is considered the southernmost Nile
                      source.
                    </p>
                    <p
                      className="text-xl text-red-800 leading-relaxed mb-6"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      It flows into the Ruvubu River, then into the Kagera River, and finally to Lake Victoria. Though
                      small in land area, Burundi plays a mighty role in the Nile's journey. The story begins here—in
                      green hills, misty forests, and the lives of communities who depend on the water.
                    </p>
                    <div className="bg-gradient-to-r from-red-100 to-green-100 border-l-4 border-red-500 p-6 rounded-lg">
                      <p
                        className="text-lg font-medium text-red-800 italic"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        <strong>Did you know?</strong> One of the most remote sources of the Nile begins in
                        Burundi—at Mount Gikizi, near the town of Kasumo, where the Ruvyironza River rises. This tiny
                        stream is considered the southernmost Nile source.
                      </p>
                    </div>
                  </div>


                </div>
              </div>

              {/* Living With the River section */}
              <div className="mb-20 relative">
                {/* Full-width background image */}
                <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-screen h-full">
                  <img
                    src="/images/farmer.webp"
                    alt="farmer"

                    className="absolute inset-0 w-full h-full object-cover"

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
                          Living With the River
                        </h3>
                        <p
                          className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6 drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          In rural Burundi, rivers are a lifeline—for farming, cooking, washing, and ceremonies. But
                          they are also fragile. Heavy rainfall and deforestation in upstream areas cause erosion and
                          floods, especially in Muramvya, Gitega, and Muyinga.
                        </p>
                        <p
                          className="text-xl text-white leading-relaxed font-medium drop-shadow-lg"
                          style={{
                            fontFamily: "Playfair Display, serif",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          Farmers remember when rivers flowed calmly and predictably. Now, rains come harder, and land
                          washes away. In response, many have returned to traditional terracing and planting trees to
                          hold the soil—blending old knowledge with new climate needs.
                        </p>
                      </div>

                      {/* Quote box at the bottom */}
                      <div className="flex items-end">
                        <div className="bg-white/95 backdrop-blur-sm border-l-4 border-red-500 p-6 rounded-lg shadow-2xl w-full">
                          <p
                            className="text-lg font-medium text-red-800 italic"
                            style={{ fontFamily: "Playfair Display, serif" }}
                          >
                            "Amazi ni ubuzima." — "Water is life."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Culture Deep as the Hills section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-red-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Culture Deep as the Hills
                </h3>
                <p
                  className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Burundi's cultural life flows like its rivers—deep, resilient, and collective.
                </p>

                <div className="grid lg:grid-cols-2 gap-8 mb-8 items-center">
                  {/* Image left */}
                  <div className="flex justify-center">
                    <div className="relative rounded-3xl shadow-2xl overflow-hidden">
                      <img
                        src="/images/drummers.webp"
                        alt="Royal Drummers of Burundi performing traditional dance"
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"

                      />
                    </div>
                  </div>
                  {/* Text right */}
                  <div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Dance:</strong> The Royal Drummers of Burundi are world-renowned, blending strength,
                        rhythm, and spiritual energy. Drum performances often accompany community rituals related to the
                        land and water.
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Food:</strong> Beans, maize, sweet potatoes, and river fish form the basis of many
                        meals. Isombe (cassava leaves) and ugali are widely enjoyed.
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Rituals:</strong> In many communities, water is used for blessings, especially during
                        childbirth or in traditional healing ceremonies.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-red-800 leading-relaxed" style={{ fontFamily: "Playfair Display, serif" }}>
                  Storytelling is also key—elders pass down oral tales of rivers as protectors, travelers, and even
                  tricksters.
                </p>
              </div>

              {/* The Youth Are Listening—and Acting section */}
              <div className="mb-20">
                <h3
                  className="text-2xl md:text-3xl font-bold text-red-800 mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Youth Are Listening—and Acting
                </h3>
                <p
                  className="text-xl md:text-2xl text-red-800 leading-relaxed font-medium mb-8"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  In Burundi, young people are stepping up with local solutions and global vision. Across provinces like
                  Kirundo, Muyinga, Ngozi, Gitega, and Bubanza, they are:
                </p>

                <div className="grid lg:grid-cols-1 gap-8 mb-8 items-center">
                  {/* Text left */}
                  <div className="text-start">
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Reforesting the land:</strong> Through initiatives like Greening Burundi and the
                        national campaign "Ewe Burundi Urambaye", youth have planted millions of trees, formed
                        environmental clubs, and trained farmers in sustainable agroforestry to fight erosion and
                        climate change.
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-4">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Innovating in green enterprise:</strong> Youth-led startups such as Kaze Green Economy
                        in Gitega and Bujumbura are transforming agricultural waste into clean cooking fuel—reducing
                        deforestation and indoor pollution while creating local jobs.
                      </p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl">
                      <p className="text-lg text-red-800" style={{ fontFamily: "Playfair Display, serif" }}>
                        <strong>Building climate resilience:</strong> Organizations like ISHAKA 2250 are empowering
                        youth with skills in green entrepreneurship, supporting climate-affected families, and promoting
                        peace through environmental restoration.
                      </p>
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
