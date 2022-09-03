import React, { useState } from 'react'
import "./header.scss"
import logo from '../../assets/img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const [Navheader, setNavheader] = useState(false)
    return (
        <div className='header'>
            <div className='header__left'>
                <img src={logo} alt='' />
            </div>
            <div className='iconbutton'>
                {
                    Navheader ?
                        <FontAwesomeIcon icon={faX} className='icon__nav' onClick={() => setNavheader(false)} />
                        :
                        <FontAwesomeIcon icon={faBars} className='icon__nav' onClick={() => setNavheader(true)} />
                }
            </div>


            {/* <div className='header__right '></div> */}
            <div className={Navheader ? 'header__right ' : 'header__right_none'}>
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