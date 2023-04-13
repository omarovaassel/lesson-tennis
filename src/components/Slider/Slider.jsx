import React, { useState} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import s from "./Slider.module.scss";

// import ArrowLeft from "../../images/arrow-left.png";
// import ArrowRight from "../../images/arrow-right.png";

function Slider ({ slides = [] }) {
    const [swiper, setSwiper] = useState ();

    const swipeNext = () => {
        swiper.slideNext();
    }

    const swipePrev = () => {
        swiper.slidePrev();
    }

    return (
        <div className={s.slider}>
            <div className={s.topPart}>
                <div className={s.title}>Фото кортов</div>
                <div className={s.buttons}>
                    <button className={s.button} onClick={swipePrev}>prev</button>
                    <button className={s.button} onClick={swipeNext}>next</button>
                </div>
            </div>

            <div className={s.swiperWrapper}>
                <Swiper 
                    loop
                    grabCursor
                    className={s.swiper} 
                    onSwiper={(swiper) => {
                        setSwiper(swiper);
                    }}
                >
                    {slides.map((elem) => (
                        <SwiperSlide className={s.slide} key={elem.id}>
                            {elem.image && (
                            <img className={s.image} src={elem.image} alt="" />
                        )}
                        {elem.description && (
                            <div className={s.subtitle}>{elem.description}</div>
                        )}    
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


            {/* <div className={s.photoblock}>
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
            </Swiper> */}
        </div>
    )
}

export default Slider;