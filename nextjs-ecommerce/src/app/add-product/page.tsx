import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import FormSubmitButton from "../../components/FormSubmitButtom";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


export const metadata = {
  title: "Add Product - My Store",
};

async function addProduct(formData: FormData) {
  "use server";

  const session= await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product")
  }

  const name= formData.get('name')?.toString();
  const description  = formData.get('description')?.toString();
  const imageUrl = formData.get('imageUrl')?.toString();
  const price = Number(formData.get('price') || 0);


  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields")
  }

  await prisma.product.create({
        data: {name, description, imageUrl, price},
      });


  await prisma.product.create({
    data: {name, description, imageUrl, price}
  });

  redirect("/");
}

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product")
  }


  return (
    <div>
      
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
            required
            type="text"
            name="name"
            placeholder="name"
            className="mb-3 w-full input input-bordered"
        />
        <textarea
            required
            name="description"
            placeholder="Description"
            className="textarea-bordered textarea mb-3 w-full"
            id=""
        />
        <input
            required
            type="url"
            name="imageUrl"
            placeholder="Image URL"
            className="mb-3 w-full input input-bordered"
        />
        <input
            required
            type="number"
            name="price"
            placeholder="Price"
            className="mb-3 w-full input input-bordered"
        />
        <FormSubmitButton

            className="btn-block">
        Add Product
        </FormSubmitButton>

      </form>

    </div>
  );
}
