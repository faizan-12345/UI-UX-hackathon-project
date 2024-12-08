'use client';

import Link from 'next/link';
import Button from './Button';
import { Menu, ShoppingCart, User, X, Truck } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  // Restore banner state on page load
  useEffect(() => {
    setShowBanner(true);
  }, []);

  const navigationLinks = [
    { href: '/plant-pots', label: 'Plant pots' },
    { href: '/ceramics', label: 'Ceramics' },
    { href: '/tables', label: 'Tables' },
    { href: '/chairs', label: 'Chairs' },
    { href: '/crockery', label: 'Crockery' },
    { href: '/tableware', label: 'Tableware' },
    { href: '/cutlery', label: 'Cutlery' },
  ];

  const headerLinks = [
    { href: '/about', label: 'About us' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <>
      {/* Promotional Banner */}
      {showBanner && (
        <div className="bg-[#2A254B] text-white py-2.5 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 sm:h-4 sm:w-4 flex-shrink-0 text-white" />
                <span className="text-xs sm:text-sm">
                  Free delivery on all orders over £50 with code easter checkout
                </span>
              </div>
            </div>
            <Button
              variant="ghost"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setShowBanner(false)}
            >
              <X className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
      )}

      <nav className="border-b border-gray-200">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <Button variant="ghost" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </Button>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Menu className="h-5 w-5 text-gray-600" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white">
                  <div className="flex flex-col space-y-6 mt-8">
                    {headerLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200 px-2 py-1.5 rounded-md hover:bg-gray-50"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo */}
            <Link href="/" className="font-bold text-xl text-gray-800 font-satoshi">
              Avion
            </Link>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
              </Button>
              <Button variant="ghost" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User className="h-5 w-5 text-gray-600" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Links Slider */}
          <div className="border-t border-gray-200 py-3">
            <Swiper
              spaceBetween={20}
              slidesPerView="auto"
              className="px-4"
            >
              {navigationLinks.map((link) => (
                <SwiperSlide key={link.href} className="!w-auto">
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-800 text-sm whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          {/* Top Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                {/* Search Icon */}
                <Button variant="ghost" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </Button>
              </div>

              {/* Logo Section */}
              <Link href="/" className="font-bold text-2xl text-gray-800 font-satoshi absolute left-1/2 transform -translate-x-1/2">
                Avion
              </Link>

              {/* Right Section with Icons and Links */}
              <div className="flex items-center space-x-6">
                {/* Navigation Links */}
                {headerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-gray-800 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Icons */}
                <Button variant="ghost" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <ShoppingCart className="h-5 w-5 text-gray-600" />
                </Button>
                <Button variant="ghost" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <User className="h-5 w-5 text-gray-600" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section with Navigation Links */}
          <div className="border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center items-center py-4">
                <div className="flex items-center space-x-12">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-gray-600 hover:text-gray-800 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
