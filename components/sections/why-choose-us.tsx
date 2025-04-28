import Image from "next/image";

export default function WhyChooseUs() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="mb-12 ml-11 text-left  text-2xl font-medium text-[#022183] md:text-3xl">
                    Why Choose Us?
                </h2>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            icon: "/handshake.png",
                            alt: "Heart Icon",
                            title: "Tried, Tested, Trusted",
                            description:
                                "Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.",
                        },
                        {
                            icon: "/Person.png",
                            alt: "Users Icon",
                            title: "Real People, Real Help",
                            description:
                                "A hands-on team that actually cares — guiding you through every twist in your career path.",
                        },
                        {
                            icon: "/Star 1.png",
                            alt: "Star Icon",
                            title: "Beat the Line",
                            description:
                                "We search, shortlist, and apply for you, so your name shows up first — every single day.",
                        },
                    ].map((item, index) => (
                        <div 
                            key={index}
                            className="flex items-center justify-center"
                        >
                            <div className="w-full max-w-xs h-auto border-2 border-[#0033CC] rounded-4xl p-6 text-[#0033CC] flex flex-col items-start space-y-8">
                                {/* Icon */}
                                <div className="mb-8">
                                    <Image src={item.icon} alt={item.alt} width={44} height={44} />
                                </div>

                                {/* Title */}
                                <h2 className="font-semibold text-lg">
                                    {item.title}
                                </h2>

                                {/* Description */}
                                <p className="text-sm text-[#0033CC]">
                                    {item.description}
                                </p>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
