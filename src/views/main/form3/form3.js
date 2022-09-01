import React from 'react'
import "./form3.scss"
import Itembestproduct from './itembestproduct/itembestproduct'

const Form3 = () => {
    return (
        <div className='content__best__product'>
            <div className='content__product'>
                <h3 className='product__title'>BEST PRODUCT</h3>
                <p className='product__desc'>How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first </p>
            </div>
            <div className='content__product--item'>
                <Itembestproduct
                    production={require('../../../assets/img/production.png')}
                    bestImage={require('../../../assets/img/bestimage_01.png')}
                />
                <Itembestproduct
                    production={require('../../../assets/img/production_02.png')}
                    bestImage={require('../../../assets/img/bestimage_02.png')}
                />
                <Itembestproduct
                    production={require('../../../assets/img/production_03.png')}
                    bestImage={require('../../../assets/img/bestimage_03.png')}
                />
            </div>
        </div>
    )
}

export default Form3