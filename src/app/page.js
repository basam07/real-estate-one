import React from 'react'
import HomeHeroSec from "@/featured/home/home-hero-sec";
import HomeSecFour from "@/featured/home/home-sec-four";
import Homesection2 from "@/featured/home/home-sec-two";
import Homesectionthree from '@/featured/home/home-sec-three'
import HomeSecSix from "@/featured/home/home-section-six";
import Homeherofive from '@/featured/home/home-sec-five'

const page = () => {
  return (
      <>
    <HomeHeroSec />
    <Homesection2/>
    <Homesectionthree/>
    <HomeSecFour />
    <Homeherofive/>
    <HomeSecSix/>
    </>
  )
}

export default page