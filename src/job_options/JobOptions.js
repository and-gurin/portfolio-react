import React from "react";
import style from './JobOptions.module.scss'
import container from '../common/style/Container.module.scss'


export function JobOptions() {
    return (
        <div id={'cv'} className={style.jobOptions}>
            <div className={`${container.container} ${style.jobOptions__container}`}>
                <h2 className={style.jobOptions__title}>Ready for remote or hybrid work</h2>
                <a className={style.jobOptions__ref} rel="noreferrer" target='_blank'
                   href="https://drive.google.com/file/d/1MJpX8QuWD2KRWMFXuX2kbOt9TI_ec-nZ/view?usp=sharing">
                    <button className={style.jobOptions__button}>
                        Download CV
                    </button>
                </a>
            </div>
        </div>
    )
}