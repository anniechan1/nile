"use client"

import Link from "next/link"
import { useState } from "react"

const riverCountries = [
  { id: "egypt", name: "🇪🇬 Egypt" },
  { id: "sudan", name: "🇸🇩 Sudan" },
  { id: "south-sudan", name: "🇸🇸 South Sudan" },
  { id: "ethiopia", name: "🇪🇹 Ethiopia" },
  { id: "eritrea", name: "🇪🇷 Eritrea" },
  { id: "uganda", name: "🇺🇬 Uganda" },
  { id: "kenya", name: "🇰🇪 Kenya" },
  { id: "tanzania", name: "🇹🇿 Tanzania" },
  { id: "rwanda", name: "🇷🇼 Rwanda" },
  { id: "burundi", name: "🇧🇮 Burundi" },
  { id: "drc", name: "🇨🇩 Democratic Republic of Congo" },
]
export default function MainNav() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isSummitDropdownOpen, setIsSummitDropdownOpen] = useState(false)
  const [isRiverDropdownOpen, setIsRiverDropdownOpen] = useState(false)
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <span
              className="text-2xl font-bold text-white whitespace-nowrap"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Children of the Nile
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-white/80 hover:text-amber-200 font-medium text-lg transition-colors relative group"
            >
              Home
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
            </Link>

            {/* About Dropdown - Hover Only */}
            <div
              className="relative group"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <div className="text-white/80 hover:text-amber-200 font-medium text-lg transition-colors relative cursor-pointer">
                About
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform transition-transform duration-200 ${isAboutDropdownOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                ></div>
              </div>
              {/* Add padding div to bridge the gap */}
              <div className="absolute left-0 top-full w-48 h-2"></div>
              {isAboutDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-48">
                  <div className="rounded-md shadow-lg bg-amber-600 border border-amber-700 text-white overflow-hidden">
                    <Link href="/about/our-vision" className="block w-full py-2 px-4 hover:bg-amber-700 text-left">
                      Our Vision
                    </Link>
                    <Link
                      href="/about/art-dialogue-innovation"
                      className="block w-full py-2 px-4 hover:bg-amber-700 text-left"
                    >
                      Art, Dialogue & Innovation
                    </Link>
                    <Link
                      href="/about/organizers-partners"
                      className="block w-full py-2 px-4 hover:bg-amber-700 text-left"
                    >
                      Organizers & Partners
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Summit 2025 Dropdown - Hover Only */}
            <div
              className="relative group"
              onMouseEnter={() => setIsSummitDropdownOpen(true)}
              onMouseLeave={() => setIsSummitDropdownOpen(false)}
            >
              <div className="text-white/80 hover:text-amber-200 font-medium text-lg transition-colors relative cursor-pointer">
                Summit 2025
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform transition-transform duration-200 ${isSummitDropdownOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                ></div>
              </div>
              {/* Add padding div to bridge the gap */}
              <div className="absolute left-0 top-full w-48 h-2"></div>
              {isSummitDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-48">
                  <div className="rounded-md shadow-lg bg-amber-600 border border-amber-700 text-white overflow-hidden">
                    <Link href="/summit/program" className="block w-full py-2 px-4 hover:bg-amber-700 text-left">
                      Program
                    </Link>
                    <Link
                      href="/summit/speakers-delegates"
                      className="block w-full py-2 px-4 hover:bg-amber-700 text-left"
                    >
                      Speakers & Delegates
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/registration"
              className="text-white/80 hover:text-amber-200 font-medium text-lg transition-colors relative group"
            >
              Registration
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
            </Link>
            <div
              className="relative group"
              onMouseEnter={() => setIsRiverDropdownOpen(true)}
              onMouseLeave={() => setIsRiverDropdownOpen(false)}
            >
              <div className="text-white/80 hover:text-amber-200 font-medium text-lg transition-colors relative cursor-pointer">
                Voices from the River
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform transition-transform duration-200 ${isRiverDropdownOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                ></div>
              </div>
              <div className="absolute left-0 top-full w-56 h-2"></div>
              {isRiverDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-56">
                  <div className="rounded-md shadow-lg bg-amber-600 border border-amber-700 text-white overflow-hidden">
                    <Link href="/voices-from-the-river" className="block w-full py-2 px-4 hover:bg-amber-700 text-left font-bold">
                      All Countries
                    </Link>
                    {riverCountries.map(country => (
                      <Link
                        key={country.id}
                        href={`/voices-from-the-river/${country.id}`}
                        className="block w-full py-2 px-4 hover:bg-amber-700 text-left"
                      >
                        {country.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>


          </div>
        </div>
      </div>
    </nav>
  )
}
