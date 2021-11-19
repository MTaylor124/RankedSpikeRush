import React from 'react'

import { Icon } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

export default function HomeDesktop() {


    return (
        <div className='d-section-container'>
            <div className="d-home-container">
                <div className="d-home-social-announcement">

                        <div className="d-home-social-brand-update">
                            Spike Rush is back in the closing days of March
                            <br/>
                            Join us while we stream private Spike Rush games and Tournaments! 
                        </div> 
                        <div className="d-home-social-brand-update">
                            Thank you to all the supporters who donated and the
                            <br/>
                            50+ teams that competed in our last Tournament!
                        </div>
                        <div className="d-home-social-brand-update-last">
                            See you all on Throwback Stadium!
                        </div>

                </div>

            <div className='d-home-options-container'>
                <a href='https://paypal.me/RankedSpikeRush?locale.x=en_US' target='_blank' rel="noopener noreferrer" className='d-home-social-paypal-link'> 
                    <div className="d-home-social-item">
                        {/* <div className="d-home-social-icon">
                            <Icon 
                                name='paypal' 
                                size='huge' 
                                color='black'/>
                        </div> */}
                        <div className="d-home-social-brand">
                            Donate to upcoming RankedSpikeRush Tournament
                        </div>      
                    </div>
                </a>
                <Link to='/news' style={{ textDecoration: 'none', textAlign: 'center', width: '100%' }}>
                    <div className='d-home-social-paypal-link'> 
                        <div className="d-home-social-item">
                            <div className="d-home-social-brand2">
                                Latest News
                            </div>      
                        </div>
                    </div>
                </Link>
                <Link to='/about' style={{ textDecoration: 'none', textAlign: 'center', width: '100%' }}>
                    <div className='d-home-social-paypal-link'> 
                        <div className="d-home-social-item">
                            <div className="d-home-social-brand2">
                                About RankedSpikeRush
                            </div>      
                        </div>
                    </div>
                </Link>
            </div>

                <div className='d-home-media-container'>
                    <a href='https://discord.gg/gQRPcAn' target='_blank' rel="noopener noreferrer" className='d-home-social-link'> 
                        <div className="d-home-item-discord d-home-social-media">
                            <div className="d-home-social-icon-media">
                                <Icon name='discord' color='black' size='huge'/>
                            </div>
                            <div className='d-home-social-label'>
                                Discord
                            </div>
                        </div>
                    </a>
                    <a href='https://www.twitch.tv/rankedspikerush' target='_blank' rel="noopener noreferrer" className='d-home-social-link'> 
                        <div className="d-home-item-twitch d-home-social-media">
                            <div className="d-home-social-icon-media">
                                <Icon name='twitch' color='black' size='huge'/>
                            </div>
                            <div className='d-home-social-label'>
                                Twitch
                            </div>
                        </div>
                    </a>
                    <a href='https://twitter.com/RankedSpikeRush' target='_blank' rel="noopener noreferrer" className='d-home-social-link'> 
                        <div className="d-home-item-twitter d-home-social-media">
                            <div className="d-home-social-icon-media">
                                <Icon name='twitter' color='black' size='huge'/>
                            </div>
                            <div className='d-home-social-label'>
                                Twitter
                            </div>
                        </div>
                    </a>
                </div>

            
            </div>
            
        </div>
    )
}