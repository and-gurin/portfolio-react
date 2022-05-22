import React from "react";
import style from '../work/Work.module.css'


export function Work(props) {
    return (
        <div className={style.work}>
                <div className={style.work_logo}>
                </div>
                <button className={style.work_title}><a href="#">look</a></button>
            <div className={style.work_description}>
                <p>{props.title}</p>
                <p>Short description</p>
            </div>
        </div>
    )
}