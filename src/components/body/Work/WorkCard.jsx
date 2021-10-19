import React from 'react'
import './WorkCard.css'

function WorkCard({item}) {
    return (
        <div className="work-card">
            <img src={item.companyLogo} alt="logo of the company I worked for" className='work-logo'/>
            <div className="work-info">
                <label className='company-name'>{item.company}</label>
                <div className='work-dates'>
                    <label >{item.dateJoining}</label> -<label>{item.dateEnd}</label>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
