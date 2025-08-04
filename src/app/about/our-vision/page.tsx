import Image from "next/image"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function OurVisionPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <MainNav />

      {/* Hero Section - Clean Background without River */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/students.webp"
            alt="Students envisioning the future by the Nile"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-rich-white px-4 max-w-5xl mx-auto">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight hero-text-shadow">
            Our Vision and Objectives
          </h1>
          <p className="font-lora text-lg md:text-xl leading-relaxed font-light hero-quote-shadow">
            Reclaiming the Nile as a Source of Connection
          </p>
        </div>
      </section>

      {/* Flowing River Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-off-white to-sand relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="visionRiverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#123456" stopOpacity="0.2" />
                <stop offset="30%" stopColor="#c49b37" stopOpacity="0.3" />
                <stop offset="70%" stopColor="#123456" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#e67e22" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <path
              d="M-100,200 Q200,100 400,200 T800,180 Q1000,160 1300,200"
              stroke="url(#visionRiverGradient)"
              strokeWidth="60"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium">
              "Children of the Nile – A Shared Present & Future" is a Pan-African summit and cultural process that
              brings together artists, researchers, youth, and policymakers from all 11 Nile Basin countries. Our vision
              is rooted in the belief that the Nile is not just a river—it is a shared cultural, historical, and
              environmental lifeline. The summit seeks to reclaim the Nile as a source of connection, rather than
              conflict, and to imagine a future built on solidarity, creativity, and mutual benefit.
            </p>

            <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium">
              As Ethiopia completes the Grand Ethiopian Renaissance Dam (GERD), the moment offers a new opening: to turn
              away from divisive narratives and toward a positive, shared vision for the entire region.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section - Full Background */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/artists.webp"
            alt="Artists creating a collaborative mural by the Nile"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-river-blue/80 via-river-blue/60 to-river-blue/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-rich-white mb-12 text-center leading-tight">
              Our Objectives
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-rich-white/10 backdrop-blur-sm border border-rich-white/20 p-6 rounded-xl">
                  <p className="font-lora text-base md:text-lg text-rich-white leading-relaxed">
                    • Initiate the Nile Art Project, connecting artists across the Basin to co-create and reflect on
                    collective memory, identity, and belonging.
                  </p>
                </div>
                <div className="bg-rich-white/10 backdrop-blur-sm border border-rich-white/20 p-6 rounded-xl">
                  <p className="font-lora text-base md:text-lg text-rich-white leading-relaxed">
                    • Build lasting regional relationships between universities, cooperatives, and civil society actors.
                  </p>
                </div>
                <div className="bg-rich-white/10 backdrop-blur-sm border border-rich-white/20 p-6 rounded-xl">
                  <p className="font-lora text-base md:text-lg text-rich-white leading-relaxed">
                    • Use art as a diplomatic tool to explore transboundary issues from a cultural and human
                    perspective—beyond the limitations of political negotiation.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-rich-white/10 backdrop-blur-sm border border-rich-white/20 p-6 rounded-xl">
                  <p className="font-lora text-base md:text-lg text-rich-white leading-relaxed">
                    • Promote sustainable development and energy equity, linking the GERD to broader regional innovation
                    and green enterprise.
                  </p>
                </div>
                <div className="bg-rich-white/10 backdrop-blur-sm border border-rich-white/20 p-6 rounded-xl">
                  <p className="font-lora text-base md:text-lg text-rich-white leading-relaxed">
                    • Support the next generation through university collaborations, joint academic programs, and the
                    Nile Innovation Challenge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Vision Section - Full Background with Larger Height */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/youth.webp"
            alt="Young people looking toward the future by the Nile"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
        </div>





        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <blockquote className="font-lora text-lg md:text-xl text-rich-white leading-relaxed italic font-medium hero-quote-shadow">
                The summit is more than an event—it is the launch of a long-term cultural and civic process centered on
                the Nile, guided by principles of Pan-Africanism, inclusivity, and intergenerational dialogue.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
