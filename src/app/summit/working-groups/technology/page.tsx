"use client"

import MainNav from "@/components/main-nav"
import { Calendar, Globe, ArrowLeft, Clock, Target, FileText } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"

export default function TechnologyWorkingGroupPage() {
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
              Youth & Technology Working Group
            </h1>

            <p className="font-playfair text-lg md:text-xl text-deep-orange font-medium italic mb-6">
              "Digital Nile: Empowering Youth and Technology for Transformation"
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-deep-orange/10 px-4 py-2 rounded-full">
                <Globe className="h-4 w-4 text-deep-orange" />
                <span className="font-bold text-deep-orange text-sm">Online</span>
              </div>
              <div className="flex items-center space-x-2 bg-river-blue/10 px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 text-river-blue" />
                <span className="font-bold text-river-blue text-sm">7 September 2025</span>
              </div>
              <div className="flex items-center space-x-2 bg-warm-gold/20 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4 text-charcoal" />
                <span className="font-bold text-charcoal text-sm">14:00–16:00 EAT</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {/* Chair Section */}
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/speakers/Felix.jpeg"
                    alt="Felix Matschie"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">Chair</h3>
                    <p className="text-sm text-charcoal">• Felix Matschie (Ethiopia/Germany)</p>
                    <p className="text-sm text-charcoal">Ecopia Group, Children of the Nile Initiative</p>
                  </div>
                </div>

                {/* Co-Chair Section */}
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/speakers/Samuel.jpeg"
                    alt="Samuel Bahiru"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">Co-Chair</h3>
                    <p className="text-sm text-charcoal">• Samuel Bahiru (Ethiopia)</p>
                    <p className="text-sm text-charcoal">CEO, Ticker Tape</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Session Objectives */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-river-blue/5 to-warm-gold/10 rounded-3xl p-8 shadow-xl border border-warm-gold/20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-deep-orange rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue">Session Objectives</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-charcoal font-lora">Build a Nile Youth & Technology Network.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-charcoal font-lora">Launch a digital collaboration platform for innovators.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-charcoal font-lora">Promote youth-led startups across the 11 countries.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-charcoal font-lora">Draft a Youth & Tech GERD Message.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Session Agenda */}
        <section className="mb-16">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue mb-8 text-center">
            Agenda
          </h2>

          <div className="space-y-8">
            {/* Part 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">Part 1: Opening & Keynotes</h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">30 minutes</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div>
                    <p className="font-bold text-charcoal">Welcome</p>
                    <p className="text-sm text-charcoal">Samuel Bahiru, Chair (Ethiopia)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div>
                    <p className="font-bold text-charcoal">Keynote: Digital Skills for Africa's Next Generation</p>
                    <p className="text-sm text-charcoal">Anele Simon (South Africa)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div>
                    <p className="font-bold text-charcoal">
                      Special Keynote: Cybersecurity & Knowledge Sovereignty for Nile Youth
                    </p>
                    <p className="text-sm text-charcoal">Dr. Shumete Gizaw (Ethiopia)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Part 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">
                  Part 2: Lightning Talks – Youth Innovations
                </h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">60 minutes</span>
              </div>
              <p className="text-sm text-charcoal font-lora mb-4">Moderated by Felix Matschie</p>

              <div className="space-y-6">
                <div className="border-l-4 border-deep-orange pl-4">
                  <h4 className="font-bold text-charcoal mb-2">Egypt – Women Entrepreneurs in Digital Innovation</h4>
                  <p className="text-sm text-charcoal">Rania Reda (Founder, Entreprenelle)</p>
                </div>

                <div className="border-l-4 border-river-blue pl-4">
                  <h4 className="font-bold text-charcoal mb-2">Sudan – Mobile Solutions for Youth Employment</h4>
                  <p className="text-sm text-charcoal">Mohamed "Mo" Ibrahim (MoTech Sudan)</p>
                </div>

                <div className="border-l-4 border-warm-gold pl-4">
                  <h4 className="font-bold text-charcoal mb-2">South Sudan – Tech for Peace & Social Change</h4>
                  <p className="text-sm text-charcoal">Mary Boyoi (Youth peace advocate & media entrepreneur)</p>
                </div>

                <div className="border-l-4 border-deep-orange pl-4">
                  <h4 className="font-bold text-charcoal mb-2">Ethiopia – Youth-Led AI & Digital Platforms</h4>
                  <p className="text-sm text-charcoal">Betelhem Dessie (iCog Labs / Solve IT)</p>
                </div>

                <div className="border-l-4 border-river-blue pl-4">
                  <h4 className="font-bold text-charcoal mb-2">Kenya – Open Source Tech for Community Resilience</h4>
                  <p className="text-sm text-charcoal">Juliana Rotich (Co-founder, Ushahidi & BRCK)</p>
                </div>

                <div className="border-l-4 border-warm-gold pl-4">
                  <h4 className="font-bold text-charcoal mb-2">Tanzania – Building Startup Ecosystems</h4>
                  <p className="text-sm text-charcoal">Jumanne Mtambalike (Sahara Ventures)</p>
                </div>

                <div className="border-l-4 border-deep-orange pl-4">
                  <h4 className="font-bold text-charcoal mb-2">Rwanda – Digital Transformation & Women in STEM</h4>
                  <p className="text-sm text-charcoal">Clarisse Iribagiza (HeHe Labs)</p>
                </div>
              </div>
            </div>

            {/* Part 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">
                  Part 3: Breakout Groups – Designing Digital Futures
                </h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">45 minutes</span>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-river-blue/10 p-4 rounded-lg">
                  <h4 className="font-bold text-charcoal text-sm mb-2">Nile Digital Academy</h4>
                  <p className="text-xs text-charcoal">Online youth training hub</p>
                </div>
                <div className="bg-deep-orange/10 p-4 rounded-lg">
                  <h4 className="font-bold text-charcoal text-sm mb-2">Youth Tech Startup Network</h4>
                  <p className="text-xs text-charcoal">Cross-country entrepreneurship</p>
                </div>
                <div className="bg-warm-gold/20 p-4 rounded-lg">
                  <h4 className="font-bold text-charcoal text-sm mb-2">Digital Storytelling</h4>
                  <p className="text-xs text-charcoal">#ChildrenOfTheNile campaign</p>
                </div>
              </div>
            </div>

            {/* Part 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">
                  Part 4: Reporting Back & Consolidation
                </h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">30 minutes</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <p className="text-sm text-charcoal">Rapporteurs present outcomes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <p className="text-sm text-charcoal">Adoption of 2025–2026 Youth Tech Action Plan</p>
                </div>
              </div>
            </div>

            {/* Part 5 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">Part 5: Closing</h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">15 minutes</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div>
                    <p className="font-bold text-charcoal">Closing Remarks</p>
                    <p className="text-sm text-charcoal">Felix Matschie, Co-Chair</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div>
                    <p className="font-bold text-charcoal">Adoption of Youth & Tech GERD Message</p>
                    <div className="bg-warm-gold/10 p-4 rounded-lg mt-2">
                      <p className="text-sm text-charcoal italic">
                        "We, the youth of the Nile Basin, pledge to harness digital tools and technology to build peace,
                        innovation, and sustainable prosperity across all our nations."
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
