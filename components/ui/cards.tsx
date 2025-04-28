import { CheckCircle } from "lucide-react";
import Button from "./button";

type PromoCardProps = {
  title: string;
  price: string;
  period: string;
  features: string[];

};

export default function PromoCard({
  title,
  price,
  period,
  features,

}: PromoCardProps) {
  return (
    <div className=" md:h-min max-w-sm bg-white border border-[#0033CC] rounded-2xl p-6 flex flex-col space-y-4 text-left">
      
      {/* Title */}
      <h2 className="text-[#0033CC]  text-lg font-semibold">{title}</h2>

      {/* Price */}
      <div className="text-[#0033CC] mt-4 mb-8 text-6xl font-bold">
        {price}
        <span className="text-xl font-bold">/{period}</span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-2" />

      {/* Features List */}
      <ul className="space-y-3">
        {features.map((text, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
            <span className="text-sm text-[#0033CC]">{text}</span>
          </li>
        ))}
      </ul>

      <Button/>
    </div>
  );
}
