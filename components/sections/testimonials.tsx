import { ArrowUpRight } from "lucide-react"; 
import Button from "../ui/button";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="mb-12 ml-11 text-left font-sans text-2xl font-medium text-[#0649E7] md:text-3xl">
                    What our clients have to say
                </h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {[{
                        index: "1",
                        position: "Holly is a senior executive who got over 10 job interviews and an offer she accepted"
                    }, {
                        index: "2",
                        position: "Holly is a senior executive who got over 10 job interviews and an offer she accepted"
                    }, {
                        index: "3",
                        position: "Holly is a senior executive who got over 10 job interviews and an offer she accepted"
                    }].map(({ index, position }) => (
                        <div
                            key={`testimonial-${index}`}
                            className="rounded-[20px] overflow-x-hidden w-[308px] bg-[#0649E7] h-96 ">
                                
                            {/* White Box */}
                            
                            <div className="bg-white m-0.5 flex  rounded-[20px] min-h-48 w-[303px]  flex-col justify-center items-center gap-4">
                                
                                <div className="flex justify-center items-center w-14 h-14 bg-[#0649E7] rounded-full">
                                    <button className="text-white text-2xl">
                                    &#9658;
                                    </button>
                                </div>
                            </div>

                            {/* Blue Box */}
                            <div className="bg-[#0649E7] p-6 rounded-b-xl relative">
                                <p className="text-white text-sm mb-8">
                                    {position}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Buttons */}
                    <div className="flex flex-row justify-center space-x-12 mt-11 w-full">
                        <button className="flex items-center gap-2 px-6 py-2 border border-[#0649E7] text-[#0649E7] rounded-full text-sm font-medium hover:bg-blue-200 transition">
                            More customer testimonials
                            <ArrowUpRight className="w-4 h-4" />
                        </button>

                        <Button />
                    </div>
                </div>
            </div>
        </section>
    );
}
