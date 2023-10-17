import React from 'react';
import style from './button.module.scss'

function Button({url, title, active, onClick, className}) {
    return (
        <a active={active}
           href={url}
           onClick={onClick}
           className={style.button + ' ' + className}
           rel="noreferrer">
            {title}
        </a>
    )
}

export default Button