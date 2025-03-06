"use client";
import React, { useState } from "react";
import { FormField, FormTextBox } from "@/components/Form/form-partials";
import { extractFormData, handleImageUpload } from "../../../lib/form.utils";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
const FormBlogPage = ({ formData = null }) => {
  const router = useRouter();

  const [heroImage, setHeroImage] = useState(null);
  // Handle Create
  const handleCreate = async (data) => {
    try {
      const response = await axios.post("/api/blogs", data);
      alert("Property created successfully.");
      await router.replace("/admin/blogs");
    } catch (error) {
      console.error("Failed to create property:", error);
      alert("Failed to create property.");
    }
  };

  // Handle Update
  const handleUpdate = async (data) => {
    try {
      await axios.put(`/api/blogs/${formData?.slug}`, data, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Property updated successfully.");
      await router.push("/admin/blogs");
    } catch (error) {
      console.error("Failed to update property:", error);
      alert("Failed to update property.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = extractFormData(e);
    data.heroImage = heroImage
      ? await handleImageUpload(heroImage)
      : formData?.heroImage;
    formData ? await handleUpdate(data) : await handleCreate(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ECE3D7]">
      <form
        onSubmit={handleSubmit} // Prevent default form submit, we handle it manually
        className="w-full max-w-2xl p-8 rounded"
      >
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          Blog Form
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <FormField
            label="Slug"
            type="text"
            name="slug"
            placeholder="Enter unique slug"
            defaultValue={formData?.slug}
            required
          />
          <FormField
            label="Title"
            type="text"
            name="Title"
            placeholder="Enter blog title"
            defaultValue={formData?.Title}
            required
          />
          <FormField
            label="Hero Image URL"
            type="file"
            name=""
            onChange={(e) => setHeroImage(e.target.files[0])}
            required
          />
          {heroImage && (
            <Image
              src={
                heroImage ? URL.createObjectURL(heroImage) : formData?.heroImage
              }
              width={300}
              height={300}
              alt="hero image"
              className="w-2/4"
            />
          )}
          {!heroImage && formData && (
            <Image
              src={formData?.heroImage}
              width={300}
              height={300}
              alt="hero image"
              className="w-2/4"
            />
          )}
          <FormTextBox
            label="Content"
            name="content"
            placeholder="Enter blog content"
            defaultValue={formData?.content}
            required
          />
        </div>

        <div className="mt-8 flex justify-between gap-4">
          <button
            type="submit"
            className="w-1/4 bg-green-600 text-white py-3 px-3 text-lg rounded hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500"
          >
            {formData ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormBlogPage;
