import React from 'react';
import style from './Title.module.scss'

export function Title(props) {
    return (
        <div className={style.title}>
            <h2 className={style.title__body}>{props.title}</h2>
        </div>
    )
}