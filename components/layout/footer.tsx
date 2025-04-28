import { Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12">
        {/* Top - Logo */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">

            <Image
            src="/LogoFooter.png"
            alt="Mobius Logo"
            width={150}
            height={150}
            className="" />
          </div>

          <hr className="border-t border-gray-300 w-80" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-6 gap-8">

            <div className="flex flex-col md:flex-row gap-16">

              <div className="text-sm text-[#0649E7]">
                <p className=" mb-1">Address</p>
                <p>1875 Mission St Ste 103 #450</p>
                <p>San Francisco, CA 94103</p>
              </div>

              <div className="text-sm text-gray-800">
                <p className="text-[#0649E7] mb-1">Email</p>
                <a href="mailto:finance@mobiusengine.ai" className="text-[#0649E7] hover:underline">
                  finance@mobiusengine.ai
                </a>
              </div>


              <div className="text-sm text-gray-800">
                <p className="text-[#0649E7] mb-1">Telephone</p>
                <a href="tel:6508896026" className="text-[#0C49E7] hover:underline">
                  650-889-6026
                </a>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <p className="text-sm font-semibold text-[#0649E7] mb-2">Socials</p>
              <div className="flex space-x-4">
               
                <a href="#" className="flex items-center justify-center border border-[#0C49E7] rounded-full h-10 w-10 text-[#0C49E7]">
               
                  <Linkedin className="h-5 w-5" />
               
                </a>
               
                <a href="#" className="flex items-center justify-center border border-[#0C49E7] rounded-full h-10 w-10 text-[#0C49E7]">
               
                  <Linkedin className="h-5 w-5" />
               
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0C49E7] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-white text-sm">
          <p>© 2023 Mobiusservices LLC</p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
