import React from 'react'
import CareersHeroSec from "@/featured/careers/careers-hero-sec";
import CareersSecTwo from "@/featured/careers/careers-sec-two";
import AboutSecThree from "@/featured/about/about-sec-three";
import CareersSecThree from "@/featured/careers/careers-sec-three";
import CareersSecFour from "@/featured/careers/careers-sec-four";
import CarrerSecSeven from '@/featured/careers/career-sec-seven';
import CareerSecEight from '@/featured/careers/career-sec-eight'
import CarrerSecNine from '@/featured/careers/carrer-sec-nine';

const page = () => {
  return (
    <>
        <CareersHeroSec />
        <CareersSecTwo />
        <CareersSecThree />
        <AboutSecThree />
        <CareersSecFour />
        <CarrerSecSeven/>
        <CareerSecEight/>
        <CarrerSecNine/>
    </>
  )
}

export default page;