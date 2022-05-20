import React from "react";
import style from './MyWorks.module.css'
import container from '../common/style/Conteiner.module.css'
import {Work} from "./work/Work";


export function MyWorks() {
    return (
        <div className={style.MyWorks}>
            <div className={`${container.container} ${style.MyWork_content}`}>
                <div className={style.MyWork_title}>
                    <h2>I have next works</h2>
                </div>
                <div className={style.MyWork_items}>
                    <Work title='Site1'/>
                    <Work title='Site1'/>
                </div>
            </div>
        </div>
    )
}