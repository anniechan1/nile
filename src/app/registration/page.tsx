
"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Footer from "@/components/footer"
import MainNav from "@/components/main-nav"
export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "" })
      } else {
        const errorData = await response.json()
        setError(errorData.error || "Registration failed. Please try again.")
      }
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/map.webp')" }}>
      <main className="container mx-auto px-4 py-16">
        <MainNav />
        {/* Registration Section */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Registration Form */}
            <div>


              {isSubmitted ? (
                <div className="bg-gradient-to-br from-warm-gold-10 to-sand rounded-3xl p-8 shadow-2xl">
                  <div className="w-16 h-16 bg-warm-gold rounded-full flex items-center justify-center shadow-xl mb-6">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-river-blue mb-4">Registration Successful!</h3>
                  <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium">
                    Thank you for registering. We will send you more details about the summit soon.
                  </p>
                </div>
              ) : (


                <div className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                  {/* <div className="mb-12"> */}
                  <h1 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-river-blue mb-6 leading-tight">
                    Secure Your Place
                  </h1>
                  <p className="font-lora text-base md:text-lg text-charcoal leading-relaxed font-medium mb-10">
                    Complete your registration for the Children of the Nile Summit taking place on 6–7 September 2025 in
                    Addis Ababa, Ethiopia.
                  </p>
                  {/* </div> */}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">{error}</div>
                    )}

                    <div>
                      <label htmlFor="name" className="block font-playfair text-lg font-bold text-river-blue mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-[500px] px-4 py-2 border-2 border-warm-gold-30 rounded-xl focus:border-deep-orange focus:outline-none font-lora text-base text-charcoal bg-white/80 backdrop-blur-sm"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-playfair text-lg font-bold text-river-blue mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border-2 border-warm-gold-30 rounded-xl focus:border-deep-orange focus:outline-none font-lora text-base text-charcoal bg-white/80 backdrop-blur-sm"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="pt-4 flex justify-center">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-deep-orange hover:bg-deep-orange-dark text-rich-white font-bold px-4 py-2 text-base rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-merriweather disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Registering..." : "Complete Registration"}
                        {!isSubmitting && <ArrowRight className="h-4 w-4 ml-2" />}
                      </Button>
                    </div>
                  </form>

                  <div className="mt-8 pt-6 border-t border-warm-gold-30">
                    <p className="font-lora text-sm text-charcoal text-center leading-relaxed">
                      By registering, you agree to receive updates about the Children of the Nile Summit. We respect
                      your privacy and will not share your information with third parties.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side - Poster Image */}
            <div className="relative mt-28">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/poster.jpeg"
                  alt="Children of the Nile Summit Registration Poster"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
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
