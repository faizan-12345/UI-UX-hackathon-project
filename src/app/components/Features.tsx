import { Truck, CheckCircle, CreditCard, Sprout } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Truck,
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard"
  },
  {
    icon: CheckCircle,
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftmanship"
  },
  {
    icon: CreditCard,
    title: "Unbeatable prices",
    description: "For our materials and quality you won't find better prices anywhere"
  },
  {
    icon: Sprout,
    title: "Recycled packaging",
    description: "We use 100% recycled to ensure our footprint is more manageable"
  }
];

export default function Features() {
  return (
    <section className="py-16 px-4 md:py-20 md:px-20 max-w-[1440px] mx-auto">
      <h2 className="font-['Clash_Display'] text-[24px] md:text-[32px] leading-[42px] text-[#2A254B] text-center font-normal mb-12">
        What makes our brand different
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
