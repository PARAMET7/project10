import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png'
import { redirect } from 'next/dist/server/api-utils';
import { getCart } from '@/lib/db/cart';
import SoppingCartButton from './SoppingCartButton';

async function searchProducts(formData: formData){
  "use server";

  const searchQuery = formData.get('searchQuery')?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Navbar() {
  const cart = await getCart();

  return(
    <div className="bg-base-100">
      <div className="navbar p-4 max-w-7xl m-auto flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <Link href="/" className='btn btn-ghost text-xl normal-case'>
          <Image src={logo} height={40} width={40} alt="my store"/>
          My Store
          </Link>
        </div>
        <div className='flex-none gap-2'>
          <form action={searchProducts}>
            <div className='form-control'>
              <input
                  name='searchQuery'
                  placeholder='Search'
                  className='input input-bordered w-full min-w-[100px]'

              ></input>
            </div>
          </form>
          <SoppingCartButton cart={cart}></SoppingCartButton>
        </div>
      </div>
    </div>
  )
}
