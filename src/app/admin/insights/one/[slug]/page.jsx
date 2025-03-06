import React from 'react'
import FormOne from '@/featured/Form/insights/form-one'
import { createInsight } from '../../../../../../server/insights/insights.js';

 export default async function page ({params}) {
    const data = await getInsights(params.slug)
  return (
    <div>
        <FormOne formData={data}/>
    </div>
  )
 }

async function getInsights(slug){
    return createInsight(slug);
}