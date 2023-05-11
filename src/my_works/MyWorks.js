import React from "react";
import style from './MyWorks.module.scss'
import container from '../common/style/Container.module.scss'
import {Work} from './work/Work';
import {Title} from '../common/components/title/Title';
import momentumImage from './../../src/assets/image/momentum.jpg'
import plantsImage from './../../src/assets/image/Plants.jpg'
import hwImage from './../../src/assets/image/HWTasks.jpg'
import todoImage from './../../src/assets/image/todo.jpg'
import nordicImage from './../../src/assets/image/Nordic-Rose.jpg'


export function MyWorks() {
    const todo = {
        backgroundImage: `url(${todoImage})`
    }
    const momentum = {
        backgroundImage: `url(${momentumImage})`
    }
    const plants = {
        backgroundImage: `url(${plantsImage})`
    }
    const hw = {
        backgroundImage: `url(${hwImage})`
    }
    const nordic = {
        backgroundImage: `url(${nordicImage})`
    }

    const todoUrl = 'https://and-gurin.github.io/todolist/';
    const momentumUrl = 'https://and-gurin.github.io/momentum/';
    const plantsUrl = 'https://and-gurin.github.io/plants/';
    const hwUrl = 'https://and-gurin.github.io/hws2/#/pre-junior';
    const nordicUrl = 'https://and-gurin.github.io/hws2/#/pre-junior';

    const todoDescription = 'Made it possible to add delete edit a task, or a task sheet with React. Connected Redux with\n' +
        'useSelector and useDispatch hooks. Optimized with React.memo and useCallback.\n' +
        'Interaction with the server via the Rest API.';

    const momentumDescription ='I made a music player with a progress bar, playlist, volume control. A weather widget from\n' +
        'the OpenWeatherMap API, an image slider with loading from Flickr and Unsplash by\n' +
        'different tags. Quote block, application setup, two-language translation and todo module.';

    const plantsDescription = 'Made the structure with HTML+BEM, added styles with CSS+SASS. Added adaptive for a\n' +
        'tablet and phone. And also with JS added burger menu, accordion, custom select.';

    const hwDescription = 'Made mini tasks such as: filtering, sorting, super-input, super-checkbox, timer, editable span,\n' +
        'pagination, change theme, preloader'

    const nordicDescription = 'Application includes both parts: frontend created with React and backend created with helps Node JS'


    return (
        <div id={'projects'} className={style.MyWorks}>
            <div className={`${container.container} ${style.MyWorks__content}`}>
                <Title title={'Projects'}/>
                <div className={style.MyWorks__items}>
                    <Work description={todoDescription} address={todoUrl} style={todo} title='TodoList'/>
                    <Work description={momentumDescription} address={momentumUrl} style={momentum} title='Momentum'/>
                    <Work description={plantsDescription} address={plantsUrl} style={plants} title='Plants'/>
                    <Work description={hwDescription} address={nordicUrl} style={nordic} title='Nordic-Rose'/>
                    <Work description={nordicDescription} address={hwUrl} style={hw} title='HWTasks'/>
                </div>
            </div>
        </div>
    )
}