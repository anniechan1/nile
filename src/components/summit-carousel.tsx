"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const summitImages = [
  {
    src: "/images/press/group.jpeg",
    alt: "Group photo",
    caption: "Press conference on 5 September",

  },
  {
    src: "/images/press/close_up.jpeg",
    alt: "Close-up of speakers",
    caption: "Media interview during the conference. Artist Desalegn Hailu, Dr. Mitslal Kifleyesus-Matschie",

  },
  {
    src: "/images/press/panel.jpeg",
    alt: "Panel discussion",
    caption: "Prof. Mammo Muchie, Dr. Getachew Engida, Artist Desalegn Hailu, Dr. Mitslal",
  },
  {
    src: "/images/press/interview.jpeg",
    alt: "",
    caption: "",
  },
]

export default function SummitCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % summitImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % summitImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + summitImages.length) % summitImages.length)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main Image */}
      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-2xl">
        <img
          src={summitImages[currentSlide].src || "/placeholder.svg"}
          alt={summitImages[currentSlide].alt}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Overlay with caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <p className="text-white text-sm md:text-base font-medium">{summitImages[currentSlide].caption}</p>
        </div>

        {/* Navigation Buttons */}

      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {summitImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentSlide ? "bg-warm-gold" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  )
}
