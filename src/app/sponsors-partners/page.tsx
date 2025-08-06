import MainNav from "@/components/main-nav"
import { Plane, Building2 } from "lucide-react"
import Footer from "@/components/footer"

export default function SponsorsPartnersPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <MainNav />

      {/* Hero Section with Summit Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/youth.webp"
            alt="African woman speaking at summit with traditional headwrap"

            className="absolute inset-0 w-full h-full object-cover"

          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-rich-white px-4 max-w-5xl mx-auto">
          <div className="mb-6">
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight hero-text-shadow">
              Sponsors & Partners
            </h1>
            <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-light mb-6 text-rich-white tracking-wide hero-text-shadow">
              Join Us in Making History
            </h2>
          </div>

          <p className="font-lora text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 text-rich-white font-normal hero-quote-shadow">
            Partner with us to create a historic gathering that will unite the Nile Basin nations through culture,
            innovation, and sustainable collaboration.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 md:py-20">
        {/* Funding Needs Section */}
        <section className="mb-16 md:mb-20">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-8 leading-tight">
              Funding Needs
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium">
              As the "Children of the Nile – A Shared Present & Future" summit approaches (6–7 September 2025, Addis
              Ababa), we seek immediate partnerships to ensure the participation of key delegates and the successful
              execution of this historic gathering. The event will unite artists, academics, and entrepreneurs from all
              11 Nile Basin nations to celebrate shared heritage and foster sustainable collaboration.
            </p>
          </div>
        </section>

        {/* Support Areas Section */}
        <section className="mb-16 md:mb-20">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-8 leading-tight">
              Support Areas
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Travel Support */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-deep-orange rounded-xl flex items-center justify-center shadow-xl">
                  <Plane className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-river-blue">1. Travel Support</h3>
              </div>
              <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium mb-6">
                Ethiopian Airlines is invited to serve as the Official Travel Partner, providing{" "}
                <strong className="text-deep-orange">50 complimentary round-trip tickets</strong> for artists, youth
                representatives, and academics from across the Nile Basin.
              </p>
              <div className="bg-warm-gold-10 border-l-4 border-warm-gold p-4 rounded-lg">
                <p className="font-merriweather text-sm md:text-base font-medium text-river-blue">
                  🎯 Discounted group fares for additional attendees would further enable broad participation.
                </p>
              </div>
            </div>

            {/* Accommodation Support */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-deep-orange rounded-xl flex items-center justify-center shadow-xl">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-river-blue">
                  2. Accommodation Support
                </h3>
              </div>
              <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium mb-6">
                Leading hotels in Addis Ababa are requested to contribute{" "}
                <strong className="text-deep-orange">50 complimentary rooms for VIP delegates</strong>, including
                university presidents and featured artists.
              </p>
              <div className="bg-warm-gold-10 border-l-4 border-warm-gold p-4 rounded-lg">
                <p className="font-merriweather text-sm md:text-base font-medium text-river-blue">
                  🏨 Special discounted rates for other participants would help accommodate the diverse delegation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sponsorship Tiers Section with Full-Width Mural Background */}
      <section className="relative overflow-hidden -mx-4 md:-mx-8 lg:-mx-16">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/mural.webp"
            alt="Traditional African murals with community working on technology"

            className="absolute inset-0 w-full h-full object-cover object-center"


          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 py-16 md:py-20 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-rich-white mb-8 leading-tight hero-text-shadow">
                Sponsorship Tiers
              </h2>
              <p className="font-lora text-base md:text-lg text-rich-white leading-relaxed font-medium max-w-4xl mx-auto hero-quote-shadow">
                Corporate and institutional partners are invited to support the summit through targeted sponsorships:
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Nile Guardian */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-gold to-deep-orange transform rotate-2 rounded-3xl opacity-20"></div>
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-warm-gold/30 p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-playfair text-2xl font-bold text-river-blue mb-2">Nile Guardian</h3>
                    <p className="font-playfair text-3xl font-black text-warm-gold">$50,000+</p>
                  </div>
                  <p className="font-lora text-charcoal leading-relaxed text-center">
                    Covers major event costs, including technology, venue, and delegate grants.
                  </p>
                </div>
              </div>

              {/* Unity Partner */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-river-blue to-deep-orange transform -rotate-1 rounded-3xl opacity-20"></div>
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-river-blue/30 p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-playfair text-2xl font-bold text-river-blue mb-2">Unity Partner</h3>
                    <p className="font-playfair text-3xl font-black text-river-blue">$25,000</p>
                  </div>
                  <p className="font-lora text-charcoal leading-relaxed text-center">
                    Funds cultural exhibitions and youth programs.
                  </p>
                </div>
              </div>

              {/* Innovator */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-deep-orange to-warm-gold transform rotate-1 rounded-3xl opacity-20"></div>
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-deep-orange/30 p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-playfair text-2xl font-bold text-river-blue mb-2">Innovator</h3>
                    <p className="font-playfair text-3xl font-black text-deep-orange">$10,000</p>
                  </div>
                  <p className="font-lora text-charcoal leading-relaxed text-center">
                    Supports academic symposiums and enterprise pitches.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
                <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed text-center font-medium">
                  Sponsors will receive prominent recognition across summit platforms, exclusive networking
                  opportunities, and inclusion in post-event reports shared with regional and international
                  stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4">
        {/* Join Our Mission Section */}
        <section className="py-16 md:py-20">
          <div className="bg-warm-gold-10 border-2 border-warm-gold-30 rounded-3xl p-8 md:p-16 shadow-2xl">
            <div className="text-center">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue mb-6">Join Our Mission</h2>
              <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed max-w-4xl mx-auto mb-8 font-medium">
                We warmly invite you to become a sponsor or partner of the 'Children of the Nile' event. Your support
                will directly contribute to promoting peace, cooperation, and shared prosperity among Nile Basin
                nations.
              </p>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 inline-block mb-8">
                <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium mb-4">
                  For sponsorship inquiries, partnership opportunities, or to request a detailed proposal and budget,
                  please contact the organizing team at:
                </p>
                <a
                  href="mailto:MKM@ecopia.de"
                  className="font-playfair text-xl font-bold text-deep-orange hover:text-river-blue transition-colors"
                >
                  MKM@ecopia.de
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
