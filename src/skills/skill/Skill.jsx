import React from "react";
import style from './Skill.module.scss'


export function Skill({skills}) {
    return (
        <>
            {skills.map(skill => {
                return (
                    <div key={skill.title} className={style.skill}>
                        <div className={style.skill__figure}>
                            <span style={skill.style} className={style.skill__logo}></span>
                        </div>
                        <h3 className={style.skill__title}>{skill.title}</h3>
                        <div className={style.skill__description}>
                            {skill.description}
                        </div>
                    </div>
                )
            })}
        </>


    )
}