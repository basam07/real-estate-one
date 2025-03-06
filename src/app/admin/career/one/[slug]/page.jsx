import React from 'react'
import { createCareerDescription } from '../../../../../../server/career-description/career_descriptions'
import FormOne from '@/featured/Form/careers/form-one'

 export default async function page ({params}) {
    const data = await getCareerDescription(params.slug)
  return (
    <div>
        <FormOne formData={data}/>
    </div>
  )
 }

async function getCareerDescription(slug){
    return createCareerDescription(slug);
}