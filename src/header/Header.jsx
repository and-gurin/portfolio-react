import React from 'react';
import style from './Header.module.scss'
import {Nav} from '../nav/Nav';
import {MenuBtn} from '../assets/image/svg/MenuBtn';
import {CloseBtn} from '../assets/image/svg/CloseBtn';

const links = ["#main", "#skills", "#projects", "#cv", "#contacts", "#about"]
export function Header() {

    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className={style.header}>
            <div className={`${style.header__container}`}>
                {!isOpen
                    ? <div className={style.header__icon + ' ' + style.header__icon_menu}
                           onClick={() => setIsOpen(!isOpen)}>
                    <MenuBtn className={style.header__svg}/>
                </div>
                : <div className={style.header__icon} onClick={() => setIsOpen(!isOpen)}>
                        <CloseBtn className={style.header__svg}/>
                    </div>}
                <div className={isOpen ? style.header__nav + ' ' + style.header__nav_active : style.header__nav} onClick={() => setIsOpen(false)}>
                    <Nav links={links}/>
                </div>
            </div>
        </div>
    )
}