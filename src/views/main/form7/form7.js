import React from 'react'
import "./form7.scss"

const Form7 = () => {
    return (
        <div className='content__video'>
            <div className='content__video--top'>
                <p className='video__title'>WHAT HAPPENED</p>
                <p className='video__desc'>How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first </p>
                <div className='btn__seemore'>
                    <button>SEE MORE</button>
                </div>
            </div>
            <div className='content__video--bottom'>
                <img src={require('../../../assets/img/Video.png')} alt='' className='video__img' />
            </div>

        </div>
    )
}

export default Form7