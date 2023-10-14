import React from "react";
import style from './MyWorks.module.scss'
import container from '../common/style/Container.module.scss'
import {Work} from './work/Work';
import {Title} from '../common/components/title/Title';
import momentumImage from './../../src/assets/image/momentum.jpg'
import plantsImage from './../../src/assets/image/Plants.jpg'
import furnitureImage from './../../src/assets/image/furniture.png'
import commentsImage from './../../src/assets/image/comments.png'
import nordicImage from './../../src/assets/image/nordic.jpg'
import libraryImage from './../../src/assets/image/components-library.jpg'

const projects = [
    {
        title: 'Interactive Comment Section',
        style: {backgroundImage: `url(${commentsImage})`},
        url: 'https://and-gurin.github.io/interactive-comments-section/',
        git: 'https://github.com/and-gurin/interactive-comments-section',
        description: 'Comments section with infinite nesting level',
        tags: ['react']
    },
    {
        title: 'Furniture',
        style: {backgroundImage: `url(${furnitureImage})`},
        url: 'https://and-gurin.github.io/e-commerce-project/',
        git: 'https://github.com/and-gurin/e-commerce-project',
        description: 'Online furniture store with the ability to compare models, add models to the cart and evaluate models. Also, users can read articles about the furniture in the blog section',
        tags: ['spa', 'react']
    },
    {
        title: 'Component Library',
        style: {backgroundImage: `url(${libraryImage})`},
        url: 'https://and-gurin.github.io/ui-component-library/',
        git: 'https://github.com/and-gurin/ui-component-library',
        description: 'The library of reused components includes buttons, inputs, popups, and others',
        tags: ['react']
    },
    {
        title: 'Nordic Rose',
        style: {backgroundImage: `url(${nordicImage})`},
        url: 'https://and-gurin.github.io/nordic-rose-react',
        git: 'https://github.com/and-gurin/nordic-rose-react',
        description: 'Application includes both parts: frontend created with React and backend created with helps Node JS',
        tags: ['react', 'spa']
    },
    {
        title: 'Momentum',
        style: {backgroundImage: `url(${momentumImage})`},
        url: 'https://and-gurin.github.io/momentum/',
        git: 'https://github.com/and-gurin/momentum',
        description: 'I made a music player with a progress bar, playlist, volume control. A weather widget from\n' +
            'the OpenWeatherMap API, an image slider with loading from Flickr and Unsplash by\n' +
            'different tags. Quote block, application setup, two-language translation and todo module',
        tags: ['spa']
    },
    {
        title: 'Plants',
        style: {backgroundImage: `url(${plantsImage})`},
        url: 'https://and-gurin.github.io/plants/',
        git: 'https://github.com/and-gurin/plants',
        description: 'Made the structure with HTML+BEM, added styles with CSS+SASS. Added adaptive for a\n' +
            'tablet and phone. And also with JS added burger menu, accordion, custom select',
        tags: ['landing page']
    },
]

export function MyWorks() {

    return (
        <div id={'projects'} className={style.MyWorks}>
            <div className={`${container.container} ${style.MyWorks__content}`}>
                <Title title={'Projects'}/>
                <div className={style.MyWorks__items}>
                    <Work projects={projects}/>
                </div>
            </div>
        </div>
    )
}