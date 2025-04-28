import Button from "./button";
import Image from "next/image";

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
    <div className=" md:h-full max-w-sm bg-white border-2 border-[#0033CC] rounded-4xl p-6 flex flex-col space-y-4 text-left">
      
      {/* Title */}
      <h2 className="text-[#0033CC] text-3xl font-semibold">{title}</h2>

      {/* Price */}
      <div className="text-[#0033CC] mt-4 mb-8 text-6xl font-bold">
        {price}
        <span className="text-2xl font-bold">{period}</span>
      </div>

      {/* Divider */}
      <div className="border-t mb-8 border-gray-300 my-2" />

      {/* Features List */}
      <ul className=" mb-11 space-y-3">
        {features.map((text, index) => (
          <li key={index} className="flex items-start gap-2">
            <Image
            src="/tick.png"
            alt="Tick Icon"
            height={100}
            width={100}
             className="w-5 h-5 text-green-500 mt-1" />
            <span className="text-xl max-w-[277px] text-[#0033CC]">{text}</span>
          </li>
        ))}
      </ul>
        <div className="mt-auto  flex items-baseline justify-baseline">
            <Button />
        </div>
    </div>
  );
}
