import React from "react";

import s from "./About.module.css"

import AboutPhoto from "../../images/about-photo.png";

function About () {
    return (
        <div className={s.container}>
            <img className={s.image} src={AboutPhoto} alt="about photo" />
            
            <div className={s.text}>
                <div className={s.title1}>Спортивный клуб</div>
                
                <p>Imperdiet lorem ipsum, pulvinar aliquet sit ultricies in sit turpis. Ultricies erat pretium risus quam tincidunt non viverra porttitor. Sollicitudin enim nunc in nisi donec vel. Blandit mauris vitae amet aliquet ultrices mauris pellentesque. Non ipsum commodo, sit mi sit netus aenean nisl. ]Donec sit pellentesque enim, vestibulum. 
                Condimentum hac adipiscing purus in augue nisi. Convallis ut nisi.</p>
                
                <div className={s.title2}>Ornare orci ut dictum nulla fames. </div>
                
                <li>Euismod diam, vel venenatis bibendum sodales sem hendrerit vulputate sagittis.</li>
                <li>Nisl senectus sed malesuada donec. Interdum malesuada bibendum imperdiet elementum auctor vitae in.</li>
                <li>Quam purus ornare dictum pharetra. Sed viverra tellus sollicitudin urna, sagittis.</li>
                <li>Scelerisque urna senectus commodo, nam. Donec nibh tempus imperdiet nisi, tincidunt mus egestas nisl nullam.</li>
            </div>
        </div>
    )
}

export default About;