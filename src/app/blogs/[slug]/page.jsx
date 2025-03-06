import React from 'react'
import BlogSecOne from '@/featured/blogs/blog-sec-one'
import {fetchBlog} from "../../../../server/blogs/blogs";


const page = async  ({params}) => {
    const blog = await getBlog(params.slug);
   return (
    <div>
       <BlogSecOne blog={blog} />
    </div>
  )
}


async function getBlog(slug){
    return fetchBlog(slug);
}

export default page;