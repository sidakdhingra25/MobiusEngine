import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
  return (
    <section id="about" className=" bg-gradient-to-b from-[#101010] via-[#022183] to-[#0C49E7] py-16 md:py-24">
      <div className="container max-h-screen mx-auto px-4 md:px-6">
        
        <h2 className="mb-12 text-left mx-14 font-sans text-2xl font-medium text-white md:text-3xl">About Us</h2>
        
        <div className="flex flex-col items-center gap-14 md:grid-cols-2">
          <div className="flex flex-row items-center md:items-start">
            <div className="relative mb-4">
              <Image
                src="/Ashwin.png"
                alt="Team Member"
                width={250}
                height={250}
                className=""
              />
            </div>
            <div className=" mt-14 mx-18 max-w-lg text-white/90">
            <p>
              Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.</p>
​
            <p>Ashwin&apos;s vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.</p>

            </div>
          </div>
          <div className="flex flex-row items-center md:items-start">
            <div className="relative mb-4">
              <Image
                src="/Nicole.png"
                alt="Team Member"
                width={250}
                height={250}
                className=""
              />
            </div>
            <div className=" max-w-lg mx-18 mt-14 text-white/90">
              <p className="mb-6">
              <span className="font-bold">Nicole</span> is an Executive coach at Mobius specializing in resume builds and career advisory. 
              </p>
              
              <p>
              With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 ml-9 text-center text-white/70">
          <Link href="/">Learn more about our Board of Advisors​↗​</Link>
        </div>
        <div className="mt-8 -ml-6 text-center text-white/70">
          <Link href="/">Follow us on our Linkedin page ↗</Link>
        </div>
      </div>
    </section>
  )
}
