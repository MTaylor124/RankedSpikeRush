import React from 'react'

import {isMobile} from 'react-device-detect'

import ContactMobile from './ContactMobile'
import ContactDesktop from './ContactDesktop'

export default function Contact() {

    if (isMobile) {
        return ( <ContactMobile />)
    } else {
        return ( <ContactDesktop />)
    }
}