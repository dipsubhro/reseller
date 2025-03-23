import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#F8F9FA]" suppressHydrationWarning>
      <h1>
        <Hero />
      </h1>
      <h2 className="text-center text-2xl font-semibold mt-10 text-black">
        All Products
      </h2>
      <ProductList />
      <Footer />
    </div>
  );
}
