import React from "react";
import style from './Contacts.module.css'
import container from '../common/style/Conteiner.module.css'


export function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={`${container.container} ${style.contacts_content}`}>
                <h2>Contacts</h2>
                <form className={style.contacts_form} action="#">
                    <input placeholder='name' className={style.contacts_field} type="text"/>
                    <input placeholder='email' className={style.contacts_field} type="text"/>
                    <textarea className={style.contacts_field}
                              rows="7" cols="45"
                              placeholder='enter the text'
                              name="textarea">hello</textarea>
                </form>
                <button>Hire me</button>
            </div>
        </div>
    )
}