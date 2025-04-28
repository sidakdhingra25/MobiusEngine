import BlueBox1 from "./BlueBox1"

import PromoCard from "../ui/cards"

export default function PricingPlans() {
  return (
    <section id="plans" className=" bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-32 text-left font-sans text-2xl font-medium text-[#022183] md:text-4xl">
          Job Application Service Plans
        </h2>
        <div className="grid gap-2 md:grid-cols-3">
          {[
            {
              title: "April Promo",
              price: "$35",
              period: "/week",
              features: [
                "Curated jobs from 1M+ listings, refreshed every 48 hours",
                "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
                "Need more? Add extra apps for just $1.5 each",
                "Your own dedicated application analyst",
                "Personalized with up to 10 filters & 5 job titles",
              ],
            },
            {
              title: "Starter",
              price: "$50",
              period: "/week",
              features: [
                "All the perks of the Promo Plan, plus:",
                "Resume review & story-focused feedback",
                "Up to 50 job apps/week",
                "Extra apps at $1.5 each",
                "Analyst support within 6 hours (SLA/PST hours)",
              ],
            },
            {
              title: "plus",
              price: "$100",
              period: "/week",
              features: [
                "Everything in Starter, with more muscle:",
                "Up to 75 apps/week",
                "Apply to 15 job titles",
                "Analyst + full application team on Pacific hours",
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
        <BlueBox1/>
      </div>
    </section>
  )
}
