import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import './PictureBox.css';

export const PictureBox = ({image, title, date, text}) => {
    const [like, setLike] = useState(false);

    const handleLikeClick = () => {
        setLike(!like);
    }

    const handleShareClick = () => {
        console.log('share button clicked');
    }

    useEffect(() => {
        setLike(JSON.parse(window.localStorage.getItem('like-' + title)));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('like-' + title, like);
    }, [like]);

    return (
        <div className='pic-box-container'>
            <div className='pic-box-img'>
                <img className="img-fit" src={image} alt='pic' />
            </div>
            <div className='pic-box-text-container'>
                <div className='pic-box-title'>
                    {title}
                </div>
                <div className='pic-box-date'>
                    {date}
                </div>
                <div className='pic-box-text'>
                    {text}
                </div>
            </div>
            <div className='pic-box-btns'>
                <Button onClick={handleLikeClick} text='Like' buttonColor={like ? 'liked' : 'primary'}/>
                <Button onClick={handleShareClick} text='Share' buttonColor='primary' />
            </div>
        </div>
    );
};