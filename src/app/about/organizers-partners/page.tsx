import Image from "next/image"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function OrganizersPartnersPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <MainNav />

      {/* Hero Section - No River */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/organisor.webp"
            alt="Community workshop and collaborative art session"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-rich-white px-4 max-w-5xl mx-auto">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight hero-text-shadow">
            Organizers & Partners
          </h1>
          <p className="font-lora text-lg md:text-xl leading-relaxed font-light hero-quote-shadow">
            A diverse coalition of artists, researchers, entrepreneurs, and educators
          </p>
        </div>
      </section>

      {/* Introduction - Smaller Font */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-off-white to-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-playfair text-lg md:text-xl text-charcoal leading-relaxed italic font-light">
              This summit is convened by a diverse coalition of artists, researchers, entrepreneurs, and educators from
              Ethiopia and across the Nile Basin. The collaboration reflects the interdisciplinary and Pan-African
              spirit of the event.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Organizer Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-sand to-off-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-6">
                Lead Organizer
              </h2>
            </div>

            {/* Split Layout */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Left: Logo - No Container */}
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-full h-full bg-warm-gold/10 transform rotate-2"></div>
                <div className="relative">
                  <div className="relative w-full h-64 mb-6">
                    <Image src="/images/bze.png" alt="Bethlehem Ze-Ethiopia logo" fill className="object-contain" />
                  </div>
                  <p className="font-lora text-sm text-charcoal text-center italic">
                    Bethlehem Ze-Ethiopia - Humanity and Charitable Works Foundation
                  </p>
                </div>
              </div>

              {/* Right: Founder Portrait - No Container, Smaller Image */}
              <div className="relative">
                <div className="relative">
                  <div className="flex justify-center items-center">
                    <Image
                      src="/images/hailu.png"
                      alt="Desalegn Hailu, founder and visual artist"
                      width={320}
                      height={400}
                      className="rounded-lg object-cover shadow-2xl"
                    />
                  </div>
                </div>

                {/* Founder Info */}
                <div className="mt-8">
                  <div className="bg-deep-orange text-rich-white p-6 transform -rotate-1 shadow-lg">
                    <h3 className="font-playfair text-xl font-bold mb-2">Desalegn Hailu</h3>
                    <p className="font-lora text-sm leading-relaxed">
                      Founder of Bethlehem Ze-Ethiopia and President of the Ethiopian Filmmakers Association, Desalegn
                      merges art and advocacy. With 20+ years in cinema and cultural leadership, he bridges creative
                      expression with public policy and Pan-African collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Organization Description */}
            <div className="bg-warm-gold-10 p-8 md:p-12 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-warm-gold via-deep-orange to-warm-gold"></div>
              <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed">
                An emerging civic and cultural institution rooted in Ethiopia, Bethlehem serves as the central convening
                body and vision-holder for the "Children of the Nile" process, anchoring its work in artistic practice,
                community dialogue, and regional cooperation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Images Section
      <section className="py-16 md:py-20 bg-gradient-to-b from-off-white to-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative transform hover:scale-105 transition-transform duration-300">
                <div className="absolute -top-4 -left-4 w-full h-full bg-warm-gold/20 transform rotate-2"></div>
                <div className="relative overflow-hidden shadow-2xl">
                  <Image
                    src="/images/team1.jpeg"
                    alt="Partnership collaboration meeting"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <p className="font-lora text-sm text-charcoal mt-4 text-center italic">
                  Partnership collaboration meeting bringing together diverse stakeholders
                </p>
              </div>
              <div className="relative transform hover:scale-105 transition-transform duration-300">
                <div className="absolute -top-4 -right-4 w-full h-full bg-deep-orange/20 transform -rotate-2"></div>
                <div className="relative overflow-hidden shadow-2xl">
                  <Image
                    src="/images/team2.jpeg"
                    alt="Core organizing team meeting"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <p className="font-lora text-sm text-charcoal mt-4 text-center italic">
                  Core organizing team planning the summit's cultural and academic components
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Key Partners Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-sand to-off-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-6">
                Key Partners
              </h2>
            </div>

            {/* Partner Cards */}
            <div className="space-y-8">
              {/* Equal Trade Alliance - Horizontal Layout */}
              <div className="max-w-5xl mx-auto">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-deep-orange/10 transform rotate-1"></div>
                  <div className="relative bg-white p-6 shadow-xl border-l-4 border-deep-orange">
                    <div className="flex items-start space-x-8">
                      <div className="w-28 h-28 relative flex-shrink-0">
                        <Image
                          src="/images/equal_trade.png"
                          alt="Equal Trade Alliance logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-playfair text-xl font-bold text-river-blue mb-1">Equal Trade Alliance</h3>
                        <p className="font-lora text-sm text-charcoal italic mb-2">(Ethiopia/Netherlands)</p>
                        <p className="font-lora text-base text-charcoal leading-relaxed">
                          Advancing fair-trade partnerships across the Nile Basin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ecopia and EPAA - Side by Side with Logo on Left */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Ecopia - Logo on Left */}
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-full h-full bg-warm-gold/10 transform -rotate-1"></div>
                  <div className="relative bg-white p-6 shadow-xl border-r-4 border-warm-gold h-full">
                    <div className="flex items-center space-x-6">
                      {/* Logo */}
                      <div className="w-32 h-32 relative flex-shrink-0 flex items-center justify-center">
                        <Image src="/images/ecopia.png" alt="Ecopia logo" fill className="object-contain" />
                      </div>
                      {/* Text and Representative */}
                      <div className="flex-1">
                        <h3 className="font-playfair text-lg font-bold text-river-blue mb-3">Ecopia PLC</h3>
                        <p className="font-lora text-sm text-charcoal leading-relaxed mb-4">
                          Steering sustainable enterprises.
                        </p>
                        <div className="flex items-center space-x-4">
                          {/* Enlarged Representative Image */}
                          <div className="w-28 h-28 relative">
                            <Image
                              src="/images/mkm.webp"
                              alt="Dr. Mitslal Kifleyesus-Matschie"
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div>
                            <p className="font-lora text-sm text-charcoal font-medium">Dr. Mitslal Kifleyesus-Matschie</p>
                            <p className="font-lora text-sm text-charcoal/70">Representative</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* EPAA - Logo on Left */}
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-river-blue/5 transform rotate-1"></div>
                  <div className="relative bg-white p-6 shadow-xl h-full">
                    <div className="flex items-center space-x-6">
                      {/* Logo */}
                      <div className="w-32 h-32 relative flex-shrink-0 flex items-center justify-center">
                        <Image
                          src="/images/epaa.png"
                          alt="Ethiopian Pan-Africanist Artists Association logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      {/* Text and Representative */}
                      <div className="flex-1">
                        <h3 className="font-playfair text-lg font-bold text-river-blue mb-3">
                          Ethiopian Pan-Africanist Artists Association (EPAA)
                        </h3>
                        <p className="font-lora text-sm text-charcoal leading-relaxed mb-4">
                          Mobilizing artistic collaborations.
                        </p>
                        <div className="flex items-center space-x-4">

                          <div>
                            <p className="font-lora text-sm text-charcoal font-medium">Mr. Yonas</p>
                            <p className="font-lora text-sm text-charcoal/70">Leader</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ASSIST - Horizontal Layout */}
              <div className="max-w-5xl mx-auto">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-river-blue/10 transform rotate-1"></div>
                  <div className="relative bg-white p-6 shadow-xl border-l-4 border-river-blue">
                    <div className="flex items-start space-x-8">
                      <div className="w-28 h-28 relative flex-shrink-0">
                        <Image src="/images/assist.png" alt="ASSIST logo" fill className="object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-playfair text-xl font-bold text-river-blue mb-1">ASSIST</h3>
                        <p className="font-lora text-sm text-charcoal italic mb-2">Chaired by Prof. Mamo</p>
                        <p className="font-lora text-base text-charcoal leading-relaxed">
                          Coordinating scientific and educational frameworks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Quote Section - Smaller Font */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nile.jpg" alt="Diverse group discussion" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <blockquote className="font-playfair text-lg md:text-2xl text-rich-white leading-relaxed italic font-medium hero-quote-shadow">
              "Together, these partners form a transdisciplinary alliance that bridges sectors and geographies—working
              across art, science, and enterprise to build a shared future for the Nile Basin."
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
