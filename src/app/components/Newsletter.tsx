import Image from "next/image";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative w-full h-[400px] lg:h-[480px] overflow-hidden mt-24 lg:mt-32">
      {/* Background Image */}
      <Image
        src="/images/email.jpg"
        alt="Newsletter background"
        fill
        className="object-cover object-center brightness-90"
        priority
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-full max-w-[343px] lg:max-w-[640px] mx-auto text-center text-white px-4 lg:px-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Title */}
          <h2 className="font-['Clash_Display'] text-[20px] lg:text-[32px] leading-[28px] lg:leading-[40px] font-normal mb-2">
            Join the club and get the benefits
          </h2>

          {/* Description */}
          <p className="text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] text-white/80 mb-6">
            Sign up for our newsletter and receive exclusive offers on
            <br className="hidden lg:block" /> new ranges, sales, pop up stores, and more
          </p>

          {/* Benefits */}
          <div className="flex flex-col gap-3 mb-6 lg:gap-8 lg:flex-row items-start lg:items-center justify-center">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              <span className="text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px] whitespace-nowrap">
                Exclusive offers
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              <span className="text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px] whitespace-nowrap">
                Free events
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white" />
              <span className="text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px] whitespace-nowrap">
                Large discounts
              </span>
            </div>
          </div>

          {/* Email Input */}
          <div className="flex flex-col max-w-[343px] lg:max-w-[472px] mx-auto gap-4 lg:flex-row lg:gap-0">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 h-[48px] px-6 text-[14px] leading-[21px] text-black/60 outline-none border-0 focus:ring-0 placeholder:text-black/60"
            />
            <Button
              className="h-[48px] px-8 bg-[#2A254B] hover:bg-[#2A254B]/90 text-[14px] leading-[21px] font-['Clash_Display']"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
