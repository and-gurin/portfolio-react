import React from "react";
import style from './Skill.module.css'


export function Skill(props) {
    return (
        <div className={style.skill}>
                <div className={style.skills_logo}>
                </div>
                <h3 className={style.skills_title}>{props.title}</h3>
            <div className={style.skills_description}>
                Detailed description of the skill
            </div>
        </div>
    )
}