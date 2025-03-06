import React from 'react'
import FormFive from '@/featured/Form/careers/form-five';
import { createApply } from '../../../../../../server/apply/apply';

 export default async function page ({params}) {
    const data = await getApply(params.slug)
  return (
    <div>
        <FormFive formData={data}/>
    </div>
  )
 }

async function getApply(slug){
    return createApply(slug);
}