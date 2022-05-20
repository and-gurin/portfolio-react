import React from "react";
import style from './Skills.module.css'
import container from '../common/style/Conteiner.module.css'
import {Skill} from "../skills/skill/Skill";


export function Skills() {
    return (
        <div className={style.skills}>
            <div className={`${container.container} ${style.skills_content}`}>
                <div className={style.skills_title}>
                    <h2>I have next skills</h2>
                </div>
                <div className={style.skills_items}>
                    <Skill title='React'/>
                    <Skill title='CSS'/>
                    <Skill title='HTML5'/>
                </div>
            </div>
        </div>
    )
}