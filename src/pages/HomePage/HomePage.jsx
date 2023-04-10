import React from 'react';

import s from "./HomePage.module.scss";

import WelcomeBanner from "../../components/HomePage/WelcomeBanner";
import DescriptionCards from "../../components/HomePage/DescriptionCards";
import About from "../../components/HomePage/About";
import Trainers from "../../components/HomePage/Trainers";
import Prices from "../../components/HomePage/Prices";
import Services from "../../components/HomePage/Services";
import Footer from "../../components/Footer";

function HomePage() {
  return (
        <div>
            <WelcomeBanner />
            <DescriptionCards />
            <About />
            <Trainers />
            
            <div className={s.pricesandservices}>
              <Prices />
              <Services />
            </div>
            
            <Footer />
        </div>
  )
}

export default HomePage;