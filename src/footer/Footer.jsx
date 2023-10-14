import React from 'react';
import style from './Footer.module.scss'
import container from '../common/style/Container.module.scss'
import {Title} from '../common/components/title/Title';
import {InstagramBtn} from "../assets/image/svg/InstagramBtn";
import {TelegramBtn} from "../assets/image/svg/TelegramBtn";
import {LinkedinBtn} from "../assets/image/svg/LinkedinBtn";

const links = [
    {href: 'https://t.me/and_gurin', icon: <TelegramBtn/>},
    {href: 'https://www.instagram.com/and_gurin/', icon: <InstagramBtn/>},
    {href: 'https://www.linkedin.com/in/and-gurin/', icon: <LinkedinBtn/>},
]
export function Footer() {
    return (
        <div id={'about'} className={style.footer}>
            <div className={`${container.container} ${style.footer__container}`}>
                <Title title={'Andrei'}/>
                <div className={style.footer__items}>
                    {links.map(link => {
                        return (
                            <div className={style.footer__item}>
                                <a className={style.footer__ref} rel="noreferrer" target='_blank' href={link.href}>
                                    {link.icon}
                                </a>
                            </div>
                        )
                    })}
                </div>
                <p className={style.footer__copyright}>2023 All right reserved</p>
            </div>
        </div>
    )
}