"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Award, Handshake, ArrowRight, Users, Globe } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"



export default function SummitPage() {
  const [currentDay1Image, setCurrentDay1Image] = useState(0)
  const [currentDay2Image, setCurrentDay2Image] = useState(0)
  const [activeDay, setActiveDay] = useState(1)




  return (
    <div className="min-h-screen bg-off-white">
      <MainNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-4 bg-gradient-to-br from-river-blue/10 to-warm-gold/10 rounded-3xl overflow-hidden shadow-2xl border border-warm-gold/30">
            <img
              src="/images/present.webp"
              alt="Summit presentation and collaboration"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
          </div>
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
              <span>Online</span>
              <span>|</span>
              <Calendar className="h-4 w-4" />
              <span>6–7 September 2025</span>
            </div>
          </div>

          <p className="font-lora text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 text-rich-white font-normal hero-quote-shadow">
            A prestigious gathering celebrating the Nile's cultural and intellectual heritage through artistic
            expression, academic discourse, and sustainable innovation.
          </p>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSe1LBQ7nSDlQsDUeGyE-DFuVsB0gnm2A8Rt3jvBy5j22wer3g/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="bg-deep-orange hover:bg-deep-orange-dark text-rich-white font-bold px-8 py-3 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 font-merriweather"
            >
              Register Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  )
}
