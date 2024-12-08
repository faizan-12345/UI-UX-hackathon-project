// import Image from "next/image";
import Hero from './components/Hero';
import Features from "./components/Features";
import Products from "./components/Products";
import Story from "./components/Story";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Products />
      <Story />
      <Newsletter />
    </main>
  );
}
