import React from "react";
import Link from "next/link";


export default function Middle(){
    return <div className='grid grid-cols-2 m-auto gap-5'>
        <div className='flex flex-col'>
            <Link href={'/'} className='mt-2'>Home</Link>
            <Link href={'/about'} className='mt-2'>About Us</Link>
            <Link href={'/listings'} className='mt-2'>Properties</Link>
            <Link href={'/our-services'} className='mt-2'>Insights</Link>
            <Link href={'/contact'} className='mt-2'>Contact Us</Link>
        </div>
        <div className='flex flex-col'>
            <Link href={'/our-team'} className='mt-2'>Our Team</Link>
            <Link href={'/privacy'} className='mt-2'>Privacy & Policy</Link>
            <Link href={'/privacy'} className='mt-2'>Cookies Policy</Link>
        </div>
    </div>
}