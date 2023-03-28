import React from "react";
import style from './Header.module.scss'
import {Nav} from "../nav/Nav";

export function Header() {
    return (
        <div className={style.header}>
            <div className={`${style.header__container}`}>
                <Nav/>
            </div>


        </div>
    )
}