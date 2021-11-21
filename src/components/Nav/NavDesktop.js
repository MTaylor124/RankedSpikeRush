import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './RSRlogo.png'

const items = [{ id: 'nav-link-000', to: '/about', text: 'About' }, { id: 'nav-link-001', to: '/news', text: 'News' }, { id: 'nav-link-002', to: '/contact', text: 'Contact' }]

const navStyle = { textDecoration: 'none', textTransform: 'none', padding: '0 20px', fontSize: '1rem', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }
const brandStyle = { textDecoration: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '5px 0 5px 10px', color: 'white' }

export const NavDesktop = () => (
    <section className='nav'>
        <Link to='/' style={brandStyle}>
            <img src={Logo} alt='Ranked Spike Rush'/><h3>RankedSpikeRush.gg</h3>
        </Link>
        <section>
            {items.map(item => <Link to={item.to} style={navStyle} key={item.id} className='item' id={item.id}>{item.text}</Link>)}
        </section>
    </section>
)