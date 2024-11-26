import ProductCard from "@/components/ProductCard";
import { prisma } from '@/lib/db/prisma';

export default async function Home() {
  try {
    // Fetch products from the database
    const products = await prisma.product.findMany({
      orderBy: {
        id: 'desc',  // Order by descending 'id' if 'id' exists in your schema
      },
    });

    // Check if products are available
    if (!products || products.length === 0) {
      return <div>No products available</div>;
    }

    // Render the first product from the list
    return (
      <div>
        <ProductCard product={products[0]} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return <div>Failed to load products</div>;
  }
}
