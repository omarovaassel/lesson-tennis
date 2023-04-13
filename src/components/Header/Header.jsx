import React from "react";

import s from "./Header.module.scss";

import NewsPage from "../../pages/NewsPage";

import Logo from "../../images/Logo.png";
import Icon1 from "../../images/icon-youtube-white.png";
import Icon2 from "../../images/icon-vk-white.png";

function Header () {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <img className={s.logo} src={Logo} alt="logotype" />
                <div className={s.headerMenu}>
                    <div>Главная</div>
                    <div>О клубе</div>
                    <div path="/news" element={<NewsPage />}>Новости</div>
                    
                    <div>Турниры</div>
                    <div>Услуги</div>
                    <div>Галерея</div>
                    <div>Цены</div>
                    <div>Контакты</div>
                </div>
                <div className={s.headerIcon}>
                    <img className={s.icon1} src={Icon1} alt="icon-youtube" />
                    <img className={s.icon2} src={Icon2} alt="icon-vk" />
                </div>
            </div>
            
            <div className={s.line}></div>
        </div>
    )
}

export default Header;