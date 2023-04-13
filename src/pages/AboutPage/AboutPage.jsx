import React from 'react';

import s from "./AboutPage.module.scss";
// import { Link } from "react-router-dom";

import Header from '../../components/Header';
import Banner from "../../components/Banner";
import Slider from "../../components/Slider";
import ClubInfo from "../../components/ClubInfo";
import Rools from "../../components/Rools";
import Footer from "../../components/Footer";
import slide1 from "../../images/slider-1.jpg";
import slide2 from "../../images/slider-2.jpg";
import slide3 from "../../images/slider-3.jpg";

const slides = [
  {
    id: 0,
    image: slide1,
    description: "Открытый корт"
  },
  {
    id: 1,
    image: slide2,
    description: "Закрытый корт"
  },
  {
    id: 2,
    image: slide3,
    description: "Голубой корт"
  }
]

function AboutPage() {
  return (
    <div className={s.container}>
      <div className={s.flex}> 
        
        <div className={s.header}>
          <Header />
        </div>

        <Banner />
    
        <div className={s.main}>
          <div className={s.containerslider}>
            <Slider slides={slides}/>
          </div>
        </div>
        
        <ClubInfo />
        <Rools />
        
        <div className={s.footer}>
          <Footer />
        </div>

      </div>
    </div>
  )
}

export default AboutPage;