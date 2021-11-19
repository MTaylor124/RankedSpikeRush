import React from 'react'

import {isMobile} from 'react-device-detect'

import NewsMobile from './NewsMobile'
import NewsDesktop from './NewsDesktop'

export default function News() {

    if (isMobile) {
        return ( <NewsMobile />)
    } else {
        return ( <NewsDesktop />)
    }
}