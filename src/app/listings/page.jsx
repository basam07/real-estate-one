
import React from 'react';
import HomeSecSix from "@/featured/home/home-section-six";
import HeroSec from "@/featured/listings/hero-sec";
import ListingsSec from "@/featured/listings/listings-sec";
import '@/featured/listings/listings.css';

const page = () => {
    return (
        <>
            <HeroSec />
            <ListingsSec />
            <HomeSecSix  />
        </>
    )
}

export default page