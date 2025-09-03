"use client"

import MainNav from "@/components/main-nav"
import { Calendar, Globe, ArrowLeft, Clock, Target, FileText } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"

export default function AcademicWorkingGroupPage() {
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
              Universities & Research Working Group
            </h1>

            <p className="font-playfair text-lg md:text-xl text-deep-orange font-medium italic mb-6">
              "Building an Academic Bridge Across 11 Nations: Knowledge, Cooperation, and a Shared Future for the Nile"
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-deep-orange/10 px-4 py-2 rounded-full">
                <Globe className="h-4 w-4 text-deep-orange" />
                <span className="font-bold text-deep-orange text-sm">Online</span>
              </div>
              <div className="flex items-center space-x-2 bg-river-blue/10 px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 text-river-blue" />
                <span className="font-bold text-river-blue text-sm">Saturday, 6 September 2025</span>
              </div>
              <div className="flex items-center space-x-2 bg-warm-gold/20 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4 text-charcoal" />
                <span className="font-bold text-charcoal text-sm">14:00-16:30 EAT</span>
              </div>
            </div>


            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {/* Chair Section */}
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/speakers/dr_jemal.jpeg"
                    alt="Dr. Jemal Abafita"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">Chair</h3>
                    <p className="text-sm text-charcoal"><strong>Dr. Jemal Abafita</strong></p>
                    <p className="text-sm text-charcoal">President of Jimma University (Ethiopia)</p>
                  </div>
                </div>

                {/* Co-Chair Section */}
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/speakers/mammo.png"
                    alt="Prof. Mammo Muchie"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">Co-Chair</h3>
                    <p className="text-sm text-charcoal"><strong>Prof. Mammo Muchie</strong></p>
                    <p className="text-sm text-charcoal">
                      DST/NRF SARChI Professor in Innovation Studies, TUT, South Africa & Steering Committee -
                      Universities & Research
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-warm-gold/20">
                <div className="flex items-center justify-center space-x-4">
                  <img src="/images/jimma_uni.png" alt="Jimma University Logo" className="h-24 w-auto" />
                  <div className="flex flex-col">
                    <h3 className="font-playfair text-lg font-bold text-river-blue">Host Institution</h3>
                    <p className="text-sm text-charcoal">Jimma University</p>
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
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue mb-8 text-center">
            Agenda
          </h2>

          <div className="space-y-8">
            {/* Part 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">Part 1: Framing the Vision</h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">30 minutes</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Content */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-xs text-charcoal bg-deep-orange/20 px-2 py-1 rounded mt-1">10 mins</span>
                    <div>
                      <p className="font-bold text-charcoal">Welcome, Official Opening & Statement of Purpose</p>
                      <p className="text-sm text-charcoal">
                        Dr. Jemal Abafita, President of Jimma University (Ethiopia)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xs text-charcoal bg-deep-orange/20 px-2 py-1 rounded mt-1">20 mins</span>
                    <div>
                      <p className="font-bold text-charcoal">
                        Keynote: The Unifying Role of Universities in the Nile Basin
                      </p>
                      <p className="text-sm text-charcoal">Prof. Mammo Muchie, Co-Chair (South Africa/Ethiopia)</p>
                    </div>
                  </div>
                </div>

                {/* Right Content: Add Image */}
                <div className="flex items-center justify-center">
                  <img
                    src="/images/professor.webp"
                    alt="Professor Speaking"
                    className="w-full max-w-sm h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
            {/* Part 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">
                  Part 2: Lightning Talks - Interdisciplinary Perspectives from the Basin
                </h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">60 minutes</span>
              </div>
              <p className="text-sm text-charcoal font-lora mb-4">Moderated by Prof. Mammo Muchie</p>

              <div className="space-y-6">





                <div className="border-l-4 border-river-blue pl-4">
                  <h4 className="font-bold text-charcoal mb-2">
                    Kenya: "Foresight and Innovation: Using Futures Thinking to Navigate Nile Basin
                    Challenges"
                  </h4>
                  <div className="flex items-start space-x-3 mb-2">
                    <img
                      src="/images/speakers/Prof_Geci.jpeg"
                      alt="Prof. Geci Karuri-Sebina"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm text-charcoal">
                        <Link
                          href="/summit/speakers#geci-karuri"
                          className="text-river-blue hover:text-river-blue-dark underline"
                        >
                          Prof. Geci Karuri-Sebina
                        </Link>
                      </p>
                      <p className="text-xs text-charcoal mt-2">
                        Scholar-practitioner and Associate Professor at the University of Witwatersrand. With decades of
                        experience in foresight and innovation, she will outline how strategic futures thinking can guide
                        sustainable development and cooperation across the 11 nations.
                      </p>
                    </div>
                  </div>

                </div>


                <div className="border-l-4 border-river-blue pl-4">
                  <h4 className="font-bold text-charcoal mb-2">
                    Benin
                  </h4>
                  <div className="flex items-start space-x-3 mb-2">
                    <img
                      src="/images/speakers/Diran.jpg"
                      alt="Diran Soumonni"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm text-charcoal">
                        <Link
                          href="/summit/speakers#diran-soumonni"
                          className="text-river-blue hover:text-river-blue-dark underline"
                        >
                          Ph.D. Diran Soumonni
                        </Link>
                      </p>
                      <p className="text-xs text-charcoal mt-2">
                        Associate Professor: Innovation Policy and Management, Wits Business School
                      </p>
                    </div>
                  </div>

                </div>

                <div className="border-l-4 border-warm-gold pl-4">
                  <h4 className="font-bold text-charcoal mb-2">
                    Kenya: "Regional Academic Collaboration for Sustainable Nile Basin Development"
                  </h4>
                  <div className="flex items-start space-x-3 mb-2">
                    <img
                      src="/images/speakers/dan.png"
                      alt="Dr. Dan Noel Odaba"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm text-charcoal">
                        <Link
                          href="/summit/speakers#dan-noel-odaba"
                          className="text-river-blue hover:text-river-blue-dark underline"
                        >
                          Ph.D. Dan Noel Odaba
                        </Link>
                        , Director, Southern Africa
                      </p>
                      <p className="text-xs text-charcoal mt-2">
                        An experienced leader in regional development, Dr. Odaba will speak on the critical role of academic partnerships
                        and knowledge exchange in fostering sustainable and cooperative development across the Nile Basin nations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-warm-gold pl-4">
                  <h4 className="font-bold text-charcoal mb-2">
                    Nigeria: "Ubuntu Leadership: Harnessing Knowledge Systems for Transformative Education in Africa"
                  </h4>
                  <div className="flex items-start space-x-3 mb-2">
                    <img
                      src="/images/speakers/Prof_John.jpeg"
                      alt="Prof. John Kalu Osiri"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm text-charcoal">
                        <Link
                          href="/summit/speakers#john-osiri"
                          className="text-river-blue hover:text-river-blue-dark underline"
                        >
                          Prof. John Kalu Osiri
                        </Link>
                        , Chancellor of Osiri University
                      </p>
                      <p className="text-xs text-charcoal mt-2">
                        A visionary leader and educator, Prof. Osiri will explore how Ubuntu philosophy and African
                        knowledge systems can redefine leadership and create transformative educational models for the Nile
                        Basin.
                      </p>
                    </div>
                  </div>

                </div>




                <div className="border-l-4 border-deep-orange pl-4">
                  <h4 className="font-bold text-charcoal mb-2">
                    Rwanda: "Data Science, Green STEM, and Youth Empowerment: Building a Tech-Driven Future for the
                    Nile"
                  </h4>
                  <div className="flex items-start space-x-3 mb-2">
                    <img
                      src="/images/speakers/Dr_Jenn.jpeg"
                      alt="Dr. Jennifer Batamuliza"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm text-charcoal">
                        <Link
                          href="/summit/speakers#jennifer-batamuliza"
                          className="text-river-blue hover:text-river-blue-dark underline"
                        >
                          Dr. Jennifer Batamuliza
                        </Link>
                        , Head of the Data-Driven Incubation Hub, University of Rwanda
                      </p>
                      <p className="text-xs text-charcoal">
                        A leading data scientist and advocate for women in STEM, Dr. Batamuliza will discuss leveraging data
                        science and green technology to empower youth and drive sustainable innovation across the basin.
                      </p>
                    </div>
                  </div>


                </div>

                <div className="border-l-4 border-river-blue pl-4">
                  <h4 className="font-bold text-charcoal mb-2">
                    India/Sudan: "Peace Education and Knowledge Diplomacy: The Academic Foundation for Lasting Nile
                    Cooperation"
                  </h4>
                  <div className="flex items-start space-x-3 mb-2">
                    <img
                      src="/images/speakers/Dr_Mohd.webp"
                      alt="Dr. Mohd Ashaq Malik"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm text-charcoal">
                        <Link
                          href="/summit/speakers#mohd-malik"
                          className="text-river-blue hover:text-river-blue-dark underline"
                        >
                          Dr. Mohd Ashaq Malik
                        </Link>
                        , Adjunct Professor, University of Gondar
                      </p>
                      <p className="text-xs text-charcoal">
                        A seasoned peace builder and botanist, Dr. Malik will articulate the vital role of peace education
                        and knowledge diplomacy as the cornerstone for fostering lasting understanding, collaboration, and
                        environmental stewardship among Nile nations.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="border-l-4 border-deep-orange pl-4">
                <h4 className="font-bold text-charcoal mb-2">
                  Ethiopia: "Public Health, Population Movements, and Traditional Knowledge Systems"
                </h4>
                <div className="flex items-start space-x-3 mb-2">
                  <img
                    src="/images/speakers/Dr_Zelalem.jpeg"
                    alt="Dr. Zelalem Yirga Biwota"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-charcoal">
                      <Link
                        href="/summit/speakers#zelalem-yirga"
                        className="text-river-blue hover:text-river-blue-dark underline"
                      >
                        Dr. Zelalem Yirga Biwota
                      </Link>

                    </p>
                    <p className="text-xs text-charcoal mt-2">
                      Public health specialist, healthcare leader, and expert scholar of Ethiopian traditional thought.
                      His work at the nexus of refugee health and indigenous knowledge systems provides a critical
                      framework for understanding community resilience and wellbeing throughout the Nile Basin.
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-warm-gold/20">
                <div className="flex items-start space-x-3">
                  <span className="text-xs text-charcoal bg-deep-orange/20 px-2 py-1 rounded mt-1">15 mins</span>
                  <p className="text-sm text-charcoal font-bold">Open Floor & Moderated Q&A</p>
                </div>
              </div>
            </div>

            {/* Part 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">
                  Part 3: Breakout Groups - From Ideas to Action
                </h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">45 minutes</span>
              </div>
              <p className="text-sm text-charcoal font-lora mb-4">
                Participants will divide into three parallel breakout rooms to draft concrete action plans.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Breakout Group 1 */}
                <div className="bg-river-blue/10 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-charcoal text-sm mb-4">
                    Group 1: Joint Research & Innovation
                  </h4>
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/speakers/Prof_Geci.jpeg"
                      alt="Prof. Geci Karuri-Sebina"
                      className="w-20 h-20 rounded-full object-cover mb-2"
                    />
                    <p className="text-xs text-charcoal">
                      <Link
                        href="/summit/speakers#geci-karuri"
                        className="text-river-blue hover:text-river-blue-dark underline"
                      >
                        Prof. Geci Karuri-Sebina (Kenya)
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Breakout Group 2 */}
                <div className="bg-deep-orange/10 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-charcoal text-sm mb-4">
                    Group 2: Student & Staff Mobility
                  </h4>
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/speakers/Prof_John.jpeg"
                      alt="Prof. John Kalu Osiri"
                      className="w-20 h-20 rounded-full object-cover mb-2"
                    />
                    <p className="text-xs text-charcoal">
                      <Link
                        href="/summit/speakers#john-osiri"
                        className="text-river-blue hover:text-river-blue-dark underline"
                      >
                        Prof. John Kalu Osiri (Nigeria)
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Breakout Group 3 */}
                <div className="bg-warm-gold/20 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-charcoal text-sm mb-4">
                    Group 3: Digital Education & The 'Children of the Nile Academy'
                  </h4>
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/speakers/Dr_Jenn.jpeg"
                      alt="Dr. Jennifer Batamuliza"
                      className="w-20 h-20 rounded-full object-cover mb-2"
                    />
                    <p className="text-xs text-charcoal">
                      <Link
                        href="/summit/speakers#jennifer-batamuliza"
                        className="text-river-blue hover:text-river-blue-dark underline"
                      >
                        Dr. Jennifer Batamuliza (Rwanda)
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Part 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">Part 4: Reporting Back & Adoption</h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">30 minutes</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Content */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-xs text-charcoal bg-deep-orange/20 px-3 py-1 rounded mt-1 min-w-[60px]">15 mins</span>
                    <p className="text-sm text-charcoal">
                      Rapporteurs present key outcomes and action points from each group.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xs text-charcoal bg-deep-orange/20 px-3 py-1 rounded mt-1 min-w-[60px]">10 mins</span>
                    <p className="text-sm text-charcoal">
                      Discussion and consolidation of the priority areas and the formal charter for the network.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xs text-charcoal bg-deep-orange/20 px-3 py-1 rounded mt-1 min-w-[60px]">5 mins</span>
                    <p className="text-sm text-charcoal">
                      Formal Agreement to establish the Nile Basin University & Research Network, with Jimma University
                      serving as the inaugural secretariat for 2025-2026.
                    </p>
                  </div>
                </div>

                {/* Right Content: Adjust Image */}
                <div className="flex items-center justify-center">
                  <img
                    src="/images/stud.webp"
                    alt="Student Participation"
                    className="w-full max-w-lg h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>



            {/* Part 5 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">Part 5: Closing & Common Message</h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">15 minutes</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div>
                    <p className="font-bold text-charcoal">Youth Reflection</p>
                    <p className="text-sm text-charcoal">
                      A student representative from the Jimma University Students' Union.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div>
                    <p className="font-bold text-charcoal">Closing Remarks</p>
                    <p className="text-sm text-charcoal">Dr. Jemal Abafita, President of Jimma University</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div>
                    <p className="font-bold text-charcoal">Adoption of the GERD Inauguration Message</p>
                    <div className="bg-warm-gold/10 p-4 rounded-lg mt-2">
                      <p className="text-lg text-charcoal italic">
                        "We, the academic community of the Nile Basin, recognize the Grand Ethiopian Renaissance Dam not
                        only as a source of renewable energy but as a catalyst for shared knowledge, research, and
                        prosperity for all our nations. We commit to harnessing our collective intellect to ensure the
                        Nile becomes a river of unity and sustainable development."
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
