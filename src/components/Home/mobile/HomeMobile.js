import React from 'react'

import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import Banner from './../homebanner.png'

export default function HomeMobile() {


    return (
        <div className='m-section-container'>
            <div className='m-home-container'>
                <img src={Banner} alt='logo' className='m-home-banner'/>
                    <div className='m-home-items-container'>

                    <div className="m-home-social-announcement">
                        <div className="m-home-social-brand-announcement">
                            Spike Rush is back in the closing days of March
                            <br/>
                            Join us while we stream private Spike Rush games and Tournaments!               
                        <br/>
                        </div> 
                        <div className="m-home-social-brand-announcement">
                            Thank you to all the supporters who donated & the
                            <br/>
                            50+ teams that competed in our last Tournament!
                        </div>
                        <div className="m-home-social-brand-item">
                            We look forward to seeing you all back
                            <br/>
                            on Throwback Stadium!
                        </div>

                    </div>

                    <div className='m-home-media-container'>
                        <a href='https://discord.gg/gQRPcAn' target='_blank' rel="noopener noreferrer"> 
                                <div className="m-home-item-discord">
                                    <div className="m-home-social-icon2">
                                        <Icon name='discord' color='black' size='huge'/>
                                    </div>
                                    <div className='m-home-social-label'>
                                        Discord
                                    </div>
                                </div>
                            </a>

                            <a href='https://www.twitch.tv/rankedspikerush' target='_blank' rel="noopener noreferrer"> 
                                <div className="m-home-item-twitch">
                                    <div className="m-home-social-icon2">
                                        <Icon name='twitch' color='black' size='huge'/>
                                    </div>
                                    <div className='m-home-social-label'>
                                        Twitch
                                    </div>
                                </div>
                            </a>

                        
                            <a href='https://twitter.com/RankedSpikeRush' target='_blank' rel="noopener noreferrer"> 
                                <div className="m-home-item-twitter">
                                    <div className="m-home-social-icon2">
                                        <Icon name='twitter' color='black' size='huge'/>
                                    </div>
                                    <div className='m-home-social-label'>
                                        Twitter
                                    </div>
                                </div>
                            </a>
                    </div>

                        <a href='https://paypal.me/RankedSpikeRush?locale.x=en_US' target='_blank' rel="noopener noreferrer"> 
                            <div className="m-home-item">
                                <div className="m-home-social-icon4">
                                    <Icon name='paypal' color='black' size='huge'/>
                                </div>
                                <div className="m-home-social-brand2">
                                    Donate to upcoming <br/> Tournament's prize pool
                                </div>      
                            </div>
                        </a>
                        
                        <Link to='/news' style={{ textDecoration: 'none', textAlign: 'center', width: '100%' }}>
                            <div className="m-home-item">
                                <div className="m-home-social-icon4">
                                <Icon name='newspaper outline' color='black' size='huge'/>
                                </div>
                                <div className="m-home-social-brand2">
                                    RankedSpikeRush News
                                </div>      
                            </div>
                        </Link>
                        <Link to='/about' style={{ textDecoration: 'none', textAlign: 'center', width: '100%' }}>
                            <div className="m-home-item">
                                <div className="m-home-social-icon4">
                                <Icon name='info circle' color='black' size='huge'/>
                                </div>
                                <div className="m-home-social-brand2">
                                    About RankedSpikeRush
                                </div>      
                            </div>
                        </Link>


                        <div className="m-scroll-fix">

                        </div>
                </div>
            </div>
        </div>
    )
}