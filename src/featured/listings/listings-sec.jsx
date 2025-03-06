import FilterSec from "@/components/filter/filter-sec";
import PropertiesTile from "@/data/properties/properties-tile";
import React from "react";
import {fetchProperties} from "../../../server/properties/properties";

export default async function ListingsSec(){
        const investmentData = await getData()
        return <>
            <div className={'listings-sec'}>
                <div className={'listings-title'}>We offer access to the finest properties, carefully vetted to meet the <br/> highest standards for our discerning investors.</div>
                <br/>
                <FilterSec />
                <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2  gap-10 w-3/4 mx-auto'>
                        {investmentData.map((data) => (
                            <PropertiesTile properties={data} />
                        ))}
                </div>
             </div>
        </>
}

async function getData() {
    return fetchProperties();
}