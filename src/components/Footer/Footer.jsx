import React from "react";

import s from "./Footer.module.scss";

import Icon1 from "../../images/icon-youtube.png";
import Icon2 from "../../images/icon-vk.png";
import Icon3 from "../../images/icon-telegram.png";

function Footer () {
    return (
        <div className={s.footer}>
            <div className={s.footerRights}>2022 © Все права защищены.</div>
            <div className={s.footerMenu}>
                <div>Главная</div>
                <div>О клубе</div>
                <div>Новости</div>
                <div>Турниры</div>
                <div>Услуги</div>
                <div>Галерея</div>
                <div>Цены</div>
                <div>Контакты</div>
            </div>
            <div className={s.footerIcon}>
                <img className={s.icon1} src={Icon1} alt="icon-youtube" />
                <img className={s.icon2} src={Icon2} alt="icon-vk" />
                <img className={s.icon3} src={Icon3} alt="icon-telegram" />
            </div>
        </div>
    )
}

export default Footer;