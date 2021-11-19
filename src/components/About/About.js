import React from 'react'

import {isMobile} from 'react-device-detect'

import AboutMobile from './AboutMobile'
import AboutDesktop from './AboutDesktop'

export default function About() {
    if (isMobile) {
        return ( <AboutMobile />)
    } else {
        return ( <AboutDesktop />)
    }

}