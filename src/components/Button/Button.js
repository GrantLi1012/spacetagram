import React from 'react';
import './Button.css';

const COLOR = ['primary', 'liked'];

export const Button = ({text, buttonColor, onClick}) => {
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : 'primary';
    return(
        <button className={`btn ${checkButtonColor}`} onClick={onClick}>
            {text}
        </button>
    );
};