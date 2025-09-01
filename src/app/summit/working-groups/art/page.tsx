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
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">Chair</h3>
                    <p className="text-sm text-charcoal font-bold">Artist Desalegn Hailu Mazengiya (Ethiopia)</p>
                    <p className="text-sm text-charcoal">Initiator of the Children of the Nile Initiative</p>
                  </div>
                </div>



                {/* Co-Chair */}
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/speakers/Haile.jpg"
                    alt="Haile Gebrselassie"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">Co-Chair</h3>
                    <p className="text-sm text-charcoal font-bold">
                      Haile Gebrselassie (Ethiopia)
                    </p>
                    <p className="text-sm text-charcoal">
                      Olympic Legend, World Marathon Champion, and Business Leader
                    </p>
                  </div>
                </div>
              </div>







            </div>
          </div>
        </div>
      </section>
      ``
      <main className="container mx-auto px-4 py-16">






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
                </div>

                <div className="space-y-6">
                  {/* Foundational Keynote */}
                  <div className="flex items-start space-x-4 border-l-4 border-deep-orange pl-4">
                    <img
                      src="/images/speakers/Hailu.jpg"
                      alt="Artist Desalegn Hailu"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-charcoal mb-2">
                        Foundational Keynote: "The Unifying Power of Art, Culture, and Sport" (15 mins)
                      </h4>
                      <p className="text-sm text-charcoal">
                        <strong>Artist Desalegn Hailu</strong> (Ethiopia), Chair & Initiator
                      </p>
                    </div>
                  </div>

                  {/* Voices of the Nile */}
                  <div className="flex items-start space-x-4 border-l-4 border-river-blue pl-4">
                    <div>
                      <h4 className="font-bold text-charcoal mb-2">
                        Voices of the Nile: A Roll Call for Unity (12 mins)
                      </h4>
                      <p className="text-sm text-charcoal">
                        <strong>Moderated by:</strong> Haile Gebrselassie, Co-Chair
                      </p>
                      <ul className="list-disc list-inside text-sm text-charcoal mt-2">
                        <li className="flex items-start space-x-4">
                          <img
                            src="/images/speakers/Haile.jpg"
                            alt="Haile Gebrselassie"
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <p>
                            <strong>For Ethiopia:</strong> Haile Gebrselassie – Olympic Legend
                          </p>
                        </li>
                        <li className="flex items-start space-x-4">
                          <img
                            src="/images/speakers/ahmed_abou.jpg"
                            alt="Eng. Ahmed Abou Elgasim Hashim"
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <p>
                            <strong>For Sudan / The African Continent:</strong> Eng. Ahmed Abou Elgasim Hashim (ANOCA)
                          </p>
                        </li>
                        <li className="flex items-start space-x-4">
                          <img
                            src="/images/speakers/Shadrack.jpeg"
                            alt="Mr. Shadrack Maluki"
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <p>
                            <strong>For Kenya:</strong> Mr. Shadrack Maluki – President, Kenya National Olympics Committee
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Academic & Cultural Framework */}
                  <div className="flex items-start space-x-4 border-l-4 border-warm-gold pl-4">
                    <img
                      src="/images/speakers/Deepti.png"
                      alt="Deepti Kataria"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-charcoal mb-2">
                        Academic & Cultural Framework: "Fostering Unity Through Cultural Dialogue and Education" (3 mins)
                      </h4>
                      <p className="text-sm text-charcoal">
                        <strong>Deepti Kataria</strong> (Egypt/India), General Secretary, Africa Study Centre
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 2 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-river-blue">
                    Part 2: Session Goals & Process Overview
                  </h3>
                  <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">5 minutes</span>
                </div>

                <div className="flex items-start space-x-4">
                  <img
                    src="/images/speakers/mika.jpeg"
                    alt="Mika Chavala"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-charcoal mb-2">
                      <span className="font-bold">Mika Chavala</span> (Tanzania), Founder, Swahili Nation One Africa Foundation
                    </p>
                  </div>
                </div>
              </div>
              {/* Part 3 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-river-blue">
                    Part 3: Lightning Round - Big Ideas for Action
                  </h3>
                  <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">40 minutes</span>
                </div>

                <p className="text-sm text-charcoal font-lora mb-4">Moderated by Deepti Kataria</p>

                <div className="space-y-6">
                  {/* Special Presentation */}
                  <div className="flex items-start space-x-4 border-l-4 border-deep-orange pl-4">
                    <img
                      src="/images/speakers/dr_tsegaye.jpeg"
                      alt="Tsegaye Degineh"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-charcoal mb-2">
                        Special Presentation: "Digital Tools for Cultural Collaboration"
                      </h4>
                      <p className="text-sm text-charcoal">
                        Pre-shared presentation by <strong>Tsegaye Degineh</strong>
                      </p>
                    </div>
                  </div>

                  {/* The 2026 Festival (Culture) */}
                  <div className="flex items-start space-x-4 border-l-4 border-river-blue pl-4">
                    <img
                      src="/images/speakers/mika.jpeg"
                      alt="Mika Chavala"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-charcoal mb-2">
                        The 2026 Festival (Culture): "A Nile Basin Digital Museum & Content Strategy"
                      </h4>
                      <p className="text-sm text-charcoal">
                        <strong>Mika Chavala</strong> (Tanzania)
                      </p>
                    </div>
                  </div>

                  {/* The 2026 Festival (Sport) */}
                  <div className="flex items-start space-x-4 border-l-4 border-warm-gold pl-4">
                    <img
                      src="/images/speakers/Shadrack.jpeg"
                      alt="Mr. Shadrack Maluki"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-charcoal mb-2">
                        The 2026 Festival (Sport): "The Framework for a Nile Basin Unity Football Cup"
                      </h4>
                      <p className="text-sm text-charcoal">
                        <strong>Mr. Shadrack Maluki</strong> (Kenya)
                      </p>
                    </div>
                  </div>

                  {/* The Role of Continental Bodies */}
                  <div className="flex items-start space-x-4 border-l-4 border-deep-orange pl-4">
                    <img
                      src="/images/speakers/ahmed_abou.jpg"
                      alt="Eng. Ahmed Abou Elgasim Hashim"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-charcoal mb-2">
                        The Role of Continental Bodies: "ANOCA's Support for Sport for Peace Initiatives"
                      </h4>
                      <p className="text-sm text-charcoal">
                        <strong>Eng. Ahmed Abou Elgasim Hashim</strong> (ANOCA)
                      </p>
                    </div>
                  </div>

                  {/* The Ambassador Program */}
                  <div className="flex items-start space-x-4 border-l-4 border-river-blue pl-4">
                    <img
                      src="/images/speakers/emi.png"
                      alt="Emi Mahmoud"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-charcoal mb-2">
                        The Ambassador Program: "Using Our Platforms for Peace"
                      </h4>
                      <p className="text-sm text-charcoal">
                        <strong>Emi Mahmoud</strong> (Sudan), Poet & Activist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Part 4 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex flex-col md:flex-row items-start md:space-x-6">
                  {/* Left Content */}
                  <div className="space-y-6 flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-playfair text-xl font-bold text-river-blue">
                        Part 4: Breakout Groups - From Ideas to Blueprints
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
                        <img
                          src="/images/speakers/Haile.jpg"
                          alt="Haile"
                          className="w-16 h-16 rounded-full object-cover"
                        />

                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-charcoal">GERD Inauguration Symbolism: Designing the key artistic and sporting moments.</p>
                        <p className="text-sm text-charcoal">Lead: Aida Muluneh & Haile Gebrselassie</p>
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
                          src="/images/speakers/ahmed_abou.jpg"
                          alt="Ahmed Abou Elgasim Hashim"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-charcoal">Children of the Nile Festival 2026: Outlining the event structure (marathon, football, exhibitions, digital content).</p>
                        <p className="text-sm text-charcoal">Lead: Mika Chavala & Eng. Ahmed Abou Elgasim Hashim</p>
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
                        {/* <img
                          src="/images/speakers/dr_tsegaye.jpeg"
                          alt="Tsegaye Degineh"
                          className="w-16 h-16 rounded-full object-cover"
                        /> */}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-charcoal">Nile Ambassadors Pledge: Drafting the core mission statement and first actions for the network.</p>
                        <p className="text-sm text-charcoal">Lead: Emi Mahmoud & ASC Representative</p>
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

              {/* Part 5 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-river-blue">
                    Part 5: Reporting Back & Adoption
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
                    Part 5: Reporting Back & Adoption
                  </h3>
                  <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">30 minutes</span>
                </div>
                <div className="space-y-4">
                  {/* Rapporteur Session */}
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">
                      <strong>Rapporteur Session:</strong> Key blueprint points from each group presented by the <strong>Africa Study Centre Representative</strong>.
                    </p>
                  </div>

                  {/* Adoption of the Nile Ambassadors Pledge */}
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">
                      Collective refinement and <strong>adoption of the Nile Ambassadors Pledge</strong>.
                    </p>
                  </div>

                  {/* Unified Action Plan */}
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">
                      Consolidation of ideas into a <strong>Unified Action Plan</strong>.
                    </p>
                  </div>
                </div>
              </div>


              {/* Part 6 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-playfair text-xl font-bold text-river-blue">
                    Part 6: Closing & Next Steps
                  </h3>
                  <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">15 minutes</span>
                </div>
                <div className="space-y-4">
                  {/* Reading of the Adopted Pledge */}
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">
                      Reading of the <strong>Adopted Pledge</strong>.
                    </p>
                  </div>

                  {/* Announcement of the Interim Steering Committee */}
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">
                      Announcement of the <strong>Interim Steering Committee</strong> (including Desalegn Hailu as Honorary Chair).
                    </p>
                  </div>

                  {/* Final United Closing Remarks */}
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">
                      Final United Closing Remarks: <strong>Artist Desalegn Hailu</strong> & <strong>Haile Gebrselassie</strong>.
                    </p>
                  </div>

                  {/* Official Handover to Rapporteur */}
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-deep-orange rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-charcoal font-lora">
                      Official Handover to Rapporteur: The session outputs are formally handed over to the <strong>Africa Study Centre</strong> for synthesis and the creation of a formal summary report.
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
