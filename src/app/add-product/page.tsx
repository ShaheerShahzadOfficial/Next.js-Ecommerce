/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { addProduct } from "./add-product-api";
import { ToastContainer } from "react-toastify";

const AddProductPage = () => {
  const [imagesPreview, setImagesPreview] = useState<any>([]);

  const createProductImagesChange = (e: any) => {
    const files = Array.from(e.target.files);
    setImagesPreview([]);

    files.forEach((file: any) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState >= 2) {
          setImagesPreview((old: any) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const createProduct = (formData: FormData) => {
    const name = formData.get("Product_Name")?.toString();
    const description = formData.get("Product_Description")?.toString();
    // const imageUrl = formData.get("imageUrl")?.toString();
    const imageUrl = "grg";
    const price = Number(formData.get("Product_Price") || 0);

    if (!name || !description || !imageUrl || !price) {
      console.log(
        `imageUrl ${imageUrl}  name ${name}   description ${description} price ${price}`,
      );

      return toast("All Fields Are Required !", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
        theme: "colored",
        position: "bottom-center",
      });
    } else {
      addProduct(formData)
    }
  };

  return (
    <div className="flex rounded-xl flex-col min-h-[90%] w-[375px] self-center	p-3  items-center justify-center bg-gray-100 shadow-xl">
      <ToastContainer />

      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form action={createProduct} method="post">
        <div className="form-control w-full mb-3">
          <label className="label">
            <span className="label-text text-red-600 font-medium">
              Product name
            </span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            name="Product_Name"
            className="input input-bordered outline-none w-full bg-transparent"
          />
        </div>

        <div className="form-control w-full mb-3">
          <label className="label">
            <span className="label-text text-red-600 font-medium">
              Product Price
            </span>
          </label>
          <input
            type="number"
            placeholder="Product Price"
            name="Product_Price"
            className="input input-bordered outline-none w-full bg-transparent"
          />
        </div>

        <div className="form-control w-full mb-3">
          <label className="label">
            <span className="label-text text-red-600 font-medium">
              Product description
            </span>
          </label>
          <textarea
            rows={3}
            placeholder="Description"
            name="Product_Description"
            className="textarea textarea-bordered w-full bg-transparent resize-none"
          />
        </div>
        <div className="form-control w-full mb-3">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={createProductImagesChange}
            className="file-input file-input-bordered w-full"
          />

          <div className="avatar flex flex-wrap items-center m-3 self-center">
            {imagesPreview.map((image: any, index: number) => (
              <div key={index} className="w-16 rounded m-2">
                <img
                  src={image}
                  alt="product Images"
                  className="object-center"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="form-control w-full">
          <button
            className="btn btn-active self-center btn-accent"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
