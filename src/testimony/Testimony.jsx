import React from 'react';
import container from '../common/style/Container.module.scss'
import style from './Testimony.module.scss'
import {Title} from '../common/components/title/Title';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import quoteIcon from '../assets/image/svg/quote-alt-right-svg.svg';
import './carousel.css'


const testimonies = [
    {
        text: 'Passionate web developer with particular love to functional programming paradigm.',
        author: 'sergey khval'
    },
    {
        text: 'Enthusiastic and detail-oriented front-end Developer with skills in coding, troubleshooting complex problems, and assisting in the timely completion of projects.',
        author: 'mikhail matusevich'
    },
    {
        text: 'Very good programmer. Hire him will be one of the best solution for your business.',
        author: 'iryna pachichnevskaya'
    },
]

const Slide = ({text, author}) => {
    return (
        <>
            <div className={style.skill__description}>
                {text}
            </div>
            <h3 className={style.skill__title}>
                {`@${author}`}
            </h3>
        </>

    )
}

export function Testimony() {

    const items = [
        <Slide text={testimonies[0].text} author={testimonies[0].author}/>,
        <Slide text={testimonies[1].text} author={testimonies[1].author}/>,
        <Slide text={testimonies[2].text} author={testimonies[2].author}/>,
    ];

    return (
        <div id={'testimony'} className={style.testimony}>
            <div className={`${container.container} ${style.testimony__container}`}>
                <Title title={'Testimony'}/>
                <div className={style.skill__figure}>
                    <span style={{backgroundImage: `url(${quoteIcon})`}} className={style.skill__logo}></span>
                </div>
                <div className={style.skill}>
                    <AliceCarousel
                        mouseTracking
                        disableButtonsControls={true}
                        items={items}
                    />
                </div>
            </div>
        </div>
    )
}