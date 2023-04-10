import React from 'react';

import s from "./AboutPage.module.scss";
// import { Link } from "react-router-dom";

import Banner from "../../components/Banner";
import Slider from "../../components/ClubInfo/Slider";
import ClubInfo from "../../components/ClubInfo/ClubInfo";
import Rools from "../../components/ClubInfo/Rools";

import Footer from "../../components/Footer";

function AboutPage() {
  return (
    <div className={s.container}>
      <div className={s.flex}> 
        <Banner />
        <Slider />
        <ClubInfo />
        <Rools />
        <Footer />
      </div>
    </div>
  )
}

export default AboutPage;