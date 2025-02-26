import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  return (
    <section className="relative z-10 py-16 bg-black bg-opacity-80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border-green-500 text-green-500 placeholder-green-500"
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border-green-500 text-green-500 placeholder-green-500"
            />
          </div>
          <div className="mb-4">
            <Textarea
              placeholder="Your Message"
              className="bg-transparent border-green-500 text-green-500 placeholder-green-500"
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-black">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Contact

