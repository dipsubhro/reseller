"use server";

import { connectDB } from "@/app/api/db/connectDB";
import cloudinary from "./cloudinary";
import Product from "@/app/api/models/product.model";

export async function addAction(formData: FormData) {
  try {
    const image = formData.get("image") as File;
    const name = formData.get("name") as File;
    const price = formData.get("price") as File;
    const link = formData.get("link") as File;
    const description = formData.get("description") as File;

    if (!image || !name || !price || !link || !description) {
      console.log("All fields are required");

      return {
        error: "All fields are required",
      };
    }

    await connectDB();

    const arrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const imageResponse: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "image",
            folder: "zwatches",
          },

          async (error, result) => {
            if (error) {
              return reject(error);
            }
            return resolve(result);
          }
        )
        .end(buffer);
    });

    console.log("image Response: ", imageResponse);

    //store in db

    await Product.create({
        image: imageResponse.secure_url,
        name,
        price,
        link,
        description,
    });

    return {
        success: "Product added successfully",
    };
  } catch (error) {
        return {
            error: "An error occurred"
        };
  }
}
