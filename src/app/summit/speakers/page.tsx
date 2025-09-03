"use client"

import MainNav from "@/components/main-nav"
import { ArrowLeft, MapPin } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <MainNav />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-river-blue/10 to-warm-gold/5 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/summit/working-groups/academic"
              className="inline-flex items-center text-river-blue hover:text-river-blue-dark mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Program
            </Link>

            <div className="text-center">
              <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-river-blue mb-4">
                Featured Speakers
              </h1>

              <p className="font-lora text-lg text-charcoal leading-relaxed max-w-3xl mx-auto">
                Meet the distinguished scholars, researchers, and thought leaders who will share their expertise and
                vision for the Nile Basin's future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Speaker Profiles */}
        <div className="space-y-16">




          {/* Prof. Geci Karuri-Sebina */}
          <section id="geci-karuri" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-river-blue/5 to-warm-gold/10 rounded-3xl p-8 shadow-xl border border-warm-gold/20">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="relative">
                    <img
                      src="/images/speakers/Prof_Geci.jpeg"
                      alt="Prof. Geci Karuri-Sebina"
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue">
                      Prof. Geci Karuri-Sebina
                    </h2>
                    <div className="flex items-center space-x-2 bg-deep-orange/10 px-3 py-1 rounded-full">
                      <MapPin className="h-4 w-4 text-deep-orange" />
                      <span className="text-sm font-bold text-deep-orange">Kenya</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-charcoal font-lora">


                    <p>
                      Prof Geci Karuri-Sebina is a scholar-practitioner who works in the intersection between people,
                      place, time and technological change. She is an Associate Professor at the University of
                      Witwatersrand in addition to serving as a Principal at the School of International Futures (SOIF);
                      is the ICESCO Chair on Innovation and Futures in Africa; and an Adjunct Professor at UCT's African
                      Centre for Cities at the University of Cape Town. She has over 2 decades of experience designing,
                      teaching and facilitating foresight-based projects around the world. </p>

                    <p>Geci holds Bachelors degrees
                      in Computer Science and Sociology (Iowa); Masters degrees in Architecture and in Urban Planning
                      (UCLA); and a PhD in planning and innovation studies (Wits University). She is a Desmond Tutu
                      African Leadership Fellow, and part of curating the post-activist communities of The Emergence
                      Network and Dancing With Mountains.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* PhD Diran Soumonni */}
          <section id="diran-soumonni" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-warm-gold/10 to-river-blue/5 rounded-3xl p-8 shadow-xl border border-river-blue/20">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="relative">
                    <img
                      src="/images/speakers/Diran.jpg"
                      alt="PhD Diran Soumonni"
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue">
                      Ph.D. Diran Soumonni
                    </h2>
                    <div className="flex items-center space-x-2 bg-deep-orange/10 px-3 py-1 rounded-full">
                      <MapPin className="h-4 w-4 text-deep-orange" />
                      <span className="text-sm font-bold text-deep-orange">Benin</span>
                    </div>
                  </div>
                  <div className="space-y-4 text-charcoal font-lora">
                    <p>
                      Diran Soumonni is an Associate Professor of Innovation Policy and Management at the
                      University of the Witwatersrand, in Johannesburg, South Africa. His teaching and research
                      interests include comparative innovation systems, energy innovation, and innovation for
                      sustainability. Inspired by Global South and Global African thinkers on sustainable
                      industrialisation, his current research advances a more holistic and historically-grounded
                      perspective on ‘endogenous innovation’.
                    </p>
                    <p>
                      He currently serves on the scientific committees of the International Network on Appropriate
                      Technology (INAT), of the African Network for the Economics of Learning, Innovation and
                      Competence Building Systems (AFRICALICS), and of the Wits Innovation Centre (WIC).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Prof. John Kalu Osiri */}
          <section id="john-osiri" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-warm-gold/10 to-river-blue/5 rounded-3xl p-8 shadow-xl border border-river-blue/20">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="relative">
                    <img
                      src="/images/speakers/Prof_John.jpeg"
                      alt="Prof. John Kalu Osiri"
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue">
                      Prof. John Kalu Osiri
                    </h2>
                    <div className="flex items-center space-x-2 bg-deep-orange/10 px-3 py-1 rounded-full">
                      <MapPin className="h-4 w-4 text-deep-orange" />
                      <span className="text-sm font-bold text-deep-orange">Nigeria</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-charcoal font-lora">


                    <p>
                      Prof. John Kalu Osiri is a visionary leader, global educator, and executive coach redefining the
                      boundaries of education and leadership. As the Chancellor of Osiri University, he spearheads a
                      transformative platform dedicated to democratizing education and empowering individuals to unlock
                      their full potential worldwide in the spirit of Ubuntu.
                    </p>

                    <p>
                      Prof. Osiri's academic journey began in the field of chemistry before evolving into management
                      scholarship, where he delves into the neurochemistry of leadership and the interplay of culture,
                      innovation, and transformative change. With academic credentials that span Grambling State
                      University (BS in Chemistry), Louisiana State University (Ph.D. in Chemistry), the University of
                      Florida (Post-Doctorate in Entrepreneurship and International Business), and the Harvard
                      Management Development Program (MDP), his expertise bridges science, business, and leadership.
                    </p>

                    <p>
                      A proud member of Alpha Phi Alpha Fraternity, Inc., Prof. Osiri's contributions to education and
                      global equity have earned him notable accolades, including the Chancellor's Fulfilling the Dream
                      Award and the Dr. Michael W. Combs Legacy Award in Nebraska.
                    </p>

                    <p>
                      As an educator, Prof. Osiri has taught and worked at multiple U.S. universities, focusing on
                      globalizing education through programs that enrich students with international perspectives. His
                      professional engagements and travels span numerous countries across six continents, which offers
                      him unique perspectives into global education and leadership practices.
                    </p>

                    <p>
                      Deeply committed to societal transformation, Prof. Osiri continues to study how Africans can
                      harness their knowledge systems to drive positive change. His work is more than an academic
                      pursuit, it's a movement to inspire leaders, innovate solutions, and create lasting impact across
                      the globe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dr. Jennifer Batamuliza */}
          <section id="jennifer-batamuliza" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-deep-orange/5 to-warm-gold/10 rounded-3xl p-8 shadow-xl border border-deep-orange/20">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="relative">
                    <img
                      src="/images/speakers/Dr_Jenn.jpeg"
                      alt="Dr. Jennifer Batamuliza"
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue">
                      Dr. Jennifer Batamuliza
                    </h2>
                    <div className="flex items-center space-x-2 bg-deep-orange/10 px-3 py-1 rounded-full">
                      <MapPin className="h-4 w-4 text-deep-orange" />
                      <span className="text-sm font-bold text-deep-orange">Rwanda</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-charcoal font-lora">

                    <p>
                      Dr. Jennifer Batamuliza is the Head of the Data-Driven Incubation Hub and Short Professional
                      Courses at the African Center of Excellence in Data Science, University of Rwanda. She also serves
                      as the Program Lead for Girls' Empowerment under the Mastercard Foundation Scholars Program at the
                      University of Rwanda, and Deputy Project Coordinator and Career Path Lead for the AFRETEC
                      project—implemented by CMU-Africa and funded by the Mastercard Foundation.
                    </p>

                    <p>
                      She is the Principal Investigator and Coordinator of the Green STEM project, which promotes
                      sustainability and green technology education by supporting 2 PhD and 4 Master's international
                      students at the University of Rwanda. Additionally, she is a Data Scientist on a project focused
                      on integrating cooperatives into competitive value chains to strengthen food system resilience in
                      Rwanda.
                    </p>

                    <p>
                      An academic by training, Dr. Jennifer lectures in IT and Data Science at the University of Rwanda,
                      teaching undergraduate and Master's students, and supervising both Master's and PhD research in
                      Internet of Things (IoT) and Data Science.
                    </p>

                    <p>
                      She is the Vice President of the Rwandan Association for Women in Science and Engineering
                      (RAWISE), and the Founder & CEO of RWA TECH HUB, an initiative that mentors and trains girls in
                      ICT. Previously, she served as the Local Engagement Coordinator for Rwanda in the U.S. State
                      Department's TechGirls program and was Head of the Software Engineering Department at the
                      Adventist University of Central Africa (AUCA).
                    </p>

                    <p>
                      Dr. Jennifer holds a PhD in Data Science with a specialization in Data Mining, a Master's degree
                      in Computer Science and Engineering, and a Bachelor's degree in Computer Engineering and IT. She
                      is a DASCA-certified Senior Big Data Analyst. Her research interests include big data analytics,
                      machine learning, cybersecurity, cloud computing, and artificial intelligence. She has
                      participated in prestigious international programs, including the Mandela Washington Fellowship at
                      Arizona State University, the University Partnership Exchange Program at the University of
                      Nebraska, and academic exchanges at Chalmers University of Technology and Lund University through
                      Erasmus+.
                    </p>

                    <p>
                      Her leadership and contributions have earned her multiple recognitions, including the Women
                      Science Leadership Award 2022 by the National Council for Science and Technology (NCST) and the
                      Afretec Champion Inclusion Award in celebration of the International Day for Women and Girls in
                      Science.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dr. Mohammad Ashaq Malik */}
          <section id="mohd-malik" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-river-blue/5 to-deep-orange/10 rounded-3xl p-8 shadow-xl border border-river-blue/20">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="relative">
                    <img
                      src="/images/speakers/Dr_Mohd.webp"
                      alt="Dr. Mohammad Ashaq Malik"
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue">
                      Dr. Mohammad Ashaq Malik
                    </h2>
                    <div className="flex items-center space-x-2 bg-deep-orange/10 px-3 py-1 rounded-full">
                      <MapPin className="h-4 w-4 text-deep-orange" />
                      <span className="text-sm font-bold text-deep-orange">India/Sudan</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-charcoal font-lora">


                    <p>
                      Dr. Mohammad Ashaq Malik is an Associate Professor of Botany in Higher Education Department of
                      Jammu and Kashmir Government presently posted in Govt Degree College Thannamandi, J&K, India.
                      Currently he is also serving as an Adjunct Professor at the University of Gondar, Ethiopia.
                    </p>

                    <p>
                      He has completed his M,Sc., M.Phil. and Ph. D degrees in Botany with specialization in Plant
                      Virology from Aligarh Muslim University, Aligarh, India in 1992, 1993 and 1997 respectively.
                      Besides this he holds Ph.D (Honorary) in Gandhian Philosophy, D. Litt (H), M. A in Mass
                      Communication, Two Years PG Diploma (Equivalent to MA) in Human Rights as well as completed over 2
                      dozen certificates/Diploma courses in Peacebuilding and humanitarian affairs form various reputed
                      international institutes. He is also certified trainer of Kingian Nonviolence from USA.
                    </p>

                    <p>
                      Dr. Ashaq served in Eritrea for 8 eights between 2000-2008, finally as Director of Research
                      (2006-2008) at Eritrea Institute of Technology, Asmara, State of Eritrea. He has also served on
                      variety of assignments for about 30 development organizations including a dozen UN
                      offices/organizations worldwide and engaged in peacebuilding works for past 25 years with a
                      special focus on promotion and introduction of Peace Education.
                    </p>

                    <p>
                      Dr. Malik has 30 books, 100 book chapters, 44 Research papers, 40 patents and over 50 popular
                      articles to his credit. He has edited over 100 issues of magazines and newsletters for various
                      organizations. Several of his publications on Refugees and volunteerism have been translated in
                      French, Portuguese and Spanish.
                    </p>

                    <p>
                      He is the commission member of 5 IUCN (International Union for Conservation of Nature) commissions
                      at present. He has presented papers and served as resource person, invited speaker, keynote
                      speaker in over 200 conferences/seminars/workshops etc both within India and abroad in about 25
                      countries. He has organized dozens of international and national conferences/seminars, workshops,
                      FDPs. He is Reviewer/Editor/Editorial board member/fellow of about three dozen national and
                      international peer reviewed and Scopus/Web of science/Springer journals and societies. He is also
                      recipient several national and international awards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Dr. Zelalem Yirga Biwota */}
          <section id="zelalem-biwota" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-warm-gold/5 to-river-blue/10 rounded-3xl p-8 shadow-xl border border-warm-gold/20">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="relative">
                    <img
                      src="/images/speakers/Dr_Zelalem.jpeg"
                      alt="Dr. Zelalem Yirga Biwota"
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <h2 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue">
                      Dr. Zelalem Yirga Biwota
                    </h2>
                    <div className="flex items-center space-x-2 bg-deep-orange/10 px-3 py-1 rounded-full">
                      <MapPin className="h-4 w-4 text-deep-orange" />
                      <span className="text-sm font-bold text-deep-orange">Ethiopia</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-charcoal font-lora">


                    <p>
                      Public health specialist,Health care leader,Expert refugee and returnee health advisor,Ethiopian traditional school of thoughts  Scholar

                    </p>

                  </div>
                </div>
              </div>
            </div>
          </section>


        </div>
      </main>

      <Footer />
    </div>
  )
}
