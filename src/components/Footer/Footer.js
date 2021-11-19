import React from 'react'

import {isMobile} from 'react-device-detect'

import FooterDesktop from './FooterDesktop'
import FooterMobile from './FooterMobile'

export default function Footer() {

    if (isMobile) {
        return ( <FooterMobile />) 
    } else {
        return ( <FooterDesktop /> )
    }
}