import React from 'react';
import style from './button.module.scss'

export function Button(props) {
        return (
            <a href={props.url} className={style.button} rel="noreferrer">{props.title}</a>
        )
}