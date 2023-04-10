import React from "react";

import s from "./Prices.module.css";

import PriceButton from "../../images/PriceButton.png";
import ArrowLeft from "../../images/arrow-left.png";
import ArrowRight from "../../images/arrow-right.png";
import ServicesPhoto from "../../images/services-photo.png";

function Prices () {
    return (
        <div className={s.container}>
            <div className={s.psicesservices}>
                <div className={s.prices}>
                    <div className={s.title}>Цены и абонементы</div>
                    <div className={s.blockbottom}>
                        <div className={s.priceblock}>
                                <div className={s.pricename}>Зимний сезон 2021-2022</div>
                                <img src={PriceButton} />
                            </div>
                            
                            <div className={s.priceblock}>
                                <div className={s.pricename}>Абонементы</div>
                                <img src={PriceButton} />
                            </div>

                            <div className={s.priceblock}>
                                <div className={s.pricename}>Скидки</div>
                                <img src={PriceButton} />
                            </div>

                            <div className={s.priceblock}>
                                <div className={s.pricename}>Дополнительные услуги</div>
                                <img src={PriceButton} />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Prices;