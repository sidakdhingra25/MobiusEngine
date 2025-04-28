import Navbar from "@/components/layout/navbar"
import Hero from "@/components/sections/hero"
import HowWeWork from "@/components/sections/how-we-work"
import AboutUs from "@/components/sections/about-us"
import Testimonials from "@/components/sections/testimonials"
import WhyChooseUs from "@/components/sections/why-choose-us"
import PricingPlans from "@/components/sections/pricing-plans"
import ResumeCoaching from "@/components/sections/resume-coaching"
import Contact from "@/components/sections/contact"
import Footer from "@/components/layout/footer"



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <HowWeWork />
      <AboutUs />
      <Testimonials />
      <WhyChooseUs />
      <PricingPlans />
      <ResumeCoaching />
      <Contact />
      <Footer />
    </div>
  )
}
