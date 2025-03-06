import React from "react";


export default function Right() {
    return  <div className='max-w-[375px] sm:mr-auto m-auto'>
        <h3 className='text-[18px]'>Sign up for our exclusive market updates</h3>
        <input type="text" className='mt-3 w-full p-2' placeholder='Enter email here'/>
        <button className='w-full cta_link mt-3 text-black'>Subscribe</button>
    </div>
}