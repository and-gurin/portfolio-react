import React from 'react';
import style from './Work.module.scss'
import {Button} from "../../common/components/button/button";

export function Work({projects}) {

    return (
        <>
            {projects.map(project => {
                return (
                    <div key={project.title} className={style.work}>
                        <div style={project.style} className={style.work__image}>
                            <Button url={project.url} title={'Look'}/>
                        </div>
                        <div className={style.work__description}>
                            <h3 className={style.work__title}>{project.title}</h3>
                            <p className={style.work__subtitle}>{project.description}</p>
                        </div>
                    </div>
                )
            })}

        </>

    )
}