import React from "react";
import Image from "next/image";
import Link from "next/link";
import {ImageBasePath} from "../../../lib/form.utils";

export default function PropertiesTile({properties}){
    const { id, slug, images, Title, price, description } = properties;
    return(
        <div key={id} className="highlight-item" style={{maxWidth: "378px", width: '100%', textAlign:'left'}}>
            <Link className={'highlight-item-link'} href={`/properties/${slug}`}>
                <Image src={ImageBasePath + images?.[0]} className={'w-full'} width={300} height={300} alt={`Image of ${Title}`}/>
            </Link>
            <h3 style={{fontSize: "22px", fontWeight: 'bold', marginTop: '5px'}}>{Title}</h3>
            <div style={{
                display: "flex", alignItems: "center", justifyContent: 'space-between',
                marginTop: '10px'
            }} className="highlight-item-description">
                <span>$ {price}</span>
                <Link className={'highlight-item-link'} href={`/properties/${slug}`}>
                    View Details
                </Link>
            </div>
        </div>
    )
}