import React from "react";

import s from "./WelcomeBanner.module.scss";

import Header from "../Header";
// import Footer from "../Footer";
import IconOpenPage from "../../images/icon-open-page.png";

function WelcomeBanner () {
    return (
        <div className={s.welcomeBanner}>
            <div className={s.container}>
                <Header />

                <h1>Петербургский теннисный клуб имени М.А. Пасечникова</h1>

                <div className={s.welcomeBannerMenu}>
                    <div className={s.bannerMenu}>
                        <h4 className={s.bannerMenuName}>Услуги</h4>
                        <div className={s.bannerMenuText}>
                            <div className={s.text}>Аренда корта</div>
                            <img className={s.icon} src={IconOpenPage} alt="icon-open-page" />
                        </div>                    
                    </div>

                    <div className={s.bannerMenu}>
                        <h4 className={s.bannerMenuName}>Услуги</h4>
                        <div className={s.bannerMenuText}>
                            <div className={s.text}>Детский теннис</div>
                            <img className={s.icon} src={IconOpenPage} alt="icon-open-page" />
                        </div>                    
                    </div>

                    <div className={s.bannerMenu}>
                        <h4 className={s.bannerMenuName}>Услуги</h4>
                        <div className={s.bannerMenuText}>
                            <div className={s.text}>Сборы команд</div>
                            <img className={s.icon} src={IconOpenPage} alt="icon-open-page" />
                        </div>                    
                    </div>

                    <div className={s.bannerMenu}>
                        <h4 className={s.bannerMenuName}>Турниры</h4>
                        <div className={s.bannerMenuText}>
                            <div className={s.text}>Расписание</div>
                            <img className={s.icon} src={IconOpenPage} alt="icon-open-page" />
                        </div>                    
                    </div>
                </div>

                {/* <Footer /> */}

            </div>
            
        </div>
    )
}

export default WelcomeBanner;