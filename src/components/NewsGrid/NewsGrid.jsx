import React, { useState, useEffect } from "react";

import Button from "../Button/Button";
import s from "./NewsGrid.module.scss";
import { Link } from "react-router-dom";

const endpoint = process.env.REACT_APP_ENDPOINT || "";

// все что сюда придет - мы складываем в объект props
function NewsGrid({id, image, date, text, buttonText = "Подробнее"}) {
    const [cards, setCards] = useState({});

    useEffect(() => {
        const getData = async () => {
          const response = await fetch(`${endpoint}/cards`);
          const data = await response.json()
          setCards(data)
        }
        getData()
      }, [])

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
                <div>
                    <Link to={`/news/${id}`}>{buttonText}</Link>
                </div> 
            </div>
        </div>
    )
}

export default NewsGrid;