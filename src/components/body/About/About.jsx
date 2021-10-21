import React from 'react'
import SocialContact from '../../common/social/SocialContact'
import './About.css'


function About() {
    return (
        <div className='about'>
            <div className="about-top">
                <div className="about-info">
                    Hello! My name is <br/> <span className="info-name">Michael Bartek</span>  <br/>
                    and I love creating applications with JavaScript! Changed my carrer from Biology to Web Development in 2020 with a certification from Rutgers University!
                    Passionate about my growth in the career of Web Development in the forms of learning new languages, taking on more responsibilities 
                        and solving complex problems.
                </div>
                <div className="about-photo">
                    <img 
                    src={require('../../../assets/coding.png').default} 
                    className='picture'
                    alt='Michael Bartek coding'/>
                </div>
            </div>
        <SocialContact/>
        </div>
    )
}

export default About
