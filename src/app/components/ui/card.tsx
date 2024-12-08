import { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div className="bg-[#F9F9F9] p-8 md:p-12 flex flex-col items-start text-left group hover:bg-[#F9F9F9]/80 transition-colors">
      <Icon className="w-6 h-6 text-[#2A254B] mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
      <h3 className="font-['Clash_Display'] text-[20px] leading-[28px] text-[#2A254B] font-normal mb-2">
        {title}
      </h3>
      <p className="font-['Clash_Display'] text-[16px] leading-[24px] text-[#5B5676]">
        {description}
      </p>
    </div>
  );
}
