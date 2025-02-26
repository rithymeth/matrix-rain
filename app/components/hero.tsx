import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">Enter the Matrix</h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl">
        Dive into the digital realm where reality bends and code reigns supreme.
      </p>
      <div className="space-y-4 md:space-y-0 md:space-x-4">
        <Button className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300">
          Take the Red Pill
        </Button>
        <Button
          variant="outline"
          className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
        >
          Learn More
        </Button>
      </div>
    </section>
  )
}

export default Hero

