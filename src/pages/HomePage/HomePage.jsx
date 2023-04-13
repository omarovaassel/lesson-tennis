import React from 'react';

import s from "./HomePage.module.scss";

import WelcomeBanner from "../../components/WelcomeBanner";
import DescriptionCards from "../../components/DescriptionCards";
import About from "../../components/About";
import Trainers from "../../components/Trainers";
import Prices from "../../components/Prices";
import Services from "../../components/Services";
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