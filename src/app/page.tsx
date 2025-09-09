"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Globe, ArrowRight, Database, Lightbulb, Leaf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import SummitCarousel from "@/components/summit-carousel"
import Link from "next/link"
import { useState, useEffect } from "react"

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe1LBQ7nSDlQsDUeGyE-DFuVsB0gnm2A8Rt3jvBy5j22wer3g/viewform?usp=header"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 2

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 8000) // Change slide every 8 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-off-white">
      {/* Navigation */}
      <MainNav />

      {/* Hero Section - Fixed Font Sizing */}
      <section className="relative min-h-[120vh]  flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt="Children of the Nile celebration by the river at sunset"
            className="w-full h-full object-cover"
          />
          {/* Enhanced gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40"></div>
        </div>

        {/* Content Overlay - Fixed Typography Sizing */}
        <div className="relative z-10 text-center text-rich-white px-4 max-w-6xl mx-auto">
          <div className="mb-6">
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight hero-text-shadow">
              Children of the Nile
            </h1>
            <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-light mb-6 text-rich-white tracking-wide hero-text-shadow">
              A Shared Present & Future
            </h2>

            <div className="inline-flex items-center space-x-3 bg-warm-gold backdrop-blur-sm px-5 py-2.5 rounded-full text-rich-white font-bold text-sm md:text-base mb-6 shadow-lg">
              <Calendar className="h-4 w-4" />
              <span>Summit Completed Successfully</span>
              <span>|</span>
              <MapPin className="h-4 w-4" />
              <span>6–7 September 2025</span>
            </div>
          </div>

          <div className="mb-8">
            <SummitCarousel />
          </div>

          {/* Enhanced Quote with Attribution */}
          <div className="mb-8 flex flex-col space-y-6">
            {/* President's Quote */}
            <div className="flex items-start space-x-4">
              {/* Image on the left */}
              <img
                src="/images/president.jpg"
                alt="H.E. President Taye Atske Selassie Amde"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shadow-md"
              />
              <div className="flex-1">
                <blockquote
                  className="font-playfair text-sm md:text-lg lg:text-xl leading-relaxed max-w-5xl mb-2 text-rich-white font-light italic hero-quote-shadow"
                  style={{ lineHeight: "1.6" }}
                >
                  "This gathering is a unique opportunity to reflect on the Nile as more than a river—it is a living
                  testimony to our shared past and a foundation for our collective future." – H.E. President Taye Atske
                  Selassie Amde
                </blockquote>
                {/* Added link to read the full interview */}
                <Link href="/summit/presidential-interview">
                  <span className="text-warm-gold hover:underline font-bold block text-left">
                    Read the full interview
                  </span>
                </Link>
              </div>
            </div>
            {/* Desalegn Hailu Mazengiya's Quote */}
            <div className="flex items-center space-x-4">
              {/* Image on the left */}
              <img
                src="/images/speakers/Hailu.jpg"
                alt="Desalegn Hailu Mazengiya"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shadow-md"
              />
              <blockquote
                className="font-playfair text-sm md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto mb-2 text-rich-white font-light italic hero-quote-shadow"
                style={{ lineHeight: "1.6" }}
              >
                "This event grows from Ethiopia's soil but belongs to all Nile nations. We build it together—brushstroke
                by brushstroke, idea by idea." — Desalegn Hailu Mazengiya
              </blockquote>
            </div>
          </div>

          <div className="text-center">
            <p className="font-lora text-base md:text-lg text-rich-white/90 leading-relaxed mb-4">
              The summit has concluded successfully. Thank you to all participants who made this
              historic gathering possible.
            </p>
            <a href="#summit-results-outcomes">
              <Button
                size="default"
                className="bg-deep-orange hover:bg-warm-gold-dark text-rich-white font-bold px-6 py-2.5 text-base rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-merriweather"
              >
                View Summit Results
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
      <section id="summit-results-outcomes" className="py-16 md:py-20 bg-gradient-to-b from-off-white to-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-6">
                Summit Results & Outcomes
                <div className="mb-4"></div>
                <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-8 text-center">
                  Detailed reports for <a href="#universities-research" className="text-warm-gold font-bold hover:underline">Universities & Research</a>,
                  <a href="#civil-society" className="text-warm-gold font-bold hover:underline"> Civil Society Organizations</a>,
                  <a href="#youth-technology" className="text-warm-gold font-bold hover:underline"> Youth and Technology</a>, and
                  <a href="#private-sector" className="text-warm-gold font-bold hover:underline"> Private Sector & Entrepreneurship </a>
                  are available below.   Key insights from the various working groups are detailed in the full report   <a
                    href="/documents/The_Children_of_the_ Nile_Initiative_summit_Report_final-compressed.pdf"
                    className="text-warm-gold font-bold hover:underline"
                    download
                  >
                    here
                  </a>.
                </p>

              </h2>
              <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed">Universities & Research</p>
            </div>



            <Card className="overflow-hidden shadow-2xl bg-white border-warm-gold-20 mb-12" id="universities-research">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <img
                      src="/images/speakers/dr_jemal.jpeg"
                      alt="Dr. Jemal Abafita"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-warm-gold-30"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="font-playfair text-xl md:text-2xl font-bold text-river-blue mb-2">
                        Dr. Jemal Abafita
                      </h3>
                      <p className="font-merriweather text-sm md:text-base text-warm-gold font-medium">
                        President of Jimma University
                        <br />
                        Chair, Universities & Research
                      </p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-6">
                        The inaugural summit of the #ChildrenoftheNileInitiative was held online today under the theme
                        "Building an Academic Bridge across 11 Nations: Knowledge, Cooperation and a Shared Future for
                        the Nile". It was a pleasure and an honor for Jimma University to co-organize and co-lead one of
                        the five working groups - the Universities & Research Group.
                      </p>

                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-6">
                        During the opening session, I had the pleasure of making opening remarks to the Universities and
                        Research Group, in which I highlighted the importance of collaboration – particularly the
                        powerful, yet less talked about partnerships already thriving among our institutions. Students
                        from across the Nile Basin have been crossing borders to study at each others' universities;
                        researchers have been co-authoring papers on transboundary water management; and Joint projects
                        have been jointly implemented, and are already delivering tangible benefits across the Basin.
                      </p>

                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-6">
                        We need to move from such isolated efforts to a more coordinated basin-wide strategy. Jimma
                        University is proud to be part of this growing network – contributing through scholarships,
                        research programs, conferences and similar other engagements. Strengthening these academic ties
                        is critical and Jimma University remains fully committed to deepening the cooperation focusing
                        on three pillars.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white border-warm-gold-20 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-river-blue-10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="h-8 w-8 text-river-blue" />
                    </div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">
                      Science of Shared Resources
                    </h3>
                  </div>
                  <p className="font-merriweather text-sm text-charcoal leading-relaxed">
                    Helping coordinate larger, basin-wide research consortia on critical issues like sediment flow,
                    watershed management, and renewable energy.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-warm-gold-20 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-warm-gold-10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Database className="h-8 w-8 text-warm-gold" />
                    </div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">
                      Knowledge Management Platform
                    </h3>
                  </div>
                  <p className="font-merriweather text-sm text-charcoal leading-relaxed">
                    Building a "Nile Basin Knowledge Platform" - a shared digital space for data, modeling, and virtual
                    collaboration, that will serve all our existing projects and empower new.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-warm-gold-20 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-deep-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="h-8 w-8 text-deep-orange" />
                    </div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">
                      Scholarship of Sustainability
                    </h3>
                  </div>
                  <p className="font-merriweather text-sm text-charcoal leading-relaxed">
                    Advancing research in environmental and social stewardship to ensure development is inclusive and
                    science-led.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Call for Nile Basin University & Research Fund */}
            <Card className="bg-gradient-to-r from-warm-gold-10 to-river-blue-10 border-2 border-warm-gold-30 shadow-xl mb-12">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <h3 className="font-playfair text-xl md:text-2xl font-bold text-river-blue mb-4">
                    Nile Basin University & Research Fund
                  </h3>
                  <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-6">
                    Finally, I called for the formal establishment of the Nile Basin University & Research Fund, to help
                    transform our partnerships into a resilient network – one that builds trust, generates shared
                    benefits, and fosters peace and mutual understanding through the power of academic cooperation.
                  </p>
                  <p className="font-merriweather text-sm md:text-base text-charcoal leading-relaxed">
                    The summit is expected to articulate its declaration and messages of solidarity for the upcoming
                    GERD inauguration.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Civil Society Organizations Section */}
            <div className="text-center mb-12">
              <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed">
                Civil Society Organizations
              </p>
            </div>

            <Card className="overflow-hidden shadow-2xl bg-white border-warm-gold-20 mb-12" id="civil-society">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <img
                      src="/images/speakers/Gezehen.jpeg"
                      alt="Dr. Gezahegn Kebede Gebrehana"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-warm-gold-30"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="font-playfair text-xl md:text-2xl font-bold text-river-blue mb-2">
                        Dr. Gezahegn Kebede Gebrehana
                      </h3>
                      <p className="font-merriweather text-sm md:text-base text-warm-gold font-medium">
                        Regional Director for East Africa, Max Foundation
                        <br />
                        Chair, Civil Society Organizations
                      </p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-6">
                        The CSO working group had a very vibrant and open deliberation anchored on an in-depth
                        understanding of the role of Civil Society Organizations in shaping attitudes and beliefs of
                        different segments of communities that would lead them to either a prosperous development path
                        or to the contrary, to conflicts and undesirable mishaps. Accordingly, the working group has
                        come up with the following as part of the expected result of its deliberation to be presented to
                        the plenary.
                      </p>

                      <h4 className="font-playfair text-lg font-bold text-river-blue mb-3">
                        Statement of Principles for CSO Collaboration
                      </h4>
                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-4">
                        The premise for any collaboration is an initial willingness to unite in minds and actions. With
                        this understanding the principles for CSO collaboration should revolve around the following key
                        areas:
                      </p>
                      <ul className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-6 list-disc list-inside space-y-1">
                        <li>Be inclusive of all the eleven Riparian Nile countries</li>
                        <li>Focusing on building trust and synergies of thoughts and activities</li>
                        <li>Embracing positive attitude</li>
                        <li>Be result oriented</li>
                        <li>Collaboration beyond water related issues</li>
                        <li>Being people centered</li>
                      </ul>

                      <h4 className="font-playfair text-lg font-bold text-river-blue mb-3">
                        Joint Advocacy and Action Themes
                      </h4>
                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-4">
                        Changes of attitudes and beliefs in any setting happen only with a concerted effort through well
                        designed advocacy actions. The following are some initial advocacy action themes that can be
                        taken up:
                      </p>
                      <ul className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-6 list-disc list-inside space-y-1">
                        <li>
                          Advancing fair and equitable solutions to inherent problems emanating from unfair/unjust trade
                          practices
                        </li>
                        <li>Care for climate and environmental justice</li>
                        <li>Safe, and free/open movement of people across countries</li>
                        <li>
                          Public diplomacy focused on promoting people-centered and locally owned solutions to problems
                        </li>
                      </ul>

                      <h4 className="font-playfair text-lg font-bold text-river-blue mb-3">
                        CSO Platform Structure and Modality
                      </h4>
                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-6">
                        A structured institutional modality is paramount not only for a successful delivery of
                        activities but also for building effective relationships and managing the desired cooperation
                        modalities. Hence the suggested structure for the CSO platform needs one with a cross-country
                        dimension which is open to all the eleven countries with clear governance structure,
                        communication modalities, membership protocols governed by a robust code of conduct. Detailed
                        terms of reference for the same is under preparation.
                      </p>

                      <div className="bg-warm-gold/10 p-4 rounded-lg">
                        <h4 className="font-playfair text-lg font-bold text-river-blue mb-3">Message</h4>
                        <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed italic">
                          "We, the civil society organizations and community guardians of the Nile, stand united in our
                          commitment to a peaceful, prosperous, and climate-resilient future for all its people. We
                          celebrate the GERD as a symbol of African innovation and urge that its operation be guided by
                          the principles of ecological sustainability, equitable benefit-sharing, and unwavering
                          cooperation. We pledge to hold our leaders accountable and to work hand-in-hand across borders
                          to protect our shared lifeline for generations to come."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Youth and Technology Section */}
            <div className="text-center mb-12">
              <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed">Youth and Technology</p>
            </div>

            <Card className="overflow-hidden shadow-2xl bg-white border-warm-gold-20 mb-12" id="youth-technology">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <img
                      src="/images/speakers/Anele.jpg"
                      alt="Anele Simon"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-warm-gold-30"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="font-playfair text-xl md:text-2xl font-bold text-river-blue mb-2">Anele Simon</h3>
                      <p className="font-merriweather text-sm md:text-base text-warm-gold font-medium">
                        Secretary General, ICOYACA.
                        <br />
                        Rapporteur, Youth and Technology
                      </p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-6">
                        Key Discussions and Recommendations
                      </p>

                      <h4 className="font-playfair text-lg font-bold text-river-blue mb-3">
                        1. Digital Business Registration for Youth Entrepreneurs
                      </h4>
                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-4">
                        <strong>Objective:</strong> Enable youth, particularly from the Nile region and Ethiopia, to
                        overcome barriers to entering regional and international trade.
                      </p>
                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-4">
                        <strong>Recommendations:</strong>
                      </p>
                      <ul className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-6 list-disc list-inside space-y-2">
                        <li>
                          <strong>1.1. Fully Digital Business Registration System </strong>– Establish a centralized, digital platform that allows youth to register businesses online.
                          <ul className="list-disc list-inside ml-6">
                            <li>
                              Implement a central joint business address system (similar to a PO box), so youth without permanent physical addresses can receive legal correspondence and have a valid registered address.
                            </li>
                            <li>
                              Ensure accessibility for youth in poorer or rural areas who may lack formal mailing addresses.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>1.2. Easier Access to Export Licenses</strong> – Streamline processes for obtaining
                          export licenses under the African Continental Free Trade Area (AfCFTA) framework, to promote
                          regional trade by young entrepreneurs.
                        </li>
                        <li>
                          <strong>1.3. Digitization of Trade Processes</strong> – Expand digital systems across customs
                          and trade operations to reduce bureaucratic hurdles and lower barriers for youth-led
                          businesses.
                        </li>
                      </ul>

                      <h4 className="font-playfair text-lg font-bold text-river-blue mb-3">
                        2. Data Literacy and Security Education
                      </h4>
                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-4">
                        <strong>Contributor:</strong> Dr. Fred Mpala, Vice President, Thomson Reuters
                      </p>
                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-4">
                        <strong>Objective:</strong> Build a generation of youth capable of thriving in the digital
                        economy while understanding the importance of data security.
                      </p>
                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-4">
                        <strong>Recommendations:</strong>
                      </p>
                      <ul className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-6 list-disc list-inside space-y-2">
                        <li>
                          <strong>2.1. Integration of Data Security Training</strong> – Embed comprehensive data
                          security education into school and university curricula to equip youth with practical
                          knowledge of safeguarding digital information.
                        </li>
                        <li>
                          <strong>2.2. Curriculum on Data Economy</strong> – Develop courses explaining the value of
                          data and the functioning of the digital data economy, emphasizing career and business
                          opportunities in this sector.
                        </li>
                      </ul>
                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-6">
                        <strong>Support:</strong> Dr. Mpala offered assistance in curriculum development and
                        implementation.
                      </p>

                      <div className="bg-warm-gold/10 p-4 rounded-lg">
                        <h4 className="font-playfair text-lg font-bold text-river-blue mb-3">Summary</h4>
                        <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed">
                          The session highlighted the critical need for digital inclusion, business enablement, and data
                          literacy among youth. Key measures include creating fully digital business registration
                          platforms, facilitating access to regional trade licenses, and incorporating data security and
                          economy education into formal learning systems. These initiatives will empower youth to
                          participate effectively in the regional and global digital economy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enterprises of the Nile Section */}
            <div className="text-center mb-12">
              <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed">
                Enterprises of the Nile: Private Sector & Entrepreneurship
              </p>
            </div>

            <Card className="overflow-hidden shadow-2xl bg-white border-warm-gold-20 mb-12" id="private-sector">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <img
                      src="/images/speakers/chris.jpeg"
                      alt="Christoph Schneider-Yattara"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-warm-gold-30"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="font-playfair text-xl md:text-2xl font-bold text-river-blue mb-2">
                        Christoph Schneider-Yattara
                      </h3>
                      <p className="font-merriweather text-sm md:text-base text-warm-gold font-medium">
                        Executive Director, Chamber of Businesses of African Descent
                        <br />
                        Chair, Private Sector & Entrepreneurship
                      </p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-6">
                        <strong>Theme:</strong> "Driving Prosperity: Growth, Innovation, Investment, and Cross-Border
                        Trade for a Unified Nile Basin"
                      </p>

                      <h4 className="font-playfair text-lg font-bold text-river-blue mb-3">Session Objectives</h4>
                      <ul className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-6 list-disc list-inside space-y-1">
                        <li>Showcase entrepreneurial success stories from the Nile Basin</li>
                        <li>Explore opportunities and challenges for cross-border enterprise</li>
                        <li>Strengthen linkages between local entrepreneurs and regional networks</li>
                        <li>
                          Lay the foundation for sustained collaboration through the Chamber of Businesses of African
                          Descent
                        </li>
                        <li>
                          Formulate a private sector message for the GERD inauguration, highlighting economic
                          opportunities
                        </li>
                      </ul>

                      <h4 className="font-playfair text-lg font-bold text-river-blue mb-3">Outcomes</h4>
                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-4">
                        The group was small but had a great conversation and excellent deliberations. We shared our
                        entrepreneurial journey and exchanged our visions for closer collaboration as Nile Basin
                        entrepreneurs.
                      </p>
                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-4">
                        We concluded the following:
                      </p>
                      <ul className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-6 list-disc list-inside space-y-1">
                        <li>We will develop a joint project where we all will contribute, based on our expertise</li>
                        <li>We will seek ways to establish a digital platform for sharing of business information</li>
                        <li>
                          We seek the collaboration with the academic track for enhancing business research and data
                        </li>
                        <li>We seek to establish a formal network to enter into concrete collaboration</li>
                        <li>
                          We aim at developing a network of African diasporas and stringent diaspora institutions and
                          African regional institutions
                        </li>
                        <li>
                          Trust is fundamental for successful business undertakings and we want to develop a network
                          based on trust
                        </li>
                        <li>
                          We advocate for the ratification of the AfCFTA agreement so that the free flow of people and
                          goods will boost trade and development in Africa
                        </li>
                      </ul>


                      <div className="bg-warm-gold/10 p-4 rounded-lg mb-6">
                        <h4 className="font-playfair text-lg font-bold text-river-blue mb-3">
                          Adopted: Nile Basin Charter
                        </h4>
                        <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-4">
                          →Lay the foundation for sustained collaboration through the Chamber of Businesses of African Descent and other networks.
                        </p>
                      </div>

                      <div className="bg-warm-gold/10 p-4 rounded-lg mb-6">
                        <h4 className="font-playfair text-lg font-bold text-river-blue mb-3">
                          Nile Basin Business Charter
                        </h4>
                        <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-4">
                          <strong>Preamble:</strong> We, the entrepreneurs and business leaders of the Nile Basin
                          declare our collective commitment to economic unity and affirm that the Nile is our shared
                          lifeline and a source of prosperity. We pledge to transform it into a river of peace,
                          opportunity, and cooperation.
                        </p>
                        <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-4">
                          <strong>Principles:</strong>
                        </p>
                        <ul className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-4 list-disc list-inside space-y-1">
                          <li>Peaceful coexistence as the foundation of growth</li>
                          <li>Sustainable and inclusive development</li>
                          <li>Innovation, trade, and investment across borders</li>
                          <li>Equal opportunities for women, youth, and diaspora</li>
                          <li>Stewardship of the environment and shared resources</li>
                        </ul>
                        <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-4">
                          <strong>Commitments:</strong>
                        </p>
                        <ul className="font-lora text-base md:text-lg text-charcoal leading-relaxed mb-4 list-disc list-inside space-y-1">
                          <li>Build regional value chains in agriculture, manufacturing, and services</li>
                          <li>Facilitate cross-border trade and integration</li>
                          <li>Create decent jobs and inclusive opportunities</li>
                          <li>
                            Partner with governments, financiers, institutions, and civil society for sustained
                            prosperity
                          </li>
                        </ul>
                      </div>

                      <div className="bg-river-blue/10 p-4 rounded-lg">
                        <h4 className="font-playfair text-lg font-bold text-river-blue mb-3">
                          GERD Private Sector Message
                        </h4>
                        <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed italic">
                          "We, the entrepreneurs and business leaders of the Nile Basin, recognize the immense economic
                          potential that flows from cooperation. We pledge to build bridges through commerce and to
                          invest in our shared future, by fostering peaceful coexistence, sustainable growth, and
                          prosperity for every community along the Nile River."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Details Section - Better Spacing */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-off-white to-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-6 leading-tight">
                Children of the Nile – A Shared Present & Future
              </h2>
              <div className="inline-flex items-center space-x-3 bg-deep-orange text-rich-white px-5 py-2.5 rounded-full font-bold text-sm md:text-base mb-8">
                <Calendar className="h-4 w-4" />
                <span>6–7 September 2025</span>
                <span>|</span>
                <MapPin className="h-4 w-4" />
                <span>Online</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center mb-12 md:mb-16">
              <div>
                <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium mb-6">
                  A landmark hybrid summit bringing together artists, academics, entrepreneurs, and civil society from
                  all 11 Nile Basin nations. Over two inspiring days, we celebrate shared heritage, explore sustainable
                  futures, and launch lasting collaborations.
                </p>

                <h3 className="font-playfair text-xl md:text-2xl font-bold text-river-blue mb-4">Why This Matters</h3>
                <p className="font-merriweather text-sm md:text-base text-charcoal leading-relaxed mb-4">
                  The Nile connects over 500 million people across 11 nations — yet divisions have long kept us apart.
                  This summit is a turning point:
                </p>
                <ul className="font-merriweather text-sm md:text-base text-charcoal space-y-2 mb-6">
                  <li>• Celebrating Pan-African unity through culture and shared memory</li>
                  <li>• Empowering young innovators in water, energy, and climate solutions</li>
                  <li>
                    • Creating a space for dialogue between elders, youth, artists, scientists, entrepreneurs, and
                    activists
                  </li>
                </ul>

                <div className="bg-warm-gold-10 border-l-4 border-warm-gold p-4 rounded-lg">
                  <p className="font-merriweather text-sm md:text-base font-medium text-river-blue">
                    🌟 Registration is now open! Join us online. Researchers, artists, entrepreneurs, activists, and
                    youth — all are welcome.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/dance.webp"
                    alt="Traditional African dance celebration"
                    width={600}
                    height={400}
                    className="w-full h-56 md:h-64 object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/dialogue.webp"
                    alt="Community dialogue by the river"
                    width={600}
                    height={400}
                    className="w-full h-56 md:h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="default"
                  className="bg-deep-orange hover:bg-deep-orange-dark text-rich-white font-bold px-6 py-2.5 text-base rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-merriweather"
                >
                  Register Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Overview Section - Better Spacing */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-sand to-off-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-6">
                Event Overview
              </h2>
              <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium max-w-4xl mx-auto">
                Join us online for the Children of the Nile – A Shared Present & Future summit on 6–7 September 2025.
                This hybrid event brings together artists, scholars, entrepreneurs, and policymakers from all Nile Basin
                countries to:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Cultural Heritage */}
              <Card className="overflow-hidden shadow-2xl bg-white border-warm-gold-20">
                <img
                  src="/images/festival.webp"
                  alt="Cultural festival celebration with traditional music and dance"
                  width={800}
                  height={450}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <CardContent className="p-4 md:p-5 space-y-3">
                  <p className="font-lora text-sm md:text-base text-charcoal leading-relaxed">
                    <strong className="text-river-blue">Cultural Heritage:</strong> Celebrate the river's rich cultural
                    and intellectual heritage through vibrant performances, insightful exhibitions, and engaging
                    dialogues that honor our shared past.
                  </p>
                </CardContent>
              </Card>

              {/* Collaborative Solutions */}
              <Card className="overflow-hidden shadow-2xl bg-white border-warm-gold-20">
                <img
                  src="/images/forum.webp"
                  alt="Academic forum discussion with diverse participants"
                  width={800}
                  height={450}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <CardContent className="p-4 md:p-5 space-y-3">
                  <p className="font-lora text-sm md:text-base text-charcoal leading-relaxed">
                    <strong className="text-river-blue">Collaborative Solutions:</strong> Explore innovative and
                    collaborative solutions to shared regional challenges, focusing on sustainable water management,
                    renewable energy, and climate resilience for a prosperous future.
                  </p>
                </CardContent>
              </Card>

              {/* Cross-Border Cooperation */}
              <Card className="overflow-hidden shadow-2xl bg-white border-warm-gold-20">
                <img
                  src="/images/discussion.webp"
                  alt="Community discussion meeting with women leaders"
                  width={800}
                  height={450}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <CardContent className="p-4 md:p-5 space-y-3">
                  <p className="font-lora text-sm md:text-base text-charcoal leading-relaxed">
                    <strong className="text-river-blue">Cross-Border Cooperation:</strong> Foster stronger cross-border
                    cooperation through dynamic live forums, showcases of groundbreaking innovations, and joint
                    declarations aimed at building lasting partnerships.
                  </p>
                </CardContent>
              </Card>

              {/* United Nations */}
              <Card className="overflow-hidden shadow-2xl bg-white border-warm-gold-20">
                <img
                  src="/images/unity.webp"
                  alt="Unity celebration by the Nile river with people from all nations"
                  width={800}
                  height={450}
                  className="w-full h-40 md:h-48 object-cover"
                />
                <CardContent className="p-4 md:p-5 space-y-3">
                  <p className="font-lora text-sm md:text-base text-charcoal leading-relaxed">
                    <strong className="text-river-blue">United Nations:</strong> Participate in a unique and historic
                    gathering that truly unites all 11 Nile Basin nations, fostering a sense of shared identity and
                    collective responsibility as one family.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12 md:mt-16">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                {/* Program Button */}
                <Link href="/summit/program">
                  <Button
                    size="lg"
                    className="bg-warm-gold hover:bg-warm-gold-dark text-rich-white font-bold px-8 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-merriweather"
                  >
                    View Program
                  </Button>
                </Link>
                <Link href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-deep-orange hover:bg-deep-orange-dark text-rich-white font-bold px-8 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-merriweather flex items-center justify-center"
                  >
                    Join the Summit
                    <Globe className="h-5 w-5 ml-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
