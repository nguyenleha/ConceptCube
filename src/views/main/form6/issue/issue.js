import React from 'react'

const Issue = ({ brand, brandImg}) => {
    return (
        <>
            <div className='issue--bottom__2--top'>
                <p>{brand}</p>
            </div>
            <div className='issue__seccond--img'>
                <img src={brandImg} alt='' />
            </div>


        </>
    )
}

export default Issue