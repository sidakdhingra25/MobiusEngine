import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex py-24 items-center justify-between bg-[#0649E7] rounded-4xl px-8">
          {/* Left Text */}
          <h2 className="text-lg font-semibold text-white md:text-2xl">
            STILL HAVE <br /> DOUBTS?
          </h2>

          {/* Center Text */}
          <h3 className="text-3xl font-bold text-white md:text-6xl text-center flex-1">
            Contact us
          </h3>

          {/* Right Arrow Button */}
          <div className="flex items-center justify-center bg-white hover:bg-[#0649E7] rounded-full h-14 w-14">
            <ArrowRight className="h-6 w-6 text-[#0C49E7] hover:text-[#FEFEFE]" />
          </div>
        </div>
      </div>
    </section>
  );
}
