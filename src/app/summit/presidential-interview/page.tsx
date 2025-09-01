import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function SpeakersDelegatesPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <MainNav />

      <section className="relative h-screen flex flex-col items-end justify-center gap-4 overflow-hidden pr-16">
        {/* Nile Background */}
        <div className="absolute inset-0">
          <img
            src="/images/africans.webp"
            alt="The Nile River"
            className="w-full h-full object-cover object-left" // Focus on the left side of the image
          />
          <div className="absolute inset-0 bg-black/20"></div> {/* Dark overlay for contrast */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-end text-right space-y-6">
          {/* Hero Text */}
          <div className="text-white max-w-lg">
            <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight hero-text-shadow">
              Presidential Interview
            </h1>
            <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-light mb-6 tracking-wide hero-text-shadow whitespace-nowrap">
              Unity in Diversity: One River, One Future
            </h2>
          </div>

          <div className="flex items-center justify-end gap-2">
            {/* President Image */}
            <div className="flex flex-col items-center">
              <img
                src="/images/president.jpg"
                alt="President of Ethiopia"
                className="w-32 h-32 object-cover rounded-full shadow-lg border-4"
              />
              <p className="text-white font-playfair text-sm font-bold mt-4">
                H.E. President Taye Atske Selassie Amde
              </p>
            </div>

            {/* MKM Image */}
            <div className="flex flex-col items-center">
              <img
                src="/images/speakers/mkm.webp"
                alt="Dr. Mitslal Kifleyesus-Matschie"
                className="w-32 h-32 object-cover rounded-full shadow-lg border-4"
              />
              <p className="text-white font-playfair text-sm font-bold mt-4">
                Dr. Mitslal Kifleyesus-Matschie
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 md:py-20">
        <section className="mb-16 md:mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium">
              This interview with H.E. President Taye Atske Selassie Amde of Ethiopia was conducted by Dr. Mitslal
              Kifleyesus-Matschie, interviewer and editor for Ecopia Magazine. The conversation, under the theme "Unity
              in Diversity: One River, One Future", explores Ethiopia's role in the Nile Basin, the significance of the
              Grand Ethiopian Renaissance Dam (GERD), and the vision of the Children of the Nile Initiative in fostering
              cooperation, innovation, and shared prosperity across the region.
            </p>
          </div>
        </section>



        {/* Key Message Section */}
        <section className="mb-16 md:mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue mb-6">Key Message</h3>
            <div className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium space-y-4">
              <p>
                President Taye Atske Selassie emphasizes that the Nile is not only a river but a symbol of shared
                history, culture, and cooperation among all Nile Basin countries. He highlights Ethiopia's role as the
                source of the Blue Nile and frames the Grand Ethiopian Renaissance Dam (GERD) as a project for
                regional development, energy security, and climate resilience—built on transparency, dialogue, and
                mutual benefit.
              </p>
              <p>
                He calls on neighboring countries to view the Nile as a unifying resource rather than a source of
                conflict. The President underscores the importance of the Children of the Nile Initiative, encouraging
                youth to preserve heritage, foster innovation, and collaborate across borders. He also addresses mothers and families, recognizing their role in nurturing future generations.
              </p>
              <p>
                Ultimately, his vision is for the Nile Basin youth to turn "Unity in Diversity" into concrete
                progress—building peace, prosperity, and sustainable development for all 11 countries of the region.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-20">
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-river-blue mb-6">
                Full Interview Available
              </h3>
              <p className="font-lora text-base text-charcoal mb-6 leading-relaxed">
                Read the complete interview with H.E. President Taye Atske Selassie Amde, conducted by Dr. Mitslal
                Kifleyesus-Matschie, interviewer for Ecopia Magazine, exploring Ethiopia's vision for Nile Basin cooperation and the
                Children of the Nile Initiative.
              </p>
              <a
                href="/documents/presidential-interview.pdf"
                download
                className="inline-flex items-center gap-3 bg-river-blue hover:bg-river-blue/90 text-white font-lora font-medium px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Full Interview (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
