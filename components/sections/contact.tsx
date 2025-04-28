import { ArrowRight } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-16 md:py-24 bg-[#0C49E7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div>
            <h2 className="text-xl font-bold text-white md:text-2xl">STILL HAVE DOUBTS?</h2>
          </div>
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-bold text-white md:text-2xl">Contact us</h3>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0C49E7]">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
