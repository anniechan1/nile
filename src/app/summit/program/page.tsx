"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import MainNav from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Award, Handshake, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"

const day1Images = [
  { src: "/images/professor.webp", alt: "University professors in academic regalia" },
  { src: "/images/present.webp", alt: "Students presenting at innovation expo" },
  { src: "/images/scholar.webp", alt: "Academic conference with diverse participants" },

]

const day2Images = [


  { src: "/images/conference.webp", alt: "Collaborative conference discussion" },
  { src: "/images/presenting1.webp", alt: "Students presenting innovative ideas" },
  { src: "/images/researchers.webp", alt: "Academic researchers collaborating" },
  { src: "/images/delegate.webp", alt: "Diplomatic officials signing agreements" },
]

const day1Timeline = [
  {
    time: "Morning",
    title: "Cultural Awakening",
    description: "Artists inaugurate cultural exhibitions",
    color: "from-deep-orange to-warm-gold",
    bgTint: "from-warm-gold-10 to-sand",
  },
  {
    time: "Afternoon",
    title: "Academic Excellence",
    description: "Academics present research",
    color: "from-river-blue to-deep-orange",
    bgTint: "from-river-blue-10 to-warm-gold-10",
  },
  {
    time: "Evening",
    title: "Innovation Showcase",
    description: "Entrepreneurs pitch to hybrid audience",
    color: "from-warm-gold to-deep-orange",
    bgTint: "from-sand to-warm-gold-10",
  },
]

const day2Timeline = [
  {
    time: "Morning",
    title: "Solution Workshops",
    description: "Civil society leads solution workshops",
    color: "from-deep-orange to-river-blue",
    bgTint: "from-warm-gold-10 to-river-blue-10",
  },
  {
    time: "Afternoon",
    title: "Future Vision",
    description: 'Youth present "Nile 2050" vision',
    color: "from-river-blue to-warm-gold",
    bgTint: "from-river-blue-10 to-sand",
  },
  {
    time: "Closing",
    title: "Unity Accords",
    description: "All sectors sign collaboration accords",
    color: "from-warm-gold to-deep-orange",
    bgTint: "from-sand to-warm-gold-10",
  },
]

