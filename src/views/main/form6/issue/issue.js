import React from 'react'

const Issue = ({ brand, brandImg }) => {
    return (
        <div className='issue--bottom__2'>
            <div className='issue--bottom__2--top'>
                <p>{brand}</p>
            </div>
            <img src={brandImg} alt='' className='issue__seccond--img' />

        </div>
    )
}

export default Issue