
import PromoCard from "../ui/cards"

export default function PricingPlans() {
  return (
    <section id="plans" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center font-sans text-2xl font-medium text-[#022183] md:text-3xl">
          Job Application Service Plans
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "April Promo",
              price: "$35",
              period: "week",
              features: [
                "Curated jobs from 1M+ listings, refreshed every 48 hours",
                "Weekly check-ins",
                "Access to job application resources",
                "Personalized job search strategy",
              ],
            },
            {
              title: "Starter",
              price: "$50",
              period: "week",
              features: [
                "Everything in Basic Plan",
                "Monthly 1-on-1 coaching sessions",
                "Access to exclusive job listings",
                "Priority support",
              ],
            },
            {
              title: "plus",
              price: "$100",
              period: "week",
              features: [
                "Everything in Plus Plan",
                "Unlimited applications",
                "Weekly 1-on-1 coaching sessions",
                "Access to exclusive industry insights",
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
          
          
           
          
        <div className="mt-8 flex justify-center">
          <div className="rounded-lg bg-[#0C49E7] p-6 text-white max-w-lg w-full">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
            <h3 className="mb-4 text-2xl font-bold">Advanced</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="mr-2 h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm">Everything in Plus Plan</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-2 h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm">Unlimited applications</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="mr-2 h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm">Weekly 1-on-1 coaching sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-sm">Access to exclusive industry insights</span>
              </li>
            </ul>
              </div>
              <div className="flex flex-col items-end justify-between">
            <div className="text-right">
              <h3 className="text-2xl font-bold">
                $150<span className="text-sm font-normal">/month</span>
              </h3>
            </div>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#0C49E7] hover:bg-white/90">
              Get Started →
            </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
