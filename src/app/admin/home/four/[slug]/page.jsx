import React from 'react'
import FormFour from '@/featured/Form/home/form-four'
import { createServiceDescription } from '../../../../../../server/our-services/our_services'

 export default async function page ({params}) {
    const data = await getServiceDec(params.slug)
  return (
    <div>
        <FormFour formData={data}/>
    </div>
  )
 }

async function getServiceDec(slug){
    return createServiceDescription(slug);
}