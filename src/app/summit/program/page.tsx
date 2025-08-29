"use client"

import { useState, useEffect } from "react"
import MainNav from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Award, Handshake, ArrowRight, Users, Globe } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"



export default function SummitPage() {
  const [currentDay1Image, setCurrentDay1Image] = useState(0)
  const [currentDay2Image, setCurrentDay2Image] = useState(0)
  const [activeDay, setActiveDay] = useState(1)




  return (
    <div className="min-h-screen bg-off-white">
      <MainNav />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-4 bg-gradient-to-br from-river-blue/10 to-warm-gold/10 rounded-3xl overflow-hidden shadow-2xl border border-warm-gold/30">
            <img
              src="/images/kenya.webp"
              alt="Summit presentation and collaboration"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
          </div>
        </div>

        <div className="relative z-10 text-center text-rich-white px-4 max-w-5xl mx-auto">
          <div className="mb-6">
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight hero-text-shadow">
              Summit 2025
            </h1>
            <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-light mb-6 text-rich-white tracking-wide hero-text-shadow">
              Two-Day Art, Academia & Enterprise Summit
            </h2>

            <div className="inline-flex items-center space-x-3 bg-deep-orange backdrop-blur-sm px-5 py-2.5 rounded-full text-rich-white font-bold text-sm md:text-base mb-6 shadow-lg">
              <MapPin className="h-4 w-4" />
              <span>Online</span>
              <span>|</span>
              <Calendar className="h-4 w-4" />
              <span>6–7 September 2025</span>
            </div>
          </div>

          <p className="font-lora text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 text-rich-white font-normal hero-quote-shadow">
            A prestigious gathering celebrating the Nile's cultural and intellectual heritage through artistic
            expression, academic discourse, and sustainable innovation.
          </p>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSe1LBQ7nSDlQsDUeGyE-DFuVsB0gnm2A8Rt3jvBy5j22wer3g/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="bg-deep-orange hover:bg-deep-orange-dark text-rich-white font-bold px-8 py-3 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 font-merriweather"
            >
              Register Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 md:py-20">
        {/* Free-flowing Images Section */}
        <section className="mb-20 md:mb-32 relative">
          <div className="absolute right-4 top-20 w-76 h-48 rounded-2xl overflow-hidden shadow-lg transform rotate-6 z-10">
            <img src="/images/scholar.webp" alt="Academic conference" className="w-full h-full object-cover" />
          </div>

          <div className="text-center mb-12 md:mb-16 relative z-20">
            <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium">
              The summit will convene distinguished leaders from arts, academia, government, and diplomacy across all
              Nile Basin nations.
            </p>
          </div>
        </section>

        {/* Grand Opening Plenary */}
        <section className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">



            </div>

          </div>

          <div className="relative bg-gradient-to-br from-river-blue/5 to-warm-gold/10 rounded-3xl p-8 md:p-12 shadow-xl border border-warm-gold/20 overflow-hidden">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-deep-orange rounded-xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue">
                  Day 1: Unity in Diversity - One River, One Future
                </h3>
                <p className="text-charcoal font-lora">6 September 2025</p>
              </div>
            </div>
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 mb-12">

                {/* Opening Session */}

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-deep-orange rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-river-blue">Opening Session</h3>
                    <span className="text-sm text-charcoal bg-warm-gold/20 px-2 py-1 rounded">09:00 – 09:20</span>
                  </div>
                  <div className="space-y-4 text-sm font-lora text-charcoal">
                    <div>

                      <div className="flex items-start space-x-4">
                        <img
                          src="/images/speakers/Gezehen.jpeg"
                          alt="Dr. Gezehen Kebede"
                          className="w-20 h-20 object-cover rounded-full shadow-md"
                        />
                        <div>
                          <strong>Dr. Gezehen Kebede, Ethiopian Civil Society Organizations Council</strong>
                          <br />
                          Welcome and open the conference
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 mt-4">
                        <img
                          src="/images/speakers/Hailu.jpg"
                          alt="Artist Desaalegn Hailu"
                          className="w-20 h-20 object-cover rounded-full shadow-md"
                        />
                        <div>
                          <strong>Artist Desaalegn Hailu, initiator of the Children of Nile</strong>
                          <br />
                          Set vision and purpose for the Children of the Nile Initiative
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 mt-4">
                        <img
                          src="/images/speakers/afework.png"
                          alt="Prof. Dr. Afework Kassu"
                          className="w-20 h-20 object-cover rounded-full shadow-md"
                        />
                        <div>
                          <strong>Prof. Dr. Afework Kassu – Head AHRI, former State Minister of Science and Technology of Ethiopia</strong>
                          <br />
                          “Science, Innovation, and Youth Leadership for a Shared Nile Future”
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Keynote Statements */}
                {/* Keynote Statements */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-river-blue rounded-lg flex items-center justify-center">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-river-blue">Keynote Statements</h3>
                    <span className="text-sm text-charcoal bg-warm-gold/20 px-2 py-1 rounded">09:20 – 09:50</span>
                  </div>
                  <ul className="space-y-6 text-sm font-lora text-charcoal">
                    <li className="flex items-start space-x-4">
                      <img
                        src="/images/speakers/mammo.png"
                        alt="Prof. Mammo Muchie"
                        className="w-16 h-16 object-cover rounded-full shadow-md"
                      />
                      <div>
                        <strong>Prof. Mammo Muchie (Ethiopia/South Africa)</strong>
                        <br />
                        “Ubuntu and the Children of the Nile: Shared Humanity for Shared Futures”
                      </div>
                    </li>
                    <li className="flex items-start space-x-4">
                      {/* <img
                        src="/images/speakers/mammo.png"
                        alt="Mrs. Patricia Raye"
                        className="w-16 h-16 object-cover rounded-full shadow-md"
                      /> */}
                      <div>
                        <strong>Mrs. Patricia Raye (Uganda), Ministry of Finance – Climate Finance Unit</strong>
                        <br />
                        “Mobilizing Climate Finance for Transboundary Nile Cooperation”
                      </div>
                    </li>
                  </ul>
                </div>
              </div>


              <div className="grid md:grid-cols-3 gap-6">


                {/* Voices Across the Nile */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg col-span-3">
                  <div className="flex flex-col md:flex-row md:space-x-6">
                    {/* Left Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-river-blue rounded-lg flex items-center justify-center">
                          <Globe className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-playfair text-lg font-bold text-river-blue">Voices Across the Nile</h3>
                        <span className="text-sm text-charcoal bg-warm-gold/20 px-2 py-1 rounded">10:00 – 10:40</span>
                      </div>

                      <p className="text-sm text-charcoal font-lora">
                        <strong>Short thematic statements from working group representatives</strong>
                      </p>
                      <div className="mt-4">
                        <img
                          src="/images/presenting1.webp"
                          alt="Diaspora engagement in cultural exchange"
                          className="w-full h-56 object-cover rounded-xl shadow-md"
                        />
                      </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex-1">
                      <h4 className="font-bold text-river-blue mb-4">List of Speakers by Country Affiliation</h4>
                      <ul className="space-y-6 text-sm font-lora text-charcoal">
                        <li className="flex items-start space-x-4">
                          {/* <img
                            src=""
                            alt="Speaker from Sudan"
                            className="w-16 h-16 object-cover rounded-full shadow-md"
                          /> */}
                          <div>
                            <strong className="text-deep-orange !text-deep-orange">Sudan</strong>
                            <br />
                            <strong>Mohamed Ibrahim, MoTech Sudan</strong>
                            <br />
                            Mobile Solutions for Youth Employment
                          </div>
                        </li>
                        <li className="flex items-start space-x-4">
                          <img
                            src="/images/speakers/Prof_John.jpeg"
                            alt="Speaker from Kenya"
                            className="w-20 h-20 object-cover rounded-full shadow-md"
                          />
                          <div>
                            <strong className="text-deep-orange !text-deep-orange">Kenya</strong>
                            <br />
                            <strong>Prof. John Kalu Osiri, Chancellor, Osiri University</strong>
                            <br />
                            Ubuntu Leadership & Ethics
                          </div>
                        </li>
                        <li className="flex items-start space-x-4">
                          <img
                            src="/images/speakers/Dr_Jenn.jpeg"
                            alt="Speaker from Rwanda"
                            className="w-20 h-20 object-cover rounded-full shadow-md"
                          />
                          <div>
                            <strong className="text-deep-orange !text-deep-orange">Rwanda</strong>
                            <br />
                            <strong>Dr. Jennifer Batamuliza, Specialist in Data Sovereignty & STEM Education</strong>
                            <br />
                            Co-Chair & Speaker
                          </div>
                        </li>
                        <li className="flex items-start space-x-4">
                          {/* <img
                            src=""
                            alt="Speaker from South Sudan"
                            className="w-16 h-16 object-cover rounded-full shadow-md"
                          /> */}
                          <div>
                            <strong className="text-deep-orange !text-deep-orange">South Sudan</strong>
                            <br />
                            <strong>Mr. Ayodeji Oyenuga</strong>
                            <br />
                            Equity & Access in the Digital Age
                          </div>
                        </li>
                        <li className="flex items-start space-x-4">
                          {/* <img
                            src=""
                            alt="Speaker from Uganda"
                            className="w-16 h-16 object-cover rounded-full shadow-md"
                          /> */}
                          <div>
                            <strong className="text-deep-orange !text-deep-orange">Uganda</strong>
                            <br />
                            <strong>CSO Representative</strong>
                            <br />
                            Success Stories in Community-Led Adaptation
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Synthesis, Closing & Transition */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg col-span-3">
                  <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                    {/* Left Content */}
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-deep-orange rounded-lg flex items-center justify-center">
                          <Handshake className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-playfair text-lg font-bold text-river-blue">Synthesis, Closing & Transition</h3>
                        <span className="text-sm text-charcoal bg-warm-gold/20 px-2 py-1 rounded">10:40 – 11:30</span>
                      </div>
                      <ul className="space-y-6 text-sm font-lora text-charcoal">
                        {/* Moderated Reflection */}
                        <li>
                          <strong>Moderated Reflection: "One River, Many Voices"</strong>

                          <div className="flex items-start space-x-4 mt-2">
                            <img
                              src="/images/speakers/Prof_John.jpeg"
                              alt="Prof. John Kalu Osiri"
                              className="w-20 h-20 object-cover rounded-full shadow-md"
                            />
                            <div>


                              15-minute dialogue with selected speakers from the “Voices” on the question:
                              <br />
                              <em>“What does it mean to be a Child of the Nile today?”</em>
                            </div>
                          </div>
                        </li>

                        {/* Summary & Call to Action */}
                        <li>
                          <strong>Summary & Call to Action</strong>
                          <br />
                          <div className="flex items-start space-x-4 mt-2">
                            <img
                              src="/images/speakers/Prof_John.jpeg"
                              alt="Prof. John Kalu Osiri"
                              className="w-20 h-20 object-cover rounded-full shadow-md"
                            />
                            <div>
                              <strong>Prof. John Kalu Osiri</strong>
                              <br />
                              Synthesizes key messages and inspires action, emphasizing the purpose of the working groups.
                            </div>
                          </div>
                        </li>

                        {/* Transition to Working Groups */}
                        <li>
                          <strong>Transition to Working Groups</strong>
                          <br />
                          <div className="flex items-start space-x-4 mt-2">
                            <img
                              src="/images/speakers/Gezehen.jpeg"
                              alt="Dr. Gezehen Kebede"
                              className="w-20 h-20 object-cover rounded-full shadow-md"
                            />
                            <div>
                              <strong>Dr. Gezehen Kebede</strong>
                              <br />
                              Announces the five breakout sessions, closes the plenary, and directs participants to their group rooms.
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>



                    {/* Right Image */}
                    <div className="flex-shrink-0 w-full md:w-1/2 mt-6 md:mt-0">
                      <img
                        src="/images/bridge.webp"
                        alt="Artistic bridge representing unity and connection"
                        className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-md"
                      />

                    </div>
                  </div>
                </div>

                {/* Working Groups I */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg col-span-3">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-playfair text-xl font-bold text-river-blue">
                      The Working Group Sessions
                    </h4>
                    {/* <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">
                      14:00 - 16:00
                    </span> */}
                  </div>


                  {/* Objective and Delivery Expected Section */}
                  <div className="grid md:grid-cols-2 gap-6 p-4 rounded-lg mb-6">
                    {/* Objective */}
                    <div>
                      <h5 className="font-bold text-teal-800 text-lg mb-3">Format</h5>
                      <p className="text-sm text-charcoal font-lora mb-4">
                        Parallel thematic workshops, each chaired by a leading institution or expert.
                      </p>
                      <h5 className="font-bold text-teal-800 text-lg mb-3">Aims</h5>
                      <ul className="list-disc list-inside space-y-2 text-sm text-charcoal font-lora">
                        <li>To translate the plenary vision into concrete cooperation areas.</li>
                        <li>To identify opportunities, challenges, and joint activities in each thematic field.</li>
                        <li>To prepare draft action points for long-term collaboration across countries.</li>
                      </ul>
                    </div>

                    {/* Delivery Expected */}
                    <div>
                      <h5 className="font-bold text-teal-800 text-lg mb-3">Deliverables</h5>
                      <ul className="list-disc list-inside space-y-2 text-sm text-charcoal font-lora">
                        Each group will produce:
                        <ul className="list-disc list-inside pl-4 space-y-2">
                          <li>A draft agenda of activities</li>
                          <li>A list of proposed cross-country collaborations</li>
                          <li>A summary of opportunities and challenges</li>
                        </ul>
                        <li>Outcomes will be shared in a final synthesis session.</li>
                      </ul>
                    </div>


                    {/* Group 1: Universities & Research */}
                    <Link href="/summit/working-groups/academic" className="block">
                      <div className="bg-blue-50 hover:bg-blue-600 hover:text-white p-4 rounded-lg cursor-pointer transition-all duration-300 group">
                        <p className="font-bold text-gray-800 group-hover:text-white text-sm mb-2">
                          Group 1: Universities & Research
                        </p>
                        <div className="flex items-center space-x-3 mb-4">
                          <img
                            src="/images/jimma_uni.png"
                            alt="Jimma University"
                            className="w-20 h-20 object-contain"
                          />
                          <span className="text-xs text-gray-600 group-hover:text-white/90">Jimma University</span>
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                          <img
                            src="/images/speakers/dr_jemal.jpeg"
                            alt="Dr. Jemal Abafita"
                            className="w-20 h-20 object-cover rounded-full shadow-md"
                          />
                          <span className="text-xs text-gray-600 group-hover:text-white/90">Dr. Jemal Abafita (President)</span>
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                          <img
                            src="/images/speakers/mkm.webp"
                            alt="Asst. Prof. Dr. Mitslal Kifleyesus-Matschie"
                            className="w-20 h-20 object-cover rounded-full shadow-md"
                          />
                          <span className="text-xs text-gray-600 group-hover:text-white/90">Asst. Prof. Dr. Mitslal Kifleyesus-Matschie</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <img
                            src="/images/speakers/mammo.png"
                            alt="Prof. Mammo Muchie"
                            className="w-20 h-20 object-cover rounded-full shadow-md"
                          />
                          <span className="text-xs text-gray-600 group-hover:text-white/90">Prof. Mammo Muchie</span>
                        </div>
                      </div>
                    </Link>


                    <Link href="/summit/working-groups/civil-society" className="block">
                      <div className="bg-yellow-50 hover:bg-yellow-600 hover:text-white p-4 rounded-lg cursor-pointer transition-all duration-300 group">
                        <p className="font-bold text-gray-800 group-hover:text-white text-sm mb-2">
                          Group 2: Civil Society & Policy Advocacy
                        </p>
                        <div className="flex items-center space-x-3 mb-4">
                          <img
                            src="/images/speakers/Mengistu.jpeg"
                            alt="Prof. Mengistu Ketema"
                            className="w-20 h-20 object-cover rounded-full shadow-md"
                          />
                          <span className="text-xs text-gray-600 group-hover:text-white/90">Prof. Mengistu Ketema</span>
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                          <img
                            src="/images/speakers/Gezehen.jpeg"
                            alt="Dr. Gezehen Kebede"
                            className="w-20 h-20 object-cover rounded-full shadow-md"
                          />
                          <span className="text-xs text-gray-600 group-hover:text-white/90">Dr. Gezehen Kebede</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          {/* <img
                            src="/images/speakers/Dr_Alemayehu.jpeg"
                            alt="Dr. Alemayehu"
                            className="w-20 h-20 object-cover rounded-full shadow-md"
                          /> */}
                          <span className="text-xs text-gray-600 group-hover:text-white/90">Dr. Alemayehu</span>
                        </div>
                      </div>
                    </Link>
                    <Link href="/summit/working-groups/art" className="block">
                      <div className="bg-orange-50 hover:bg-orange-600 hover:text-white p-4 rounded-lg cursor-pointer transition-all duration-300 group">
                        <p className="font-bold text-gray-800 group-hover:text-white text-sm mb-2">
                          Group 3: Art & Culture
                        </p>
                        <div className="flex items-center space-x-3">
                          <img
                            src="/images/speakers/Hailu.jpg"
                            alt="Artist Desalegn Hailu Mazengiya"
                            className="w-20 h-20 rounded-full object-cover"
                          />
                          <span className="text-xs text-gray-600 group-hover:text-white/90">Artist Desaalegn Hailu (Ethiopia) with 10 Nile Nations artists</span>
                        </div>
                      </div>
                    </Link>





                    <Link href="/summit/working-groups/technology" className="block">
                      <div className="bg-orange-50 hover:bg-orange-600 hover:text-white p-4 rounded-lg cursor-pointer transition-all duration-300 group">
                        <p className="font-bold text-gray-800 group-hover:text-white text-sm mb-2">
                          Group 4: Youth & Technology
                        </p>
                        <div className="flex items-center space-x-3 mb-4">
                          <img
                            src="/images/speakers/Felix.jpeg"
                            alt="Felix"
                            className="w-20 h-20 object-cover rounded-full shadow-md"
                          />
                          <span className="text-xs text-gray-600 group-hover:text-white/90">Felix Matschie, Ecopia Group</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <img
                            src="/images/speakers/Samuel.jpeg"
                            alt="Samuel"
                            className="w-20 h-20 object-cover rounded-full shadow-md"
                          />
                          <span className="text-xs text-gray-600 group-hover:text-white/90">Samuel Bahiru, Ticker Tape</span>
                        </div>
                      </div>
                    </Link>
                    <Link href="/summit/working-groups/entrepreneurs" className="block">
                      <div className="bg-blue-50 hover:bg-blue-600 hover:text-white p-4 rounded-lg cursor-pointer transition-all duration-300 group">
                        <p className="font-bold text-gray-800 group-hover:text-white text-sm mb-2">
                          Group 5: Digital Guardians of the Nile: AI, Ethics & Cybersecurity for Shared Futures
                        </p>
                        <div className="flex items-center space-x-3 mb-4">
                          <img
                            src="/images/speakers/mkm.webp"
                            alt="Dr. Mitslal Kifleyesus-Matschie"
                            className="w-20 h-20 object-cover rounded-full shadow-md"
                          />
                          <span className="text-xs text-gray-600 group-hover:text-white/90">Dr. Mitslal Kifleyesus-Matschie</span>
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                          <img
                            src="/images/speakers/Dr_Jenn.jpeg"
                            alt="Dr. Jennifer Batamuliza"
                            className="w-20 h-20 object-cover rounded-full shadow-md"
                          />
                          <span className="text-xs text-gray-600 group-hover:text-white/90">Dr. Jennifer Batamuliza</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <img
                            src="/images/speakers/Lebogang.jpg"
                            alt="Lebogang Mbana"
                            className="w-20 h-20 object-cover rounded-full shadow-md"
                          />
                          <span className="text-xs text-gray-600 group-hover:text-white/90">Lebogang Mbana</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </section>


        <section className="mb-20 md:mb-32">


          {/* More free-flowing images around the program section */}



          {/* Day 2 - Action & Resolution
            <div className="mb-16 md:mb-20">
              <div className="bg-gradient-to-br from-warm-gold/10 to-river-blue/5 rounded-3xl p-8 md:p-12 shadow-xl border border-river-blue/20">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-river-blue rounded-xl flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue">
                      Day 2: Action & Resolution
                    </h3>
                    <p className="text-charcoal font-lora">7 September 2025</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* PLENARY 2: Stories of Collaboration *
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/images/young_afri1.webp"
                        alt="Young African leaders collaborating"
                        className="w-80 h-48 object-cover rounded-xl shadow-md"
                      />
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-playfair text-xl font-bold text-river-blue">
                            PLENARY 2: Stories of Collaboration
                          </h4>
                          <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">
                            09:00 - 10:30
                          </span>
                        </div>
                        <ul className="space-y-2 text-sm font-lora text-charcoal">
                          <li>
                            • Showcase successful cross-border projects in the Nile Basin (e.g., a research partnership,
                            a joint art exhibition, a youth tech exchange).
                          </li>
                          <li>• Short, inspiring talks from project leaders.</li>
                          <li>• Focus: "What works and how can we scale it?"</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Virtual Networking Break 
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <div className="text-center">
                      <h4 className="font-playfair text-xl font-bold text-river-blue">Virtual Networking Break</h4>
                      <div className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full mt-2">
                        10:30 - 11:00
                      </div>
                    </div>
                  </div>

                  {/* Working Groups II
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-playfair text-xl font-bold text-river-blue">
                          WORKING GROUP SESSIONS II (Parallel Breakouts)
                        </h4>
                        <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">
                          11:00 - 13:00
                        </span>
                        <p className="text-sm text-charcoal font-lora mt-4">
                          Each group reconvenes to finalize their outputs.
                        </p>
                        <div className="mt-4">
                          <p className="font-bold text-sm text-charcoal mb-2">Key Tasks for each group:</p>
                          <ul className="space-y-2 text-sm font-lora text-charcoal">
                            <li>• Finalize your Group Summary Report (2-3 pages).</li>
                            <li>• Draft your Message for the GERD Inauguration.</li>
                            <li>
                              • Plan and announce 1-2 concrete activities to be completed before the first symposium in
                              Ethiopia in 2026 (e.g., "Launch a joint research paper," "Organize a virtual art
                              exchange," "Start a mentorship program for entrepreneurs").
                            </li>
                            <li>• Begin drafting your section of the final resolution.</li>
                          </ul>
                        </div>
                      </div>
                      <img
                        src="/images/presenting1.webp"
                        alt="Students presenting innovative ideas"
                        className="w-82 h-52 object-cover rounded-xl shadow-md"
                      />
                    </div>
                  </div>
                  {/* Lunch Break 
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg flex justify-center items-center">
                    <div className="text-center">
                      <h4 className="font-playfair text-xl font-bold text-river-blue">LUNCH</h4>
                      <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">
                        13:00 - 14:00
                      </span>
                    </div>
                  </div>

                  {/* Final Plenary 
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-playfair text-xl font-bold text-river-blue">
                        FINAL PLENARY: Resolution for the Future
                      </h4>
                      <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">
                        14:00 - 16:00
                      </span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-bold text-deep-orange text-sm mb-2">
                          Part 1: Presentation of Working Group Outcomes (60 mins)
                        </h5>
                        <p className="text-xs text-charcoal mb-2">Each Working Group Lead presents:</p>
                        <ul className="text-xs text-charcoal space-y-1">
                          <li>• Their announced activities for 2025-2026.</li>
                          <li>• Their GERD Inauguration Message.</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-deep-orange text-sm mb-2">
                          Part 2: Adoption of the Resolution (45 mins)
                        </h5>
                        <ul className="text-xs text-charcoal space-y-1">
                          <li>• The draft resolution, compiled from all group reports, is presented.</li>
                          <li>• Open floor for final comments and amendments.</li>
                          <li>• Symbolic adoption of the resolution by acclamation.</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-deep-orange text-sm mb-2">
                          Part 3: The Way Forward & Official Closing (15 mins)
                        </h5>
                        <ul className="text-xs text-charcoal space-y-1">
                          <li>
                            • Announcement: Save the Date for the First Children of the Nile Symposium in Ethiopia,
                            2026.
                          </li>
                          <li>• Closing by the Central Organizing Committee.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        //   {/* Expected Outputs 
        //   </div>
        //   <div className="bg-gradient-to-br from-deep-orange/5 to-warm-gold/10 rounded-3xl p-8 md:p-12 shadow-xl border border-deep-orange/20">
        //     <h3 className="font-playfair text-2xl font-bold text-river-blue mb-6 text-center">
        //       Expected Outputs & Deliverables
        //     </h3>
        //     <p className="text-center text-charcoal font-lora mb-8">
        //       By the end of the meeting, the following will be produced and compiled into a final report to be shared
        //       with the governments of the 11 Nile Basin countries:
        //     </p>
        //     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        //       <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center">
        //         <div className="w-10 h-10 bg-river-blue rounded-lg flex items-center justify-center mx-auto mb-3">
        //           <span className="text-white font-bold text-sm">📋</span>
        //         </div>
        //         <h4 className="font-bold text-river-blue text-sm mb-2">A Comprehensive Resolution</h4>
        //         <p className="text-xs text-charcoal">
        //           A unified document outlining the shared vision, principles, and calls to action for Nile Basin
        //           cooperation.
        //         </p>
        //       </div>
        //       <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center">
        //         <div className="w-10 h-10 bg-deep-orange rounded-lg flex items-center justify-center mx-auto mb-3">
        //           <span className="text-white font-bold text-sm">5</span>
        //         </div>
        //         <h4 className="font-bold text-deep-orange text-sm mb-2">Five Working Group Summary Reports</h4>
        //         <p className="text-xs text-charcoal">
        //           Detailed reports from each sector (Academia, Art, Civil Society, Enterprise, Youth/Tech).
        //         </p>
        //       </div>
        //       <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center">
        //         <div className="w-10 h-10 bg-warm-gold rounded-lg flex items-center justify-center mx-auto mb-3">
        //           <span className="text-white font-bold text-sm">📅</span>
        //         </div>
        //         <h4 className="font-bold text-charcoal text-sm mb-2">A Plan of Action for 2025-2026</h4>
        //         <p className="text-xs text-charcoal">
        //           A list of announced concrete projects and activities from each working group.
        //         </p>
        //       </div>
        //       <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center">
        //         <div className="w-10 h-10 bg-river-blue rounded-lg flex items-center justify-center mx-auto mb-3">
        //           <span className="text-white font-bold text-sm">💬</span>
        //         </div>
        //         <h4 className="font-bold text-river-blue text-sm mb-2">Messages for the GERD Inauguration</h4>
        //         <p className="text-xs text-charcoal">
        //           Unified statements from each sector celebrating the dam as a catalyst for regional cooperation.
        //         </p>
        //       </div>
        //     </div>*/}

        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-warm-gold-10 border-2 border-warm-gold-30 rounded-3xl p-8 md:p-16 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue mb-6">
                  Be Part of This Historic Gathering
                </h2>
                <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-8 font-medium">
                  Join us as we celebrate the Nile's heritage and forge new partnerships for a sustainable future across
                  all 11 basin nations.
                </p>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe1LBQ7nSDlQsDUeGyE-DFuVsB0gnm2A8Rt3jvBy5j22wer3g/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="default"
                    className="bg-deep-orange hover:bg-deep-orange-dark text-rich-white font-bold px-6 py-2.5 text-base rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-merriweather"
                  >
                    Register Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/images/conference.webp"
                  alt="Collaborative conference discussion"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div >
  )
}
