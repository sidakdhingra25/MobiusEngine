import Link from "next/link"
import Image from "next/image"
import Button from "../ui/button"

export default function Navbar() {
  return (
    <header className="absolute top-0 z-10 w-full py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/"> <Image 
                src="/Group 24.png" 
                alt="MobiusEngine Logo" 
                width={200} 
                height={200}
                className="" />
                </Link>
        </div>
        <nav className="hidden dmSans md:flex items-center text-white space-x-12">
          <Link href="/" className="hover:text-[#021183]">Home</Link>
          
          <Link href="#about" className="hover:text-[#021183]">About Us</Link>
          
          <Link href="#plans" className="hover:text-[#021183]">Plans</Link>
          
          <Link href="#testimonials" className="hover:text-[#021183]">Testimonials</Link>
          
          <Link href="#privacy" className="hover:text-[#021183]">Privacy Policy</Link>
          
          <Link href="#privacy" className="flex hover:text-[#021183]">More
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
                className="ml-1 mt-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg></Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
        <Button/>
        </div>
        
      </div>
    </header>
  )
}
