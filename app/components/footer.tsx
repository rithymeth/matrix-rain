import Link from "next/link"

const Footer = () => {
  return (
    <footer className="relative z-10 py-8 bg-black bg-opacity-90 border-t border-green-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Matrix Code Systems. All rights reserved.</p>
          <nav className="mt-4 md:mt-0">
            <Link href="#" className="hover:text-green-400 mx-2">
              Privacy
            </Link>
            <Link href="#" className="hover:text-green-400 mx-2">
              Terms
            </Link>
            <Link href="#" className="hover:text-green-400 mx-2">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer

