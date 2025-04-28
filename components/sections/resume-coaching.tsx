import PromoCard from "../ui/cards";

export default function ResumeCoaching() {
    return (
        <section className="py-16 bg-white flex justify-center items-center">
            <div className="w-full">
                <div className="border-t w-full max-w-6xl mb-12 border-gray-300 mx-auto" />

                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="mb-4 text-left font-sans text-2xl font-medium text-[#022183] md:text-3xl">
                        Resume Building & Coaching
                    </h2>
                    <p className="mb-24 text-left text-gray-600">
                        Need more personalized help? Our experts can work with you one-on-one to perfect your job search materials.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center">
                        {[
                            {
                                title: "Resume Rebuild",
                                price: "$1000",
                                period: "One Time",
                                features: [
                                    "3× 30-min coaching ",
                                    "Focused on storytelling, not just formatting",
                                    "Tailored to your target industry, company, or role",
                                    "Direct work with our co-founder (ex-Google, JP Morgan)",
                                    "Executive coaching from UC Berkeley alum with 10+ yrs experience",
                                    "Resume Rebuild portfolio available upon request",
                                ],
                            },
                            {
                                title: "Starter",
                                price: "$50",
                                period: "week",
                                features: [
                                    "2× 45-min live coaching with our co-founder",
                                    "Real-time, practical feedback",
                                    "Build clarity, empathy & executive presence",
                                    "For senior and leadership roles — technical & non-technical",
                                ],
                            },
                        ].map((plan, index) => (
                            <PromoCard
                                key={index}
                                title={plan.title}
                                price={plan.price}
                                period={plan.period}
                                features={plan.features}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
