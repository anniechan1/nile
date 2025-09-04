"use client"

import MainNav from "@/components/main-nav"
import { Calendar, Globe, ArrowLeft, Clock } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"

export default function EnterprisesWorkingGroupPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <MainNav />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-river-blue/10 to-warm-gold/5 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/summit/program"
              className="inline-flex items-center text-river-blue hover:text-river-blue-dark mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Program
            </Link>

            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-river-blue mb-4">
              Enterprises of the Nile: Private Sector & Entrepreneurship Working Group
            </h1>

            <p className="font-playfair text-lg md:text-xl text-deep-orange font-medium italic mb-6">
              "Driving Prosperity: Growth, Innovation, Investment, and Cross-Border Trade for a Unified Nile Basin"
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-deep-orange/10 px-4 py-2 rounded-full">
                <Globe className="h-4 w-4 text-deep-orange" />
                <span className="font-bold text-deep-orange text-sm">Virtual Meeting</span>
              </div>
              <div className="flex items-center space-x-2 bg-river-blue/10 px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 text-river-blue" />
                <span className="font-bold text-river-blue text-sm">Sunday, 7 September 2025</span>
              </div>
              <div className="flex items-center space-x-2 bg-warm-gold/20 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4 text-charcoal" />
                <span className="font-bold text-charcoal text-sm">14:00 - 16:00 EAT</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {/* Chair Section */}
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/speakers/chris.jpeg"
                    alt="Christoph Schneider-Yattara"
                    className="w-24 h-24 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">Chair</h3>
                    <p className="text-sm text-charcoal">
                      <strong>Christoph Schneider-Yattara</strong>
                    </p>
                    <p className="text-sm text-charcoal">Executive Director, Chamber of Businesses of Africa Descent</p>
                  </div>
                </div>

                {/* Co-Chair Section */}
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/speakers/Felix.jpeg"
                    alt="Felix Matschie"
                    className="w-24 h-24 rounded-full object-cover shadow-md"
                  />

                  <div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">Co-Chair</h3>
                    <p className="text-sm text-charcoal">
                      <strong>Felix Matschie</strong>
                    </p>
                    <p className="text-sm text-charcoal">Strategic Lead, Ecopia Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Session Agenda */}
        <section className="mb-16">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue mb-8 text-center">Agenda</h2>

          <div className="space-y-8">
            {/* Part 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">Part 1: Welcome & Opening Remarks</h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">10 minutes</span>
              </div>
              <div className="border-l-4 border-river-blue pl-4">
                {/* Added Image */}
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src="/images/speakers/chris.jpeg"
                    alt="Christoph Schneider-Yattara"
                    className="w-20 h-20 object-cover rounded-full shadow-md"
                  />
                  <div>

                    <h4 className="font-bold text-charcoal mb-2">
                      Peaceful coexistence as a presupposition for sustainable economic growth and prosperity in the Nile
                      Basin
                    </h4>
                    <p className="text-sm text-charcoal">
                      <strong>Working Group Chair:</strong> Christoph Schneider-Yattara
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Part 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">Part 2: Opening Panel Discussion</h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">
                  30 mins
                </span>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-deep-orange mb-2">
                  "From Local to Regional: Scaling Enterprises in the Nile Basin"
                </h4>
                <p className="text-sm text-charcoal mb-4">Moderated by Felix Matschie</p>
              </div>

              <div className="space-y-6">
                <div className="bg-warm-gold/10 p-4 rounded-lg">
                  <h5 className="font-bold text-charcoal mb-3">Panelists:</h5>
                  <div className="space-y-3">



                    <div className="flex items-start space-x-4">
                      <img
                        src="/images/speakers/irvine.jpeg"
                        alt="Ms. Irvine Floreale"
                        className="w-20 h-20 object-cover rounded-full shadow-md"
                      />
                      <p className="text-sm text-charcoal">
                        <strong>Ms. Irvine Floreale Murame</strong> (Burundi) - Managing Director, Infinity Group
                      </p>
                    </div>


                    <div className="flex items-start space-x-4">
                      <img
                        src="/images/speakers/anon.jpeg"
                        alt="Ms. Elizabeth Anon"
                        className="w-20 h-20 object-cover rounded-full shadow-md"
                      />
                      <p className="text-sm text-charcoal">
                        <strong>Ms. Elizabeth Anon</strong> (South Sudan) - Gender Advisor, AVSI Foundation
                      </p>
                    </div>



                    <div className="flex items-start space-x-4">
                      <img
                        src="/images/speakers/denise.png"
                        alt="Ms. Denise Umubyeyi"
                        className="w-20 h-20 object-cover rounded-full shadow-md"
                      />
                      <p className="text-sm text-charcoal">
                        <strong>Ms. Denise Umubyeyi</strong> (Rwanda) - Country Director, Practical Action
                      </p>
                    </div>


                    <div className="flex items-start space-x-4">

                      <p className="text-sm text-charcoal">
                        <strong>Yousif Jamal </strong> (Sudan) - Entrepreneur & Business Leader
                      </p>
                    </div>


                  </div>
                </div>

                <div className="border-l-4 border-river-blue pl-4">
                  <h5 className="font-bold text-charcoal mb-2">Q & A Session</h5>
                  <p className="text-sm text-charcoal">10 minutes</p>
                </div>
              </div>
            </div>
            {/* Break */}
            <div className="bg-gradient-to-r from-warm-gold/20 to-deep-orange/20 rounded-2xl p-4 text-center">
              <h3 className="font-playfair text-lg font-bold text-charcoal">Break: 10 minutes</h3>
            </div>

            {/* Part 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">
                  Part 3: Breakout Groups – Discussing an Action Plan
                </h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">30 minutes</span>
              </div>

              <div className="space-y-6">
                {/* Breakout Group 1 */}
                <div className="bg-gradient-to-br from-river-blue/10 to-river-blue/5 border-l-4 border-river-blue rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-river-blue mb-2">Group 1: Sustained Collaboration Framework</h4>
                  <p className="text-sm text-charcoal mb-2">
                    <strong>Moderator:</strong> Christoph Schneider-Yattara
                  </p>
                  <p className="text-sm text-charcoal">
                    <em>
                      Lay the foundation for sustained collaboration through the Chamber of Businesses of African
                      Descent and other networks.
                    </em>
                  </p>
                </div>

                {/* Breakout Group 2 */}
                <div className="bg-gradient-to-br from-deep-orange/10 to-deep-orange/5 border-l-4 border-deep-orange rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-deep-orange mb-2">Group 2: GERD Private Sector Message</h4>
                  <p className="text-sm text-charcoal mb-2">
                    <strong>Moderator:</strong> Felix Matschie
                  </p>
                  <p className="text-sm text-charcoal">
                    <em>
                      Formulate a private sector message for the GERD inauguration, highlighting economic opportunities.
                    </em>
                  </p>
                </div>
              </div>
            </div>

            {/* Part 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">
                  Part 4: Presentation of Group Work, Discussion
                </h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">10 minutes</span>
              </div>

              <div className="border-l-4 border-warm-gold pl-4">
                <p className="text-sm text-charcoal">Rapporteurs present their action points per group.</p>
              </div>
            </div>

            {/* Part 5 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">
                  Part 5: Adoption of the Nile Basin Charter
                </h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">5 minutes</span>
              </div>

              <p className="text-sm text-charcoal mb-4">
                <strong>Moderated by:</strong> Christoph Schneider-Yattara
              </p>

              <div className="bg-gradient-to-br from-river-blue/10 to-warm-gold/5 rounded-lg p-6 shadow-md">
                <h4 className="font-playfair text-lg font-bold text-river-blue mb-4">Nile Basin Business Charter</h4>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-deep-orange mb-2">Preamble</h5>
                    <p className="text-sm text-charcoal italic">
                      We, the entrepreneurs and business leaders of the Nile Basin declare our collective commitment to
                      economic unity and affirm that the Nile is our shared lifeline and a source of prosperity. We
                      pledge to transform it into a river of peace, opportunity, and cooperation.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-deep-orange mb-2">Principles</h5>
                    <ul className="text-sm text-charcoal space-y-1 list-disc list-inside">
                      <li>Peaceful coexistence as the foundation of growth.</li>
                      <li>Sustainable and inclusive development.</li>
                      <li>Innovation, trade, and investment across borders.</li>
                      <li>Equal opportunities for women, youth, and diaspora.</li>
                      <li>Stewardship of the environment and shared resources.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-deep-orange mb-2">Commitments</h5>
                    <ul className="text-sm text-charcoal space-y-1 list-disc list-inside">
                      <li>Build regional value chains in agriculture, manufacturing, and services.</li>
                      <li>Facilitate cross-border trade and integration.</li>
                      <li>Create decent jobs and inclusive opportunities.</li>
                      <li>
                        Partner with governments, financiers, institutions, and civil society for sustained prosperity.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* GERD Message */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">
                  Adoption of the GERD Private Sector Message
                </h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">5 minutes</span>
              </div>

              <p className="text-sm text-charcoal mb-4">
                <strong>Facilitated by:</strong> Felix Matschie
              </p>

              <div className="bg-warm-gold/10 p-4 rounded-lg">
                <p className="text-lg text-charcoal italic">
                  "We, the entrepreneurs and business leaders of the Nile Basin, recognize the immense economic
                  potential that flows from cooperation. We pledge to build bridges through commerce and to invest in
                  our shared future, by fostering peaceful coexistence, sustainable growth, and prosperity for every
                  community along the Nile River."
                </p>
              </div>
            </div>

            {/* Part 6 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">Part 6: Closing Remarks</h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">5 minutes</span>
              </div>

              <div className="border-l-4 border-deep-orange pl-4">
                <p className="text-sm text-charcoal">
                  <strong>Chair & Co-Chair:</strong> Christoph Schneider-Yattara & Felix A. Matschie
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
