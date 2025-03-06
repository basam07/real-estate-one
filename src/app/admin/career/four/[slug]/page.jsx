import React from 'react'
import FormFour from '@/featured/Form/careers/form-four';
import { createExpectation } from '../../../../../../server/expections/expectations';

 export default async function page ({params}) {
    const data = await getExpectation(params.slug)
  return (
    <div>
        <FormFour formData={data}/>
    </div>
  )
 }

async function getExpectation(slug){
    return createExpectation(slug);
}