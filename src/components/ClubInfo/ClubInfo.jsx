import React from 'react';

import s from "../ClubInfo/ClubInfo.module.css";

import Banner from "../Banner";
import Footer from "../Footer";

import AboutPhoto from "../../images/about-photo-2.png";

function ClubInfo () {
    return (
        <div className={s.container}>
            <div className={s.title1}>О клубе</div>

            <div className={s.block}>
            <img className={s.image} src={AboutPhoto} alt="about photo" />
            
            <div className={s.text}>
                <div className={s.title2}>Петербургский теннисный клуб имени М.А. Пасечникова</div>
                
                <p>Feugiat gravida proin arcu tellus ipsum posuere nisl, consectetur scelerisque. Posuere ipsum tellus dignissim etiam lorem ultrices risus viverra. Purus volutpat phasellus viverra vestibulum quis. Gravida pretium odio enim ut id tempus semper. Urna cum at in iaculis mauris at. Tellus, a euismod tincidunt eu orci faucibus. Mi faucibus pellentesque molestie nunc, et, tellus. Neque cras mattis dolor id. Maecenas vivamus tristique donec neque id convallis. Feugiat fusce at est at.
                    Vitae nec eget blandit id nisl. Sit ac dictum lorem mauris posuere sit. Gravida commodo egestas pharetra, mi interdum. Ullamcorper pulvinar hac risus egestas fusce nunc. Vel auctor proin integer ut lacus, sed neque id dictum. At enim quis eu, mattis aliquet varius in eu venenatis.
                    Quisque diam elit donec orci sed dolor. Neque sed sit tortor eget urna magna interdum feugiat ut. In purus rhoncus egestas euismod morbi. Ut velit facilisi in cras tempus turpis sapien ipsum, mattis. Tempor sit nulla ac lorem placerat congue. Nulla purus vestibulum suscipit pellentesque risus non.</p>
                
                <div className={s.clubadvantages}>
                    <div className={s.advantage}>
                        <div className={s.number}>7</div>
                        <div className={s.description}>Летних грунтовых кортов</div>
                    </div>

                    <div className={s.advantage}>
                        <div className={s.number}>4</div>
                        <div className={s.description}>Зимних корта с покрытием «искусственная трава»</div>
                    </div>

                    <div className={s.advantage}>
                        <div className={s.number}>3</div>
                        <div className={s.description}>Зимних корта с покрытием «hard»</div>
                    </div>                   
                </div>
            </div>
            </div>
        </div>
    )
}

export default ClubInfo;