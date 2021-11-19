import React from 'react'

import {isMobile} from 'react-device-detect'

import NavMobile from './NavMobile'
import NavDesktop from './NavDesktop'

export default function Nav() {
    if (isMobile) { 
        return ( <NavMobile /> )
    } else { 
        return ( <NavDesktop /> ) 
    }
}