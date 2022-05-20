import React from "react";
import style from './Footer.module.css'
import container from '../common/style/Conteiner.module.css'


export function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${container.container} ${style.footer_content}`}>
                <h2>Andrei Hurynovich</h2>
                <div className={style.footer_items}>
                    <div className={style.footer_item}>1</div>
                    <div className={style.footer_item}>2</div>
                    <div className={style.footer_item}>3</div>
                    <div className={style.footer_item}>4</div>
                    <div className={style.footer_item}>5</div>
                </div>
                <p>2022 All right reserved</p>
            </div>
        </div>
    )
}