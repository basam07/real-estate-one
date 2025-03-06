import React from 'react'
import HomeHeroSec from '@/featured/home/home-hero-sec'
import {fetchTagline} from "../../../../server/home-title/taglines";


const page = async  ({params}) => {
    const home = await getTagline(params.id);
    if (!home) {
      return <div>Data not available</div>;  // Prevents rendering with undefined data
  }
   return (
    <div>
       <HomeHeroSec taglines={home} />
    </div>
  )
}

async function getTagline(id){
  if (!id) return null;
    return fetchTagline(id);
}

export default page;