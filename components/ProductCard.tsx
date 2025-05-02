import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
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
            className="object-cover rounded-t-md"
          />
        </div>
      </CardHeader>
      <CardContent className="text-center p-4">
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <p className="text-red-500 text-lg mt-2 font-semibold">${product.price}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
