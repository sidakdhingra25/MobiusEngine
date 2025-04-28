import { ArrowUpRight } from "lucide-react"; // Importing ArrowUpRight from lucide-react
import Button from "../ui/button";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="mb-12 text-center font-sans text-2xl font-medium text-[#022183] md:text-3xl">
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
                            className="max-w-full sm:max-w-sm overflow-visible rounded-[20px] border-2 border-[#0649E7] bg-white">
                            
                            <div className="flex flex-col justify-center items-center bg-white h-64">
                                <div className="flex justify-center items-center w-14 h-14 bg-[#0649E7] rounded-full">
                                    <button className="text-white text-2xl">
                                        &#9658;
                                    </button>
                                </div>
                            </div>
                            
                            <div 
                                className="bg-blue-600 text-white p-6 rounded-b-[30px] relative">
                                <p className="text-lg">{position}</p>
                                
                                <div className="absolute bottom-6 right-6">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        <ArrowUpRight className="text-blue-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    <div className="flex  flex-row justify-center space-x-12 mt-11 w-full">
                        <button className="flex items-center gap-2 px-6 py-2 border border-blue-600 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition">
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
