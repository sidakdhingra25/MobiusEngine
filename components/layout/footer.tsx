import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="MobiusEngine Logo" width={24} height={24} className="h-6 w-6" />
              <span className="text-lg font-medium text-[#022183]">MobiusEngine</span>
            </div>
            <p className="mt-2 text-xs text-gray-500">© 2023 MobiusEngine.ai. All rights reserved.</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium text-[#022183]">Links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-[#0C49E7]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#0C49E7]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#plans" className="hover:text-[#0C49E7]">
                  Plans
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium text-[#022183]">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>hello@mobiusengine.ai</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium text-[#022183]">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="#" className="hover:text-[#0C49E7]">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#0C49E7]">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
