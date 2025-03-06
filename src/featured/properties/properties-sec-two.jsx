import React from 'react'
import Button from '@/components/button/button';
import Link from 'next/link';

const PropertiesSecTwo = ({property}) => {
  // Array of highlight items


  const highlights = [
    { label: 'Price', value: `Guide Price ${property.price}` },
    { label: 'Rooms', value: `${property.bedrooms} Beds • ${property.bathrooms} Baths` },
  ];

  return (
    <div>
      <div className='flex justify-center text-5xl mt-12 px-4'>
        <h2>
        {property.Title}
        </h2>
      </div>
      {/* Container for the sections */}
      <div className='flex flex-col md:flex-row border mt-12'>
        {/* Highlights Section - Left side */}
        <div className='flex-1 p-12 flex flex-col justify-between'>
          <div> 
            <div className='mt-12'>
              {/* Dynamically rendered highlights */}
              {highlights.map((highlight, index) => (
                <div key={index}>
                  <p className='mt-3'>{highlight.label}</p>
                  <p className='text-xl mt-3'>
                    {highlight.value}
                  </p>
                  <hr className='bg-black mt-3' />
                </div>
              ))}
            </div>
          </div>
          {/* Button at the bottom */}
          <div className='mt-6'>
            <Link href={'/contact'}>
            <Button 
            label='Make an Enquiry'
            />
            </Link>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className='hidden md:block border-r-2 h-auto mx-2'></div>

        {/* Description Section - Right side */}
        <div className='flex-1 p-12'>
          <div className='text-3xl'>
            Description
          </div>
          <div className='mt-12'>
            <p>
                {property.description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PropertiesSecTwo;
