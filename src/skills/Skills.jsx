import React from "react";
import style from './Skills.module.scss'
import container from '../common/style/Container.module.scss'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';
import tsImage from '../assets/image/svg/typescript.svg';
import jsImage from '../assets/image/svg/javascript-155-svgrepo-com.svg';
import reactImage from '../assets/image/svg/react-svgrepo-com.svg';
import htmlImage from '../assets/image/svg/html-124-svgrepo-com.svg';
import restImage from '../assets/image/svg/rest-api-svgrepo-com.svg';
import materialImage from '../assets/image/svg/material-ui-svgrepo-com.svg';
import gitImage from '../assets/image/svg/github-142-svgrepo-com.svg';
import nodeImage from '../assets/image/svg/nodejs02-svgrepo-com.svg';

const skills = [
    {
        style: {backgroundImage: `url(${htmlImage})`},
        title: 'HTML5',
        description: 'BEM, HTML5, CSS, SASS'
    },
    {
        style: {backgroundImage: `url(${reactImage})`},
        title: 'React',
        description: 'React, Redux'
    },
    {
        style: {backgroundImage: `url(${jsImage})`},
        title: 'JavaScript',
        description: 'JavaScript core & client-side'
    },
    {
        style: {backgroundImage: `url(${tsImage})`},
        title: 'TypeScript',
        description: 'Types, Enums, Any'
    },
    {
        style: {backgroundImage: `url(${restImage})`},
        title: 'RestAPI',
        description: 'HTTP, WS, REST, GraphQL'
    },
    {
        style: {backgroundImage: `url(${materialImage})`},
        title: 'MaterialUI',
        description: 'Material UI, Styled-components '
    },
    {
        style: {backgroundImage: `url(${gitImage})`},
        title: 'Git',
        description: 'Git, GitHub'
    },
    {
        style: {backgroundImage: `url(${nodeImage})`},
        title: 'NodeJS',
        description: 'NodeJS Core, Express'
    },
]
export function Skills() {

    return (
        <div id={'skills'} className={style.skills}>
            <div className={`${container.container} ${style.skills__container}`}>
                <Title title={'My skills'}/>
                <div className={style.skills__items}>
                    <Skill skills={skills}/>
                </div>
            </div>
        </div>
    )
}