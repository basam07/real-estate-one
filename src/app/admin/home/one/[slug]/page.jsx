import React from 'react'
import { createTagline } from '../../../../../../server/home-title/taglines'
import FormOne from '@/featured/Form/home/form-one'

 export default async function page ({params}) {
    const data = await getTagline(params.slug)
  return (
    <div>
        <FormOne formData={data}/>
    </div>
  )
 }

async function getTagline(slug){
    return createTagline(slug);
}