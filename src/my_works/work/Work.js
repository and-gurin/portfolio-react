import React from 'react';
import style from './Work.module.scss'
import {Button} from "../../common/components/button/button";

export function Work(props) {

    return (
        <div className={style.work}>
            <div style={props.style} className={style.work__image}>
                <Button url={props.address} title={'Look'}/>
            </div>
            <div className={style.work__description}>
                <h3 className={style.work__title}>{props.title}</h3>
                <p className={style.work__subtitle}>{props.description}</p>
            </div>
        </div>
    )
}