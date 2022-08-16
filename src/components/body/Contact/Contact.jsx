import React from 'react'
import Seperator from '../../common/Seperator/Seperator'
import SocialContact from '../../common/social/SocialContact'
import './Contact.css'

function Contact() {

    return (
        <div className="contact">
            <Seperator/>
            <label className='section-title'>Contact</label>
            <div className="contact-container">
                <div className='contact-left'>
                    <p>Want to get in touch, please use the social icons below. I check my LinkedIn everyday!</p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a href={require('../../../assets/Web Developer Resume Michael Bartek.pdf.pdf').default} target='#blank'><i class="fa fa-info"></i>Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
