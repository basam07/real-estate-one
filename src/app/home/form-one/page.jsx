import React from 'react'
import HomeHeroSec from '@/featured/home/home-hero-sec'
import {fetchTagline} from "../../../../server/home-title/taglines";


const page = async  ({params}) => {
    const home = await getTagline(params.slug);
    if (!home) {
      return <div>Data not available</div>;  // Prevents rendering with undefined data
  }
   return (
    <div>
       <HomeHeroSec taglines={home} />
    </div>
  )
}

async function getTagline(slug){
  if (!slug) return null;
    return fetchTagline(slug);
}

export default page;