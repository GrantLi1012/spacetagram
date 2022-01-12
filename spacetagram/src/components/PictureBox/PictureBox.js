import React from 'react';
import { Button } from '../Button/Button';
import './PictureBox.css';

export const PictureBox = ({image, text}) => {
    return (
        <div className='pic-box-container'>
            <div className='pic-box-img'>
                <img className="img-fit" src={image} alt='pic' />
            </div>
            <div className='pic-box-text'>
                tes t ds c ks adjq w casc as  ascascccascasc dqw   d sadw  sdhi oac sd od fwed asd asdw sd df af dw
            </div>
            <div className='pic-box-btns'>
                <Button text='Like' buttonColor='liked'/>
                <Button text='Share' buttonColor='primary' />
            </div>
        </div>
    );
};