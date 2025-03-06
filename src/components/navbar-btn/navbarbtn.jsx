'use client';
import React from 'react';
import Link from 'next/link';
 const NavbarBtn = () => {

  return (
    <div  className='text-black' style={{ width: '8%' }}>
        <Link href={'/login'}>
        <button style={{ backgroundColor: "#ECE3D7", padding: "10px", width: "100%" }}>
                Login
              </button>
        </Link>
      
    </div>
  );
}

export default NavbarBtn;
