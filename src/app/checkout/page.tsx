// app/checkout/page.tsx
"use client"
import Link from "next/link";
import Button from "../components/Button"; // Import your Button component or create one for checkout

export default function Checkout() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>
      
      <div className="space-y-4">
        <p className="text-lg text-gray-700">Your order is ready to be processed.</p>
        
        <Link href="/cart">
          <Button variant="ghost" className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700">
            Back to Cart
          </Button>
        </Link>

        {/* Add additional checkout form or details here */}
        <div className="mt-4">
          <Button variant="ghost" className="px-6 py-3 text-white bg-green-600 hover:bg-green-700">
            Confirm Order
          </Button>
        </div>
      </div>
    </div>
  );
}
