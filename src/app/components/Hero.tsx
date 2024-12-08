import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="bg-white p-8 pb-12">
          <div className="max-w-[335px] mx-auto">
            <h1 className="text-[26px] leading-[35px] font-normal text-[#2A254B] mb-6">
              Luxury homeware for people who love timeless design quality
            </h1>
            <p className="text-[14px] leading-[21px] text-[#5B5676] mb-4">
              With our new collection, view over 400 bespoke pieces from homeware through to furniture today
            </p>
            <Button asChild>
              <Link href="/collection">View collection</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[375px] w-full overflow-hidden">
          <div className="absolute inset-0 w-[120%] -left-[10%]">
            <Image
              src="https://s3-alpha-sig.figma.com/img/b062/f355/fa9b27255272d76e665cce4314b4aedb?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DixWWrqsemtj3S8EoYUwoBDz6ewq6Q0wLdFNqKYZzrQ96nO4PM7p7h87oPMUCBe~arheyKeEZeO0uY9DIFxBcaibJ0IVldW49BZXQLR-1hUdaRKfUrDRmJCc~czCh3Mm8NWD4OieerNtXf75BsB3nsveXCt3KNuu~J1Oy1ydG-9lyYmufZXkhY0unxv0nBkkM7S5g4EpbRJmdY3nIBuW1v3aMA6uI467cvwvTXtKp1m0ZfRs6j--c4U8oMcgnhUgTAwfBQP2fSqmIpfmus9iotvC43YFCbXcRHjjWl4-~VuKQ6-j0GqdB~N41WcAV7ftMMrpKB9dNBSmiDzVOeRA8w__"
              alt="Luxury homeware showcase"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block relative h-[600px]">
        {/* Background Image */}
        <Image
          src="https://s3-alpha-sig.figma.com/img/b062/f355/fa9b27255272d76e665cce4314b4aedb?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DixWWrqsemtj3S8EoYUwoBDz6ewq6Q0wLdFNqKYZzrQ96nO4PM7p7h87oPMUCBe~arheyKeEZeO0uY9DIFxBcaibJ0IVldW49BZXQLR-1hUdaRKfUrDRmJCc~czCh3Mm8NWD4OieerNtXf75BsB3nsveXCt3KNuu~J1Oy1ydG-9lyYmufZXkhY0unxv0nBkkM7S5g4EpbRJmdY3nIBuW1v3aMA6uI467cvwvTXtKp1m0ZfRs6j--c4U8oMcgnhUgTAwfBQP2fSqmIpfmus9iotvC43YFCbXcRHjjWl4-~VuKQ6-j0GqdB~N41WcAV7ftMMrpKB9dNBSmiDzVOeRA8w__"
          alt="Luxury homeware showcase"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Content Box */}
        <div className="absolute right-[15%] top-1/2 -translate-y-1/2">
          <div className="bg-white p-16 max-w-[460px] shadow-sm">
            <h1 className="text-[32px] leading-[42px] font-normal text-[#2A254B] mb-6">
              Luxury homeware for people who love timeless design quality
            </h1>
            <p className="text-[16px] leading-[24px] text-[#5B5676] mb-8">
              Shop the new Spring 2022 collection today
            </p>
            <Button asChild size="lg" className="w-[180px]">
              <Link href="/collection">View collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
