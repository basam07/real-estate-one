import React from 'react';
import { contactInfo } from '@/data/contact/contact';
import Link from 'next/link';

const CarrerSecNine = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-[160px] p-4">

      {/* First div (Contact form) */}
      <div className=" flex flex-col justify-center items-center  p-8">
     <h2>
        Map
     </h2>
      </div>

      {/* Second div (Contact info) */}
      <div style={{backgroundColor: "var( --global-white-choco-color)" }}  className=" p-12">
        <h2 className='text-[32px] font-bold'>
        Our Office
        </h2>
        {contactInfo.map((info, index) => (
          <div key={index}>
            <div className='mt-5'>
              <h3 className='font-bold text-[20px]'>
                {info.title}
              </h3>
            </div>
            <div className='flex gap-3 text-[16px]'>
              <div>
                Phone:
              </div>
              <div>
                {info.phone}
              </div>
            </div>
            <div className='flex gap-3'>
              <div>
                Email:
              </div>
              <div>
                {info.email}
              </div>
            </div>
            <div className='flex gap-3'>
              <div>
                Address:
              </div>
              <div>
                {info.address}
              </div>
            </div>
            <div className='flex gap-3 mt-3'>
              <Link href=''>
                {info.svgFacebook}
              </Link>
              <Link href=''>
                {info.svgX} 
              </Link>
              <Link href=''>
                {info.svgInsta} 
              </Link>
              <Link href=''>
                {info.svgIn} 
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CarrerSecNine;
