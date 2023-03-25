import React from "react";
import style from './Contacts.module.scss'
import container from '../common/style/Container.module.css'
import {Title} from "../common/components/title/Title";


export function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={`${container.container} ${style.contacts__container}`}>
                <Title title={'Contacts'}/>
                <form className={style.contacts__form} action="#">
                    <input placeholder='Name' className={style.contacts__field} type="text"/>
                    <input placeholder='E-mail' className={style.contacts__field} type="text"/>
                    <textarea className={style.contacts__field}
                              rows="7" cols="45"
                              placeholder='Message'
                              name="textarea"/>
                </form>
                <button type="submit" >Hire me</button>
            </div>
        </div>
    )
}