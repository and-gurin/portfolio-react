import React from "react";
import style from './Skill.module.scss'


export function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.skill__figure}>
                <span style={props.style} className={style.skill__logo}></span>
            </div>
            <h3 className={style.skill__title}>{props.title}</h3>
            <div className={style.skill__description}>
                {props.description}
            </div>
        </div>
    )
}