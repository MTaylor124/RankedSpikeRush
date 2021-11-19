import React from 'react'

import { Link } from 'react-router-dom'

import Logo from './RSRlogo.png'

export default function NavDeskop() {

    return (
        <div className='d-nav-container'>
            <div className='d-nav-brand'>
                <Link to='/' style={{ textDecoration: 'none' }} className='d-nav-brand-container'>
                    <img src={Logo} alt='logo' className='d-nav-logo'/>
                    <div className='nav-desktop-brand'>RankedSpikeRush.gg</div>
                </Link>
            </div>
            <div className='d-nav-links'>
                {/* <Link to='/clips' style={{ textDecoration: 'none' }}>
                    <div className='d-nav-links-item'>Clips</div>
                </Link> */}
                <Link to='/about' style={{ textDecoration: 'none', textTransform: 'none' }}>
                    <div className='d-nav-links-item'>About</div>
                </Link>
                <Link to='/news' style={{ textDecoration: 'none', textTransform: 'none' }}>
                    <div className='d-nav-links-item'>News</div>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none', textTransform: 'none' }}>
                    <div className='d-nav-links-last'>Contact</div>
                </Link>
            </div>
        </div>
    )
}