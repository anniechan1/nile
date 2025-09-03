"use client"

import MainNav from "@/components/main-nav"
import { Calendar, Globe, ArrowLeft, Clock, Target } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"

export default function CivilSocietyWorkingGroupPage() {
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
              Civil Society Organizations Working Group
            </h1>

            <p className="font-playfair text-lg md:text-xl text-deep-orange font-medium italic mb-6">
              "Strengthening partnerships and networks among civil society organizations in 11 nations of the Nile
              Basin: Inclusive engagement, co-creation, innovation, and practices for sustainable benefits for all"
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-deep-orange/10 px-4 py-2 rounded-full">
                <Globe className="h-4 w-4 text-deep-orange" />
                <span className="font-bold text-deep-orange text-sm">Virtual Meeting</span>
              </div>
              <div className="flex items-center space-x-2 bg-river-blue/10 px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 text-river-blue" />
                <span className="font-bold text-river-blue text-sm">6 September 2025</span>
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
                    src="/images/speakers/Gezehen.jpeg"
                    alt="Dr. Gezahegn Kebede Gebrehana"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">Chair</h3>
                    <p className="text-sm text-charcoal">
                      • <strong>Dr. Gezahegn Kebede Gebrehana</strong>
                    </p>
                    <p className="text-sm text-charcoal">Regional Director for East Africa, Max Foundation</p>
                  </div>
                </div>

                {/* Co-Chair Section */}
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 rounded-full bg-deep-orange/20 flex items-center justify-center">
                    {/* <span className="text-deep-orange font-bold text-lg">EM</span> */}
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">Co-Chair</h3>
                    <p className="text-sm text-charcoal">
                      • <strong>Endashaw Mogessie</strong>
                    </p>
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
                <h3 className="font-playfair text-xl font-bold text-river-blue">Part 1: Framing the Session</h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">30 minutes</span>
              </div>
              <div className="space-y-6">
                {/* Welcome */}
                <div className="flex items-start space-x-4">
                  <img
                    src="/images/speakers/Ahmed.png"
                    alt="Ahmed Husein"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-charcoal">Welcome & Official Opening (10 mins)</p>
                    <p className="text-sm text-charcoal">
                      <strong>Ahmed Husein</strong>, President, ECSOC
                      <br />
                      <br />
                      <em>Welcoming remarks and official opening</em>
                    </p>
                  </div>
                </div>

                {/* Setting the Stage */}
                <div className="flex items-start space-x-4">
                  <img
                    src="/images/speakers/Yonas.jpg"
                    alt="Yonas Dejene"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-charcoal">Setting the Stage (20 mins)</p>
                    <p className="text-sm text-charcoal">
                      <strong>Yonas Dejene</strong>, Founder and Executive Director, Ethiopia Professional Associations Alliance
                      <br />
                      <br />
                      <em>Introduction of Session Objectives & the Working Group</em>
                    </p>
                  </div>
                </div>

                {/* Keynote */}
                <div className="flex items-start space-x-4">
                  <img
                    src="/images/speakers/Nigussu.jpg"
                    alt="Dr. Nigussu Legesse"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-charcoal">Keynote Address</p>
                    <p className="text-sm text-charcoal">
                      <strong>Dr. Nigussu Legesse</strong>, Executive Director, CCRDA
                      <br />
                      <br />
                      <em>"The Critical Role of CSOs in Fostering Win-Win Solutions for the Nile Basin"</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Part 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">
                  Part 2: Lightning Talks – Perspectives from the Basin
                </h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">30 minutes</span>
              </div>
              <p className="text-sm text-charcoal font-lora mb-4">Moderated by Endashaw Mogessie</p>

              <div className="space-y-6">


                {/* Fostering Unity Through Cultural Dialogue and Education */}
                <div className="flex items-start space-x-4 border-l-4 border-deep-orange pl-4">
                  <img
                    src="/images/speakers/Deepti.png"
                    alt="Deepti Kataria"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-charcoal mb-2">
                      Fostering Unity Through Cultural Dialogue and Education
                    </h4>
                    <p className="text-sm text-charcoal">
                      <strong>Deepti Kataria</strong> (General Secretary, Africa Study Centre)
                    </p>
                  </div>
                </div>

                {/* Renewable Energy Innovations and Community-Based Solutions */}
                <div className="flex items-start space-x-4 border-l-4 border-river-blue pl-4">
                  <img
                    src="/images/speakers/Prof_Daniel_Egbe.png"
                    alt="Prof. Daniel A. M. Egbe"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-charcoal mb-2">
                      Renewable Energy Innovations and Community-Based Solutions
                    </h4>
                    <p className="text-sm text-charcoal">
                      <strong>Prof. Daniel A. M. Egbe</strong> (University of Rwanda)
                    </p>
                  </div>
                </div>

                {/* Research Insights */}
                <div className="flex items-start space-x-4 border-l-4 border-deep-orange pl-4">
                  <img
                    src="/images/speakers/amare.jpeg"
                    alt="Dr. Amare Hailesilassie"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-charcoal mb-2">
                      Research Insights: Opportunities for CSO-Led Action in Eastern Africa
                    </h4>
                    <p className="text-sm text-charcoal">
                      <strong>Dr. Amare Hailesilassie</strong> (IWMI)
                      <br />
                      <br />

                    </p>
                  </div>
                </div>

                {/* Innovative Practices */}
                <div className="flex items-start space-x-4 border-l-4 border-river-blue pl-4">
                  <img
                    src="/images/speakers/gete.jpg"
                    alt="Dr. Gete Zeleke"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-charcoal mb-2">
                      Innovative Practices in Water and Land Management: A Model for CSO Collaboration
                    </h4>
                    <p className="text-sm text-charcoal">
                      <strong>Dr. Gete Zeleke</strong> (WLRC)
                      <br />
                      <br />

                    </p>
                  </div>
                </div>

                {/* Advocating for Change */}
                <div className="flex items-start space-x-4 border-l-4 border-warm-gold pl-4">
                  <img
                    src="/images/speakers/max.jpg"
                    alt="Mr. Max Koffi"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-charcoal mb-2">
                      Advocating for Change: Uniting CSOs for Equitable Trade in the Nile Basin
                    </h4>
                    <p className="text-sm text-charcoal">
                      <strong>Mr. Max Koffi</strong> (Equal Trade Alliance)
                      <br />
                      <br />

                    </p>
                  </div>
                </div>

                {/* Q&A */}
                <div className="border-l-4 border-deep-orange pl-4">
                  <h4 className="font-bold text-charcoal mb-2">Q&A with Speakers</h4>

                </div>
              </div>
            </div>
            {/* Part 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">
                  Part 3: Breakout Groups – From Ideas to Action
                </h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">45 minutes</span>
              </div>

              <p className="text-sm text-charcoal mb-6">
                Participants will choose one group to join for focused collaborative work.
              </p>

              <div className="space-y-6">
                {/* Breakout Group 1 */}
                <div className="bg-gradient-to-br from-deep-orange/10 to-deep-orange/5 border-l-4 border-deep-orange rounded-lg p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <img
                      src="/images/speakers/Gezehen.jpeg"
                      alt="Breakout Group 1"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-deep-orange mb-2">
                        Drafting a Statement of Principles for CSO Collaboration
                      </h4>
                      <p className="text-sm text-charcoal">
                        <strong>Lead:</strong> Dr. Gezahegn Kebede Gebrehana
                        <br />
                        <br />
                        <em>
                          Focus: Defining core values (e.g., inclusivity, transparency, co-creation) for the CSO platform.
                        </em>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Breakout Group 2 */}
                <div className="bg-gradient-to-br from-river-blue/10 to-river-blue/5 border-l-4 border-river-blue rounded-lg p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <img
                      src="/images/speakers/max.jpg"
                      alt="Breakout Group 2"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-river-blue mb-2">Identifying Joint Advocacy & Action Themes</h4>
                      <p className="text-sm text-charcoal">
                        <strong>Lead:</strong> Mr. Max Koffi
                        <br />
                        <br />
                        <em>
                          Focus: Prioritizing 2-3 key areas (e.g., water justice, climate resilience, equitable trade) for
                          collaborative projects.
                        </em>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Breakout Group 3 */}
                <div className="bg-gradient-to-br from-warm-gold/10 to-warm-gold/5 border-l-4 border-warm-gold rounded-lg p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <img
                      src="/images/speakers/Yonas.jpg"
                      alt="Breakout Group 3"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-warm-gold mb-2">Designing the CSO Platform Structure & Modality</h4>
                      <p className="text-sm text-charcoal">
                        <strong>Lead:</strong> Yonas Dejene
                        <br />
                        <br />
                        <em>
                          Focus: Determining how the network will operate (communication, decision-making, membership).
                        </em>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Part 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">Part 4: Reporting Back & Adoption</h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">15 minutes</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-river-blue rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-charcoal">
                    Rapporteurs present <strong>2-3 key recommendations per group</strong>.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-river-blue rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-charcoal">
                    <strong>Consolidation</strong> of the Statement of Principles and Priority Action Themes.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-river-blue rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-charcoal">
                    <strong>Formal agreement</strong> to establish the Nile Basin CSO Collaboration Platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Part 5 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">Part 5: Closing & Common Message</h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">10 minutes</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-river-blue rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-charcoal">
                    <strong>Community Reflection:</strong> A short testimony from a local CSO representative on the hope
                    for collaboration.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-river-blue rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-charcoal">
                    <strong>Closing Remarks & Next Steps:</strong> Dr. Gezahegn Kebede Gebrehana
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-river-blue rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <p className="font-bold text-charcoal">Adoption of the CSO Collaborative Vision:</p>
                    <div className="bg-warm-gold/10 p-4 rounded-lg mt-2">
                      <p className="text-sm text-charcoal italic">
                        "We, the Civil Society Organizations of the Nile Basin, commit to a united platform founded on
                        inclusivity and co-creation for a peaceful, prosperous, and climate-resilient future for all its
                        people. We celebrate the GERD as a symbol of African innovation and urge that its operation be
                        guided by the principles of ecological sustainability, equitable benefit-sharing, and unwavering
                        cooperation. We pledge to harness our collective voice and innovative spirit to advocate for
                        sustainable and equitable development, ensuring that the benefits of the Nile's resources serve
                        all its people, leaving no one behind."
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
