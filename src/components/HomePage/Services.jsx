import React from "react";

import s from "./Services.module.css";

import ArrowLeft from "../../images/arrow-left.png";
import ArrowRight from "../../images/arrow-right.png";
import ServicesPhoto from "../../images/services-photo.png";

function Services () {
    return (
        <div className={s.container}>
            <div className={s.services}>
                <div className={s.blocktop}>
                    <div className={s.title}>Услуги</div>
                    <div className={s.arrows}>
                        <img className={s.arrowleft} src={ArrowLeft} />
                        <img className={s.arrowright} src={ArrowRight} />
                    </div>
                </div>
                <div className={s.blockbottom}>
                    <img className={s.servicesphoto} src={ServicesPhoto} />
                    <div className={s.photoname}>Уютное кафе</div>
                </div>                    
            </div>
        </div>
    )
}

export default Services;