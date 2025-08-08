"use client"

import Link from "next/link"
import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import { riverCountries } from "@/data/flags"
export default function MainNav() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isSummitDropdownOpen, setIsSummitDropdownOpen] = useState(false)
  const [isRiverDropdownOpen, setIsRiverDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 ">
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

            {/* About Dropdown*/}
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
                <div className="absolute left-0 top-full pt-2 w-56 whitespace-nowrap">
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
                <div className="absolute left-0 top-full pt-2 w-52">
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
                <div className="absolute left-0 top-full pt-2 w-48">
                  <div className="rounded-md shadow-lg bg-amber-600 border border-amber-700 text-white overflow-hidden">
                    <Link href="/voices-from-the-river" className="block w-full py-2 px-4 hover:bg-amber-700 text-left font-bold">
                      All Countries
                    </Link>


                    {riverCountries.map((country) => (
                      <Link
                        key={country.id}
                        href={`/voices-from-the-river/${country.id}`}
                        className="w-full py-2 px-4 hover:bg-amber-700 text-left flex items-center space-x-2"
                      >
                        <img
                          src={country.flagSrc}
                          alt={`${country.name} flag`}
                          className="w-5 h-5 rounded-sm"
                        />
                        <span>{country.name}</span>
                      </Link>
                    ))}

                  </div>

                </div>
              )}

            </div>

            <Link
              href="/sponsors-partners"
              className="text-white/80 hover:text-amber-200 font-medium text-lg transition-colors relative group"
            >
              Sponsors & Partners
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
            </Link>

          </div>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
          </button>


        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-amber-700 rounded-lg shadow-lg py-4 px-6 absolute right-0">
            <Link
              href="/"
              className="block text-white py-2 px-2 font-medium text-lg hover:bg-amber-800 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            {/* About Dropdown - Mobile */}
            <div>
              <button
                className="w-full text-left text-white py-2 px-2 font-medium text-lg hover:bg-amber-800 rounded flex justify-between items-center"
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              >
                About
                <span>{isAboutDropdownOpen ? "▲" : "▼"}</span>
              </button>
              {isAboutDropdownOpen && (
                <div className="pl-4">
                  <Link
                    href="/about/our-vision"
                    className="block py-2 px-2 text-white hover:bg-amber-800 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our Vision
                  </Link>
                  <Link
                    href="/about/art-dialogue-innovation"
                    className="block py-2 px-2 text-white hover:bg-amber-800 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Art, Dialogue & Innovation
                  </Link>
                  <Link
                    href="/about/organizers-partners"
                    className="block py-2 px-2 text-white hover:bg-amber-800 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Organizers & Partners
                  </Link>
                </div>
              )}
            </div>
            {/* Summit 2025 Dropdown - Mobile */}
            <div>
              <button
                className="w-full text-left text-white py-2 px-2 font-medium text-lg hover:bg-amber-800 rounded flex justify-between items-center"
                onClick={() => setIsSummitDropdownOpen(!isSummitDropdownOpen)}
              >
                Summit 2025
                <span>{isSummitDropdownOpen ? "▲" : "▼"}</span>
              </button>
              {isSummitDropdownOpen && (
                <div className="pl-4">
                  <Link
                    href="/summit/program"
                    className="block py-2 px-2 text-white hover:bg-amber-800 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Program
                  </Link>
                  <Link
                    href="/summit/speakers-delegates"
                    className="block py-2 px-2 text-white hover:bg-amber-800 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Speakers & Delegates
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/registration"
              className="block text-white py-2 px-2 font-medium text-lg hover:bg-amber-800 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Registration
            </Link>
            {/* Voices from the River Dropdown - Mobile */}
            <div>
              <button
                className="w-full text-left text-white py-2 px-2 font-medium text-lg hover:bg-amber-800 rounded flex justify-between items-center"
                onClick={() => setIsRiverDropdownOpen(!isRiverDropdownOpen)}
              >
                Voices from the River
                <span>{isRiverDropdownOpen ? "▲" : "▼"}</span>
              </button>
              {isRiverDropdownOpen && (
                <div className="pl-4">
                  <Link
                    href="/voices-from-the-river"
                    className="block py-2 px-2 text-white hover:bg-amber-800 rounded font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Countries
                  </Link>
                  {riverCountries.map(country => (
                    <Link
                      key={country.id}
                      href={`/voices-from-the-river/${country.id}`}
                      className="py-2 px-2 text-white hover:bg-amber-800 rounded flex items-center space-x-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <img
                        src={country.flagSrc}
                        alt={`${country.name} flag`}
                        className="w-5 h-5 rounded-sm"
                      />
                      <span>{country.name}</span>
                    </Link>
                  ))}
                </div>
              )}
              <Link
                href="/sponsors-partners"
                className="block text-white py-2 px-2 font-medium text-lg hover:bg-amber-800 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sponsors & Partners
              </Link>
            </div>
          </div>
        )}










      </div>
    </nav>
  )
}
