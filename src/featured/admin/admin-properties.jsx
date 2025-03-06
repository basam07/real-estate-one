import PropertiesTile from "@/data/properties/properties-tile";
import React from "react";
import { fetchProperties } from "../../../server/properties/properties";
import Link from "next/link";
import DeletePropertiesPageButton from "@/components/admin/properties/delete-properties-page-button";
import {revalidatePath} from "next/cache";

export const dynamic = 'force-dynamic';


export default async function AdminProperties() {
    const investmentData = await getData()
    return (
        <>
 {/* Header Section */}
 <div className="flex justify-between items-center font-medium  m-4 px-4">
        <h2 className="text-center flex-1 text-5xl">Properties</h2>
        <div className="ml-4">
             <Link href={'/admin/properties/create'} 
            style={{ backgroundColor: '#90D26D' }} 
            className="edit-button text-white py-2 px-4 rounded mr-2"
        >
            Create
        </Link>
        </div>
      </div>
            <div className={'listings-sec mt-6'}>
                <div className='flex flex-wrap gap-10 w-11/12 mx-auto'>
                    {investmentData.map((data) => (
                        <div key={data.id} className="property-tile">
                            <PropertiesTile properties={data} />
                            <div className="buttons mt-4 text-white">
                                <Link
                                    href={`/admin/properties/${data.slug}`}
                                    style={{ backgroundColor: '#5AB2FF' }} 
                                    className="edit-button  py-2 px-4 rounded mr-2"
                                >
                                    Edit
                                </Link>
                                <DeletePropertiesPageButton slug={data.id} onDelete={async () => {
                                    'use server'
                                    revalidatePath('/admin/properties')
                                }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

async function getData() {
    return fetchProperties();
}