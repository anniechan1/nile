import MainNav from "@/components/main-nav"
import { Calendar, Globe, ArrowLeft, Clock, Target } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"

export default function EntrepreneursWorkingGroupPage() {
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
              Digital Guardians of the Nile, AI Technologies & Cybersecurity Working Group
            </h1>
            <p className="font-playfair text-lg md:text-xl text-deep-orange font-medium italic mb-6">
              "Harnessing Intelligent Rivers: Ethical AI, Security, and Responsible Innovation for the Nile Basin"
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
          </div>
        </div>
      </section>


      {/* Leadership */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/images/speakers/mkm.webp"
                alt="Dr. Mitslal Kifleyesus-Matschie"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Chair</h3>
                <p className="text-blue-600 font-semibold">Dr. Mitslal Kifleyesus-Matschie</p>
                <p className="text-gray-600 text-sm">(Ethiopia/Germany)</p>
              </div>
            </div>
            <p className="text-gray-700">Expert in Dual-Use Technologies & AI Ethics</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/images/speakers/Dr_Jenn.jpeg"
                alt="Dr. Jennifer Batamuliza"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Co-Chair</h3>
                <p className="text-blue-600 font-semibold">Dr. Jennifer Batamuliza</p>
                <p className="text-gray-600 text-sm">(Rwanda)</p>
              </div>
            </div>
            <p className="text-gray-700">Specialist in Data Sovereignty & STEM Education</p>
          </div>
        </div>



        {/* Part 2: Agenda */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Agenda</h2>



          <div className="space-y-8">
            {/* Part 1 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                {/* Left Content */}
                <div className="space-y-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Part 1: Framing the Session (30 minutes)</h3>
                  <ul className="space-y-6 text-gray-700">
                    <li>
                      <p className="font-bold">Welcome & Opening Remarks: The Dual-Use Nature of Technology</p>
                      <div className="flex items-center gap-4 mt-2">
                        <img
                          src="/images/speakers/mkm.webp"
                          alt="Dr. Mitslal Kifleyesus-Matschie"
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <p className="text-sm text-gray-600">Dr. Mitslal Kifleyesus-Matschie (Ethiopia/Germany)</p>
                      </div>
                    </li>
                    <li>
                      <p className="font-bold">Keynote Address: Foresight for a Cyber-Resilient Nile</p>
                      <div className="flex items-center gap-4 mt-2">
                        <img
                          src="/images/speakers/Prof_Geci.jpeg"
                          alt="Prof. Geci Karuri-Sebina"
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <p className="text-sm text-gray-600">Prof. Geci Karuri-Sebina (South Africa)</p>
                      </div>
                    </li>
                    <li>
                      <p className="font-bold">Strategic Vision: Investment and Innovation for Africa's Digital Future</p>
                      <div className="flex items-center gap-4 mt-2">
                        <img
                          src="/images/speakers/Babacar.png"
                          alt="Mr. Babacar Seck"
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <p className="text-sm text-gray-600">Mr. Babacar Seck (Kenya), Technology Investment Leader, Former CEO of Digital Africa</p>
                      </div>
                    </li>
                    <li>
                      <p className="font-bold">Ethical Imperative: Ubuntu in the Algorithm</p>
                      <div className="flex items-center gap-4 mt-2">
                        <img
                          src="/images/speakers/Prof_John.jpeg"
                          alt="Prof. John Kalu Osiri"
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <p className="text-sm text-gray-600">Prof. John Kalu Osiri (Kenya/USA)</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Right Image */}
                <div className="flex-shrink-0 w-full md:w-1/3 mt-6 md:mt-0">
                  {/* Fraud Image */}
                  <img
                    src="/images/fraud.webp"
                    alt="Fraud Detection"
                    className="w-full h-auto rounded-lg shadow-md mb-4"
                  />
                  {/* Ubuntu Image */}
                  <img
                    src="/images/Ubuntu.webp"
                    alt="Ubuntu 25.04 Plucky Puffin Desktop"
                    className="w-full h-auto rounded-lg shadow-md mt-40"
                  />
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Ubuntu 25.04 Plucky Puffin
                    <br />
                    Canonical Ltd., GPL &lt;
                    <a href="http://www.gnu.org/licenses/gpl.html" className="text-blue-600 hover:underline">
                      http://www.gnu.org/licenses/gpl.html
                    </a>
                    &gt;, via Wikimedia Commons
                  </p>
                </div>
              </div>
            </div>

            {/* Part 2 */}
            <div className="border-l-4 border-green-600 pl-6">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                {/* Left Image */}


                {/* Right Content */}
                <div className="space-y-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Part 2: Lightning Talks – Frontiers & Ethics of Technology (60 minutes)
                  </h3>
                  <p className="text-gray-600 mb-3">
                    <strong>Moderator:</strong> Dr. Jennifer Batamuliza (Rwanda)
                  </p>
                  <ul className="space-y-6 text-gray-700">
                    {/* Dr. Jennifer Batamuliza */}
                    <li>
                      <div className="flex items-center gap-4">
                        <img
                          src="/images/speakers/Dr_Jenn.jpeg"
                          alt="Dr. Jennifer Batamuliza"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <p className="font-bold text-gray-700">
                          Dr. Jennifer Batamuliza: Data Sovereignty & Green STEM Ecosystems
                        </p>
                      </div>
                    </li>

                    {/* Ms. Lebogang Mbana */}
                    <li>
                      <div className="flex items-start gap-4">
                        <img
                          src="/images/speakers/Lebogang_Mbana.jpeg"
                          alt="Ms. Lebogang Mbana"
                          className="w-40 h-auto rounded-lg object-cover shadow-md"
                        />
                        <div>
                          <p className="font-bold">Ms. Lebogang Mbana (South Africa): Ethical Frameworks for Transformative AI</p>
                          <p className="text-sm text-gray-600 italic mt-2">
                            Lebogang Mbana is a seasoned board director, C-suite advisor, and global thought leader whose work spans
                            energy, agribusiness, water diplomacy, and social transformation across Africa and the world. With over
                            15 years’ experience, she has advised governments, multilateral organisations, and Fortune 500 companies
                            on large-scale transformation and inclusive growth. She serves as Executive Director of African Women in
                            Energy & Power (AWEaP) and holds directorship roles in the South African Macadamia Growers Association
                            (SAMAC), Football for Peace, and African Renaissance Capital. An internationally recognised keynote
                            speaker, her insights have been featured on Forbes Women, SAFM, Kaya FM, and global forums.
                          </p>
                        </div>
                      </div>
                    </li>

                    {/* Mr. Bisrat Yirdaw */}
                    <li>
                      <div className="flex items-start gap-4">
                        <div>
                          <p className="font-bold">Mr. Bisrat Yirdaw (Ethiopia): Securing the Lifeline -- Protecting Transboundary Systems</p>
                          <p className="text-sm text-gray-600 italic mt-2">
                            Bisrat Yirdaw is a distinguished CISSP-certified cybersecurity professional with two decades of
                            international experience. He is a leading cybersecurity trainer and advocate in Ethiopia, having provided
                            strategic awareness and capacity-building for key national institutions including the National Bank of
                            Ethiopia, the Ministry of Trade, and the Ethiopian National ID Prime Minister Office. As Secretary of the
                            Ethiopian Information System Audit Association (EISAA), he is at the forefront of strengthening the
                            country's cybersecurity framework and digital transformation.
                          </p>
                        </div>
                        <img
                          src="/images/speakers/Bisrat_Yirdaw.jpeg"
                          alt="Mr. Bisrat Yirdaw"
                          className="w-48 h-auto rounded-lg object-cover shadow-md"
                        />
                      </div>
                    </li>

                    {/* Mr. Eugene Rwagasore */}
                    <li>
                      <div className="flex items-start gap-4">
                        <div>
                          <p className="font-bold">Mr. Eugene Rwagasore (Kenya): Entrepreneurial Innovation in AI for Basin Solutions</p>
                          <p className="text-sm text-gray-600 italic mt-2">
                            CTO and Co-founder at Pindo Inc.
                          </p>
                        </div>
                        <img
                          src="/images/speakers/eugene.jpeg"
                          alt="Mr. Eugene Rwagasore"
                          className="w-52 h-auto rounded-lg object-cover shadow-md"
                        />
                      </div>
                    </li>
                    {/* Dr. Mitslal Kifleyesus-Matschie */}
                    <li>
                      <div className="flex items-center gap-4">
                        <img
                          src="/images/speakers/mkm.webp"
                          alt="Dr. Mitslal Kifleyesus-Matschie"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <p className="font-bold text-gray-700">
                          Dr. Mitslal Kifleyesus-Matschie (Ethiopia/Germany): Dual-Use Tech Ethics for Peaceful Development
                        </p>
                      </div>
                    </li>
                    {/* Representative, TikerTape Technology */}
                    <li>
                      <p className="font-bold">Representative, Ticker Tape Technology (Ethiopia/Germany): Youth-Led Innovation for Basin Challenges</p>
                    </li>

                    {/* Mr. Ayodeji Oyenuga */}
                    <li>
                      <p className="font-bold">Mr. Ayodeji Oyenuga (South Sudan/Nigeria): Equity & Access in the Digital Age</p>
                    </li>
                  </ul>

                  {/* Open Floor & Q&A */}
                  <p className="text-gray-600 mt-6">
                    <strong>Open Floor & Moderated Q&A (25 minutes)</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Part 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Part 3: Breakout Groups – From Principles to Action (45 minutes)
              </h3>
              <div className="space-y-6">
                {/* Drafting the Ethical AI & Data Charter */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-bold text-blue-900 mb-4">Drafting the Ethical AI & Data Charter</h4>
                  <div className="flex items-center gap-4">
                    <img
                      src="/images/speakers/mkm.webp"
                      alt="Dr. Mitslal Kifleyesus-Matschie"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <p className="text-sm text-gray-700">Lead: Dr. Mitslal Kifleyesus-Matschie</p>
                  </div>
                </div>

                {/* Cybersecurity Resilience & Peacebuilding */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-bold text-green-900 mb-4">Cybersecurity Resilience & Peacebuilding</h4>
                  <div className="flex items-center gap-4">
                    <img
                      src="/images/speakers/Bisrat_Yirdaw.jpeg"
                      alt="Mr. Bisrat Yirdaw"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <p className="text-sm text-gray-700">
                      Lead: Mr. Bisrat Yirdaw, CISSP - Cybersecurity Expert & Trainer
                    </p>
                  </div>
                </div>

                {/* Fostering Innovation & Talent */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-bold text-purple-900 mb-4">Fostering Innovation & Talent</h4>
                  <div className="flex items-center gap-4">
                    <img
                      src="/images/speakers/Dr_Jenn.jpeg"
                      alt="Dr. Jennifer Batamuliza"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <img
                      src="/images/speakers/Samuel.jpeg"
                      alt="Ticker Tape Representative"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <p className="text-sm text-gray-700">
                      Lead: Dr. Jennifer Batamuliza & Ticker Tape Rep.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Part 4 */}
            <div className="border-l-4 border-orange-600 pl-6">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                {/* Left Content */}
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Part 4: Reporting Back & Adoption (30 minutes)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Rapporteurs present <span className="font-bold">3 action points per group</span>
                    </li>
                    <li>
                      • Consolidation of <span className="font-bold">AI Ethics Charter & Cybersecurity Priorities</span>
                    </li>
                    <li>
                      • Formal adoption of <span className="font-bold">Nile Basin AI & Digital Innovation Consortium</span>
                      (Including Mr. Yirdaw as a proposed founding member for cybersecurity)
                    </li>
                  </ul>
                </div>

                {/* Right Image */}
                <div className="flex-shrink-0 w-full md:w-1/3 mt-6 md:mt-0">
                  <img
                    src="/images/ai.webp"
                    alt="AI Technology"
                    className="w-full h-auto max-h-[300px] object-contain rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
            {/* Part 5 */}
            <div className="border-l-4 border-red-600 pl-6">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                {/* Left Content */}
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Part 5: Closing & Common Message (15 minutes)</h3>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Youth Reflection: Young innovator's vision of an ethical & secure future</li>
                    <li>• Closing Remarks: Dr. Jennifer Batamuliza</li>
                    <li>• Adoption of the GERD Technology Message: </li>
                  </ul>

                  <div className="bg-blue-50 p-6 rounded-lg">

                    <p className="text-blue-800 italic text-pretty">
                      "We, the technologists and guardians of the Nile's digital future, pledge to harness artificial
                      intelligence and cybersecurity as forces for unity, peace, and shared prosperity. We commit to ethical
                      technology that protects our people, secures our shared resources, and empowers every Child of the
                      Nile to thrive in a just and equitable digital age."
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex-shrink-0 w-full md:w-1/3 mt-6 md:mt-0">
                  <img
                    src="/images/vr.webp"
                    alt="VR Technology"
                    className="w-full h-auto max-h-[300px] object-contain rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>





      </div>
    </div>
  )
}
