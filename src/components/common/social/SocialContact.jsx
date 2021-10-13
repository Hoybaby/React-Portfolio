import React from 'react'
import { SocialData } from '../../data/social';
import './SocialContact.css'

function SocialContact() {

    const data = SocialData;
    return (
        <div className='social-contact'>
            {data.map((item) => {
                return( 
                <a href={item.link}>
                    <div className='social-icon-div'>

                    </div>
                </a>
                )
            })}
        </div>
    )
}

export default SocialContact;
