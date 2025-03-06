import React from 'react'
import FormTwo from '@/featured/Form/careers/form-two'
import { createCareerRealinvte } from '../../../../../../server/career-realivte/career_realinvte'

 export default async function page ({params}) {
    const data = await getCareerRealinvte(params.slug)
  return (
    <div>
        <FormTwo formData={data}/>
    </div>
  )
 }

async function getCareerRealinvte(slug){
    return createCareerRealinvte(slug);
}