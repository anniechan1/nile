import Link from "next/link"
import { Mail, Globe, Calendar, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-sand to-off-white relative overflow-hidden py-16">
      {/* Nile River Background Design */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footerRiverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c49b37" stopOpacity="0.4" />
              <stop offset="30%" stopColor="#e67e22" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#123456" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#c49b37" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="papyrusGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f8f1e7" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#e6d7c3" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d4c4a8" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Flowing river curves */}
          <path
            d="M0,200 Q300,120 600,200 T1200,180"
            stroke="url(#footerRiverGradient)"
            strokeWidth="40"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,220 Q250,140 500,220 T1000,200 Q1100,190 1200,200"
            stroke="url(#footerRiverGradient)"
            strokeWidth="25"
            fill="none"
            opacity="0.7"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Papyrus-like background elements */}
          <path
            d="M0,0 Q200,50 400,0 T800,20 Q1000,10 1200,0 L1200,100 Q1000,80 800,100 T400,80 Q200,120 0,80 Z"
            fill="url(#papyrusGradient)"
            opacity="0.5"
          />
          <path d="M0,300 Q300,250 600,300 T1200,280 L1200,400 L0,400 Z" fill="url(#papyrusGradient)" opacity="0.4" />
        </svg>
      </div>

      {/* Floating accent elements */}
      <div className="absolute top-8 left-1/4 w-3 h-3 bg-warm-gold rounded-full opacity-60 animate-bounce"></div>
      <div
        className="absolute top-12 right-1/3 w-2 h-2 bg-deep-orange rounded-full opacity-70 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-8 left-1/3 w-4 h-4 bg-river-blue rounded-full opacity-50 animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-river-blue mb-2">
              Children of the Nile – A Shared Present & Future
            </h3>
            <p className="font-lora text-lg md:text-xl text-charcoal font-medium">
              A summit uniting 11 Nile Basin nations through culture and collaboration.
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center space-x-2 text-river-blue">
              <Calendar className="h-5 w-5" />
              <span className="font-merriweather font-medium">6–7 September 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-river-blue">
              <MapPin className="h-5 w-5" />
              <span className="font-merriweather font-medium">Addis Ababa + Online</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <div className="flex items-center space-x-2 text-charcoal">
              <Mail className="h-5 w-5 text-warm-gold" />
              <span className="font-merriweather">Contact: MKM@ecopia.de</span>
            </div>
            <div className="flex items-center space-x-2 text-charcoal">
              <Globe className="h-5 w-5 text-warm-gold" />
              <span className="font-merriweather">Website: children-of-the-nile.org</span>
            </div>
          </div>

          {/* Decorative Separator */}
          <div className="flex justify-center mb-8">
            <div className="w-64 h-px bg-gradient-to-r from-transparent via-warm-gold to-transparent"></div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center space-x-6 md:space-x-12 text-base md:text-lg mb-8">
            <Link
              href="/about"
              className="text-river-blue hover:text-warm-gold transition-colors font-semibold font-merriweather"
            >
              About
            </Link>

            <Link
              href="/summit"
              className="text-river-blue hover:text-warm-gold transition-colors font-semibold font-merriweather"
            >
              Summit 2025
            </Link>
            <Link
              href="/registration"
              className="text-river-blue hover:text-warm-gold transition-colors font-semibold font-merriweather"
            >
              Registration
            </Link>
            <Link
              href="/voices-from-the-river"
              className="text-river-blue hover:text-warm-gold transition-colors font-semibold font-merriweather"
            >
              Voices from the River
            </Link>

          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-warm-gold/30 text-charcoal/70">
            <p className="font-merriweather text-sm md:text-base">
              © 2025 Children of the Nile
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
