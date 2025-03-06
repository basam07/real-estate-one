'use client';
import React, { useState } from 'react';
import Dropdown from '@/components/dropdown/dropdown';
import { serviceOptions } from '@/data/dropdown/dropdown';
import { contactInfo } from '@/data/contact/contact';
import Button from '@/components/button/button';
import Link from 'next/link';
import TextField from '@/components/textfield/textfield';

const ContactSecOne = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDropdownChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Your inquiry has been sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        alert(`Error: ${result.error || 'An unknown error occurred'}`);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Failed to send your inquiry. Please try again.');
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 justify-center m-20">
      <div className="m-12">
        <h2 className="text-[32px] font-bold">Get In Touch</h2>
        {contactInfo.map((info, index) => (
          <div key={index}>
            <div className="mt-5">
              <h3 className="font-bold text-[20px]">{info.title}</h3>
            </div>
            <div className="flex gap-3 text-[16px]">
              <div>Phone:</div>
              <div>{info.phone}</div>
            </div>
            <div className="flex gap-3">
              <div>Email:</div>
              <div>{info.email}</div>
            </div>
            <div className="flex gap-3">
              <div>Address:</div>
              <div>{info.address}</div>
            </div>
            <div className="flex gap-3 mt-3">
              <Link href="">{info.svgFacebook}</Link>
              <Link href="">{info.svgX}</Link>
              <Link href="">{info.svgInsta}</Link>
              <Link href="">{info.svgIn}</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="border border-black flex flex-col justify-center items-center bg-[#212322] p-8">
        <h2 className="text-white text-2xl font-bold">We would love to hear from you.</h2>
        <div className="m-8 w-full">
          <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
            <TextField
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full md:w-auto"
            />
            <TextField
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full md:w-auto"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-3 w-full justify-between">
            <TextField
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full md:w-auto"
            />
            <TextField
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full md:w-auto"
            />
          </div>
          <div className="w-full flex justify-center mt-3">
            <div className="w-full">
              <Dropdown
                placeholder="Service"
                options={serviceOptions}
                value={formData.service}
                onChange={handleDropdownChange}
              />
            </div>
          </div>
          <div className="mt-3">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-3 w-full p-2 px-6"
              placeholder="Message"
            ></textarea>
          </div>
          <Button label="Enquire" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ContactSecOne;
