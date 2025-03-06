'use client'
import React from 'react'
import Image from 'next/image'
import Properties from '../../assets/highlightedone.png'
import PropertiesTwo from '../../assets/highlightedtwo.png'
import PropertiesThree from '../../assets/highlightedthree.png'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function PropertiesHero({property}) {
  console.log(property , 'pr');
  return (
    <div className="flex justify-between gap-4">
        <Swiper
      // install Swiper modules
      modules={[Navigation,  Scrollbar, Autoplay]}
      spaceBetween={10}
      slidesPerView={1.8}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
        {property?.images?.map((data) => <SwiperSlide>
            <Image src={data} width={300} height={300} alt="Property 1" className="w-full h-full"/>
        </SwiperSlide>
        )}
      </Swiper>
    </div> 
  )
}
