import React from "react";
import style from "../main/products.module.scss";
import cardImage from "../../assets/image.png"; // Fayl kengaytmasini to'g'ri qo'shing

export default function Card({ data }) {
    console.log(data);
    return (
        <div className={style.cards}>
            {data.map((item) => {
                return (
                    <div key={item.id} className={style.card}>
                        {/* Rasmingizni import qiling */}
                        <img src={cardImage} alt={item.name} className={style["image-style"]} />
                        <div className={style["card-body"]}>
                            <div className={style["card-info"]}>
                                <h1 className={style["card-title"]}>{item.title}</h1>
                                <h4 className={style["card-rate"]}>{item.rate}</h4>
                            </div>
                            <p className={style["card-name"]}>{item.name}</p>
                            <p className={style["card-data"]}>{item.date}</p>
                            <h5 className={style["card-price"]}>${item.price} per night</h5>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
