import React from 'react'

import {isMobile} from 'react-device-detect'

import ClipsMobile from './ClipsMobile'
import ClipsDesktop from './ClipsDesktop.js'

export default function Clips() {

if (isMobile) {
    return ( <ClipsMobile /> )
} else {
    return ( <ClipsDesktop />)
}

}