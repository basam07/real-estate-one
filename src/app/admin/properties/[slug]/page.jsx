import React from 'react' 
import FormProperty from '@/featured/Form/form-property'
import { fetchProperty } from '../../../../../server/properties/properties';


export default async function page ({params}) {
  const data = await getProperty(params.slug)
  return (
    <div>
      <FormProperty formData={data} />
    </div>
  )
} 

async function getProperty(slug) {
  return fetchProperty(slug);
}