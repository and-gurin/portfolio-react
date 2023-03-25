import React from 'react';
import style from './Title.module.scss'

export function Title(props) {
    return (
        <div className={style.Title}>
            <h2 className={style.Title__body}>{props.title}</h2>
        </div>
    )
}