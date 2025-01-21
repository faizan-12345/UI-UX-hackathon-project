"use client"; // Mark this file as a Client Component

import { useShoppingCart } from "use-shopping-cart"; // Import the useShoppingCart hook
import Link from "next/link";
import Button from "./Button"; // If you have a Button component
// import { ShoppingCart as CartIcon } from "lucide-react";

export default function Cart() {
  const {
    cartDetails = {},
    totalPrice,
    removeItem,
    incrementItem,
    cartCount,
  } = useShoppingCart(); // Use incrementItem instead of updateItemQuantity

  // Handle Quantity Change
  const handleIncrease = (id: string) => {
    incrementItem(id); // Increment by 1
  };

  const handleDecrease = (id: string) => {
    const currentQuantity = cartDetails[id]?.quantity || 0;
    if (currentQuantity > 1) {
      incrementItem(id, { count: -1 }); // Decrement by 1 (negative count)
    } else {
      removeItem(id); // Remove item if quantity is 1
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>

      {cartCount === 0 ? (
        <div className="text-center text-xl text-gray-500">
          Your cart is empty. <Link href="/">Go back to shopping</Link>
        </div>
      ) : (
        <div>
          <div className="space-y-6">
            {Object.keys(cartDetails).map((id) => {
              const item = cartDetails[id];
              return (
                <div key={id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-sm text-gray-500">{item.description}</p>
                      <p className="text-lg text-gray-900 mt-1">£{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        onClick={() => handleDecrease(id)}
                        className="px-2 py-1 text-xl font-bold text-gray-700 bg-gray-200 rounded-full"
                      >
                        -
                      </Button>
                      <span className="text-lg">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        onClick={() => handleIncrease(id)}
                        className="px-2 py-1 text-xl font-bold text-gray-700 bg-gray-200 rounded-full"
                      >
                        +
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      onClick={() => removeItem(id)}
                      className="px-4 py-2 text-sm text-red-600 hover:bg-red-100 rounded-lg"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <p className="text-xl font-semibold">Total: £{totalPrice}</p>
            <Link href="/checkout">
              <Button variant="ghost" className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
