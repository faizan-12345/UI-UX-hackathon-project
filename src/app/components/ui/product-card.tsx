import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  name: string;
  price: string;
  imageUrl: string;
  href: string;
}

export function ProductCard({ name, price, imageUrl, href }: ProductCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-square md:aspect-[3/4] w-full overflow-hidden bg-[#F9F9F9] mb-3 md:mb-6">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
        />
      </div>
      <h3 className="font-['Clash_Display'] text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#2A254B] font-normal">
        {name}
      </h3>
      <p className="font-['Clash_Display'] text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#2A254B]">
        £{price}
      </p>
    </Link>
  );
}
