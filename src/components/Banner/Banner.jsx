import React from "react";

import s from "./Banner.module.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Banner () {
    return (
        <div className={s.Banner}>
            <div className={s.container}>
                {/* <Header /> */}
                <h1>Новости</h1>
                {/* <Footer /> */}
            </div>
            
        </div>
    )
}

export default Banner;