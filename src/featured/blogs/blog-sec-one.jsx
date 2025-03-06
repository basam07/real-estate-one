import React from 'react'
import Image from 'next/image'
import {ImageBasePath} from "../../../lib/form.utils";
const BlogSecOne = ({blog}) => {
  return (
    <div className='text-black 
     ease-in duration-300 p-3
    flex justify-center
    '>
      <div>  
          <h2 className="mt-[10px] text-4xl pr-4 font-normal font-serif  lg:text-6xl md:text-3xl md:mt-[40px]"> {blog.Title} </h2>
          <div>
          <hr className="hr_line mt-3 mb-3 max-w-full"></hr>
          <p>Date: {blog.createdAt.toLocaleDateString()} </p>
          </div>
          <div>
            <Image src={ImageBasePath + blog.heroImage} width={600} height={500}  alt="Blog"/>
          </div>
          <div>
          <p className="max-w-[1150px] font-normal text-base my-[20px] md:text-[18px]">{blog.content} </p>
          </div>
        </div>
    </div>
  )
}

export default BlogSecOne