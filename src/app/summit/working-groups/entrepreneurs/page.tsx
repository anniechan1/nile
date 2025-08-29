export default function EntrepreneursWorkingGroupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Entrepreneurship, AI Technologies & Cybersecurity
          </h1>
          <p className="text-xl text-blue-100 mb-6 text-pretty">
            Harnessing Intelligent Rivers: Ethical AI, Security, and Responsible Innovation for the Nile Basin
          </p>
          <div className="flex flex-wrap gap-6 text-blue-200">

          </div>
        </div>
      </div>

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

        {/* Part 1: Session Objectives */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Session Objectives</h2>



          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Establish a Nile Basin AI & Digital Innovation Consortium for collaboration on shared challenges.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Draft a Charter for the Ethical Use of AI and Data, tailored to the Basin's peace and development
                  priorities.
                </span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Identify key cybersecurity threats to transboundary water & energy systems and propose joint
                  resilience measures.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Formulate a forward-looking technology message for the GERD inauguration.
                </span>
              </li>
            </ul>
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
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Part 1: Framing the Session (30 minutes)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • <strong>Welcome & Opening Remarks:</strong> The Dual-Use Nature of Technology – Dr. Mitslal
                      Kifleyesus-Matschie (Ethiopia/Germany)
                    </li>
                    <li>
                      • <strong>Keynote Address:</strong> Foresight for a Cyber-Resilient Nile – Prof. Geci Karuri-Sebina
                      (South Africa)
                    </li>
                    <li>
                      • <strong>Ethical Imperative:</strong> Ubuntu in the Algorithm – Prof. John Kalu Osiri (Kenya/USA)
                    </li>
                  </ul>
                </div>

                {/* Right Image */}
                <div className="flex-shrink-0 w-full md:w-1/3 mt-6 md:mt-0">
                  <img
                    src="/images/Ubuntu.webp"
                    alt="Ubuntu 25.04 Plucky Puffin Desktop"
                    className="w-full h-auto rounded-lg shadow-md"
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
                <div className="flex-shrink-0 w-full md:w-1/3 mt-6 md:mt-0">
                  <img
                    src="/images/fraud.webp"
                    alt="Fraud Prevention"
                    className="w-full h-auto max-h-[300px] object-contain rounded-lg shadow-md"
                  />
                </div>

                {/* Right Content */}
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Part 2: Lightning Talks – Frontiers & Ethics of Technology (60 minutes)
                  </h3>
                  <p className="text-gray-600 mb-3">
                    <strong>Moderator:</strong> Dr. Jennifer Batamuliza (Rwanda)
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Dr. Jennifer Batamuliza (Rwanda): Data Sovereignty & Green STEM Ecosystems</li>
                    <li>• Invited Cybersecurity Expert: Securing the Lifeline – Protecting Transboundary Systems</li>
                    <li>
                      • Dr. Mitslal Kifleyesus-Matschie (Ethiopia/Germany): Dual-Use Tech Ethics for Peaceful Development
                    </li>
                    <li>
                      • Representative, TikerTape Technology (Ethiopia/Germany): Youth-Led Innovation for Basin Challenges
                    </li>
                    <li>• Mr. Ayodeji Oyenuga (South Sudan/Nigeria): Equity & Access in the Digital Age</li>
                    <li>• (25 mins) Open Floor & Moderated Q&A</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Part 3 */}
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Part 3: Breakout Groups – From Principles to Action (45 minutes)
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Drafting the Ethical AI & Data Charter</h4>
                  <p className="text-sm text-gray-600">Lead: Dr. Mitslal Kifleyesus-Matschie</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Cybersecurity Resilience & Peacebuilding</h4>
                  <p className="text-sm text-gray-600">Lead: Cybersecurity Expert Biserate</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Fostering Innovation & Talent</h4>
                  <p className="text-sm text-gray-600">Lead: Dr. Jennifer Batamuliza & Ticker Tape Rep</p>
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
                    <li>• Rapporteurs present 3 action points per group</li>
                    <li>• Consolidation of AI Ethics Charter & Cybersecurity Priorities</li>
                    <li>• Formal adoption of Nile Basin AI & Digital Innovation Consortium</li>
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
                    <li>• Adoption of the GERD Technology Message</li>
                  </ul>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-bold text-blue-900 mb-3">GERD Technology Message:</h4>
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



        {/* Expected Deliverables */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">Expected Deliverables</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                <span>Ratified Charter for Ethical Use of AI & Data in the Nile Basin</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                <span>Drafted Action Plan for Cybersecurity Cooperation & Peacebuilding</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                <span>Proposal for Nile Basin AI & Digital Innovation Consortium</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                <span>Finalized GERD Inauguration Technology Message</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
