import React from "react";
import style from "../navbar/navbar.module.scss";
import icon1 from "../../../icon/Icon1.svg"
import icon2 from "../../../icon/Icon2.svg"
import icon3 from "../../../icon/Icon3.svg"
import icon4 from "../../../icon/Icon4.svg"
import icon5 from "../../../icon/Icon5.svg"
import icon6 from "../../../icon/Icon6.svg"
import icon7 from "../../../icon/Icon7.svg"
import icon8 from "../../../icon/Icon8.svg"
import icon9 from "../../../icon/Icon9.svg"
import icon10 from "../../../icon/Icon10.svg"
import icon11 from "../../../icon/Icon11.svg"
import icon12 from "../../../icon/Icon12.svg"
import frame from "../../../icon/Frame.svg"


export default function Navbar(){
    return(
       <div className={style.navbar}>
        <div className={style["navbar-item"]}>
            <div className={style["icon-list"]}>
                <img src={icon1} alt="" className={style.image} />
                <p>Amazing views</p>
            </div>
            <div className={style["icon-list"]}>
                <img src={icon2} alt="" />
                <p>Lakefront</p>
            </div>
            <div className={style["icon-list"]}>
                <img src={icon3} alt="" />
                <p>Caves</p>
            </div>
            <div className={style["icon-list"]}>
                <img src={icon4} alt="" />
                <p>OMG!</p>
            </div>
            <div className={style["icon-list"]}>
                <img src={icon5} alt="" />
                <p>Earth homess</p>
            </div>
            <div className={style["icon-list"]}>
                <img src={icon6} alt="" />
                <p>Treehouses</p>
            </div>
            <div className={style["icon-list"]}>
                <img src={icon7} alt="" />
                <p>Mansionss</p>
            </div>
            <div className={style["icon-list"]}>
                <img src={icon8} alt="" />
                <p>Cabins</p>
            </div>
            <div className={style["icon-list"]}>
                <img src={icon9} alt="" />
                <p>Amazing pools</p>
            </div>
            <div className={style["icon-list"]}>
                <img src={icon10} alt="" />
                <p>Islands</p>
            </div>
            <div className={style["icon-list"]}>
                <img src={icon11} alt="" />
                <p>Beachfront</p>
            </div>
            <div className={style["icon-list"]}>
                <img src={icon12} alt="" />
                <p>Trending</p>
            </div>
        </div>
        <div className={style["next-filters"]}>
            <span className={style["icon-right"]}><i class="fa-solid fa-angle-right"></i></span>
            <div className={style.filters}>
                <img src={frame} alt="" />
                <p className={style["filter-list"]}>Filters</p>
            </div>
        </div>
       </div> 
    )
}