import React from 'react'
import BlogForm from '@/featured/Form/form-blog-page'
import { fetchBlog } from '../../../../../server/blogs/blogs'

 export default async function page ({params}) {
    const data = await getBlogs(params.slug)
  return (
    <div>
        <BlogForm formData={data}/>
    </div>
  )
 }

async function getBlogs(slug){
    return fetchBlog(slug);
}