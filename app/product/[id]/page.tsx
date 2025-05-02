// app/product/[id]/page.tsx
import ProductCard from "@/components/ProductCard";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const getProduct = async (id: string): Promise<Product | null> => {
  try {
    const res = await fetch(`http://localhost:3000/api/fetch-product/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.product;
  } catch (err) {
    return null;
  }
};

export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const product = await getProduct(id);

  if (!product) {
    console.log("params:", await props.params);
    return (
      <div className="text-center mt-10 text-red-600">
        Hey your Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 flex justify-center items-center bg-gray-50">
      <ProductCard product={product} />
    </div>
  );
}
