"use client"

import MainNav from "@/components/main-nav"
import { Calendar, Globe, ArrowLeft, Clock, Target } from "lucide-react"
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
                <span className="font-bold text-river-blue text-sm">Sunday, 7 September 2025</span>
              </div>
              <div className="flex items-center space-x-2 bg-warm-gold/20 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4 text-charcoal" />
                <span className="font-bold text-charcoal text-sm">10:00 - 12:30 EAT</span>
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
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">Overall Chair</h3>
                    <p className="text-sm text-charcoal font-bold">Artist Desalegn Hailu Mazengiya (Ethiopia)</p>
                    <p className="text-sm text-charcoal">Cultural Stream</p>
                  </div>
                </div>



                {/* Co-Chairs & Liaison Section */}
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/speakers/dr_tsegaye.jpeg"
                      alt="Tsegaye Degineh"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">Co-Chairs & Facilitation</h3>
                      <p className="text-sm text-charcoal font-bold">Tsegaye Degineh (Ethiopia/Germany)</p>
                      <p className="text-sm text-charcoal">Digital Strategist & Summit Facilitator</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/speakers/mkm.webp"
                      alt="Dr. Mitslal Kifleyesus-Matschie"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm text-charcoal font-bold">Dr. Mitslal Kifleyesus-Matschie (Ethiopia/Germany)</p>
                      <p className="text-sm text-charcoal">Expert in Dual-Use Technologies & AI Ethics; Founder, Ecopia Value Chain</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/speakers/mika.jpeg"
                      alt="Mika Chavala"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm text-charcoal font-bold">Mika Chavala (Tanzania)</p>
                      <p className="text-sm text-charcoal">Founder, Swahili Nation One Africa Foundation; Digital Content Creator & Pan-African Advocate</p>
                    </div>
                  </div>
                </div>
              </div>






            </div>
          </div>
        </div>
      </section>
      ``
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
                    Brainstorm concrete, symbolic elements for the GERD inauguration that integrate art and sport.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-charcoal font-lora">
                    Outline the core concept and key components of the "Children of the Nile Festival 2026".
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-charcoal font-lora">
                    Draft a pledge for a "Nile Ambassadors" network of artists and athletes.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-charcoal font-lora">
                    Identify 3-5 immediate next steps to launch these initiatives.
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
              Agenda
            </h2>


            <div className="space-y-8">


              {/* Part 1 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-river-blue">
                    Part 1: Opening & Framing the Session
                  </h3>
                  <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">20 minutes</span>
                </div>

                <div className="space-y-6">
                  {/* Welcome & Context */}
                  <div className="flex items-start space-x-4">
                    <img
                      src="/images/speakers/Hailu.jpg"
                      alt="Artist Desalegn Hailu"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-charcoal">Welcome & Context: The Role of Culture & Sport in Basin Unity</p>
                      <p className="text-sm text-charcoal">Artist Desalegn Hailu & Sport Co-Chair (TBC)</p>
                    </div>
                  </div>

                  {/* Strategic Vision */}
                  <div className="flex items-start space-x-4">
                    <img
                      src="/images/speakers/mkm.webp"
                      alt="Dr. Mitslal Kifleyesus-Matschie"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-charcoal">Strategic Vision: "Intertwining Technology, Culture, and Peace"</p>
                      <p className="text-sm text-charcoal">Dr. Mitslal Kifleyesus-Matschie (Ethiopia/Germany)</p>
                    </div>
                  </div>

                  {/* Keynote Inspiration */}
                  <div className="flex items-start space-x-4">
                    <img
                      src="/images/speakers/mika.jpeg"
                      alt="Mika Chavala"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-charcoal">Keynote Inspiration: "Digital Storytelling for Continental Unity"</p>
                      <p className="text-sm text-charcoal">Mika Chavala (Tanzania), Founder, Swahili Nation YouTube Channel & One Africa Foundation</p>
                      <div className="bg-warm-gold/10 p-4 rounded-lg mt-2">
                        <p className="text-lg text-charcoal italic">
                          Speaker Profile: Mika Chavala is a strategic leader and founder of the Swahili Nation One Africa Foundation and Kairos Mega Investment. His YouTube channel, "Swahili Nation," boasts over 487,000 subscribers and is dedicated to preserving African heritage and fostering pan-African unity through knowledge sharing. An honorary citizen of Seoul and appointed Africa Insight ambassador, he is a visionary committed to youth development and transformative projects across the continent.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Session Goals & Process Overview */}
                  <div className="flex items-start space-x-4">
                    <img
                      src="/images/speakers/dr_tsegaye.jpeg"
                      alt="Tsegaye Degineh"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-charcoal">Session Goals & Process Overview</p>
                      <p className="text-sm text-charcoal">Tsegaye Degineh (Ethiopia/Germany), Digital Strategist & Facilitator</p>
                      <div className="bg-deep-orange/10 p-4 rounded-lg mt-2">
                        <p className="text-lg text-charcoal italic">
                          Speaker Profile: Tsegaye Degineh is an Ethiopian-German digital strategist, software developer, and author. A pioneer in the German tech scene, he is known for his work on digital transformation and fostering dialogue between Africa and Europe. He brings expertise in leveraging digital tools for cultural storytelling and strategic facilitation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




              {/* Part 2 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-river-blue">
                    Part 2: Lightning Round - Big Ideas for Action
                  </h3>
                  <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">40 minutes</span>
                </div>

                <p className="text-sm text-charcoal font-lora mb-4">Moderated by Tsegaye Degineh</p>

                {/* Text and Sun Boat Image Side-by-Side */}
                <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                  {/* Left Text */}
                  <div className="space-y-4 flex-1">
                    <div className="border-l-4 border-deep-orange pl-4">
                      <p className="font-bold text-charcoal">The GERD Ceremony (Art): "A Light and Sound Spectacle for Unity"</p>
                      <p className="text-sm text-charcoal">Aida Muluneh (Ethiopia), Photographer</p>
                    </div>
                    <div className="border-l-4 border-river-blue pl-4">
                      <p className="font-bold text-charcoal">The GERD Ceremony (Sport): "A Unity Relay to the Dam"</p>
                      <p className="text-sm text-charcoal">Representative from Athletics (TBC)</p>
                    </div>
                    <div className="border-l-4 border-warm-gold pl-4">
                      <p className="font-bold text-charcoal">The 2026 Festival (Culture): "A Nile Basin Digital Museum"</p>
                      <p className="text-sm text-charcoal">Mika Chavala (Tanzania)</p>
                    </div>
                    <div className="border-l-4 border-deep-orange pl-4">
                      <p className="font-bold text-charcoal">The 2026 Festival (Sport): "The First Nile Basin Unity Football Cup"</p>
                      <p className="text-sm text-charcoal">Sport Co-Chair (TBC)</p>
                    </div>
                    <div className="border-l-4 border-river-blue pl-4">
                      <p className="font-bold text-charcoal">The Ambassador Program: "Using Our Platforms for Peace"</p>
                      <p className="text-sm text-charcoal">Emi Mahmoud (Sudan), Poet & Activist</p>
                    </div>
                  </div>
                </div>

                {/* Puzzle Layout for Remaining Images */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {/* Horizontal Image (Aida Muluneh) */}
                  <div className="col-span-3 md:col-span-2">
                    <img
                      src="/images/aida_art.jpg"
                      alt="Aida Muluneh artwork"
                      className="w-full h-64 object-contain rounded-lg"
                    />
                    <p className="text-sm font-medium text-charcoal text-center mt-2">
                      Aida Muluneh | Star Shine Moon Glow
                    </p>
                  </div>

                  {/* Portrait Image (Emi Mahmoud) */}
                  <div className="col-span-3 md:col-span-1">
                    <img
                      src="/images/emi.webp"
                      alt="Emtithal Mahmoud"
                      className="w-full h-64 object-contain rounded-lg"
                    />
                    <p className="text-sm font-medium text-charcoal text-center mt-2">
                      Emtithal Mahmoud, Sudanese poet
                    </p>
                  </div>
                </div>
              </div>



              {/* Part 3 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex flex-col md:flex-row items-start md:space-x-6">
                  {/* Left Content */}
                  <div className="space-y-6 flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-playfair text-xl font-bold text-river-blue">
                        Part 3: Breakout Groups - From Ideas to Blueprints
                      </h3>
                      <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">45 minutes</span>
                    </div>
                    <p className="text-sm text-charcoal font-lora mb-4">
                      Groups will focus on drafting core proposals.
                    </p>

                    {/* GERD Inauguration Symbolism */}
                    <div className="flex items-start space-x-4">
                      <div className="flex space-x-2">
                        <img
                          src="/images/speakers/aida.webp"
                          alt="Aida Muluneh"
                          className="w-16 h-16 rounded-full object-cover"
                        />

                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-charcoal">GERD Inauguration Symbolism: Designing the key artistic and sporting moments.</p>
                        <p className="text-sm text-charcoal">Lead: Aida Muluneh & Sport Representative</p>
                      </div>
                    </div>

                    {/* Children of the Nile Festival 2026 */}
                    <div className="flex items-start space-x-4">
                      <div className="flex space-x-2">
                        <img
                          src="/images/speakers/mika.jpeg"
                          alt="Mika Chavala"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <img
                          src="/images/speakers/mkm.webp"
                          alt="Dr. Mitslal Kifleyesus-Matschie"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-charcoal">Children of the Nile Festival 2026: Outlining the event structure (marathon, football, exhibitions, digital content).</p>
                        <p className="text-sm text-charcoal">Lead: Mika Chavala & Dr. Mitslal Kifleyesus-Matschie</p>
                      </div>
                    </div>

                    {/* Nile Ambassadors Pledge */}
                    <div className="flex items-start space-x-4">
                      <div className="flex space-x-2">
                        <img
                          src="/images/speakers/emi.png"
                          alt="Emi Mahmoud"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <img
                          src="/images/speakers/dr_tsegaye.jpeg"
                          alt="Tsegaye Degineh"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-charcoal">Nile Ambassadors Pledge: Drafting the core mission statement and first actions for the network.</p>
                        <p className="text-sm text-charcoal">Lead: Emi Mahmoud & Tsegaye Degineh</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <img
                    src="/images/marathon.webp"
                    alt="Marathon event"
                    className="w-full md:w-1/3 h-auto max-h-[300px] object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Part 4 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-river-blue">
                    Part 4: Reporting Back & Adoption
                  </h3>
                  <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">30 minutes</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">
                      Rapporteurs present the <span className="font-bold">key blueprint points</span> from each group.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">
                      Collective refinement and <span className="font-bold">adoption of the Nile Ambassadors Pledge</span>.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">
                      Consolidation of ideas into a <span className="font-bold">Unified Action Plan</span> for the GERD inauguration and 2026 Festival.
                    </p>
                  </div>
                </div>

              </div>
              {/* Part 5 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-river-blue">
                    Part 5: Closing & Next Steps
                  </h3>
                  <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">15 minutes</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">
                      Reading of the <span className="font-bold">Adopted Pledge</span>.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">
                      Announcement of the <span className="font-bold">Interim Steering Committee</span>.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">
                      <span className="font-bold">Symbolic Handover:</span> An artist passes a digital sketchpad to an athlete, symbolizing the collaborative journey ahead.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">
                      Final United Closing Remarks: Dr. Mitslal Kifleyesus-Matschie & Artist Desalegn Hailu.
                    </p>
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
