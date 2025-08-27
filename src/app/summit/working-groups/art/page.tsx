"use client"

import MainNav from "@/components/main-nav"
import { Calendar, Globe, ArrowLeft, Clock, Target, Palette, Trophy } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"

export default function ArtWorkingGroupPage() {
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
              Art, Culture and Sport Working Group
            </h1>

            <p className="font-playfair text-lg md:text-xl text-deep-orange font-medium italic mb-6">
              "Art, Culture and Sport: Twin Engines for Nile Unity & Peace"
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-deep-orange/10 px-4 py-2 rounded-full">
                <Globe className="h-4 w-4 text-deep-orange" />
                <span className="font-bold text-deep-orange text-sm">Online</span>
              </div>
              <div className="flex items-center space-x-2 bg-river-blue/10 px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 text-river-blue" />
                <span className="font-bold text-river-blue text-sm">6-7 September 2025</span>
              </div>
              <div className="flex items-center space-x-2 bg-warm-gold/20 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4 text-charcoal" />
                <span className="font-bold text-charcoal text-sm">14:00-17:00 EAT (Daily)</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">

              <div className="grid md:grid-cols-2 gap-6 text-left">
                {/* Overall Chairs Section */}
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/speakers/Hailu.jpg"
                    alt="Artist Desalegn Hailu Mazengiya"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">Overall Chairs</h3>
                    <p className="text-sm text-charcoal">• Artist Desalegn Hailu Mazengiya (Ethiopia)</p>
                    <p className="text-sm text-charcoal">Cultural Stream</p>
                  </div>
                </div>

                {/* Co-Chairs & Liaison Section */}
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/speakers/dr_tsegaye.jpeg"
                    alt="Tsegaye Degineh"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">Co-Chairs & Liaison</h3>
                    <p className="text-sm text-charcoal">• Tsegaye Degineh (Ethiopia/Germany)</p>
                    <p className="text-sm text-charcoal">Digital Strategist & Summit Facilitator</p>
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
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue">Objectives</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-charcoal font-lora">
                    Forge a unified vision for using art, culture, and sport as tools for peace and unity in the Nile
                    Basin.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-charcoal font-lora">
                    Design collaborative projects that integrate cultural expression with athletic fellowship.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-charcoal font-lora">
                    Plan symbolic elements for the GERD inauguration and launch the "Children of the Nile Festival
                    2026".
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-charcoal font-lora">
                    Establish a network of Artists and Athletes as Ambassadors for Nile unity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Day 1 */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-deep-orange/5 to-river-blue/5 rounded-3xl p-8 shadow-xl border border-deep-orange/20">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue mb-8 text-center">
              DAY 1: FOUNDATIONS OF UNITY
            </h2>
            <p className="text-center text-charcoal font-lora mb-8">6 September 2025</p>

            <div className="space-y-8">
              {/* Part 1 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-river-blue">
                    Part 1: Opening & Shared Inspiration
                  </h3>
                  <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">45 minutes</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <p className="font-bold text-charcoal">Welcome & Framing the Vision</p>
                      <p className="text-sm text-charcoal">Artist Desalegn Hailu Mazengiya & Sports Co-Chair</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <p className="font-bold text-charcoal">
                        Keynote 1 (Cultural Memory): "The Nile: Our Past, Our Canvas"
                      </p>
                      <p className="text-sm text-charcoal">Dr. Salima Ikram (Egypt), Egyptologist</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <p className="font-bold text-charcoal">
                        Keynote 2 (Sport for Peace): "Scoring Goals for Peace: Sport as a Universal Language"
                      </p>
                      <p className="text-sm text-charcoal">
                        Didier Drogba (Côte d'Ivoire), FIFA Legend (or pre-recorded message)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <p className="font-bold text-charcoal">
                        Youth Testimony: "Our United Nile: A View from the Future"
                      </p>
                      <p className="text-sm text-charcoal">A young artist/athlete from Uganda</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 2 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-river-blue">
                    Part 2: Lightning Talks – Expressions of Unity
                  </h3>
                  <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">60 minutes</span>
                </div>
                <p className="text-sm text-charcoal font-lora mb-4">Moderated by Tsegaye Degineh</p>

                <div className="space-y-4">
                  <div className="border-l-4 border-deep-orange pl-4">
                    <p className="font-bold text-charcoal">Ethiopia (Art): "Designing a Light Ceremony for GERD"</p>
                    <p className="text-sm text-charcoal">Aida Muluneh, Photographer</p>
                  </div>
                  <div className="border-l-4 border-river-blue pl-4">
                    <p className="font-bold text-charcoal">Sudan (Art): "The Poetry of the Nile"</p>
                    <p className="text-sm text-charcoal">Emi Mahmoud, Poet & Activist</p>
                  </div>
                  <div className="border-l-4 border-warm-gold pl-4">
                    <p className="font-bold text-charcoal">
                      South Sudan (Sport): "Basketball: Dribbling for Reconciliation"
                    </p>
                    <p className="text-sm text-charcoal">Luol Deng, President, South Sudan Basketball Fed.</p>
                  </div>
                  <div className="border-l-4 border-deep-orange pl-4">
                    <p className="font-bold text-charcoal">
                      Kenya (Sport): "The Marathon: A Journey of Shared Struggle & Triumph"
                    </p>
                    <p className="text-sm text-charcoal">Eliud Kipchoge (or representative)</p>
                  </div>
                  <div className="border-l-4 border-river-blue pl-4">
                    <p className="font-bold text-charcoal">Egypt (Art): "The Nile in Modern Art"</p>
                    <p className="text-sm text-charcoal">Moataz Nasr, Visual Artist</p>
                  </div>
                </div>
              </div>

              {/* Part 3 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-river-blue">
                    Part 3: Integrated Breakout Groups – Designing Together
                  </h3>
                  <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">45 minutes</span>
                </div>
                <p className="text-sm text-charcoal font-lora mb-4">
                  Groups are mixed with artists, athletes, and organizers.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-river-blue/10 p-4 rounded-lg">
                    <h4 className="font-bold text-charcoal text-sm mb-2">The GERD Inauguration Festival</h4>
                    <p className="text-xs text-charcoal">Designing a combined cultural and sporting ceremony.</p>
                  </div>
                  <div className="bg-deep-orange/10 p-4 rounded-lg">
                    <h4 className="font-bold text-charcoal text-sm mb-2">The Nile Unity Games & Festival 2026</h4>
                    <p className="text-xs text-charcoal">
                      Planning a grand event that includes a football tournament, a marathon, art exhibitions, and
                      musical performances.
                    </p>
                  </div>
                  <div className="bg-warm-gold/20 p-4 rounded-lg">
                    <h4 className="font-bold text-charcoal text-sm mb-2">Ambassador Program</h4>
                    <p className="text-xs text-charcoal">
                      Defining the role of a unified "Nile Ambassador" corps of artists and athletes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Part 4 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-river-blue">
                    Part 4: Reporting Back & Day 1 Consolidation
                  </h3>
                  <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">30 minutes</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">
                      Rapporteurs present initial ideas from each breakout group.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">Gathering themes for the Action Plan.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Day 2 */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-warm-gold/5 to-deep-orange/5 rounded-3xl p-8 shadow-xl border border-warm-gold/20">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue mb-8 text-center">
              DAY 2: BUILDING THE ACTION PLAN
            </h2>
            <p className="text-center text-charcoal font-lora mb-8">7 September 2025</p>

            <div className="space-y-8">
              {/* Part 5 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-river-blue">Part 5: Deep Dive Workshops</h3>
                  <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">60 minutes</span>
                </div>
                <p className="text-sm text-charcoal font-lora mb-4">Based on Day 1, groups refine concepts.</p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-river-blue/10 p-4 rounded-lg">
                    <h4 className="font-bold text-charcoal text-sm mb-2">Workshop A</h4>
                    <p className="text-xs text-charcoal">
                      Finalizing the structure and timeline for the Nile Unity Games & Festival.
                    </p>
                  </div>
                  <div className="bg-deep-orange/10 p-4 rounded-lg">
                    <h4 className="font-bold text-charcoal text-sm mb-2">Workshop B</h4>
                    <p className="text-xs text-charcoal">
                      Developing the curriculum and network for the Nile Artists & Athletes Ambassadors.
                    </p>
                  </div>
                  <div className="bg-warm-gold/20 p-4 rounded-lg">
                    <h4 className="font-bold text-charcoal text-sm mb-2">Workshop C</h4>
                    <p className="text-xs text-charcoal">
                      Crafting the joint communication and social media strategy (#ChildrenOfTheNile).
                    </p>
                  </div>
                </div>
              </div>

              {/* Part 6 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-river-blue">
                    Part 6: Presenting the Unified Action Plan
                  </h3>
                  <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">45 minutes</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">Each workshop presents its finalized proposal.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">Open forum for feedback and commitment from attendees.</p>
                  </div>
                </div>
              </div>

              {/* Part 7 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-river-blue">
                    Part 7: Adoption & Closing Ceremony
                  </h3>
                  <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">30 minutes</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">Adoption of the 2025-2026 Unified Action Plan</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <p className="text-charcoal font-lora font-bold">
                        Reading and Adoption of the Joint GERD Message:
                      </p>
                      <div className="bg-warm-gold/10 p-4 rounded-lg mt-2">
                        <p className="text-sm text-charcoal italic">
                          "We, the artists and athletes of the Nile Basin, pledge to unite our creativity and energy. We
                          will use our cultural heritage and the spirit of sport to illuminate the GERD as a beacon of
                          peace, collaboration, and shared prosperity for all Children of the Nile."
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <p className="text-charcoal font-lora font-bold">Symbolic Handover:</p>
                      <p className="text-sm text-charcoal">
                        A cultural performer passes an artistic item to an athlete, symbolizing the handover of plans to
                        the steering committee for implementation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <p className="text-charcoal font-lora font-bold">Closing Remarks:</p>
                      <p className="text-sm text-charcoal">
                        Artist Desalegn Hailu Mazengiya & Sports Co-Chair with a united closing statement.
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
