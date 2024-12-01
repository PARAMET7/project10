import PaginationBar from "@/components/PaginationBar";
import ProductCard from "@/components/ProductCard";
import { prisma } from '@/lib/db/prisma';
import Image from 'next/image';
import Link from "next/link";


interface HomeProps {
  searchParams: {page:string};
}

export default async function Home({searchParams:{page ="1"}}: HomeProps) {
  const currentPage = parseInt(page);

  const pageSize =6;
  const heroItemcount = 1;


  const totalItemCount = await prisma.product.count();

  const totalPages= Math.ceil((totalItemCount - heroItemcount)/pageSize)


  try {
    // Fetch products from the database
    const products = await prisma.product.findMany({
      orderBy: {
        id: 'desc',  // Order by descending 'id' if 'id' exists in your schema
      },
      skip: (currentPage-1) * pageSize + (currentPage === 1? 0: heroItemcount),
      take: pageSize + (currentPage === 1? heroItemcount : 0),
    });

    // Check if products are available
    if (!products || products.length === 0) {
      return <div>No products available</div>;
    }

    // Render the first product from the list
    return (
      <div className="flex flex-col items-center-center">
        {currentPage===1 && (
        <div className="hero rounded-xl bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src={products[0].imageUrl}
              alt={products[0].name}
              width={400}
              height={800}
              className="w-full max-w-sm rounded-lg shadow-2xl"
              priority
              />
              <div>
                <h1 className="text-5xl font-bold">{products[0].name}</h1>
                <p className="py-6">{products[0].description}</p>
                <Link
                  href={'/products/' +products[0].id}
                  className="btn-primary btn">
                  Check it out</Link>
              </div>
          </div>
        </div>
        )}
        <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {(currentPage === 1? products.slice(1): products).map(product => (
            <ProductCard product={product} key={product.id}/>
          ))}
        </div>
        {totalPages > 1 &&
        (<PaginationBar currentPage={currentPage} totalPages={totalPages}/>)
        }
      </div>
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return <div>Failed to load products</div>;
  }
}
