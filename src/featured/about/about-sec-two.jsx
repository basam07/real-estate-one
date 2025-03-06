import React from 'react'
import { fetchAllAboutUs } from '../../../server/about-us/about_us';

const aboutSecTwo = async () => {
  const aboutUs = await getAllAboutUs();
  return (
    <div>
        {aboutUs.map((item, index) => (
        <div key={index} className='my-24 flex justify-center flex-col items-center text-[20px] gap-[30px]'>
          <h2 className='text-[40px]'>{item.title}</h2>
          <p className='center-text'>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default aboutSecTwo

async function getAllAboutUs() {
  return fetchAllAboutUs();
}