import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WelcomeBanner from "./components/WelcomeBanner";
import DescriptionCards from "./components/DescriptionCards";
import About from "./components/About";
import Trainers from "./components/Trainers";
import Prices from "./components/Prices";
import Services from "./components/Services";
import AboutClub from "./components/ClubInfo";
import Slider from "./components/Slider";
import Rools from "./components/Rools";

import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";

import Banner from "./components/Banner";

import Header from "./components/Header";
import Footer from "./components/Footer";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* // это страница приложения */}
                {/* <Route path="/" element={<div>Home Page</div>} /> */}

                <Route path="/" element={<HomePage />} />

                <Route path="/Header" element={<Header />} />
                <Route path="/WelcomeBanner" element={<WelcomeBanner />} />
                <Route path="/DescriptionCards" element={<DescriptionCards />} />
                <Route path="/About" element={<About />} />
                <Route path="/Trainers" element={<Trainers />} />
                <Route path="/Prices" element={<Prices />} />
                <Route path="/Trainers" element={<Trainers />} />
                <Route path="/Services" element={<Services />} />

                <Route path="/AboutPage" element={<AboutPage />} />
                {/* <Route path="/about" element={<AboutPage />} /> */}
                <Route path="/Slider" element={<Slider />} />
                <Route path="/AboutClub" element={<AboutClub />} />
                <Route path="/Rools" element={<Rools />} />

                <Route path="/Banner" element={<Banner />} />
                <Route path="/Footer" element={<Footer />} />
                
                <Route path="/news" element={<NewsPage />} /> 
            </Routes>
        </BrowserRouter>
    )
    
}

export default Router;