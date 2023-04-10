import React from "react";

import s from "./DescriptionCards.module.css";

import Card1 from "../../images/description-card-1.png";
import Card2 from "../../images/description-card-2.png";
import Card3 from "../../images/description-card-3.png";


function DescriptionCards () {
    return (
        <div className={s.container}>
            <div className={s.border}>
                <img className={s.image} src={Card1} alt="" />
                <div className={s.title}>5 летних грунтовых кортов</div>
            </div>

            <div className={s.border}>
                <img className={s.image} src={Card2} alt="" />
                <div className={s.title}>Зал с покрытием "Искуственная трава"</div>
            </div>

            <div className={s.border}>
                <img className={s.image} src={Card3} alt="" />
                <div className={s.title}>Зал с покрытием "Хард"</div>
            </div>
        </div>
    )
}

export default DescriptionCards;