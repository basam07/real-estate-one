import React from 'react'
import { createAboutUs } from '../../../../../../server/about-us/about_us'
import FormOne from '@/featured/Form/about/form-one'

 export default async function page ({params}) {
    const data = await getAllAboutUs(params.slug)
  return (
    <div>
        <FormOne formData={data}/>
    </div>
  )
 }

async function getAllAboutUs(slug){
    return createAboutUs(slug);
}