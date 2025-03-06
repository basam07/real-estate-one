import React from 'react'
import FormFour from '@/featured/Form/about/form-four'
import { createTeamMember } from '../../../../../../server/team/team'

 export default async function page ({params}) {
    const data = await getTeam(params.slug)
  return (
    <div>
        <FormFour formData={data}/>
    </div>
  )
 }

async function getTeam(slug){
    return createTeamMember(slug);
}