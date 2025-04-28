import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="absolute top-0 z-10 w-full py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Image 
                src="/Group 24.png" 
                alt="MobiusEngine Logo" 
                width={200} 
                height={200}
                className="" />
                
        </div>
        <nav className="hidden dmSans md:flex items-center text-white space-x-12">
          <Link href="/" className="hover:text-[#021183]">Home</Link>
          
          <Link href="#about" className="hover:text-[#021183]">About Us</Link>
          
          <Link href="#plans" className="hover:text-[#021183]">Plans</Link>
          
          <Link href="#testimonials" className="hover:text-[#021183]">Testimonials</Link>
          
          <Link href="#privacy" className="hover:text-[#021183]">Privacy Policy</Link>
         
          <div className="relative">
            <button className="flex items-center text-white hover:text-white/80">
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </nav>
        <Link
          href="#get-started"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#022183] hover:bg-[#022183] hover:text-white transition-colors"
        >
          Get Started
        </Link>
      </div>
    </header>
  )
}
