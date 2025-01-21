"use client";  // Mark this as a Client Component

import { CartProvider } from "use-shopping-cart"; // Import CartProvider

interface CartProviderWrapperProps {
  children: React.ReactNode; // Explicitly define the type of 'children'
}

export function CartProviderWrapper({ children }: CartProviderWrapperProps) {
  return (
    <CartProvider
      mode="payment" // Payment mode for Stripe
      cartMode="client-only" // Persist cart in local storage
      stripe="sk_test_51QjaSsGmJKXJmKeCI3tqH3rT7g7NWAZ33GyRS3ExbWMP7bwGVzyrcuj61KU1wqXpp9btELenr4lE63zTWkyYNJ1900VvyMhvzW" // Replace with your actual Stripe key
      successUrl="http://localhost:3000/success" // Stripe success URL
      cancelUrl="http://localhost:3000" // Stripe cancel URL
      currency="USD" // Your currency
      allowedCountries={['US', 'GB', 'CA']} // Allowed countries
      billingAddressCollection={true} // Collect billing address
      shouldPersist={true} // Persist cart across page reloads
    >
      {children}
    </CartProvider>
  );
}
