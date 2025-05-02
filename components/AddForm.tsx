"use client";

import { addAction } from "@/utils/addAction";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const AddForm = () => {
  const router = useRouter();

  const [imageURL, setImageURL] = useState("");
  const [linkError, setLinkError] = useState("");
  const [loading, setLoading] = useState(false); // ⬅️ Loader state

  async function clientAddAction(formData: FormData) {
    setLoading(true); // Start loading

    const { error, success } = await addAction(formData);

    if (error) {
      toast.error(error);
      setLoading(false);
      return;
    }

    if (success) {
      toast.success(success);
      router.push("/");
      setImageURL("");
    }

    setLoading(false); // Stop loading after action completes
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const filesize = file.size;
      if (Math.round(filesize / 1024) > 1024) {
        toast.error("Image is greater than 1mb and is not allowed");
      } else {
        setImageURL(URL.createObjectURL(file));
      }
    }
  };

  const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;
    if (value && !urlPattern.test(value)) {
      setLinkError("Please enter a valid URL.");
    } else {
      setLinkError("");
    }
  };

  return (
    <form
      action={clientAddAction}
      className="w-full max-w-xl mx-auto flex flex-col justify-center items-center space-y-4 mt-3 md:mt-5"
    >
      {imageURL && (
        <Image
          src={imageURL}
          alt="product image"
          width={1000}
          height={1000}
          className="max-w-full max-h-72 object-cover object-center rounded-lg"
        />
      )}

      <div className="flex flex-col w-full">
        <label className="text-black">Product Image:</label>
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImageChange}
          className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="text-black">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter the product name"
          className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="text-black">Price:</label>
        <input
          type="number"
          name="price"
          placeholder="Enter the product price"
          className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="text-black">Seller's link:</label>
        <input
          type="url"
          name="link"
          placeholder="link to where buyers can find you"
          className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          onChange={handleLinkChange}
          required
        />
        {linkError && <p className="text-red-500 text-sm mt-1">{linkError}</p>}
      </div>

      <div className="flex flex-col w-full">
        <label className="text-black">Description:</label>
        <textarea
          name="description"
          placeholder="Enter the product description"
          rows={4}
          className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#212529] text-white px-3 py-2 rounded-md cursor-pointer flex justify-center items-center"
      >
        {loading ? (
          <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
        ) : (
          "Add Product"
        )}
      </button>
    </form>
  );
};

export default AddForm;

// "use client";

// import { addAction } from "@/utils/addAction";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React, { ChangeEvent, useState } from "react";
// import toast from "react-hot-toast";

// const AddForm = () => {
//   const router = useRouter();
//   const [imageURL, setImageURL] = useState("");
//   async function clientAddAction(formData: FormData) {
//     const { error, success } = await addAction(formData);
//     if (error) {
//       toast.error(error);
//     }

//     if (success) {
//       toast.success(success);

//       router.push("/");

//       setImageURL("");
//     }
//   }

//   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const filesize = file.size;
//       if (Math.round(filesize / 1024) > 1024) {
//         toast.error("Image is greater than 1mb is not allowed");
//       } else {
//         setImageURL(URL.createObjectURL(file));
//       }
//     }
//   };
//   return (
//     <form
//       action={clientAddAction}
//       className="w-full max-w-xl mx-auto flex flex-col justify-center items-center space-y-4 mt-3 md:mt-5"
//     >
//       {imageURL && (
//         <Image
//           src={imageURL}
//           alt="product image"
//           width={1000}
//           height={1000}
//           className="max-w-full max-h-72 object-cover object-center rounded-lg"
//         />
//       )}

//       <div className="flex flex-col w-full">
//         <label className="text-black">Product Image:</label>
//         <input
//           type="file"
//           accept="image/*"
//           name="image"
//           onChange={handleImageChange}
//           className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
//         />
//       </div>

//       <div className="flex flex-col w-full">
//         <label className="text-black">Name:</label>
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter the product name"
//           className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
//         />
//       </div>

//       <div className="flex flex-col w-full">
//         <label className="text-black">Price:</label>
//         <input
//           type="number"
//           name="price"
//           placeholder="Enter the product price"
//           className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
//         />
//       </div>

//       <div className="flex flex-col w-full">
//         <label className="text-black">Seller's link:</label>
//         <input
//           type="url"
//           name="link"
//           placeholder="link to where buyers can find you"
//           className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
//         />
//       </div>

//       <div className="flex flex-col w-full">
//         <label className="text-black">Description:</label>
//         <textarea
//           name="description"
//           placeholder="Enter the product description"
//           rows={4}
//           className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
//         ></textarea>
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-[#212529] text-white px-3 py-2 rounded-md cursor-pointer"
//       >
//         {" "}
//         Add Product
//       </button>
//     </form>
//   );
// };

// export default AddForm;
