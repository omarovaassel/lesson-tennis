import React from "react";

import s from "./Banner.module.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Banner () {
    return (
        <div className={s.Banner}>
            <div className={s.container}>
                <Header />
                <h1>Новости</h1>
                {/* <Footer /> */}
            </div>
            
        </div>
    )
}

export default Banner;