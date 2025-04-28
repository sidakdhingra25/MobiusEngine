import React from "react";
import Button from "../ui/button";
import Image from "next/image";

export default function BlueBox1() {
  const plans = [
    {
      title: "Advance",
      desciption: "Top-tier support for serious job hunters:",
      price: "$150",
      period: "month",
      features: [
        "Everything in Plus Plan",
        "Custom Resumes & Cover Letters",
        "20 fully customized applications/week",
        "Help with complex job searches",
        "Access to senior resume experts, Founder & Exec Coaches",
      ],
    },
  ];

  return (
    <div className="flex flex-col max-w-7xl items-center  p-8">

      {plans.map((plan, index) => (
        <div key={index} className="mt-8 flex justify-center w-full">
          <div className="rounded-4xl min-w-full bg-[#0C49E7] p-6 text-white max-w-lg w-full">
            <div className="grid gap-6 md:grid-cols-2">
              
              {/* Left Side */}
              <div>
                <h3 className=" text-2xl font-bold">{plan.title}</h3>
                
                <p className="mb-8 text-sm">{plan.desciption}</p>
                
                <div className="border-t w-80 mb-8 border-gray-300 " />
                
                <div className=" grid grid-col-2 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      
                        <Image
                        src="/tick.png"
                        alt="Tick Icon"
                        height={100}
                        width={100}
                        className="w-3 h-3 text-green-500 mt-1 mr-4"
                        />
                          <span className="text-sm">{feature}</span>
                        
                      
                    </li>
                  ))}
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col items-end justify-between">
                <div className="text-right">
                  <h3 className="text-4xl font-bold">
                    {plan.price}
                    <span className="text-sm font-normal">/{plan.period}</span>
                  </h3>
                </div>
                
                <div>
                    <Button/>
                </div>
                
              </div>

            </div>
          </div>
        </div>
      ))}

    </div>
  );
}
