import React from "react";
import style from './Skills.module.scss'
import container from '../common/style/Container.module.scss'
import {Skill} from '../skills/skill/Skill';
import {Title} from '../common/components/title/Title';
import tsImage from '../assets/image/svg/typescript-logo-svgrepo-com.svg';
import jsImage from '../assets/image/svg/javascript-155-svgrepo-com.svg';
import reactImage from '../assets/image/svg/react-svgrepo-com.svg';
import htmlImage from '../assets/image/svg/html-124-svgrepo-com.svg';
import restImage from '../assets/image/svg/rest-api-svgrepo-com.svg';
import materialImage from '../assets/image/svg/material-ui-svgrepo-com.svg';
import gitImage from '../assets/image/svg/github-142-svgrepo-com.svg';
import nodeImage from '../assets/image/svg/nodejs02-svgrepo-com.svg';




export function Skills() {
    const html = {
        backgroundImage: `url(${htmlImage})`
    }
    const react = {
        backgroundImage: `url(${reactImage})`
    }
    const js = {
        backgroundImage: `url(${jsImage})`
    }
    const ts = {
        backgroundImage: `url(${tsImage})`
    }
    const rest = {
        backgroundImage: `url(${restImage})`
    }
    const material = {
        backgroundImage: `url(${materialImage})`
    }
    const git = {
        backgroundImage: `url(${gitImage})`
    }
    const node = {
        backgroundImage: `url(${nodeImage})`
    }

    const htmlDescription = 'BEM methodology, HTML5, CSS, SASS';
    const jsDescription = 'JavaScript core & client-side';
    const tsDescription = 'Types, Enums, Any';
    const reactDescription = 'React, Redux, Redux-thunk';
    const restDescription = 'HTTP, WS, REST, GraphQL';
    const materialDescription = 'Material UI, Bootstrap ';
    const gitDescription = 'Git, GitHub';
    const nodeDescription = 'NodeJS Core, Express';


    return (
        <div id={'skills'} className={style.skills}>
            <div className={`${container.container} ${style.skills__container}`}>
                <Title title={'Skills'}/>
                <div className={style.skills__items}>
                    <Skill style={react} title='React' description={reactDescription}/>
                    <Skill style={js} title='JavaScript' description={jsDescription}/>
                    <Skill style={ts} title='TypeScript' description={tsDescription}/>
                    <Skill style={html} title='HTML5' description={htmlDescription}/>
                    <Skill style={material} title='MaterialUI' description={materialDescription}/>
                    <Skill style={rest} title='RestAPI' description={restDescription}/>
                    <Skill style={git} title='Git' description={gitDescription}/>
                    <Skill style={node} title='NodeJS' description={nodeDescription}/>
                </div>
            </div>
        </div>
    )
}