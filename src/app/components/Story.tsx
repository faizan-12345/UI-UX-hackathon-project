import Image from "next/image";
import { Button } from "./ui/button";

export default function Story() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 max-w-[1440px] mx-auto">
      {/* Mobile Container */}
      <div className="block lg:hidden w-full">
        <div className="w-full max-w-[343px] mx-auto flex flex-col space-y-6">
          {/* Blue Box Mobile */}
          <div className="bg-[#2A254B] text-white px-6 py-8 flex flex-col min-h-[156px]">
            <div className="space-y-2">
              <h2 className="font-['Clash_Display'] text-[20px] leading-[24px] font-normal">
                It started with a small idea
              </h2>
              <p className="text-[14px] leading-[20px] text-[#F9F9F9]/80 font-normal">
                A global brand with local beginnings, our story began in a small studio in South London in early 2014
              </p>
            </div>
            <div className="mt-auto pt-6">
              <Button
                variant="secondary"
                className="font-['Clash_Display'] text-[14px] leading-[20px] h-[48px] w-full px-0 bg-[#F9F9F9]/10 hover:bg-[#F9F9F9]/20 text-white border-none"
              >
                View collection
              </Button>
            </div>
          </div>

          {/* Image Mobile */}
          <div className="relative h-[200px] w-full">
            <Image
              src="/images/feature.jpg"
              alt="Modern interior with yellow chair"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 col-span-2 gap-4">
        {/* Left Content */}
        <div className="bg-[#2A254B] text-white p-12 flex flex-col justify-between min-h-[500px]">
          <div className="max-w-[400px]">
            <h2 className="font-['Clash_Display'] text-[24px] leading-[32px] font-normal mb-3">
              It started with a small idea
            </h2>
            <p className="text-[16px] leading-[24px] text-[#F9F9F9]/80 font-normal">
              A global brand with local beginnings, our story began in a small studio in South London in early 2014
            </p>
          </div>
          <Button
            variant="secondary"
            className="font-['Clash_Display'] text-[16px] leading-[24px] h-[56px] px-8 bg-[#F9F9F9]/10 hover:bg-[#F9F9F9]/20 text-white border-none w-fit"
          >
            View collection
          </Button>
        </div>

        {/* Right Image */}
        <div className="relative h-[500px]">
          <Image
            src="/images/feature.jpg"
            alt="Modern interior with yellow chair"
            fill
            className="object-cover object-center"
            sizes="50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
