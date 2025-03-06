import React from 'react'
import { fetchTeamDescription } from '../../../../server/our-team/our_team';
import HomeSecFour from '@/featured/home/home-sec-four';


const page = async  ({params}) => {
    const home = await getTagline(params.id);
    if (!home) {
      return <div>Data not available</div>;  // Prevents rendering with undefined data
  }
   return (
    <div>
       <HomeSecFour taglines={home} />
    </div>
  )
}

async function getTagline(id){
  if (!id) return null;
    return fetchTeamDescription(id);
}

export default page;