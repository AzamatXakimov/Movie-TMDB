import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./SwiperCasts.css"

export const SwiperCasts = ({list}) => {
    return<>

        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {list.map(item => <SwiperSlide>{item}</SwiperSlide>)}
        </Swiper>
        {/* <Swiper
            slidesPerView={10}
            spaceBetween={10}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {list.map(item => <SwiperSlide>{item}</SwiperSlide>)}
        </Swiper> */}
        {/* <Swiper
            slidesPerView={8}
            spaceBetween={30}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
            {list.map(item => <SwiperSlide>{item}</SwiperSlide>)}
        </Swiper> */}
    </>
}