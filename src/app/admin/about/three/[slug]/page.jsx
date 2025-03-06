import React from 'react'
import FormThree from '@/featured/Form/about/form-three'
import { createMission } from '../../../../../../server/our-mission/our_mission'

 export default async function page ({params}) {
    const data = await getMission(params.slug)
  return (
    <div>
        <FormThree formData={data}/>
    </div>
  )
 }

async function getMission(slug){
    return createMission(slug);
}