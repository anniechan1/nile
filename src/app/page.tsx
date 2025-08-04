"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Globe, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import Link from "next/link"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Navigation */}
      <MainNav />

      {/* Hero Section - Fixed Font Sizing */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="Children of the Nile celebration by the river at sunset"
            fill
            className="object-cover"
            priority
          />
          {/* Enhanced gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30"></div>
        </div>

        {/* Content Overlay - Fixed Typography Sizing */}
        <div className="relative z-10 text-center text-rich-white px-4 max-w-5xl mx-auto">
          <div className="mb-6">
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight hero-text-shadow">
              Children of the Nile
            </h1>
            <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-light mb-6 text-rich-white tracking-wide hero-text-shadow">
              A Shared Present & Future
            </h2>

            {/* Event Details */}
            <div className="inline-flex items-center space-x-3 bg-deep-orange backdrop-blur-sm px-5 py-2.5 rounded-full text-rich-white font-bold text-sm md:text-base mb-6 shadow-lg">
              <MapPin className="h-4 w-4" />
              <span>Addis Ababa</span>
              <span>|</span>
              <Calendar className="h-4 w-4" />
              <span>6–7 September 2025</span>
            </div>
          </div>

          {/* Enhanced Quote with Attribution */}
          <div className="mb-8">
            <blockquote
              className="font-playfair text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-2 text-rich-white font-light italic hero-quote-shadow"
              style={{ lineHeight: "1.6" }}
            >
              "This event grows from Ethiopia's soil but belongs to all Nile nations. We build it together—brushstroke
              by brushstroke, idea by idea." — Desalegn Hailu
              {/* <span className="text-warm-gold font-medium not-italic ml-2"></span> */}
            </blockquote>
          </div>

          {/* Enhanced Description */}
          <p className="font-lora text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-8 text-rich-white font-normal hero-quote-shadow">
            The Nile is more than a river—it is the story of us all. Join us for a historic gathering of artists,
            academics, and innovators from all 11 Nile Basin nations to celebrate our shared heritage and envision a
            united future.
          </p>

          {/* Enhanced CTA Button - Smaller */}
          <Link href="/registration">
            <Button
              size="default"
              className="bg-deep-orange hover:bg-deep-orange-dark text-rich-white font-bold px-6 py-2.5 text-base rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-merriweather"
            >
              Register Now
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* The River That Connects Us Section - Better Spacing */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-off-white to-sand relative overflow-hidden">
        {/* Animated River Background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#123456" stopOpacity="0.2" />
                <stop offset="30%" stopColor="#c49b37" stopOpacity="0.3" />
                <stop offset="70%" stopColor="#123456" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#e67e22" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            <path
              d="M-100,200 Q200,100 400,200 T800,180 Q1000,160 1300,200 L1300,230 Q1000,190 800,210 T400,230 Q200,130 -100,230 Z"
              fill="url(#riverGradient)"
              opacity="0.4"
            />
            <path
              d="M-100,230 Q200,130 400,230 T800,210 Q1000,190 1300,230"
              stroke="url(#riverGradient)"
              strokeWidth="60"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-8 md:mb-10 leading-tight">
              The River That Connects Us
            </h2>

            <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium">
              The Nile is more than a river—it is the story of us all. For millennia, its waters have connected 11
              nations as one family. As Ethiopia completes the Grand Renaissance Dam, this is not an endpoint, but a new
              beginning.
            </p>

            {/* Enhanced Quote Box - Smaller */}
            <div className="bg-warm-gold-10 border-2 border-warm-gold-30 p-6 md:p-8 rounded-2xl shadow-lg relative overflow-hidden my-8 md:my-10">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-warm-gold via-deep-orange to-warm-gold rounded-t-2xl"></div>

              <blockquote className="font-playfair text-lg md:text-xl font-medium text-river-blue mb-0 leading-relaxed text-center italic">
                "The dam is built; now let us build the dialogue. Ethiopia welcomes you to the table—not to negotiate
                from afar, but to collaborate as neighbors."
              </blockquote>
            </div>

            <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium">
              This gathering invites Egypt, Sudan, South Sudan, Eritrea, Ethiopia, Uganda, Kenya, Rwanda, Tanzania,
              Burundi, and the DRC to shape a shared future through culture, conversation, and cooperation.
            </p>
          </div>
        </div>
      </section>

      {/* Event Details Section - Better Spacing */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-sand to-off-white">
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
                <span>Addis Ababa + Online</span>
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
                    🌟 Registration is now open! Join us in Addis Ababa or online. Researchers, artists, entrepreneurs,
                    activists, and youth — all are welcome.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/dance.webp"
                    alt="Traditional African dance celebration"
                    width={600}
                    height={400}
                    className="w-full h-56 md:h-64 object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
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
              <Link href="/registration">
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
      <section className="py-16 md:py-20 bg-gradient-to-b from-off-white to-sand">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-6 leading-tight">
                Event Overview
              </h2>
              <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium max-w-4xl mx-auto">
                Join us for the Children of the Nile – A Shared Present & Future summit in Addis Ababa on 6–7 September
                2025. This hybrid event brings together artists, scholars, entrepreneurs, and policymakers from all Nile
                Basin countries to:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Cultural Heritage */}
              <Card className="overflow-hidden shadow-2xl bg-white border-warm-gold-20">
                <Image
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
                <Image
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
                <Image
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
                <Image
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
              <div className="flex justify-center space-x-4">
                {/* Program Button */}
                <Link href="/summit/program">
                  <Button
                    size="lg"
                    className="bg-warm-gold hover:bg-warm-gold-dark text-rich-white font-bold px-8 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-merriweather"
                  >
                    View Program
                  </Button>
                </Link>
                <Link href="/registration">
                  <Button
                    size="lg"
                    className="bg-deep-orange hover:bg-deep-orange-dark text-rich-white font-bold px-8 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-merriweather"
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
