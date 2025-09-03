"use client"

import MainNav from "@/components/main-nav"
import { Calendar, Globe, ArrowLeft, Clock, Target } from "lucide-react"
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
                <span className="font-bold text-river-blue text-sm">Saturday, 6 September 2025</span>
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
                    src="/images/speakers/Felix.jpeg"
                    alt="Felix Matschie"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">Chair</h3>
                    <p className="text-sm text-charcoal">
                      • <strong>Felix Matschie</strong> (Ethiopia/Germany)
                    </p>
                    <p className="text-sm text-charcoal">Strategic Lead, Ecopia Group; <br /> Co-Founder, Children of the Nile Initiative</p>

                  </div>
                </div>

                {/* Co-Chair Section */}
                <div className="flex items-center space-x-4">
                  <img
                    src="/images/speakers/Samuel.jpeg"
                    alt="Samuel Bahiru"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-river-blue mb-2">Co-Chair</h3>
                    <p className="text-sm text-charcoal">
                      • <strong>Samuel Bahiru </strong>(Ethiopia)
                    </p>
                    <p className="text-sm text-charcoal">Chief Technology Officer & Co-Founder, Ticker Tape Technologies</p>
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
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">45 mins | 14:00 - 14:45 EAT</span>
              </div>
              <div className="grid md:grid-cols-[3fr_1fr] gap-6">
                {/* Left Content */}
                <div className="space-y-6">
                  {/* Welcome */}
                  <div className="flex items-start space-x-4">
                    <img
                      src="/images/speakers/Felix.jpeg"
                      alt="Felix Matschie"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-charcoal">Welcome, Official Opening & Introduction to the Working Group <span className="text-sm text-gray-500">(10 mins)</span></p>
                      <p className="text-sm text-charcoal">
                        <strong>Felix Matschie</strong> (Ethiopia/Germany), Strategic Lead, Ecopia Group.  <br /><br />
                        <em>A co-founder of the initiative, Felix will open the session and frame the critical role of youth and technology in building a shared future for the Nile.</em>
                      </p>
                    </div>
                  </div>

                  {/* Statement of Purpose */}
                  <div className="flex items-start space-x-4">
                    <img
                      src="/images/speakers/Samuel.jpeg"
                      alt="Samuel Bahiru"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-charcoal">Statement of Purpose & Session Objectives <span className="text-sm text-gray-500">(5 mins)</span></p>
                      <p className="text-sm text-charcoal">
                        <strong>Samuel Bahiru</strong> (Ethiopia), CTO & Co-Founder, Ticker Tape Technologies. <br /><br />
                        <em>A visionary technologist and entrepreneur, Samuel will outline the session's goals for fostering cross-border collaboration and innovation among the Nile Basin's youth.</em>
                      </p>
                    </div>
                  </div>

                  {/* Keynote 1 */}
                  <div className="flex items-start space-x-4">
                    <img
                      src="/images/speakers/Anele.jpg"
                      alt="Anele Simon"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-charcoal">Keynote 1: Digital Skills for Africa's Next Generation <span className="text-sm text-gray-500">(15 mins)</span></p>
                      <p className="text-sm text-charcoal">
                        <strong>Anele Simon</strong> (South Africa), Acting Secretary General, ICOYACA. <br /><br />
                        <em>A leading advocate for youth and digital empowerment, Anele will discuss strategies for equipping young people with the skills needed to thrive in the digital economy and become drivers of sustainable development.</em>
                      </p>
                    </div>
                  </div>

                  {/* Keynote 2 */}
                  <div className="flex items-start space-x-4">
                    <img
                      src="/images/speakers/Felix.jpeg"
                      alt="Felix Abraham Matschie"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-charcoal">Keynote 2: How Technology-driven Commerce Creates Cross-Border Ecosystems <span className="text-sm text-gray-500">(7.5&nbsp;mins)</span></p>
                      <p className="text-sm text-charcoal">
                        <strong>Felix Abraham Matschie</strong> (Ethiopia/Germany) <br /><br />
                        <em>
                          How we, the youth of the Nile countries, can leverage technology to induce greater cross-border economic integration by creating digital ecosystems.
                        </em>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Content: Existing Image */}
                <div className="flex items-center justify-center">
                  <img
                    src="/images/tech.webp"
                    alt="Digital Technology Innovation"
                    className="w-full max-w-sm h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
            {/* Part 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">
                  Part 2: Lightning Talks – Youth Innovations from the Basin
                </h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">60 mins | 15:00 - 16:00 EAT</span>
              </div>
              <p className="text-sm text-charcoal font-lora mb-4">Moderated by Felix Matschie</p>

              <div className="bg-warm-gold/10 p-4 rounded-lg mb-6">
                <p className="text-sm text-charcoal font-lora font-bold">
                  Showcasing Ideas for a Digital Future <span className="text-gray-500">(5-10 mins each)</span>:
                </p>
              </div>
              {/* Content and Images */}
              <div className="grid md:grid-cols-[3fr_1fr] gap-6">
                {/* Left Content */}
                <div className="space-y-6">





                  <div className="border-l-4 border-warm-gold pl-4">
                    <h4 className="font-bold text-charcoal mb-2">
                      Tanzania: "A Nile Basin Digital Museum & Content Strategy"
                    </h4>
                    <div className="flex items-start space-x-4">
                      <img
                        src="/images/speakers/mika.jpeg"
                        alt="Mika Chavala"
                        className="w-20 h-20 rounded-full object-cover"
                      />

                      <p className="text-sm text-charcoal">
                        <strong>Mika Chavala</strong>, Founder, Swahili Nation One Africa Foundation <br /><br />
                        <em>
                          A goal-driven and strategic leader with an outstanding record of managing multiple teams. Founder of Swahili Nation - One Africa. He created a YouTube channel (<a href="https://www.youtube.com/@SWAHILINATION" target="_blank" rel="noopener noreferrer" className="text-river-blue hover:underline">Swahili Nation</a>)  that now has more than 231K subscribers. His platform is intended to defend the image and heritage of Africa and share knowledge to create a bridge for unity and a peaceful Africa.
                        </em>
                      </p>
                    </div>
                  </div>

                  {/* International */}
                  <div className="border-l-4 border-warm-gold pl-4">
                    <h4 className="font-bold text-charcoal mb-2">
                      Uganda: “Health Card, how closing data gaps in healthcare enables coverage for all”
                    </h4>
                    <p className="text-sm text-charcoal">
                      <strong>Fred Mpala</strong>, Health Card. <br /><br />
                      <em>
                        A social entrepreneur focused on health-tech solutions, Fred will explore how digital tools can revolutionize
                        healthcare access and create new opportunities for youth engagement and employment in the sector.
                      </em>
                    </p>
                  </div>
                  {/* Sudan */}
                  <div className="border-l-4 border-deep-orange pl-4">
                    <h4 className="font-bold text-charcoal mb-2">Sudan: "Mobile Solutions for Youth Employment"</h4>
                    <p className="text-sm text-charcoal">
                      <strong>Mohamed "Mo" Ibrahim</strong>, Founder, MoTech Sudan.
                      <br /><br />
                      <em>A pioneer in leveraging mobile technology to tackle unemployment, Mohamed will share insights on creating practical tech solutions that address local challenges and create economic opportunities for young people.</em>
                    </p>
                  </div>

                  {/* South Sudan */}
                  <div className="border-l-4 border-river-blue pl-4">
                    <h4 className="font-bold text-charcoal mb-2">South Sudan: "Tech for Peace & Social Change"</h4>
                    <p className="text-sm text-charcoal">
                      <strong>Mary Boyoi</strong>, Youth Peace Advocate & Media Entrepreneur.
                      <br /><br />
                      <em>A passionate voice for her generation, Mary will discuss the powerful intersection of technology, media, and peacebuilding, showcasing how digital platforms can be used to foster social cohesion and drive positive change.</em>
                    </p>
                  </div>

                  <div className="border-l-4 border-warm-gold pl-4">
                    <h4 className="font-bold text-charcoal mb-2">South Sudan: "Digital Media & Storytelling for Youth Voices"</h4>
                    <p className="text-sm text-charcoal">
                      <strong>Siapi</strong>, Journalist.
                      <br /><br />
                      <em>A dedicated journalist, Siapi will highlight the importance of digital storytelling and media literacy in amplifying the voices of Nile Basin youth and shaping a narrative of unity and shared destiny.</em>
                    </p>
                  </div>

                  {/* Ethiopia */}
                  <div className="border-l-4 border-deep-orange pl-4">
                    <h4 className="font-bold text-charcoal mb-2">Ethiopia: "Youth Entrepreneurship in the Digital Age"</h4>
                    <div className="flex items-start space-x-4">
                      <img
                        src="/images/speakers/Samiya.png"
                        alt="Samiya Abdulkadir Godu"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <p className="text-sm text-charcoal">
                        <strong>Samiya Abdulkadir Godu</strong>, Youth Entrepreneur.
                        <br /><br />
                        <em>A dynamic young founder, Samiya will share her journey and perspectives on the challenges and opportunities for launching and scaling tech-driven ventures in the region.</em>
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-river-blue pl-4">
                    <h4 className="font-bold text-charcoal mb-2">Ethiopia: "Fintech as a Catalyst for Youth Inclusion"</h4>
                    <div className="flex items-start space-x-4">
                      <img
                        src="/images/speakers/Elfagid.png"
                        alt="Elfagid Woldegiorgis"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <p className="text-sm text-charcoal">
                        <strong>Elfagid Woldegiorgis</strong>, MasterCard.
                        <br /><br />
                        <em>An expert in financial technology, Elfagid will explore how fintech innovations are breaking down barriers to financial access and empowering a new generation of young entrepreneurs and consumers across the Nile Basin.</em>
                      </p>
                    </div>
                  </div>

                  {/* Kenya/Ethiopia */}
                  <div className="border-l-4 border-warm-gold pl-4">
                    <h4 className="font-bold text-charcoal mb-2">Kenya/Ethiopia: "Fusing Telecommunications with Financial Technology Enabling Cross-Border Action"</h4>
                    <div className="flex items-start space-x-4">
                      <img
                        src="/images/speakers/wim.jpeg"
                        alt="Wim Vanhelleputte"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <p className="text-sm text-charcoal">
                        <strong>Wim Vanhelleputte</strong> (CEO, Safaricom Ethiopia) (TBC).
                        <br /><br />
                        <em>Sharing experiences from the field on how Telco and Fintech services can enhance local communities and lead to more cohesive regional collaboration.</em>
                      </p>
                    </div>
                  </div>

                  {/* Additional Talks */}
                  <div className="border-l-4 border-deep-orange pl-4">
                    <h4 className="font-bold text-charcoal mb-2">Additional lightning talks from pre-registered youth innovators from Egypt, Kenya, Tanzania, and Rwanda.</h4>
                  </div>

                  {/* Open Floor */}
                  <div className="border-l-4 border-river-blue pl-4">
                    <h4 className="font-bold text-charcoal mb-2">Open Floor & Moderated Q&A (15 mins)</h4>
                  </div>
                </div>

                {/* Right Images */}
                <div className="space-y-4 flex-1">
                  <img
                    src="/images/pitch.webp"
                    alt="Woman entrepreneur presenting"
                    className="w-full max-w-md h-auto rounded-lg shadow-md object-cover"
                  />
                  <img
                    src="/images/stem.webp"
                    alt="Young women collaborating on technology projects"
                    className="w-full max-w-md h-auto rounded-lg shadow-md object-cover"
                  />
                  <img
                    src="/images/engineer.webp"
                    alt="Woman engineer working on technology"
                    className="w-full max-w-md h-auto rounded-lg shadow-md object-cover"
                  />

                </div>
              </div>
            </div>
            {/* Part 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">
                  Part 3: Breakout Groups – Designing Digital Futures
                </h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">45 mins | 16:00 - 16:45 EAT</span>
              </div>

              <p className="text-sm text-charcoal mb-6">
                Participants will divide into three parallel breakout rooms to draft concrete action plans.
              </p>

              <div className="space-y-6">
                {/* Breakout Group 1 */}
                <div className="bg-gradient-to-br from-deep-orange/10 to-deep-orange/5 border-l-4 border-deep-orange rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-deep-orange mb-2">Group 1: How to Leverage Technology to Improve Your Communities</h4>
                  <p className="text-sm text-charcoal">
                    <strong>Facilitator:</strong> Fred Mpala (Chief of Technology at Healthcard) & Felix Matschie, with experience in LiveScience, Healthcare, and Financial Services at various Fortune 500 companies.  <br /><br />
                    <em>This group will focus on highlighting methods and actions youth groups can take to leverage technology to enhance their local communities and have tangible and direct impact.</em>
                  </p>
                </div>

                {/* Breakout Group 2 */}
                <div className="bg-gradient-to-br from-river-blue/10 to-river-blue/5 border-l-4 border-river-blue rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-river-blue mb-2">Breakout Group 2: Youth Tech Startup Network – Cross-Country Entrepreneurship</h4>
                  <p className="text-sm text-charcoal">
                    <strong>Facilitator:</strong> Samuel Bahiru (Ethiopia), CTO & Co-Founder, Ticker Tape Technologies. <br /><br />
                    <em>Samuel will leverage his experience building a cutting-edge AI and data visualization company to facilitate the design of a network that supports, funds, and connects youth-led startups across borders.</em>
                  </p>
                </div>

                {/* Breakout Group 3 */}
                <div className="bg-gradient-to-br from-warm-gold/10 to-warm-gold/5 border-l-4 border-warm-gold rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-warm-gold mb-2">Breakout Group 3: Digital Storytelling – #ChildrenOfTheNile Campaign</h4>
                  <p className="text-sm text-charcoal">
                    <strong>Facilitator:</strong> Siapi (South Sudan), Journalist.  <br /><br />
                    <em>Siapi will lead the creation of a compelling digital campaign to share stories of innovation and collaboration, harnessing the power of narrative to unite the youth of the Nile.</em>
                  </p>
                </div>
              </div>
            </div>


            {/* Part 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-playfair text-xl font-bold text-river-blue">
                  Part 4: Reporting Back & Adoption
                </h3>
                <span className="text-sm text-charcoal bg-warm-gold/20 px-3 py-1 rounded-full">20 minutes</span>
              </div>

              <p className="text-sm text-charcoal mb-6">Moderated by Chair, Felix Matschie</p>

              <div className="space-y-4">
                {/* Rapporteurs Present Key Outcomes */}
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-river-blue rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-charcoal">
                    Rapporteurs present key outcomes and action points from each group. <strong>(5 mins)</strong>
                  </p>
                </div>

                {/* Strategic Reflections & Discussion */}
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-river-blue rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-charcoal">
                    Strategic Reflections & Discussion <strong>(10 mins)</strong>
                  </p>
                </div>
                <div className="pl-6">

                  <p className="text-sm text-charcoal">• <strong>Wim Vanhelleputte</strong> (Safaricom Ethiopia) (TBC)</p>
                </div>

                {/* Adoption of the Action Plan */}
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-river-blue rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-sm text-charcoal">
                    Adoption of the 2025–2026 Youth Tech Action Plan. <strong>(5 mins)</strong>
                  </p>
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
                {/* Adoption of the GERD Inauguration Message */}
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-river-blue rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <p className="font-bold text-charcoal">Adoption of the GERD Inauguration Message <strong>(5 mins)</strong></p>
                    <div className="bg-warm-gold/10 p-4 rounded-lg mt-2">
                      <p className="text-lg text-charcoal italic">
                        "We, the youth of the Nile Basin, pledge to harness digital tools and technology to build peace,
                        innovation, and sustainable prosperity across all our nations."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Closing Remarks & Call to Action */}
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-river-blue rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <p className="font-bold text-charcoal">Closing Remarks & Call to Action <strong>(10 mins)</strong></p>
                    <p className="text-sm text-charcoal">
                      <strong>Felix Matschie</strong>, Chair (Ethiopia/Germany)
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
