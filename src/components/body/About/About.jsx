import React from 'react'
import SocialContact from '../../common/social/SocialContact'
import './About.css'


function About() {
    return (
        <div className='about'>
            <div className="about-top">
                <div className="about-info">
                    Hello! My name is <br/> <span className="info-name">Michael Bartek</span>  <br/>
                    and I love creating applications with JavaScript!
                </div>
                <div className="about-photo">
                    <img 
                    src={require('../../../assets/coding.png').default} 
                    className='picture'/>
                </div>
            </div>
        <SocialContact/>
        </div>
    )
}

export default About
