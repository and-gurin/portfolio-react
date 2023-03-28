import React from "react";
import style from './Main.module.scss'
import container from '../common/style/Container.module.scss'


export function Main() {
    return (
        <div id={'main'} className={style.main}>
            <div className={`${container.container} ${style.main__container}`}>
                <div className={style.main__greeting}>
                    <span>Hey there! </span>
                    <span>I'm Andrei<span> Hurynovich</span></span>
                    <h1 className={style.main__title}>Frontend Developer</h1>
                </div>
                <div className={style.main__figure}>
                    <div className={style.main__photo}>
                    </div>
                </div>
            </div>
        </div>
    )
}