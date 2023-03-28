import React from 'react';
import style from './Footer.module.scss'
import container from '../common/style/Container.module.scss'
import {Title} from '../common/components/title/Title';


export function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${container.container} ${style.footer__container}`}>
                <Title title={'Andrei'}/>
                <div className={style.footer__items}>
                    <div className={style.footer__item}><a className={style.footer__ref} rel="noreferrer" target='_blank' href='https://www.instagram.com/and_gurin/'>Instagram</a> </div>
                    <div className={style.footer__item}><a className={style.footer__ref} rel="noreferrer" target='_blank' href='https://www.facebook.com/andrei.hurynovich.18'>Facebook</a> </div>
                    <div className={style.footer__item}><a className={style.footer__ref} rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/and-gurin/'>Linkedin</a> </div>
                </div>
                <p className={style.footer__copyright}>2023 All right reserved</p>
            </div>
        </div>
    )
}