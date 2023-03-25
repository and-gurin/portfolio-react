import React from "react";
import style from './Header.module.scss'
import {Nav} from "../nav/Nav";
import container from '../common/style/Container.module.css'

export function Header() {
    return (
        <div className={style.header}>
            <div className={`${container.container} ${style.header__content}`}>
                <Nav/>
            </div>


        </div>
    )
}