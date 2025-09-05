"use client"
import Link from "next/link"
import { Calendar, Globe, ArrowLeft } from "lucide-react"





export default function DeeptiPoster() {
  // 11 Nile Basin countries flags
  const nileCountries = [
    { name: "Egypt", flag: "🇪🇬" },
    { name: "Sudan", flag: "🇸🇩" },
    { name: "South Sudan", flag: "🇸🇸" },
    { name: "Ethiopia", flag: "🇪🇹" },
    { name: "Uganda", flag: "🇺🇬" },
    { name: "Kenya", flag: "🇰🇪" },
    { name: "Tanzania", flag: "🇹🇿" },
    { name: "Rwanda", flag: "🇷🇼" },
    { name: "Burundi", flag: "🇧🇮" },
    { name: "DR Congo", flag: "🇨🇩" },
    { name: "Eritrea", flag: "🇪🇷" },
  ]
  const logos = [
    "/images/ecsoc.png",
    "/images/ecopia.png",
    "/images/BZE.png",
    "/images/assist.png",
    "/images/equal_trade.png",

    "/images/youth_council.png",
    "/images/el.png",
    "/images/ticker_tape.png"
  ]


  return (
    <>
      {/* Back to Program Link */}
      <div style={{ margin: "16px 0", textAlign: "left" }}>
        <Link href="/summit/program">
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "999px",
              background: "#d4af37",
              color: "#2c5aa0",
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
            }}
          >
            <ArrowLeft style={{ height: "16px", width: "16px" }} />
            Back to Program
          </span>
        </Link>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "768px",
          margin: "0 auto",
          background: "linear-gradient(to bottom, #2c5aa0, #e67e22, #2c5aa0)",
          position: "relative",
          overflow: "hidden",
          borderRadius: "16px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          minHeight: "900px",
        }}
      >


        <div style={{ position: "relative", zIndex: 10, padding: "32px", color: "#ffffff" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>

            <h1
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "48px",
                fontWeight: "bold",
                color: "#d4af37",
                marginBottom: "12px",
                lineHeight: "1.1",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              }}
            >
              Children of the Nile
            </h1>
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "24px",
                color: "#d4af37",
                marginBottom: "24px",
                fontStyle: "italic",
                fontWeight: "300",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
              }}
            >
              A Shared Future and Present
            </p>

            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "18px",
                color: "#ffffff",
                marginBottom: "24px",
                fontWeight: "400",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                lineHeight: "1.4",
                fontStyle: "italic",
              }}
            >
              "Fostering Unity Through Cultural Dialogue and Education"
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "12px",
                marginBottom: "32px",
                padding: "0 16px",
              }}
            >
              {nileCountries.map((country, index) => (
                <div
                  key={country.name}
                  style={{
                    fontSize: "32px",
                    transform: "scale(1)",
                    transition: "transform 0.2s",
                    filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))",
                  }}
                  title={country.name}
                >
                  {country.flag}
                </div>
              ))}
            </div>
          </div>
        </div>


        <div style={{ position: "absolute", bottom: "200px", left: "0", right: "0", height: "400px" }}>
          <img
            src="/images/nile-people.png"
            alt="nile ppl"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>




        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            background: "linear-gradient(to top, rgba(44, 62, 80, 0.95), rgba(44, 62, 80, 0.7), transparent)",
            padding: "32px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "3px solid #d4af37",
              margin: "0 auto 16px auto",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
            }}
          >
            <img
              src="/images/speakers/deepti_k.png"
              alt="Deepti Kataria"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          <h3
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "32px",
              fontWeight: "bold",
              color: "#d4af37",
              marginBottom: "8px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            Deepti Kataria
          </h3>
          <p
            style={{
              color: "#d4af37",
              fontWeight: "600",
              fontSize: "16px",
              marginBottom: "8px",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
              lineHeight: "1.4",
              maxWidth: "600px", // Limit the width
              margin: "0 auto 8px auto", // Center the text
            }}
          >
            General Secretary, Africa Study Centre, President of Indian Community Association in Egypt, Author, Engineer, Educator
          </p>
          <p
            style={{
              color: "#ffffff",
              fontSize: "14px",
              fontStyle: "italic",
              marginBottom: "16px",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
            }}
          >
            Guest Speaker from Egypt
          </p>

          <div
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px" }}
          >
            <Calendar style={{ height: "20px", width: "20px", color: "#d4af37" }} />
            <span
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                color: "#ffffff",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
              }}
            >
              6 September 2025 • Saturday
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
            <Globe style={{ height: "20px", width: "20px", color: "#d4af37" }} />
            <span
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#ffffff",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
              }}
            >
              Online Summit
            </span>
          </div>

          <div
            style={{
              marginTop: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap", // Prevent wrapping
              gap: "16px",
              overflowX: "auto", // Enable horizontal scrolling if needed
              paddingBottom: "8px", // Add some padding for better spacing
            }}
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                style={{
                  width: "80px",
                  height: "80px",

                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  overflow: "hidden",
                }}
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>

        </div>
        <div
          style={{
            position: "absolute",
            bottom: "8px", // Position it at the very bottom
            width: "100%",
            textAlign: "center",
            fontSize: "12px", // Small text
            color: "#ffffff",
            opacity: "0.7", // Make it subtle
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          <a
            href="https://children-of-the-nile.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            children-of-the-nile.org
          </a>
        </div>
      </div>
    </>
  )
}
