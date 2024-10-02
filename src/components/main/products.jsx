import React from "react";
import style from "../main/products.module.scss";
import { data } from "../data/data";

export default function Card() {
    return (
        <div className={style.cards}>
            {data.map((item) => (
                <div key={item.id} className={style.card}>
                    <img src={item.img} alt="" className={style["image-style"]} />
                    <div className={style["card-body"]}>
                        <div className={style["card-info"]}>
                            <h1 className={style["card-title"]}>{item.title}</h1>
                            <h4 className={style["card-rate"]}>{item.rate}</h4>
                        </div>
                        <p className={style["card-name"]}>{item.name}</p>
                        <p className={style["card-date"]}>{item.date}</p>
                        <h5 className={style["card-price"]}>${item.price} per night</h5>
                    </div>
                </div>
            ))}
        </div>
    );
}
