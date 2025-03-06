import React from 'react'
import { createHomeAbout } from '../../../../../../server/home-about/home_about';
import FormTwo from '@/featured/Form/home/form-two'

 export default async function page ({params}) {
    const data = await getHomeAbout(params.slug)
  return (
    <div>
        <FormTwo formData={data}/>
    </div>
  )
 }

async function getHomeAbout(slug){
    return createHomeAbout(slug);
}