"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { extractFormData } from "../../../../lib/form.utils";
import { FormField, FormTextBox } from "@/components/Form/form-partials";

const FormFive = ({ formData = null }) => {
  const router = useRouter();

  const handleCreate = async (data) => {
    try {
      const response = await axios.post("/api/apply", data);
      alert("Data created successfully.");
      router.replace("/admin/career");
    } catch (error) {
      console.error("Failed to create data:", error);
      alert("Failed to create data.");
    }
  };

  const handleUpdate = async (data) => {
    try {
        const updatedData = { ...data, id: formData?.id };
        await axios.put(`/api/apply/${formData?.id}`, updatedData);
      alert("Data updated successfully.");
      router.push("/admin/career");
    } catch (error) {
      console.error("Failed to update data:", error);
      alert("Failed to update data.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = extractFormData(e);
    console.log("Form Data:", data);
    formData ? await handleUpdate(data) : await handleCreate(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ECE3D7]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mt-10 mb-10 p-8 rounded"
      >
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          What We Expect From You
        </h2>

        <div className="mb-4">
          <FormField
            label="Title"
            type="text"
            name="title"
            placeholder="Enter Title"
            defaultValue={formData?.title}
            required
          />
        </div>

        <div className="mb-4">
          <FormTextBox
            label="Description"
            type="text"
            name="description"
            placeholder="Enter Description"
            defaultValue={formData?.description}
            required
          />
        </div>

        <div className="mb-4">
          <FormField
            label="email"
            type="text"
            name="email"
            placeholder="Enter email"
            defaultValue={formData?.email}
            required
          />
        </div>

        <div className="mt-8 flex gap-4 justify-end">
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

export default FormFive;
