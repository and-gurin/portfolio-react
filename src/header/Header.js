import React from "react";
import style from './Header.module.css'
import {Nav} from "../nav/Nav";
import container from '../common/style/Conteiner.module.css'

export function Header() {
    return (
        <div className={style.header}>
            <div className={`${container.container} ${style.header_content}`}>
                <Nav/>
            </div>


        </div>
    )
}