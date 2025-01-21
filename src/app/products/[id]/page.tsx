// // src/app/products/[id]/page.tsx

// "use client"; // Mark the file as a Client Component

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation"; // Use useParams from next/navigation
// import Image from "next/image";

// // Sample products data (in a real project, you'd fetch this from a backend or a database)
// const products = [
//   {
//     id: 1,
//     name: "Rustic Vase Set",
//     price: "155",
//     imageUrl: "/images/product%232.jpg",
//     description: "A beautiful rustic vase set."
//   },
//   {
//     id: 2,
//     name: "The Lucy Lamp",
//     price: "399",
//     imageUrl: "/images/product%234.jpg",
//     description: "A modern lamp perfect for any room."
//   },
//   {
//     id: 3,
//     name: "The Silky Vase",
//     price: "125",
//     imageUrl: "/images/product%233.jpg",
//     description: "A sleek and elegant vase."
//   },
//   {
//     id: 4,
//     name: "The Dandy chair",
//     price: "250",
//     imageUrl: "/images/product%231.jpg",
//     description: "A stylish and comfortable chair."
//   }
// ];

// export default function ProductPage() {
//   const { id } = useParams(); // Extract `id` from URL parameters
//   const [product, setProduct] = useState<any>(null);

//   // Fetch the product based on the id when the component is mounted
//   useEffect(() => {
//     if (id) {
//       const productId = Number(id); // Convert id to number
//       const foundProduct = products.find((prod) => prod.id === productId);
//       setProduct(foundProduct);
//     }
//   }, [id]); // Re-run when `id` changes

//   // Loading state: wait for the product to be found
//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="product-page">
//       <h1>{product.name}</h1>
//       <div className="image-container">
//         <Image
//           src={product.imageUrl}
//           alt={product.name}
//           width={600}
//           height={600}
//           className="object-cover rounded-lg"
//         />
//       </div>
//       <p>{product.description}</p>
//       <p>Price: £{product.price}</p>
//     </div>
//   );
// }
// src/app/products/[id]/page.tsx

// src/app/products/[id]/page.tsx

////////////////////////////////////////////////

// "use client"; // Mark the file as a Client Component

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation"; // Use useParams from next/navigation
// import Image from "next/image";

// // Define the type for a product
// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   imageUrl: string;
//   description: string;
// }

// // Sample products data (in a real project, you'd fetch this from a backend or a database)
// const products: Product[] = [
//   {
//     id: 1,
//     name: "Rustic Vase Set",
//     price: "155",
//     imageUrl: "/images/product%232.jpg",
//     description: "A beautiful rustic vase set."
//   },
//   {
//     id: 2,
//     name: "The Lucy Lamp",
//     price: "399",
//     imageUrl: "/images/product%234.jpg",
//     description: "A modern lamp perfect for any room."
//   },
//   {
//     id: 3,
//     name: "The Silky Vase",
//     price: "125",
//     imageUrl: "/images/product%233.jpg",
//     description: "A sleek and elegant vase."
//   },
//   {
//     id: 4,
//     name: "The Dandy chair",
//     price: "250",
//     imageUrl: "/images/product%231.jpg",
//     description: "A stylish and comfortable chair."
//   }
// ];

// export default function ProductPage() {
//   const { id } = useParams(); // Extract `id` from URL parameters
//   const [product, setProduct] = useState<Product | null>(null); // Use Product type

//   // Fetch the product based on the id when the component is mounted
//   useEffect(() => {
//     if (id) {
//       const productId = Number(id); // Convert id to number
//       const foundProduct = products.find((prod) => prod.id === productId);
//       setProduct(foundProduct || null); // Set product to null if not found
//     }
//   }, [id]); // Re-run when `id` changes

//   // Loading state: wait for the product to be found
//   if (!product) {
//     return <div className="text-center text-xl">Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Product Image */}
//         <div className="image-container flex justify-center md:justify-start">
//           <Image
//             src={product.imageUrl}
//             alt={product.name}
//             width={400}
//             height={400}
//             className="object-cover rounded-lg shadow-md"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="product-details flex flex-col justify-between">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
//           <p className="text-lg text-gray-700 mb-6">{product.description}</p>
//           <p className="text-xl font-semibold text-gray-900 mb-6">£{product.price}</p>

//           {/* Add to Cart Button */}
//           <div className="mt-6">
//             <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


////////////////////////////////////////////////////
"use client"; // Mark the file as a Client Component

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use useParams from next/navigation
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart"; // Import the useShoppingCart hook

// Define the type for a product
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

// Sample products data (in a real project, you'd fetch this from a backend or a database)
const products: Product[] = [
  {
    id: 1,
    name: "Rustic Vase Set",
    price: 155, // GBP
    imageUrl: "/images/product%232.jpg",
    description: "A beautiful rustic vase set."
  },
  {
    id: 2,
    name: "The Lucy Lamp",
    price: 399, // GBP
    imageUrl: "/images/product%234.jpg",
    description: "A modern lamp perfect for any room."
  },
  {
    id: 3,
    name: "The Silky Vase",
    price: 125, // GBP
    imageUrl: "/images/product%233.jpg",
    description: "A sleek and elegant vase."
  },
  {
    id: 4,
    name: "The Dandy chair",
    price: 250, // GBP
    imageUrl: "/images/product%231.jpg",
    description: "A stylish and comfortable chair."
  }
];

export default function ProductPage() {
  const { id } = useParams(); // Extract `id` from URL parameters
  const [product, setProduct] = useState<Product | null>(null); // Use Product type
  const { addItem } = useShoppingCart(); // Initialize the addItem function from the hook

  // Fetch the product based on the id when the component is mounted
  useEffect(() => {
    if (id) {
      const productId = Number(id); // Convert id to number
      const foundProduct = products.find((prod) => prod.id === productId);
      setProduct(foundProduct || null); // Set product to null if not found
    }
  }, [id]); // Re-run when `id` changes

  // Loading state: wait for the product to be found
  if (!product) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id.toString(),       // Product ID as a string
        name: product.name,              // Product name
        price: product.price * 100,      // Price in smallest currency unit (e.g., pence for GBP)
        currency: "GBP",                 // Currency code (e.g., GBP for British Pounds)
        image: product.imageUrl,         // Product image URL (optional)
        description: product.description // Description (optional)
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="image-container flex justify-center md:justify-start">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="product-details flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-6">{product.description}</p>
          <p className="text-xl font-semibold text-gray-900 mb-6">£{product.price}</p>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

