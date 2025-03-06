import React from 'react'
import { createTeamDescription } from '../../../../../../server/our-team/our_team'
import FormThree from '@/featured/Form/home/form-three'

 export default async function page ({params}) {
    const data = await getTeamDiscription(params.slug)
  return (
    <div>
        <FormThree formData={data}/>
    </div>
  )
 }

async function getTeamDiscription(slug){
    return createTeamDescription(slug);
}