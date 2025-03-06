'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { FormField, FormTextBox } from '@/components/Form/form-partials';
import {extractFormData, handleImageUpload} from '../../../lib/form.utils';
const PropertyForm = ({formData = null}) => {

  const [imagesData, setImagesData] = useState([]);

// Handle file drop for images
  const onDrop = (acceptedFiles) => {
    setImagesData((prev) => [...prev, ...acceptedFiles]);
  };


  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
  });
 
  // Handle Create
  const handleCreate = async (data) => { 
  
    try {   
      const response = await axios.post('/api/properties', data );
      console.log('property create',response);
      alert('Property created successfully.');
    } catch (error) {
      console.error('Failed to create property:', error);
      // alert('Failed to create property.');
    }
  }; 

  // Handle Update
  const handleUpdate = async (data) => { 
    try { 

      await axios.put(`/api/properties/${formData?.slug}`, data);
      alert('Property updated successfully.');
    } catch (error) {

      console.error('Failed to update property:', error);
      alert('Failed to update property.');
    }
  };  

  const handleFormData = async (e) => {
    const form = extractFormData(e);
    form.bedrooms = Number(form.bedrooms)
    form.price = Number(form.price)
    form.bathrooms = Number(form.bathrooms)
    console.log('imagesData',imagesData);
    form.images = imagesData.length > 0 ? await Promise.all(imagesData.map(image => handleImageUpload(image))) : formData.images;
    return form;
  }
  
  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const data = await handleFormData(e);
    console.log('data',data);
    formData ? await handleUpdate(data) : await handleCreate(data);
 };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-8xl p-12 m-4 rounded" style={{ backgroundColor: '#ECE3D7' }}>
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">Property Form</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
            placeholder="Enter property title"
            defaultValue={formData?.Title} 
            required
          />
          <FormField
            label="Location"
            type="text"
            name="location"
            placeholder="Enter property location"
            defaultValue={formData?.location} 
            required
          />
          <FormField
            label="Price"
            type="number"
            name="price"
            placeholder="Enter price"
            defaultValue={formData?.price} 
            required
          />
          <FormField
            label="Bedrooms"
            type="number"
            name="bedrooms"
            placeholder="Enter number of bedrooms"
            defaultValue={formData?.bedrooms} 
          />
          <FormField
            label="Bathrooms"
            type="number"
            name="bathrooms"
            placeholder="Enter number of bathrooms"
            defaultValue={formData?.bathrooms} 
          />
        </div>

        <div className="mt-8">
          <label className="block text-gray-500 font-bold mb-3 text-lg">Images</label>
          <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded p-6 text-center cursor-pointer">
            <input {...getInputProps()} />
            <p className="text-gray-600 text-lg">Drag & drop images here, or click to select files</p>
          </div>
          {imagesData.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {imagesData.map((file, idx) => (
                <div key={idx} className="w-24 h-24 bg-gray-100 border rounded overflow-hidden">
                  <img src={URL.createObjectURL(file)} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8">
          <FormTextBox
            label="Description"
            name="description"
            placeholder="Enter property description"
            defaultValue={formData?.description} 
          />
        </div>

        <div className="mt-8 flex justify-between gap-4">
          <button
            type="submit" 
            className="w-1/4 bg-green-600 text-white py-3 px-3 text-lg rounded hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500"
          >
            { formData ? "Update": "Create"}
          </button> 
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
