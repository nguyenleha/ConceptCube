import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Itemproduct = ({ photo }) => {
    return (
        <div className='container__item'>
            <img src={photo} alt='' />
            <p className='container__item--title'>[What happen] How to create </p>
            <div className='container__item--box'>
                <p className='price'>2,500 won</p>
                <p className='heart--count'>
                    <FontAwesomeIcon icon={faHeart} className='icon' />
                    236</p>
            </div>
        </div>
    )
}

export default Itemproduct