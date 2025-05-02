import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;  // _id: string;
  price: number;
  image: string;
  description: string;
  link: string;
}

const ProductCard = ({ product }: { product: Product }) => {

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="p-0">
        <div className="relative w-full h-64">
          <Image
            src={product.image}
            alt={product.name}
            fill
            placeholder="blur"
            blurDataURL={product.image.replace('/upload/', '/upload/e_blur:1000,q_1/')}
            className="object-cover rounded-t-md"
          />
        </div>
      </CardHeader>
      <CardContent className="text-center p-4">
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <p className="text-red-500 text-lg mt-2 font-semibold">{`Price: ${product.price}`}</p>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Buy Now
        </a>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
