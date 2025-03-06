import React from 'react'
import FormThree from '@/featured/Form/careers/form-three'
import { createExperience } from '../../../../../../server/experience/experiences';

 export default async function page ({params}) {
    const data = await getExperience(params.slug)
  return (
    <div>
        <FormThree formData={data}/>
    </div>
  )
 }

async function getExperience(slug){
    return createExperience(slug);
}