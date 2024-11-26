import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";

interface ProductCardProps{
  product: Product;
}


export default function ProductCard({product}: ProductCardProps) {
  return (
    <Link
      href={"/products/" + product.id}
      className="card w-full bg-base-100 hover:shadow-xl transition-shadow"
    >
      <div className="card-body">
        <h2 className="card-title">
          {product.name}
        </h2>
        <p>{product.description}</p>
        <PriceTag price={product.price}></PriceTag>
      </div>

    </Link>
  )
}
