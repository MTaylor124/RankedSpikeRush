import React from 'react'
import {isMobile} from 'react-device-detect'
import NavMobile from './NavMobile'
import {NavDesktop} from './NavDesktop'

export const Nav = () => {
    if (isMobile) return <NavMobile /> 
    else return <NavDesktop /> 
}