import React from 'react'
import './components/style/App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Clips from './components/Clips/Clips'

import About from './components/About/About'
import Contact from './components/Contact/Contact'
import News from './components/News/News'
import Footer from './components/Footer/Footer'

import {isMobile} from 'react-device-detect'

const theme = createMuiTheme({
    background: 'rgb(116, 181, 207)',
    palette: {
        primary: {
            main: 'rgb(146, 17, 17)',
            light: 'rgb(252, 216, 56)',
            dark: 'rgb(39, 4, 4)'
        },
        secondary: {
            main: 'rgb(226, 167, 4)',
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(87, 1, 1)'
        }
    }
})

export default function App() {

    let desktopBackground
    if (isMobile) {
        desktopBackground = 'mobile-background'
    } else {
        desktopBackground = 'desktop-background'
    }

  return (
    <MuiThemeProvider theme={theme}>
        <Router>
            <div className={desktopBackground}>
                <Nav />
                <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/clips' component={Clips} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/news' component={News} />
                </Switch>
                <Footer />
            </div>
        </Router>
    </MuiThemeProvider>
  )
}