import Image from "next/image"
import Button from "../ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-form-tr bg-gradient-to-tr from-[#EBF1FF] via-[#0649E7] to-[#101010] pt-24 pb-16 md:pt-32 md:pb-24">
        
      <div className="container  mx-auto ml-11 mt-14 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className=" text-4xl font-semibold tracking-tighter text-white md:text-[80px] lg:text-[80px] lg:leading-[1.1]">
              Land job interviews <span className="text-[#0649E7]">10x</span> faster
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Leverage AI to optimize your job search, improve your resume, and land more interviews.
            </p>
            
            <div className="pt-4">
                
                <Button/>
                
            </div>          
        
        </div>
        
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                src="/image 1.png"
                alt="Job Search Trends eBook"
                width={300}
                height={400}
                className="relative z-10 pt-11"
              />
              <div className="absolute  h-24 w-24 z-50 -right-9 top-90 rounded-full border-2 stroke-1 border-white/20   backdrop-blur-[14px]">
              <Image
              src="/notebook.png" 
              alt="notebook"
              height={100}
              width={100}
              className="max-w-14 mt-4 mx-5 "/>
                
              </div>
              <div className=" mx-11 pt-11 text-xl text-white">Download Free E-Book</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
