import React from 'react'

import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Logo from './RSRlogo.png'

export default function NavMobile() {

    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const style = {
        // color: 'rgb(146, 17, 17)'
        color: 'white'
    }

    return (
        <div className='m-nav-container'>
                <Link to='/' style={{ textDecoration: 'none' }} className='m-nav-brand-container'>
                    <img src={Logo} alt='logo' className='m-nav-logo'/>
                    <div className='m-nav-brand'>RankedSpikeRush.gg</div>
                </Link>
                <div className='nav-mobile-dropdown'>
                    <Button aria-controls='fade-menu' aria-haspopup='true' onClick={handleClick}>
                        <MoreHorizIcon fontSize='large' style={style}/>
                    </Button>
                    <Menu
                    id='m-nav-menu'
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuListProps={{ disablePadding: true }}
                >
                    {/* <MenuItem onClick={handleClose} style={{backgroundColor: 'rgb(252, 216, 56)'}}>
                        <Link to='/clips' style={{ textDecoration: 'none', textAlign: 'center', width: '100%' }}>
                            <div className='m-nav-item'>Clips</div>
                        </Link>
                    </MenuItem> */}
                    <MenuItem onClick={handleClose} style={{backgroundColor: '#272932'}}>
                        <Link to='/about' style={{ textDecoration: 'none', textAlign: 'center', width: '100%' }}>
                            <div className='m-nav-item'>About</div>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} style={{backgroundColor: '#272932'}}>
                        <Link to='/news' style={{ textDecoration: 'none', textAlign: 'center', width: '100%' }}>
                            <div className='m-nav-item'>News</div>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose} style={{backgroundColor: '#272932'}}>
                        <Link to='/contact' style={{ textDecoration: 'none', textAlign: 'center', width: '100%' }}>
                            <div className='m-nav-item'>Contact</div>
                        </Link>
                    </MenuItem>
                </Menu>
                </div>
        </div>
    )
}