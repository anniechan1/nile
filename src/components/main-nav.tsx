"use client"

import Link from "next/link"

import { useState } from "react"

export default function MainNav() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isSummitDropdownOpen, setIsSummitDropdownOpen] = useState(false)

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen)
    setIsSummitDropdownOpen(false) // Close summit dropdown
  }

  const toggleSummitDropdown = () => {
    setIsSummitDropdownOpen(!isSummitDropdownOpen)
    setIsAboutDropdownOpen(false) // Close about dropdown
  }

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
              className="text-white/80 hover:text-white font-medium text-lg transition-colors relative group"
            >
              Home
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
            </Link>
            {/* Custom Dropdown for About */}
            <div className="relative">
              <button
                onClick={toggleAboutDropdown}
                className="text-white/80 hover:text-white font-medium text-lg hover:text-amber-200 transition-colors relative focus:outline-none group"
                aria-expanded={isAboutDropdownOpen}
                aria-haspopup="true"
              >
                About
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform transition-transform duration-200 ${isAboutDropdownOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                ></div>
              </button>
              {isAboutDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-amber-600 border border-amber-700 text-white overflow-hidden">
                  <Link
                    href="/about/our-vision"
                    className="block w-full py-2 px-4 hover:bg-amber-700 text-left"
                    onClick={() => setIsAboutDropdownOpen(false)}
                  >
                    Our Vision
                  </Link>
                  <Link
                    href="/about/art-dialogue-innovation"
                    className="block w-full py-2 px-4 hover:bg-amber-700 text-left"
                    onClick={() => setIsAboutDropdownOpen(false)}
                  >
                    Art, Dialogue & Innovation
                  </Link>
                  <Link
                    href="/about/organizers-partners"
                    className="block w-full py-2 px-4 hover:bg-amber-700 text-left"
                    onClick={() => setIsAboutDropdownOpen(false)}
                  >
                    Organizers & Partners
                  </Link>
                </div>
              )}
            </div>

            {/* Custom Dropdown for Summit 2025 */}
            <div className="relative">
              <button
                onClick={toggleSummitDropdown}
                className="text-white/80 hover:text-white font-medium text-lg hover:text-amber-200 transition-colors relative focus:outline-none group"
                aria-expanded={isSummitDropdownOpen}
                aria-haspopup="true"
              >
                Summit 2025
                <div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform transition-transform duration-200 ${isSummitDropdownOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                ></div>
              </button>
              {isSummitDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-amber-600 border border-amber-700 text-white overflow-hidden">
                  <Link
                    href="/summit/program"
                    className="block w-full py-2 px-4 hover:bg-amber-700 text-left"
                    onClick={() => setIsSummitDropdownOpen(false)}
                  >
                    Program
                  </Link>
                  <Link
                    href="/summit/speakers-delegates"
                    className="block w-full py-2 px-4 hover:bg-amber-700 text-left"
                    onClick={() => setIsSummitDropdownOpen(false)}
                  >
                    Speakers & Delegates
                  </Link>

                </div>
              )}
            </div>
            <Link
              href="/registration"
              className="text-white/80 hover:text-white font-medium text-lg transition-colors relative group"
            >
              Registration
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
            </Link>
            <Link
              href="/voices-from-the-river"
              className="text-white/80 hover:text-white font-medium text-lg transition-colors relative group"
            >
              Voices from the River
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
            </Link>
            <Link
              href="/sponsors-partners"
              className="text-white/80 hover:text-white font-medium text-lg transition-colors relative group"
            >
              Sponsors & Partners
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  )
}
