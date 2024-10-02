import React from "react";
import style from "../header/header.module.scss";
import air from "../../../assets/Airbnb.svg";
import logoD from "../../../assets/div.svg";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style["header-item"]}>
        <div className="header__logo-img">
          <img src={air} alt="Airbnb logo" />
        </div>
        <div className={style["list-search"]}>
          <p className={style.list}>Anywhere</p>
          <p className={style["list-center"]}>Any week</p>
          <div className={style["input-search"]}>
            <input type="text" placeholder="Add guests" />
            <button className={style.search}>
              <i className="fa-solid fa-magnifying-glass"></i> {/* className ishlatildi */}
            </button>
          </div>
        </div>
        <div className={style["icon-list"]}>
          <p className={style.list}>Airbnb your home</p>
          <p className={style.icon}>
            <i className="fa-solid fa-globe"></i> {/* className ishlatildi */}
          </p>
          <div className={style["img-bars"]}>
            <span>
              <i className="fa-solid fa-bars"></i> {/* className ishlatildi */}
            </span>
            <a href="">
              <img src={logoD} alt="User profile icon" /> {/* alt atribut to'ldirildi */}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
