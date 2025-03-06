import React from 'react'
import PropertiesHero from '@/featured/properties/properties-hero'
import PropertiesSecTwo from '@/featured/properties/properties-sec-two'
import {fetchProperty} from "../../../../server/properties/properties";

export default async function page ({params}) {

    const property = await getProperties(params.slug);

  return (
    <div>
        <PropertiesHero property={property} />
        <PropertiesSecTwo property={property} />
    </div>
  )
} 

export async function getProperties (slug) {
  return fetchProperty(slug);
}