import React from 'react'
import Abouthero from '@/featured/about/about-hero-sec'
import AboutSecTwo from '@/featured/about/about-sec-two'
import AboutSecThree from '@/featured/about/about-sec-three'
import AboutSecFour from '@/featured/about/about-sec-four'
import AboutSecFive from '@/featured/about/about-sec-five'
import HomeSecSix from "@/featured/home/home-section-six";
const page = () => {
  return (
    <div>
        <Abouthero/>
        <AboutSecTwo/>
        <AboutSecThree/>
        <AboutSecFour/>
        <AboutSecFive/>
        <HomeSecSix/>
    </div>
  )
}

export default page