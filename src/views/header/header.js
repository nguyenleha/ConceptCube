import React from 'react'
import "./header.scss"
import logo from '../../assets/img/logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src={logo} alt='' />
            </div>
            <div className='header__right'>
                <button>INTRODUCTION</button>
                <button>SOLUTION</button>
                <button>RATE PLAN</button>
                <button>LOGIN</button>
                <button>APPLY FOR FREE USE</button>
            </div>
        </div>
    )
}

export default Header