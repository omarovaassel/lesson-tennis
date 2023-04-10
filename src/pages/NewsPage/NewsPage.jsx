import React from 'react';

import s from "./NewsPage.module.scss";

import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import NewsGrid from "../../components/NewsGrid";

import { tennisData } from "../../data/tennis";

function NewsPage() {
  return (
        <div className={s.container}>
            <Banner />

            <div className={s.grid}>
                {tennisData.map((elem) => (
                    <NewsGrid 
                        // обязательно нужно добавлять уникальный ключ идентификатор, а нашем случае это id из TennisData
                        // он не будет отображаться для пользователя
                        key={elem.id}
                        image={elem.image}
                        date={elem.date}
                        text={elem.text}
                        buttonText={elem.buttonText}
                    />
                ))}

                
            </div>

            <Footer />
        </div>
  )
}

export default NewsPage;