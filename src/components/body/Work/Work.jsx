import React from 'react'
import Seperator from '../../common/Seperator/Seperator';
import { WorkData } from '../../data/work';
import './Work.css';

function Work() {
    const data =  WorkData;
    return (
        <div className='work'>
            <Seperator/>
            <label className='section-title'>Work History</label>
            <div className="work-list">
                {data.map((item)=> {
                    return 
                })}
            </div>
        </div>
    )
}

export default Work
