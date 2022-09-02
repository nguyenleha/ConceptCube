import React from 'react'
import Itemproduct from './itemproduct/itemproduct'
import "./form4.scss"



const Form4 = () => {
    return (
        <div className='body__list--product'>
            <div className='content__list--product'>
                <Itemproduct photo={require('../../../assets/img/img_01.png')} />
                <Itemproduct photo={require('../../../assets/img/img_02.png')} />
                <Itemproduct photo={require('../../../assets/img/img_03.png')} />
                <Itemproduct photo={require('../../../assets/img/img_04.png')} />
                <Itemproduct photo={require('../../../assets/img/img_05.png')} />
                <Itemproduct photo={require('../../../assets/img/img_06.png')} />
                <Itemproduct photo={require('../../../assets/img/img_07.png')} />
                <Itemproduct photo={require('../../../assets/img/img_08.png')} />
                <Itemproduct photo={require('../../../assets/img/img_09.png')} />
                <Itemproduct photo={require('../../../assets/img/img_10.png')} />
                <Itemproduct photo={require('../../../assets/img/img_11.png')} />
                <Itemproduct photo={require('../../../assets/img/img_12.png')} />
                <Itemproduct photo={require('../../../assets/img/img_13.png')} />
                <Itemproduct photo={require('../../../assets/img/img_14.png')} />
                <Itemproduct photo={require('../../../assets/img/img_15.png')} />
                <Itemproduct photo={require('../../../assets/img/img_16.png')} />
                <Itemproduct photo={require('../../../assets/img/img_17.png')} />
                <Itemproduct photo={require('../../../assets/img/img_18.png')} />
                <Itemproduct photo={require('../../../assets/img/img_19.png')} />
                <Itemproduct photo={require('../../../assets/img/img_20.png')} />
                <Itemproduct photo={require('../../../assets/img/img_21.png')} />
                <Itemproduct photo={require('../../../assets/img/img_22.png')} />
                <Itemproduct photo={require('../../../assets/img/img_23.png')} />
                <Itemproduct photo={require('../../../assets/img/img_24.png')} />
                <Itemproduct photo={require('../../../assets/img/img_25.png')} />
            </div>
            <div className='btn__seemore'>
                <button >SEE MORE</button>
            </div>
        </div>
    )
}

export default Form4