import React, { useRef, useState} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";

import s from "../../components/ClubInfo/Slider.module.css";

import ArrowLeft from "../../images/arrow-left.png";
import ArrowRight from "../../images/arrow-right.png";

function Courusel () {
    return (
        <div className={s.container}>
            <div className={s.photoblock}>
                <div className={s.title}>Фото кортов</div>
                <div className={s.arrows}>
                    <img className={s.arrowleft} src={ArrowLeft} />
                    <img className={s.arrowright} src={ArrowRight} />
                </div>
            </div>

            <Swiper className={s.myswiper}>
                <SwiperSlide className={s.slide1}>1</SwiperSlide>
                <SwiperSlide className={s.slide2}>2</SwiperSlide>
                <SwiperSlide className={s.slide3}>3</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Courusel;