
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { Palette, MessageCircle, Lightbulb } from "lucide-react"

export default function ArtDialogueInnovationPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <MainNav />

      {/* Hero Section - Clean Background without River */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/exhibition.webp"
            alt="Traditional musicians celebrating by the Nile"

            className="absolute inset-0 w-full h-full object-cover"


          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-rich-white px-4 max-w-6xl mx-auto">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight hero-text-shadow">
            Art, Dialogue & Innovation
          </h1>
          <p className="font-lora text-lg md:text-xl leading-relaxed font-light hero-quote-shadow max-w-4xl mx-auto">
            Three powerful forces uniting diverse actors around a shared river and a shared destiny
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-off-white to-sand relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="introRiverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#123456" stopOpacity="0.15" />
                <stop offset="30%" stopColor="#c49b37" stopOpacity="0.25" />
                <stop offset="70%" stopColor="#123456" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#e67e22" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M-100,300 Q300,150 600,300 T1300,280"
              stroke="url(#introRiverGradient)"
              strokeWidth="40"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium">
              At the heart of Children of the Nile – A Shared Present & Future is a holistic, Pan-African approach
              grounded in three powerful forces: art, dialogue, and innovation. These pillars serve not only as methods
              of engagement, but as tools of transformation—uniting diverse actors around a shared river and a shared
              destiny.
            </p>
          </div>
        </div>
      </section>

      {/* Art & Cultural Memory Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-sand to-off-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header with Icon */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-deep-orange rounded-full flex items-center justify-center shadow-lg">
                  <Palette className="h-6 w-6 text-rich-white" />
                </div>
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue">
                  Art & Cultural Memory
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium mb-6">
                  Art has always played a central role in how communities across the Nile express memory, identity, and
                  resilience. In this summit, art is the entry point for reimagining the Nile—not as a contested
                  resource, but as a cultural artery that connects all 11 Basin countries.
                </p>

                <h3 className="font-playfair text-xl md:text-2xl font-bold text-river-blue mb-4">
                  Key initiatives include:
                </h3>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full bg-warm-gold/10 transform -rotate-3"></div>
                <div className="relative overflow-hidden shadow-2xl">
                  <img
                    src="/images/artists1.webp"
                    alt="Artists creating collaborative murals"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"

                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-warm-gold-10 border border-warm-gold-30 p-6 rounded-xl shadow-lg">
                <p className="font-lora text-sm md:text-base text-charcoal leading-relaxed">
                  <strong className="text-river-blue font-bold">The Nile Memory Project:</strong> A participatory
                  archive combining oral history, storytelling, and visual art, developed through partnerships with Nile
                  Basin communities and institutions.
                </p>
              </div>
              <div className="bg-warm-gold-10 border border-warm-gold-30 p-6 rounded-xl shadow-lg">
                <p className="font-lora text-sm md:text-base text-charcoal leading-relaxed">
                  <strong className="text-river-blue font-bold">Cross-border artistic collaboration:</strong> Artists
                  from different Nile countries are paired to produce joint work—music, murals, digital media—showcased
                  at the summit and in a traveling exhibition.
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="bg-warm-gold-10 border border-warm-gold-30 p-6 rounded-xl shadow-lg">
                  <p className="font-lora text-sm md:text-base text-charcoal leading-relaxed">
                    <strong className="text-river-blue font-bold">The River Sings:</strong> A multi-lingual art
                    installation and ritual performance highlighting shared narratives of the Nile across borders.
                  </p>
                </div>
              </div>
            </div>

            {/* Simple Quote without Box */}
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="font-playfair text-lg md:text-xl font-bold text-river-blue italic leading-relaxed">
                "Art is the language that can say what politics cannot. Let us use it to heal, not divide." -Desalegn
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Dialogue & Academic Engagement Section - Redesigned */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-off-white to-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-warm-gold rounded-full flex items-center justify-center shadow-lg">
                  <MessageCircle className="h-6 w-6 text-river-blue" />
                </div>
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue">
                  Dialogue & Academic Engagement
                </h2>
              </div>
              <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium max-w-4xl mx-auto">
                The summit builds a new diplomatic space—one that moves beyond water-sharing disputes toward cultural
                understanding, academic cooperation, and shared visions for the future.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Image on Left */}
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-river-blue/10 transform rotate-2"></div>
                <div className="relative overflow-hidden shadow-2xl">
                  <img
                    src="/images/panel.webp"
                    alt="Youth panel discussion with diverse participants"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"

                  />
                </div>
              </div>

              {/* Content on Right */}
              <div>
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-river-blue mb-8">
                  This pillar draws from:
                </h3>

                <div className="space-y-6">
                  <div className="bg-white border-l-4 border-river-blue p-6 rounded-lg shadow-lg">
                    <p className="font-lora text-sm md:text-base text-charcoal leading-relaxed">
                      University networks across the Nile Basin, including collaborative research and curriculum
                      development in transboundary water management and peace studies.
                    </p>
                  </div>
                  <div className="bg-white border-l-4 border-warm-gold p-6 rounded-lg shadow-lg">
                    <p className="font-lora text-sm md:text-base text-charcoal leading-relaxed">
                      The launch of a Joint MSc Program in Transboundary Water and Innovation, led by Jimma University
                      and other academic partners.
                    </p>
                  </div>
                  <div className="bg-white border-l-4 border-deep-orange p-6 rounded-lg shadow-lg">
                    <p className="font-lora text-sm md:text-base text-charcoal leading-relaxed">
                      Youth-led panels that center student voices, emphasizing lived experience, aspirations, and
                      creativity over technical expertise.
                    </p>
                  </div>
                  <div className="bg-white border-l-4 border-river-blue p-6 rounded-lg shadow-lg">
                    <p className="font-lora text-sm md:text-base text-charcoal leading-relaxed">
                      A policy session exploring a "New Nile Narrative," based on cultural proximity and mutual benefit
                      rather than zero-sum politics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intergenerational Dialogue Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-off-white to-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-warm-gold/20 transform -rotate-2"></div>
                <div className="relative overflow-hidden shadow-2xl">
                  <img
                    src="/images/group.webp"
                    alt="Intergenerational dialogue gathering with traditional and modern participants"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"

                  />
                </div>
              </div>
              <div>
                <blockquote className="font-playfair text-base md:text-lg text-river-blue leading-relaxed italic font-medium">
                  "The aim is to create not just dialogue between governments, but dialogue between people—across
                  generations, geographies, and disciplines."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Enterprise Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-sand to-off-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-river-blue rounded-full flex items-center justify-center shadow-lg">
                  <Lightbulb className="h-6 w-6 text-rich-white" />
                </div>
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue">
                  Innovation & Enterprise
                </h2>
              </div>
              <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium max-w-5xl mx-auto">
                Looking to the future, the summit promotes green and inclusive enterprise rooted in local knowledge and
                cross-border collaboration.

              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-deep-orange/20 transform rotate-1"></div>
                <div className="relative overflow-hidden shadow-2xl">
                  <img
                    src="/images/young_afri.webp"
                    alt="Young innovators with technology"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"

                  />
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full bg-warm-gold/20 transform -rotate-1"></div>
                <div className="relative overflow-hidden shadow-2xl">
                  <img
                    src="/images/innovators.webp"
                    alt="Solar energy innovation"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"

                  />
                </div>
              </div>
            </div>

            <h3 className="font-playfair text-xl md:text-2xl font-bold text-river-blue mb-8 text-center">
              Featured components:
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-warm-gold-10 border border-warm-gold-30 p-6 rounded-xl shadow-lg">
                <p className="font-lora text-sm md:text-base text-charcoal leading-relaxed">
                  <strong className="text-river-blue font-bold">The Nile Innovation Challenge:</strong> A pan-African
                  call for youth-led solutions in areas like energy access, sustainable agriculture, and digital tools
                  for cross-border trade.
                </p>
              </div>
              <div className="bg-warm-gold-10 border border-warm-gold-30 p-6 rounded-xl shadow-lg">
                <p className="font-lora text-sm md:text-base text-charcoal leading-relaxed">
                  <strong className="text-river-blue font-bold">Support for green entrepreneurship</strong> in sectors
                  such as water technologies, solar energy, and cultural tourism.
                </p>
              </div>
              <div className="bg-warm-gold-10 border border-warm-gold-30 p-6 rounded-xl shadow-lg">
                <p className="font-lora text-sm md:text-base text-charcoal leading-relaxed">
                  <strong className="text-river-blue font-bold">Enterprise matchmaking</strong> between innovators and
                  cooperatives, enabling long-term collaboration beyond the summit.
                </p>
              </div>
              <div className="bg-warm-gold-10 border border-warm-gold-30 p-6 rounded-xl shadow-lg">
                <p className="font-lora text-sm md:text-base text-charcoal leading-relaxed">
                  <strong className="text-river-blue font-bold">Seed funding and follow-up opportunities</strong>{" "}
                  through partner organizations like Ecopia and university incubators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
