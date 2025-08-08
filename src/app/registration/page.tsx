"use client"


import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import Footer from "@/components/footer"
import MainNav from "@/components/main-nav"
import Link from "next/link"

const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe1LBQ7nSDlQsDUeGyE-DFuVsB0gnm2A8Rt3jvBy5j22wer3g/viewform?usp=header"

export default function RegistrationPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/map.webp')" }}
    >
      <main className="container mx-auto px-4 py-16">
        <MainNav />
        {/* Registration Section */}
        <section className="mt-12 sm:mt-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Registration Call to Action */}
            <div className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
              <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-river-blue mb-6 leading-tight text-center">
                Join the Historic Summit!
              </h1>

              <div className="inline-flex items-center space-x-2 bg-deep-orange backdrop-blur-sm px-4 py-2 rounded-full text-rich-white font-bold text-sm mb-8 shadow-lg">
                <MapPin className="h-3 w-3" />
                <span>Addis Ababa</span>
                <span>|</span>
                <Calendar className="h-3 w-3" />
                <span>6–7 September 2025</span>
              </div>

              <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium mb-10 text-center max-w-lg">
                Take part in a historic event bringing together artists, academics, entrepreneurs, and civil society
                from all 11 Nile Basin nations to honor our shared heritage and co-create a sustainable path forward.
              </p>

              <Link href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="default"
                  className="bg-deep-orange hover:bg-deep-orange-dark text-rich-white font-bold px-6 py-3 text-base rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-merriweather mb-8"
                >
                  Register Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>

              <div className="pt-6 border-t border-warm-gold-30 max-w-lg">
                <p className="font-lora text-sm text-charcoal text-center leading-relaxed">
                  Registration is free and open to all. Both in-person (Addis Ababa) and virtual participation options
                  are available.
                </p>
              </div>
            </div>

            {/* Right Side - Poster Image */}
            <div className="relative mt-28">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/poster.jpeg"
                  alt="Children of the Nile Summit Registration Poster"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-warm-gold-30">
                <div className="text-center mb-8">
                  <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue mb-6 leading-tight">
                    Petition by the Children of the Nile: A Call for Unity and Shared Prosperity
                  </h2>
                </div>

                <div className="space-y-6 mb-8">
                  <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed">
                    We, the undersigned, united by the shared heritage of the Nile River and the vision of a peaceful,
                    prosperous future for all Nile Basin nations, hereby call on all governments, institutions, and
                    peoples of the Nile Basin to:
                  </p>

                  <ul className="space-y-4 font-lora text-base text-charcoal leading-relaxed ml-4">
                    <li>
                      • <strong>Recognize the Nile as a shared resource and symbol of unity</strong> for all 11 Nile
                      Basin countries: Egypt, Sudan, South Sudan, Eritrea, Ethiopia, Uganda, Kenya, Rwanda, Tanzania,
                      Burundi, and the Democratic Republic of Congo.
                    </li>

                    <li>
                      • <strong>Support and actively participate</strong> in the Children of the Nile – A Shared Present
                      & Future initiative, aimed at fostering dialogue, cultural exchange, and sustainable
                      collaboration.
                    </li>

                    <li>
                      • <strong>Promote equitable, inclusive, and cooperative management</strong> of the Nile's waters
                      and resources to ensure sustainable development, climate resilience, and peace for current and
                      future generations.
                    </li>

                    <li>
                      • <strong>Encourage cross-border artistic, academic, and entrepreneurial partnerships</strong>{" "}
                      that celebrate our shared identity and leverage the Nile's potential for collective progress.
                    </li>

                    <li>
                      • <strong>Endorse the upcoming Pan-African Declaration on the Nile</strong>, committing all
                      stakeholders to work together as one family, united by respect, trust, and shared destiny.
                    </li>
                  </ul>

                  <div className="bg-warm-gold-10 border-l-4 border-warm-gold p-6 rounded-lg">
                    <p className="font-lora text-lg text-charcoal leading-relaxed italic">
                      By signing this petition, we affirm our commitment to a future where the Children of the Nile
                      thrive together in harmony, celebrating their rich cultures, protecting their environment, and
                      building sustainable livelihoods.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeQIooLxTKIIo74s-YW-ftqx_qbArJVrsyPfZWx2691s4gInw/viewform?pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="default"
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-merriweather w-full sm:w-auto max-w-full whitespace-normal leading-relaxed min-h-[3rem] sm:min-h-[3.5rem]"
                    >
                      <span className="text-center">
                        Sign the Petition: Affirm Our Commitment to Unity
                      </span>
                      <ArrowRight className="h-4 w-4 ml-2 flex-shrink-0" />
                    </Button>
                  </Link>
                </div>
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
