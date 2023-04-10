import React from "react";

import Button from "../components/Button/Button";
import s from "./NewsGrid.module.css";

// все что сюда придет - мы складываем в объект props
function NewsGrid({image, date, text, buttonText = "Подробнее"}) {
    return (
        <div className={s.container}>
            {/* <div className="news_item"> */}
            <div className={s.news_item}>
                <img className={s.image} src={image} alt="tennis" />
                <div className={s.news_date}>{date}</div>
                <h4 className={s.h4}>{text}</h4>
                {/* <Button className="button" color="grey" text="Подробнее"/> */}
                {/* второй вариант написания текста названия кнопки .children*/}
                {/* <Button className="button" color="#8D86C9" text="Подробнее">Кнопка</Button> */}
                <Button>{buttonText}</Button>
            </div>
        </div>
    )
}

export default NewsGrid;