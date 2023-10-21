
"use server";

import { redirect } from "next/navigation";
import prisma from "../../../lib/db/prisma";

export async function addProduct(formData: FormData) {
  
    const name = formData.get("Product_Name")?.toString();
    const description = formData.get("Product_Description")?.toString();
    // const imageUrl = formData.get("imageUrl")?.toString();
    const imageUrl = "grg"
    const price = Number(formData.get("Product_Price") || 0);
  
    if (!name || !description || !imageUrl || !price) {
      console.log(`imageUrl ${imageUrl}  name ${name}   description ${description} price ${price}`)
      throw Error(`imageUrl ${imageUrl}  name ${name}   description ${description} price ${price}`)
    }
  
    await prisma.product.create({
      data: {
        name,
        description,
        images: { secure_url: "", public_id: "" },
        price,
      },
    });
  
    redirect("/");
  }