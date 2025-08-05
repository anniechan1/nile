"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import Footer from "@/components/footer"
import MainNav from "@/components/main-nav"
import Link from "next/link"

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe1LBQ7nSDlQsDUeGyE-DFuVsB0gnm2A8Rt3jvBy5j22wer3g/viewform?usp=header"

export default function RegistrationPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/map.webp')" }}
    >
      <main className="container mx-auto px-4 py-16">
        <MainNav />
        {/* Registration Section */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Registration Call to Action */}
            <div className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
              <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-6 leading-tight text-center">
                Join the Historic Summit!
              </h1>

              <div className="inline-flex items-center space-x-2 bg-deep-orange backdrop-blur-sm px-4 py-2 rounded-full text-rich-white font-bold text-sm mb-8 shadow-lg">
                <MapPin className="h-3 w-3" />
                <span>Addis Ababa</span>
                <span>|</span>
                <Calendar className="h-3 w-3" />
                <span>6–7 September 2025</span>
              </div>

              <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium mb-10 text-center max-w-lg">
                Take part in a historic event bringing together artists, academics, entrepreneurs, and civil society from all 11 Nile Basin nations to honor our shared heritage and co-create a sustainable path forward.
              </p>

              <Link href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="default"
                  className="bg-deep-orange hover:bg-deep-orange-dark text-rich-white font-bold px-6 py-3 text-base rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-merriweather mb-8"
                >
                  Register Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>

              <div className="pt-6 border-t border-warm-gold-30 max-w-lg">
                <p className="font-lora text-sm text-charcoal text-center leading-relaxed">
                  Registration is free and open to all. Both in-person (Addis Ababa) and virtual participation options
                  are available.
                </p>
              </div>
            </div>

            {/* Right Side - Poster Image */}
            <div className="relative mt-28">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/poster.jpeg"
                  alt="Children of the Nile Summit Registration Poster"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
