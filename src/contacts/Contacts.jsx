import React, {useRef} from "react";
import style from './Contacts.module.scss'
import container from '../common/style/Container.module.scss'
import {Title} from "../common/components/title/Title";
import emailjs from '@emailjs/browser';

export function Contacts() {

    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fkkgphw', 'template_85mf2ds', form.current, 'Xg2lnFFshj6JDL1Rn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset()
    };

    return (
        <div id={'contacts'} className={style.contacts}>
            <div className={`${container.container} ${style.contacts__container}`}>
                <Title title={`Let's work together`}/>
                <form className={style.contacts__form} ref={form} onSubmit={sendEmail}>
                    <input placeholder='Name'
                           name={'user_name'}
                           className={style.contacts__field}
                           type="text"/>
                    <input placeholder='E-mail'
                           name={'subject'}
                           className={style.contacts__field}
                           type="text"/>
                    <textarea className={style.contacts__field + ' ' + style.contacts__field_area}
                              rows="7" cols="45"
                              placeholder='Message'
                              name={'message'}/>
                    <button type={'submit'}>Contact me</button>
                </form>
            </div>
        </div>
    )
}