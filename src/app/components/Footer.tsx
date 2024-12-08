'use client';

import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="bg-[#2E2647] text-white">
      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Menu Section */}
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-lg font-semibold mb-6">Menu</h3>
          <ul className="space-y-4">
            <li><Link href="/new-arrivals" className="hover:text-gray-300 transition">New arrivals</Link></li>
            <li><Link href="/best-sellers" className="hover:text-gray-300 transition">Best sellers</Link></li>
            <li><Link href="/recently-viewed" className="hover:text-gray-300 transition">Recently viewed</Link></li>
            <li><Link href="/popular-this-week" className="hover:text-gray-300 transition">Popular this week</Link></li>
            <li><Link href="/all-products" className="hover:text-gray-300 transition">All products</Link></li>
          </ul>
        </div>

        {/* Categories Section */}
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-lg font-semibold mb-6">Categories</h3>
          <ul className="space-y-4">
            <li><Link href="/crockery" className="hover:text-gray-300 transition">Crockery</Link></li>
            <li><Link href="/furniture" className="hover:text-gray-300 transition">Furniture</Link></li>
            <li><Link href="/homeware" className="hover:text-gray-300 transition">Homeware</Link></li>
            <li><Link href="/plant-pots" className="hover:text-gray-300 transition">Plant pots</Link></li>
            <li><Link href="/chairs" className="hover:text-gray-300 transition">Chairs</Link></li>
          </ul>
        </div>

        {/* Our Company Section */}
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-lg font-semibold mb-6">Our company</h3>
          <ul className="space-y-4">
            <li><Link href="/about-us" className="hover:text-gray-300 transition">About us</Link></li>
            <li><Link href="/vacancies" className="hover:text-gray-300 transition">Vacancies</Link></li>
            <li><Link href="/contact-us" className="hover:text-gray-300 transition">Contact us</Link></li>
            <li><Link href="/privacy" className="hover:text-gray-300 transition">Privacy</Link></li>
            <li><Link href="/returns-policy" className="hover:text-gray-300 transition">Returns policy</Link></li>
          </ul>
        </div>

        {/* Mailing List Section */}
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-lg font-semibold mb-6">Join our mailing list</h3>
          <div className="flex flex-col lg:flex-row max-w-[472px]">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 h-[48px] px-6 text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] text-black/60 outline-none border-0 focus:ring-0 placeholder:text-black/60"
            />
            <Button 
              className="h-[48px] px-8 bg-[#A48BCD] hover:bg-[#8a75b3] text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] mt-4 lg:mt-0"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-6 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-400 text-sm text-center sm:text-left">&copy; 2024 Avion LTD</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaPinterest size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
