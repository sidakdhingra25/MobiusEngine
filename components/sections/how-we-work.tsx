export default function HowWeWork() {
    return (
        <section className="py-16 md:py-24 bg-white">
            
            <div className="container mx-14 md:px-6">
            
                <h2 className="mb-12 text-left font-sans text-2xl font-medium text-[#0C49E7] md:text-3xl">
                    How we work?
                </h2>
                <div className="grid gap-8 md:grid-cols-4">
                    {[
                        {
                            step: "1",
                            title: "Submit Resume Form",
                        },
                        {
                            step: "2",
                            title: "We do the search and curation for list of jobs",
                        },
                        {
                            step: "3",
                            title: "You approve, we do the tedious part (applying)",
                        },
                        {
                            step: "4",
                            title: "You get the interviews",
                        }, ].map(({ step, title }) => (
                            
                        <div key={step} className="flex flex-col gap-4 items-start text-left">
                        
                            <div className="mb-4 flex h-18 w-18  items-center justify-center rounded-full border-2 border-[#0C49E7] text-[#101010]">
                        
                                <span className="text-5xl">{step}</span>
                        
                            </div>
                            <div className="w-40 h-0.5  bg-[#0649E7]"></div>
                        
                            <h3 className="mb-2 max-w-2xs text-xl font-bold text-[#0649E7]">{title}</h3>
                        
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}