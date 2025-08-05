import Image from "next/image"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import Link from "next/link"

export default function OrganizersPartnersPage() {
  const keyPartners = [
    {
      name: "Ecopia PLC",
      subtitle: "Chaired by Dr. Mitslal Kifleyesus-Matschie",
      description: "Steering sustainable enterprises and green innovation.",
      logo: "/images/ecopia.png",
      url: "https://www.ecopiagroup.com/",
      borderColor: "border-warm-gold",
      shadowColor: "bg-warm-gold/20",

    },
    {
      name: "Bethlehem Ze-Ethiopia",
      subtitle: "Founded by Desalegn Hailu",
      description: "Cultural foundation bridging art and advocacy.",
      logo: "/images/bze.png",
      url: "https://www.bethlehemzeethiopia.org/",
      borderColor: "border-deep-orange",
      shadowColor: "bg-deep-orange/20",
    },
    {
      name: "ASSIST",
      subtitle: "Chaired by Prof. Mamo",
      description: "Coordinating scientific and educational frameworks.",
      logo: "/images/assist.png",
      url: "https://assistsarchi.wixsite.com/assist",
      borderColor: "border-river-blue",
      shadowColor: "bg-river-blue/20",
    },
    {
      name: "Equal Trade Alliance",
      subtitle: "(Ethiopia/Netherlands)",
      description: "Advancing fair-trade partnerships across the Nile Basin.",
      logo: "/images/equal_trade.png",
      url: "https://equaltradepanafrican.org/",
      borderColor: "border-deep-orange",
      shadowColor: "bg-deep-orange/20",
    },
  ]

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
            unoptimized
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

            {/* ECSOC as Lead Organizer */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-warm-gold/10 transform rotate-1"></div>
                <div className="relative p-8">
                  <div className="flex items-center space-x-8">
                    <Link
                      href="https://www.ecsoc.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0"
                    >
                      <div className="w-40 h-40 relative hover:scale-105 transition-transform duration-300">
                        <Image
                          src="/images/ecsoc.png"
                          alt="Ethiopian Civil Society Organizations Council logo"
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                    </Link>
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl md:text-2xl font-bold text-river-blue mb-2">
                        Ethiopian Civil Society Organizations Council (ECSOC)
                      </h3>
                      <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed">
                        The Ethiopian Civil Society Organizations Council is an independent apex body legally representing the civil society sector, which consists of organizations, consortia, associations, forums, and networks. ECSOC was established on December 31, 2020, by the 300 General Assembly members that consisted of CSO representatives and are the founders of the Council.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Partners Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-off-white to-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-6">
                Key Partners
              </h2>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyPartners.map((partner, index) => (
                <Link key={index} href={partner.url} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="relative h-full">
                    <div
                      className={`absolute -top-2 -right-2 w-full h-full ${partner.shadowColor} transform -rotate-2 rounded-tr-3xl rounded-bl-3xl`}
                    ></div>
                    <div
                      className={`relative bg-white p-6 shadow-2xl border-r-4 ${partner.borderColor} rounded-tr-3xl rounded-bl-3xl transform group-hover:scale-105 transition-all duration-300 h-full`}
                    >
                      <div className="text-center flex flex-col h-full">
                        <div className="mb-4">
                          <div className="w-32 h-32 relative mx-auto group-hover:scale-110 transition-transform duration-300">
                            <Image
                              src={partner.logo || "/placeholder.svg"}
                              alt={`${partner.name} logo`}
                              fill
                              className="object-contain"
                              unoptimized
                            />
                          </div>
                        </div>
                        <div className="flex-grow flex flex-col justify-center">
                          <h3 className="font-playfair text-lg font-bold text-river-blue mb-1">{partner.name}</h3>
                          <p className="font-lora text-xs text-charcoal italic mb-2">{partner.subtitle}</p>
                          <p className="font-lora text-sm text-charcoal leading-relaxed">{partner.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Partners Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-sand to-off-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-6">
                Supporting Partners

              </h2>

            </div>

            {/* Supporting Partners Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Ethiopian Youth Council */}
              <Link
                href="https://ethiopianyouthcouncil.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="text-center transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-32 h-32 relative mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/images/youth_council.png"
                      alt="Ethiopian Youth Council logo"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-river-blue mb-1">Ethiopian Youth Council</h3>

                </div>
              </Link>

              {/* Eljojofe e.V. */}
              <Link
                href="http://www.eljojofe.org/?p=1&lang=EN"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="text-center transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-32 h-32 relative mx-auto mb-4 bg-warm-gold/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">


                    <Image src="/images/el.png" alt="El logo" fill className="object-contain" unoptimized />
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-river-blue">Eljojofe e.V.</h3>
                </div>
              </Link>

              {/* Ticker Tape Technologies */}
              <Link href="https://tickertapetechnologies.co/" target="_blank" rel="noopener noreferrer" className="block group md:col-span-2 lg:col-span-1" >
                <div className="text-center transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-52 aspect-[2/1] relative mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Image src="/images/ticker_tape.png" alt="Ticker Tape Technologies logo" fill className="object-contain" unoptimized />
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-river-blue">Ticker Tape Technologies</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Quote Section - Smaller Font */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nile.jpg" alt="Diverse group discussion" fill className="object-cover" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/40"></div>
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
