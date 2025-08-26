import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/product/${product._id}`} passHref>
      <Card className="w-full max-w-md cursor-pointer">
        <CardHeader className="p-0">
          <div className="relative w-full h-64">
            <Image
              src={product.image}
              alt={product.name}
              fill
              placeholder="blur"
              blurDataURL={product.image.replace(
                "/upload/",
                "/upload/e_blur:1000,q_1/"
              )}
              className="object-cover rounded-t-md"
            />
          </div>
        </CardHeader>
        <CardContent className="text-center p-4">
          <CardTitle className="text-xl">{product.name}</CardTitle>
          <p className="text-red-500 text-lg mt-2 font-semibold">{`Price: ₹${product.price}`}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
