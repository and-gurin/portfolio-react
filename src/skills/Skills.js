import React from "react";
import style from './Skills.module.css'
import container from '../common/style/Container.module.css'
import {Skill} from "../skills/skill/Skill";
import {Title} from "../common/components/title/Title";


export function Skills() {
    return (
        <div className={style.skills}>
            <div className={`${container.container} ${style.skills_content}`}>
                <Title title={'Skills'}/>
                <div className={style.skills_items}>
                    <Skill title='React'/>
                    <Skill title='CSS'/>
                    <Skill title='HTML5'/>
                </div>
            </div>
        </div>
    )
}