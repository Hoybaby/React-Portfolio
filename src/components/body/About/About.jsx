import React from 'react'
import './About.css'


function About() {
    return (
        <div className='about'>
            <div className="about-top">
                <div className="about-info">
                    Hello! My name is <br/> Michael Bartek  <br/>
                    and I love creating applications with JavaScript!
                </div>
                <div className="about-photo">
                    <img 
                    src={require('../../../assets/coding.png').default} 
                    className='picture'/>
                </div>
            </div>
            <div className="about-bottom">
                this is contact buttons
            </div>
            
        </div>
    )
}

export default About
