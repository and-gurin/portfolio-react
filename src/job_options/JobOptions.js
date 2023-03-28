import React from "react";
import style from './JobOptions.module.css'
import container from '../common/style/Container.module.scss'


export function JobOptions() {
    return (
        <div className={style.jobOptions}>
            <div className={`${container.container} ${style.jobOptions_content}`}>
                    <h1>ready for remote work</h1>
                    <button>Hire me</button>
            </div>
        </div>
    )
}