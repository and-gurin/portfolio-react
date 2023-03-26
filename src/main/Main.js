import React from "react";
import style from './Main.module.scss'
import container from '../common/style/Container.module.css'


export function Main() {
    return (
        <div id={'main'} className={style.main}>
            <div className={`${container.container} ${style.main_content}`}>
                <div className={style.main_intro}>
                    <span>Hey there! I'm</span>
                    <h1>Andrei Hurynovich</h1>
                    <p>React developer</p>
                </div>
                <div className={style.main_photo}>
                </div>
            </div>
        </div>
    )
}