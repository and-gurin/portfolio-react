import React from 'react';
import style from './Nav.module.scss'

export function Nav() {
    return (
        <div className={style.nav}>
            <a className={style.nav__ref} href="#main">Main</a>
            <a className={style.nav__ref} href="#skills">Skills</a>
            <a className={style.nav__ref} href="#projects">Projects</a>
            <a className={style.nav__ref} href="#cv">CV</a>
            <a className={style.nav__ref} href="#contacts">Contacts</a>
            <a className={style.nav__ref} href="#about">About</a>
        </div>
    )
}