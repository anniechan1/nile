import Image from "next/image"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function SpeakersDelegatesPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <MainNav />

      {/* Hero Section with Performers Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/presenting.webp"
            alt="Traditional African musicians performing at cultural celebration"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-rich-white px-4 max-w-5xl mx-auto">
          <div className="mb-6">
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight hero-text-shadow">
              Speakers & Delegates
            </h1>
            <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-light mb-6 text-rich-white tracking-wide hero-text-shadow">
              A Prestigious Pan-African Gathering
            </h2>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 md:py-20">
        {/* Introduction */}
        <section className="mb-16 md:mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium">
              The "Children of the Nile – A Shared Present & Future" hybrid summit will bring together leading voices
              from the Nile Basin and beyond to shape a collective vision for the river's future. Our participants
              include distinguished individuals from the realms of art, academia, civil society, enterprise, and
              policymaking.
            </p>
          </div>
        </section>

        {/* Distinguished Participation Section */}
        <section className="mb-16 md:mb-20">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-8 leading-tight">
              Distinguished Participation
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-8">
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-river-blue mb-6">Key Participants</h3>
              <ul className="space-y-4 font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium">
                <li>• His Excellency the President of Ethiopia - Official patron and opening ceremony host</li>
                <li>• Presidents of Leading Universities from all 11 Nile Basin nations</li>
                <li>• Vice Presidents and Ministers of Culture & Education</li>
                <li>• Ambassadors and Cultural Attachés</li>
                <li>• International Media representatives</li>
              </ul>
            </div>

            {/* Presidential Portrait */}
            <div className="lg:col-span-4 flex justify-start">
              <div className="text-center">
                <div className="relative w-48 h-48 mb-4">
                  <Image
                    src="/images/president.jpg"
                    alt="His Excellency the President of Ethiopia"
                    fill
                    className="object-cover rounded-full shadow-2xl"
                    unoptimized
                  />
                </div>
                <h4 className="font-playfair text-lg font-bold text-river-blue mb-2">
                  His Excellency the President of Ethiopia
                </h4>
                <p className="font-lora text-base text-charcoal">Official patron and opening ceremony host</p>
              </div>
            </div>
          </div>
        </section>


        {/* Academic Leadership Section */}
        <section className="mb-16 md:mb-20">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-8 leading-tight">
              Academic Leadership
            </h2>
            <p className="font-lora text-sm text-charcoal italic mb-8">
              Pending confirmation from university presidents across all Nile Basin nations:
            </p>
          </div>

          {/* Lead University Hosts */}
          <div className="mb-12">
            <h3 className="font-playfair text-xl md:text-2xl font-bold text-river-blue mb-6">Lead University Hosts</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
                <div className="flex items-center space-x-6 mb-4">
                  <div className="relative w-28 h-28 flex-shrink-0">
                    <Image
                      src="/images/jimma_uni.png"
                      alt="Jimma University logo"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-bold text-river-blue">Jimma University</h4>
                    <p className="font-lora text-charcoal">Summit academic coordinator</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 font-lora text-sm text-charcoal">
                  <p>
                    <strong className="text-river-blue">Will chair:</strong>
                  </p>
                  <ul className="ml-4 space-y-1">
                    <li>○ Rectors' Roundtable on joint degree programs</li>
                    <li>○ Nile Innovation Challenge judging panel</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
                <div className="flex items-center space-x-6 mb-4">
                  <div className="relative w-28 h-28 flex-shrink-0">
                    <Image src="/images/assosa.png" alt="Assosa University logo" fill className="object-contain" unoptimized />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-bold text-river-blue">Assosa University</h4>
                    <p className="font-lora text-charcoal">Co-host for transboundary research initiatives</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 font-lora text-sm text-charcoal">
                  <p>
                    <strong className="text-river-blue">Will lead:</strong>
                  </p>
                  <ul className="ml-4 space-y-1">
                    <li>○ Borderland Research Initiative (Sudan/Ethiopia collaborations)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Nile Basin University Network with Map Background */}
          <div className="mb-12">
            <h3 className="font-playfair text-xl md:text-2xl font-bold text-river-blue mb-6">
              Nile Basin University Network
            </h3>
            <div className="relative rounded-2xl shadow-2xl overflow-hidden">
              {/* Map Background */}
              <div className="absolute inset-0">
                <Image
                  src="/images/map.webp"
                  alt="Historical map of the Nile Basin"
                  fill
                  className="object-cover opacity-30"
                  unoptimized
                />
              </div>

              <div className="relative bg-white/90 backdrop-blur-sm p-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-warm-gold-30">
                        <th className="text-left p-4 font-bold text-river-blue font-playfair">Country</th>
                        <th className="text-left p-4 font-bold text-river-blue font-playfair">University</th>
                        <th className="text-left p-4 font-bold text-river-blue font-playfair">Specialization Focus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-warm-gold-20">
                        <td className="p-4 text-charcoal font-lora">Ethiopia</td>
                        <td className="p-4 text-charcoal font-lora">Addis Ababa University</td>
                        <td className="p-4 text-charcoal font-lora">Water Resource Management</td>
                      </tr>
                      <tr className="border-b border-warm-gold-20">
                        <td className="p-4 text-charcoal font-lora">Egypt</td>
                        <td className="p-4 text-charcoal font-lora">Cairo University</td>
                        <td className="p-4 text-charcoal font-lora">Archaeology & Nile History</td>
                      </tr>
                      <tr className="border-b border-warm-gold-20">
                        <td className="p-4 text-charcoal font-lora">Sudan</td>
                        <td className="p-4 text-charcoal font-lora">University of Khartoum</td>
                        <td className="p-4 text-charcoal font-lora">Desert Agriculture</td>
                      </tr>
                      <tr className="border-b border-warm-gold-20">
                        <td className="p-4 text-charcoal font-lora">South Sudan</td>
                        <td className="p-4 text-charcoal font-lora">University of Juba</td>
                        <td className="p-4 text-charcoal font-lora">Conflict Resolution Studies</td>
                      </tr>
                      <tr className="border-b border-warm-gold-20">
                        <td className="p-4 text-charcoal font-lora">Uganda</td>
                        <td className="p-4 text-charcoal font-lora">Makerere University</td>
                        <td className="p-4 text-charcoal font-lora">Ecological Conservation</td>
                      </tr>
                      <tr className="border-b border-warm-gold-20">
                        <td className="p-4 text-charcoal font-lora">Kenya</td>
                        <td className="p-4 text-charcoal font-lora">University of Nairobi</td>
                        <td className="p-4 text-charcoal font-lora">Renewable Energy</td>
                      </tr>
                      <tr className="border-b border-warm-gold-20">
                        <td className="p-4 text-charcoal font-lora">Tanzania</td>
                        <td className="p-4 text-charcoal font-lora">University of Dar es Salaam</td>
                        <td className="p-4 text-charcoal font-lora">Climate Change Adaptation</td>
                      </tr>
                      <tr className="border-b border-warm-gold-20">
                        <td className="p-4 text-charcoal font-lora">Rwanda</td>
                        <td className="p-4 text-charcoal font-lora">University of Rwanda</td>
                        <td className="p-4 text-charcoal font-lora">Environmental Policy</td>
                      </tr>
                      <tr className="border-b border-warm-gold-20">
                        <td className="p-4 text-charcoal font-lora">Burundi</td>
                        <td className="p-4 text-charcoal font-lora">University of Burundi</td>
                        <td className="p-4 text-charcoal font-lora">Sustainable Development</td>
                      </tr>
                      <tr className="border-b border-warm-gold-20">
                        <td className="p-4 text-charcoal font-lora">DR Congo</td>
                        <td className="p-4 text-charcoal font-lora">University of Kinshasa</td>
                        <td className="p-4 text-charcoal font-lora">Biodiversity Studies</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-charcoal font-lora">Eritrea</td>
                        <td className="p-4 text-charcoal font-lora">University of Asmara</td>
                        <td className="p-4 text-charcoal font-lora">Cultural Heritage Preservation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Participants Section */}
        <section className="mb-20">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-8 leading-tight">
              Participants
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Artists & Cultural Practitioners */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <h3 className="font-playfair text-lg font-bold text-river-blue mb-4">
                1. Artists & Cultural Practitioners
              </h3>
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/performer.webp"
                  alt="Traditional African dance celebration"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <p className="font-lora text-charcoal mb-4 italic">Breathing life into Nile heritage</p>
              <ul className="space-y-2 font-lora text-sm text-charcoal">
                <li>
                  • <strong>Visual Artists:</strong> Painters, sculptors, textile designers
                </li>
                <li>
                  • <strong>Musicians:</strong> Traditional instrumentalists, contemporary fusion bands
                </li>
                <li>
                  • <strong>Filmmakers:</strong> Documentarians of riverine communities
                </li>
                <li>
                  • <strong>Poets:</strong> Oral storytellers and spoken word performers
                </li>
              </ul>
            </div>

            {/* Academics & Researchers */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <h3 className="font-playfair text-lg font-bold text-river-blue mb-4">2. Academics & Researchers</h3>
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/scholar.webp"
                  alt="Academic conference with diverse participants"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <p className="font-lora text-charcoal mb-4 italic">Advancing Nile knowledge</p>
              <ul className="space-y-2 font-lora text-sm text-charcoal">
                <li>
                  • <strong>University Presidents:</strong> From all 11 Nile Basin nations
                </li>
                <li>
                  • <strong>Hydrologists:</strong> Water flow and ecosystem experts
                </li>
                <li>
                  • <strong>Climate Scientists:</strong> Drought/flood resilience researchers
                </li>
                <li>
                  • <strong>Social Anthropologists:</strong> Indigenous knowledge specialists
                </li>
              </ul>
            </div>

            {/* Entrepreneurs & Industry */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <h3 className="font-playfair text-lg font-bold text-river-blue mb-4">3. Entrepreneurs & Industry</h3>
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/young_afri1.webp"
                  alt="Young African innovators working on technology"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <p className="font-lora text-charcoal mb-4 italic">Building sustainable futures</p>
              <ul className="space-y-2 font-lora text-sm text-charcoal">
                <li>
                  • <strong>Clean Tech Startups:</strong> Solar/hydropower innovators
                </li>
                <li>
                  • <strong>Cultural Enterprises:</strong> Ethical fashion, eco-tourism ventures
                </li>
                <li>
                  • <strong>Agricultural Pioneers:</strong> Organic cooperatives, Nile fisheries
                </li>
              </ul>
            </div>

            {/* Civil Society Organizations */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <h3 className="font-playfair text-lg font-bold text-river-blue mb-4">4. Civil Society Organizations</h3>
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/discussion.webp"
                  alt="Community discussion meeting with women leaders"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <p className="font-lora text-charcoal mb-4 italic">Amplifying grassroots voices</p>
              <ul className="space-y-2 font-lora text-sm text-charcoal">
                <li>
                  • <strong>Water Justice Advocates:</strong> Equitable resource campaigns
                </li>
                <li>
                  • <strong>Cultural Heritage NGOs:</strong> Preservation initiatives
                </li>
                <li>
                  • <strong>Grassroots Environmental Groups:</strong> Local conservation champions
                </li>
              </ul>
            </div>

            {/* Youth & Diaspora */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <h3 className="font-playfair text-lg font-bold text-river-blue mb-4">5. Youth & Diaspora</h3>
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image src="/images/student.webp" alt="Student presenting innovation" fill className="object-cover" unoptimized />
              </div>
              <p className="font-lora text-charcoal mb-4 italic">Leading intergenerational change</p>
              <ul className="space-y-2 font-lora text-sm text-charcoal">
                <li>
                  • <strong>Student Innovators:</strong> University competition finalists
                </li>
                <li>
                  • <strong>Young Entrepreneurs:</strong> Green business founders
                </li>
                <li>
                  • <strong>Diaspora Investors:</strong> Global Nile advocates
                </li>
              </ul>
            </div>

            {/* 11-Nation Delegation */}
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <h3 className="font-playfair text-lg font-bold text-river-blue mb-4">6. 11-Nation Delegation</h3>
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/unity.webp"
                  alt="Unity celebration by the Nile river with people from all nations"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <p className="font-lora text-charcoal mb-4 italic">Geographic balance</p>
              <p className="font-lora text-sm text-charcoal">
                • <strong>Representatives from:</strong> Egypt, Sudan, South Sudan, Ethiopia, Eritrea, Uganda, Kenya,
                Tanzania, Rwanda, Burundi, DR Congo
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
