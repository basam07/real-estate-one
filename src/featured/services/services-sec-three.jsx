import React from 'react';
import Image from 'next/image';
import { servicesPic } from '@/data/services/services';
import { fetchAllServices } from '../../../server/services/services';

const ServicesSecThree = async () => {
  const services = await getAllServices();

  return (
    <div className="flex flex-col items-center justify-center servicesPadding" style={{ backgroundColor: "var(--global-white-choco-color)" }}>
      <h2 className="text-4xl font-semibold mb-12">
        Our Services
      </h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-screen-xl mx-auto px-4 m-6">
        {services.map((service, index) => (
          <div key={index} className="max-w-lg bg-white shadow-md">
            <Image 
              src={servicesPic[0].image} 
              alt={servicesPic[0].name} 
              width={400} 
              height={400} 
              className="object-cover"
            />
            <div className="text-center">
              <div className="p-4">
                <p className="fs-24">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSecThree;

async function getAllServices() {
  return fetchAllServices();
}
