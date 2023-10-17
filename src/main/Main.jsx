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
                    <div className={style.main__button}></div>
                    <a className={style.main__link}
                       rel='noreferrer'
                       target='_blank'
                       href='https://drive.google.com/file/d/1__WLF_9LX9NPeEAHpeaMvhmw5TANJglC/view?usp=sharing'>
                        Download CV
                    </a>
                </div>
                <div className={style.main__figure}>
                    <div className={style.main__photo}>
                    </div>
                </div>
            </div>
        </div>
    )
}