export default function SummitPage() {
  const [currentDay1Image, setCurrentDay1Image] = useState(0)
  const [currentDay2Image, setCurrentDay2Image] = useState(0)
  const [activeDay, setActiveDay] = useState(1)

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentDay1Image((prev) => (prev + 1) % day1Images.length)
    }, 4000)

    const interval2 = setInterval(() => {
      setCurrentDay2Image((prev) => (prev + 1) % day2Images.length)
    }, 4500)

    return () => {
      clearInterval(interval1)
      clearInterval(interval2)
    }
  }, [])

  const nextDay1Image = () => {
    setCurrentDay1Image((prev) => (prev + 1) % day1Images.length)
  }

  const prevDay1Image = () => {
    setCurrentDay1Image((prev) => (prev - 1 + day1Images.length) % day1Images.length)
  }

  const nextDay2Image = () => {
    setCurrentDay2Image((prev) => (prev + 1) % day2Images.length)
  }

  const prevDay2Image = () => {
    setCurrentDay2Image((prev) => (prev - 1 + day2Images.length) % day2Images.length)
  }

  return (
    <div className="min-h-screen bg-off-white">
      <MainNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hall.webp"
            alt="Summit hall with attendees"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-rich-white px-4 max-w-5xl mx-auto">
          <div className="mb-6">
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight hero-text-shadow">
              Summit 2025
            </h1>
            <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-light mb-6 text-rich-white tracking-wide hero-text-shadow">
              Two-Day Art, Academia & Enterprise Summit
            </h2>

            <div className="inline-flex items-center space-x-3 bg-deep-orange backdrop-blur-sm px-5 py-2.5 rounded-full text-rich-white font-bold text-sm md:text-base mb-6 shadow-lg">
              <MapPin className="h-4 w-4" />
              <span>Addis Ababa</span>
              <span>|</span>
              <Calendar className="h-4 w-4" />
              <span>6–7 September 2025</span>
            </div>
          </div>

          <p className="font-lora text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 text-rich-white font-normal hero-quote-shadow">
            A prestigious gathering celebrating the Nile's cultural and intellectual heritage through artistic
            expression, academic discourse, and sustainable innovation.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 md:py-20">
        {/* Introduction */}
        <section className="mb-16 md:mb-20">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium">
              The summit will convene distinguished leaders from arts, academia, government, and diplomacy across all
              Nile Basin nations.
            </p>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-8 leading-tight">
              Program Highlights
            </h2>
          </div>

          {/* Day 1 - Side by Side Layout */}
          <div className="mb-16 md:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image Carousel */}
              <div className="relative overflow-hidden shadow-2xl h-80 md:h-96">
                <div className="absolute inset-0">
                  {day1Images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${index === currentDay1Image ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" unoptimized />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                </div>


                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {day1Images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentDay1Image(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentDay1Image ? "bg-white" : "bg-white/50"
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 bg-deep-orange rounded-xl flex items-center justify-center shadow-xl">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-playfair text-2xl md:text-2xl font-bold text-river-blue">
                    Day 1: Cultural Grandeur & Academic Excellence
                  </h3>
                </div>
                <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium mb-6">
                  Distinguished university presidents in full academic regalia inaugurate this prestigious gathering
                </p>

                {/* Day 1 Program Table */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-warm-gold-20">
                        <td className="p-4 font-bold text-river-blue w-1/3 text-base font-playfair">
                          Presidential Opening
                        </td>
                        <td className="p-4 text-charcoal text-sm font-lora">
                          University presidents in academic regalia
                        </td>
                      </tr>
                      <tr className="border-b border-warm-gold-20">
                        <td className="p-4 font-bold text-river-blue text-base font-playfair">
                          Interdisciplinary Symposium
                        </td>
                        <td className="p-4 text-charcoal text-sm font-lora">Led by Nile Basin university leaders</td>
                      </tr>
                      <tr className="border-b border-warm-gold-20">
                        <td className="p-4 font-bold text-river-blue text-base font-playfair">
                          Live Art Collaborations
                        </td>
                        <td className="p-4 text-charcoal text-sm font-lora">Supervised by Artist Desalegn</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-river-blue text-base font-playfair">Evening Gala</td>
                        <td className="p-4 text-charcoal text-sm font-lora">Fashion defile of Nile-inspired designs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 - Side by Side Layout (Reversed) */}
          <div className="mb-16 md:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 bg-deep-orange rounded-xl flex items-center justify-center shadow-xl">
                    <Handshake className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-playfair text-2xl md:text-2xl font-bold text-river-blue">
                    Day 2: Innovation & Partnership
                  </h3>
                </div>
                <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium mb-6">
                  Diplomatic representatives and innovators forge lasting partnerships for the Nile Basin
                </p>

                {/* Day 2 Program Table */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-warm-gold-20">
                        <td className="p-4 font-bold text-river-blue w-1/3 text-base font-playfair">
                          Rectors' Roundtable
                        </td>
                        <td className="p-4 text-charcoal text-sm font-lora">Cross-border academic cooperation</td>
                      </tr>
                      <tr className="border-b border-warm-gold-20">
                        <td className="p-4 font-bold text-river-blue text-base font-playfair">
                          Student Innovation Expo
                        </td>
                        <td className="p-4 text-charcoal text-sm font-lora">Judged by university presidents</td>
                      </tr>
                      <tr className="border-b border-warm-gold-20">
                        <td className="p-4 font-bold text-river-blue text-base font-playfair">
                          Cultural Diplomacy Forum
                        </td>
                        <td className="p-4 text-charcoal text-sm font-lora">With embassy representatives</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-river-blue text-base font-playfair">Closing Ceremony</td>
                        <td className="p-4 text-charcoal text-sm font-lora">MOUs signed between institutions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Image Carousel */}
              <div className="order-1 lg:order-2 relative overflow-hidden shadow-2xl h-80 md:h-96">
                <div className="absolute inset-0">
                  {day2Images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${index === currentDay2Image ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" unoptimized />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                </div>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {day2Images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentDay2Image(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentDay2Image ? "bg-white" : "bg-white/50"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Flow - Toggle View */}

        <section className="mb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/poets.webp"
              alt="Nile river at sunset with palm trees and pyramids"
              fill
              className="object-cover"
              unoptimized
            />

          </div>

          <div className="relative z-10 py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-rich-white mb-8 leading-tight hero-text-shadow">
                  Engagement Flow
                </h2>
                <p className="font-lora text-base md:text-lg text-rich-white leading-relaxed max-w-3xl mx-auto font-medium hero-quote-shadow">
                  Follow the rhythm of collaboration as voices unite throughout each day
                </p>
              </div>

              {/* Day Toggle Tabs */}
              <div className="flex justify-center mb-12">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <button
                    onClick={() => setActiveDay(1)}
                    className={`px-8 py-3 rounded-full font-bold text-base transition-all duration-300 font-merriweather ${activeDay === 1
                      ? "bg-deep-orange text-rich-white shadow-lg"
                      : "text-river-blue hover:text-deep-orange"
                      }`}
                  >
                    Day 1
                  </button>
                  <button
                    onClick={() => setActiveDay(2)}
                    className={`px-8 py-3 rounded-full font-bold text-base transition-all duration-300 font-merriweather ${activeDay === 2
                      ? "bg-deep-orange text-rich-white shadow-lg"
                      : "text-river-blue hover:text-deep-orange"
                      }`}
                  >
                    Day 2
                  </button>
                </div>
              </div>

              {/* Timeline Cards */}
              <div className="grid md:grid-cols-3 gap-8">
                {(activeDay === 1 ? day1Timeline : day2Timeline).map((step, index) => (
                  <div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-white/30 transform hover:scale-105 transition-all duration-300"
                  >
                    {/* Time Header */}
                    <div className="mb-4">
                      <h4 className="font-playfair text-lg font-bold text-deep-orange uppercase tracking-wide">
                        {step.time}
                      </h4>
                    </div>

                    {/* Content */}
                    <h3 className="font-playfair text-xl font-bold text-river-blue mb-3">{step.title}</h3>
                    <p className="font-lora text-charcoal leading-relaxed font-medium">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-warm-gold-10 border-2 border-warm-gold-30 rounded-3xl p-8 md:p-16 shadow-2xl">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue mb-6">
              Be Part of This Historic Gathering
            </h2>
            <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-8 max-w-4xl mx-auto font-medium">
              Join us as we celebrate the Nile's heritage and forge new partnerships for a sustainable future across all
              11 basin nations.
            </p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSe1LBQ7nSDlQsDUeGyE-DFuVsB0gnm2A8Rt3jvBy5j22wer3g/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="default"
                className="bg-deep-orange hover:bg-deep-orange-dark text-rich-white font-bold px-6 py-2.5 text-base rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-merriweather"
              >
                Register Now
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
