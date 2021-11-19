import React from 'react'

import {isMobile} from 'react-device-detect'

import HomeMobile from './mobile/HomeMobile'
import HomeDesktop from './desktop/HomeDesktop'

export default function Home() {

    if (isMobile) {
        return (
            <HomeMobile />
        )
    } else {
        return (
            <HomeDesktop />
        )
    }
}