import Link from "next/link"
import { Button } from "@/components/ui/button"

const Content = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
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
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Cybersecurity", "AI Integration", "Virtual Reality"].map((feature, index) => (
          <div
            key={index}
            className="border border-green-500 rounded-lg p-6 hover:bg-green-500 hover:text-black transition-colors duration-300"
          >
            <h2 className="text-2xl font-bold mb-4">{feature}</h2>
            <p>Experience the cutting-edge technology that defines the Matrix.</p>
          </div>
        ))}
      </div>
      <footer className="absolute bottom-4 left-0 right-0 text-center">
        <p>&copy; {new Date().getFullYear()} Matrix Code Systems. All rights reserved.</p>
        <nav className="mt-2">
          <Link href="#" className="hover:underline mx-2">
            Privacy
          </Link>
          <Link href="#" className="hover:underline mx-2">
            Terms
          </Link>
          <Link href="#" className="hover:underline mx-2">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

export default Content

