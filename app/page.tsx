import MatrixRain from "./components/matrix-rain"
import Hero from "./components/hero"
import Features from "./components/features"
import HowItWorks from "./components/how-it-works"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-green-500 font-mono relative overflow-hidden">
      <MatrixRain />
      <Hero />
      <Features />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  )
}

