import React from 'react'
import { createCoreValue } from '../../../../../../server/our-core-value/our_core_value'
import FormTwo from '@/featured/Form/about/form-two'

 export default async function page ({params}) {
    const data = await getCoreValue(params.slug)
  return (
    <div>
        <FormTwo formData={data}/>
    </div>
  )
 }

async function getCoreValue(slug){
    return createCoreValue(slug);
}