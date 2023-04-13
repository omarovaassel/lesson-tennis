import React from "react";

import s from "./Trainers.module.scss";

import ArrowLeft from "../../images/arrow-left.png";
import ArrowRight from "../../images/arrow-right.png";
import PhotoTrainer1 from "../../images/PhotoTrainer1.png";
import PhotoTrainer2 from "../../images/PhotoTrainer2.png";
import PhotoTrainer3 from "../../images/PhotoTrainer3.png";
import PhotoTrainer4 from "../../images/PhotoTrainer4.png";
import PhotoTrainer5 from "../../images/PhotoTrainer5.png";
import PhotoTrainer6 from "../../images/PhotoTrainer6.png";

function Trainers () {
    return (
        <div className={s.container}>
            <div className={s.trainersheader}>
                <div className={s.title}>Тренерский состав</div>
                <div className={s.arrows}>
                    <img className={s.arrowleft} src={ArrowLeft} alt="arrowleft" />
                    <img className={s.arrowright} src={ArrowRight} alt="arrowright" />
                </div>
            </div>
            
            <div className={s.trainerslist}>
                <div className={s.trainer}>
                    <img className={s.photo} src={PhotoTrainer1} />
                    <div className={s.trainername}>Sed erat</div>
                    <div className={s.trainerabout}>Arcu elit massa amet turpis vel consequat pellentesque sit.</div>
                </div>

                <div className={s.trainer}>
                    <img className={s.photo} src={PhotoTrainer2} />
                    <div className={s.trainername}>Pulvinar aliquam</div>
                    <div className={s.trainerabout}>Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo lorem morbi quis. </div>
                </div>

                <div className={s.trainer}>
                    <img className={s.photo} src={PhotoTrainer3} />
                    <div className={s.trainername}>Pretium odio</div>
                    <div className={s.trainerabout}>Id sapien sed nibh fermentum massa posuere ipsum. Diam in.</div>
                </div>

                <div className={s.trainer}>
                    <img className={s.photo} src={PhotoTrainer4} />
                    <div className={s.trainername}>Aliquet consectetur</div>
                    <div className={s.trainerabout}>Scelerisque accumsan pretium justo, vitae elit. Dolor semper morbi sit auctor vel diam eros.</div>
                </div>

                <div className={s.trainer}>
                    <img className={s.photo} src={PhotoTrainer5} />
                    <div className={s.trainername}>Blandit augue</div>
                    <div className={s.trainerabout}>Adipiscing amet, viverra dignissim egestas. Sed nibh egestas venenatis faucibus. </div>
                </div>

                <div className={s.trainer}>
                    <img className={s.photo} src={PhotoTrainer6} />
                    <div className={s.trainername}>Lorem lacus</div>
                    <div className={s.trainerabout}>Quis ullamcorper pretium lacus risus tellus dolor etiam. </div>
                </div>
            </div>
            
        </div>
    )
}

export default Trainers;