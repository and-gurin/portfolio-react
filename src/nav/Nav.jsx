import React from 'react';
import style from './Nav.module.scss'

export function Nav({links}) {
    return (
        <div className={style.nav}>
            {links.map((link, index) => {
                return (
                    <a key={index} className={style.nav__ref} href={link}>{link.charAt(1).toUpperCase() +  link.slice(2)}</a>
                )
            })}
        </div>
    )
}