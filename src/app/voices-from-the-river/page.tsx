"use client"

import { useState } from "react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import Link from "next/link"
import { riverCountries } from "@/data/flags"



export default function VoicesFromTheRiverPage() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const getColorClasses = (color: string) => {
    switch (color) {
      case "golden":
        return {
          bg: "bg-warm-gold",
          border: "border-warm-gold",
          text: "text-warm-gold",
          shadow: "shadow-warm-gold/50",
        }
      case "clay":
        return {
          bg: "bg-deep-orange",
          border: "border-deep-orange",
          text: "text-deep-orange",
          shadow: "shadow-deep-orange/50",
        }
      default:
        return {
          bg: "bg-river-blue",
          border: "border-river-blue",
          text: "text-river-blue",
          shadow: "shadow-river-blue/50",
        }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand via-off-white to-warm-gold-10 relative overflow-hidden">
      {/* Animated River Background with Brushstroke Feel */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="twilightRiver" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#123456" stopOpacity="0.3" />
                <stop offset="30%" stopColor="#c49b37" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#e67e22" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#123456" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="sunsetGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#c49b37" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#e67e22" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#123456" stopOpacity="0.3" />
              </linearGradient>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Brushstroke-inspired flowing shapes */}
            <path
              d="M-100,300 Q200,150 400,280 Q600,400 800,250 Q1000,100 1300,300"
              stroke="url(#twilightRiver)"
              strokeWidth="80"
              fill="none"
              filter="url(#softGlow)"
              className="animate-pulse"
              strokeLinecap="round"
            />

            <path
              d="M-50,350 Q250,200 450,330 Q650,450 850,300 Q1050,150 1350,350"
              stroke="url(#twilightRiver)"
              strokeWidth="40"
              fill="none"
              opacity="0.7"
              className="animate-pulse"
              style={{ animationDelay: "2s" }}
              strokeLinecap="round"
            />

            {/* Sunset sky gradient shapes */}
            <path
              d="M0,0 Q300,100 600,50 Q900,0 1200,80 L1200,200 Q900,150 600,200 Q300,250 0,200 Z"
              fill="url(#sunsetGlow)"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Floating papyrus-like elements */}
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-warm-gold rounded-full animate-bounce opacity-60"></div>
        <div
          className="absolute top-40 right-1/3 w-2 h-2 bg-deep-orange rounded-full animate-bounce opacity-70"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-60 left-1/3 w-4 h-4 bg-river-blue rounded-full animate-bounce opacity-50"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <MainNav />

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative px-4">
        <div className="container mx-auto max-w-8xl relative z-10">
          <div className="text-center">
            {/* Elegant Typography matching homepage */}
            <div className="space-y-4">
              <h1 className="leading-none">
                <span
                  className="block text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-river-blue via-warm-gold to-deep-orange transform -rotate-1 animate-pulse font-playfair"
                  style={{
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundImage: "linear-gradient(to right, #123456, #c49b37, #e67e22)",
                  }}
                >
                  Voices
                </span>
              </h1>

              <div className="transform rotate-1">
                <span
                  className="block text-lg md:text-xl lg:text-2xl font-light italic text-river-blue tracking-[0.2em] font-playfair"
                  style={{
                    textShadow: "0 0 30px rgba(18, 52, 86, 0.4)",
                  }}
                >
                  from the river
                </span>
              </div>

              <div>
                <span
                  className="block text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-deep-orange via-river-blue to-warm-gold font-playfair"
                  style={{
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundImage: "linear-gradient(to right, #e67e22, #123456, #c49b37)",
                  }}
                >
                  11 nations, 1 story
                </span>
              </div>
              <div className="max-w-5xl mx-auto text-center">
                <blockquote className="text-lg md:text-xl text-river-blue leading-relaxed font-light italic mb-8 font-playfair">
                  "The Nile has eleven names, yet sings one lullaby. In each basin nation, its rhythm takes on a local
                  accent—carved into pyramids, whispered through papyrus reeds, tasted in coffee, sung in lullabies. These
                  are the <span className="font-bold text-warm-gold">voices of the river</span>."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Flowing Wave Animation at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
              <path
                d="M0,80 Q300,20 600,80 T1200,80 V160 H0 V80"
                fill="url(#twilightRiver)"
                className="animate-pulse"
              />
              <path
                d="M0,100 Q400,40 800,100 T1200,100 V160 H0 V100"
                fill="url(#twilightRiver)"
                opacity="0.6"
                className="animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </svg>
          </div>
        </div>
      </section>

      <main className="relative z-10">
        {/* Introduction */}
        {/* <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
          
          </div>
        </section> */}

        {/* Interactive Map Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-12 transform rotate-1 font-playfair">
                  The Nile Basin Nations
                </h2>
                <p className="text-lg md:text-xl text-charcoal leading-relaxed font-lora max-w-3xl mx-auto">
                  Explore the voices, stories, and heritage of each nation connected by our shared river. Click on any
                  country to discover their unique relationship with the Nile.
                </p>
              </div>

              {/* Interactive Map Container */}
              <div className="relative bg-gradient-to-br from-warm-gold-10 to-river-blue-10 backdrop-blur-xl border-2 border-warm-gold/30 rounded-[3rem] p-12 shadow-2xl shadow-warm-gold/20">
                <div className="relative w-full h-[700px] bg-gradient-to-b from-sand/50 to-off-white/50 rounded-2xl overflow-hidden border border-warm-gold/20">
                  {/* Realistic Nile River Path */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="nileFlow" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#123456" stopOpacity="0.8" />
                        <stop offset="30%" stopColor="#c49b37" stopOpacity="0.9" />
                        <stop offset="70%" stopColor="#e67e22" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#123456" stopOpacity="0.7" />
                      </linearGradient>
                      <linearGradient id="riverBank" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f8f1e7" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#e6d7c3" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#f8f1e7" stopOpacity="0.6" />
                      </linearGradient>
                      <filter id="riverGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* River Banks */}
                    <path
                      d="M48,8 Q46,18 48,28 Q50,38 46,48 Q43,58 40,68 Q38,78 36,88 L38,90 Q40,80 42,70 Q45,60 48,50 Q52,40 50,30 Q48,20 50,10 Z"
                      fill="url(#riverBank)"
                      opacity="0.4"
                    />
                    <path
                      d="M52,8 Q54,18 52,28 Q50,38 54,48 Q57,58 60,68 Q62,78 64,88 L62,90 Q60,80 58,70 Q55,60 52,50 Q48,40 50,30 Q52,20 50,10 Z"
                      fill="url(#riverBank)"
                      opacity="0.4"
                    />

                    {/* Main Nile River - More Realistic Path */}
                    <path
                      d="M50,8 Q48,18 50,28 Q52,38 48,48 Q45,58 42,68 Q40,78 38,88"
                      stroke="url(#nileFlow)"
                      strokeWidth="3"
                      fill="none"
                      filter="url(#riverGlow)"
                      className="animate-pulse"
                      strokeLinecap="round"
                    />

                    {/* Blue Nile Branch (from Ethiopia) */}
                    <path
                      d="M58,42 Q60,45 58,48 Q56,50 54,52 Q52,54 50,48"
                      stroke="url(#nileFlow)"
                      strokeWidth="2"
                      fill="none"
                      filter="url(#riverGlow)"
                      className="animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                      strokeLinecap="round"
                    />

                    {/* White Nile Branch (from Uganda/South Sudan) */}
                    <path
                      d="M38,58 Q36,62 34,66 Q32,70 30,74 Q35,72 40,68"
                      stroke="url(#nileFlow)"
                      strokeWidth="2"
                      fill="none"
                      filter="url(#riverGlow)"
                      className="animate-pulse"
                      style={{ animationDelay: "1s" }}
                      strokeLinecap="round"
                    />

                    {/* Lake Victoria (source) */}
                    <ellipse
                      cx="38"
                      cy="62"
                      rx="4"
                      ry="3"
                      fill="url(#nileFlow)"
                      opacity="0.8"
                      className="animate-pulse"
                      style={{ animationDelay: "1.5s" }}
                    />

                    {/* Nile Delta */}
                    <path
                      d="M48,12 Q46,8 44,6 M50,12 Q52,8 54,6 M50,12 Q50,8 50,6"
                      stroke="url(#nileFlow)"
                      strokeWidth="1.5"
                      fill="none"
                      filter="url(#riverGlow)"
                      className="animate-pulse"
                      style={{ animationDelay: "2s" }}
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Country Markers */}
                  {riverCountries.map((country) => {
                    const colorClasses = getColorClasses(country.color)
                    return (
                      <Link
                        key={country.id}
                        href={`/voices-from-the-river/${country.id}`}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                        style={{ left: `${country.x}%`, top: `${country.y}%` }}
                        onMouseEnter={() => setHoveredCountry(country.id)}
                        onMouseLeave={() => setHoveredCountry(null)}
                      >
                        <div
                          className={`w-6 h-6 rounded-full border-2 border-white shadow-xl transition-all duration-500 ${colorClasses.bg
                            } ${colorClasses.shadow} ${hoveredCountry === country.id
                              ? "scale-150 shadow-2xl animate-pulse"
                              : "hover:scale-125 hover:animate-pulse"
                            }`}
                        >
                          <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-20"></div>
                          {/* Ripple effect on hover */}
                          {hoveredCountry === country.id && (
                            <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-40 scale-150"></div>
                          )}
                        </div>

                        {/* Country Label with Flag */}
                        <div
                          className={`absolute top-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${hoveredCountry === country.id ? "opacity-100 scale-100" : "opacity-0 scale-75"
                            }`}
                        >
                          <div className="bg-white/95 backdrop-blur-xl px-6 py-2 rounded-xl shadow-2xl border-2 border-warm-gold/30 inline-flex items-center space-x-3">
                            <div className="flex items-center justify-center space-x-3">
                              <img
                                src={country.flagSrc}
                                alt={`${country.name} Flag`}
                                className="w-8 h-6 object-cover"
                                width={200}
                                height={150}
                              />
                              <p className="text-sm font-bold text-river-blue whitespace-nowrap font-playfair">
                                {country.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  })}

                  {/* Map Legend */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xl p-6 rounded-xl shadow-2xl border-2 border-warm-gold/30">
                    <h3 className="text-lg font-bold text-river-blue mb-3 font-playfair">Basin Nations</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-sm text-charcoal font-lora">
                        <div className="w-4 h-4 bg-river-blue rounded-full shadow-lg shadow-river-blue/50"></div>
                        <span>Northern Flow</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-charcoal font-lora">
                        <div className="w-4 h-4 bg-deep-orange rounded-full shadow-lg shadow-deep-orange/50"></div>
                        <span>Central Basin</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-charcoal font-lora">
                        <div className="w-4 h-4 bg-warm-gold rounded-full shadow-lg shadow-warm-gold/50"></div>
                        <span>Source Region</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
