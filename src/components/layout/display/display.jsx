import React from "react";
import style from "../display/display.module.scss";

export default function Display (){
    return(
        <div className={style.display}>
            <div className={style["display-item"]}>
                    <p className={style["display-list"]}>Display total price</p>
                    <p className={style["display-list2"]}>Includes all fees, before taxes</p>
            </div>
                <span className={style.circle}><p className={style.turnOn}></p></span>
        </div>
    )
}