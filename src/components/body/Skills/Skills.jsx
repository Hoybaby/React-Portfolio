import React from 'react'
import Seperator from '../../common/Seperator/Seperator'
import { SkillsData } from '../../data/skills'
import SkillCard from './SkillCard';
import './Skills.css'
function Skills() {

    const data = SkillsData;

    return (
        <div className="skills">
            <Seperator/>
            <label className='section-title'>Skills</label>
            <div className="skills-container">
                {data.map((item)=> {
                    return(
                        <div className="skills-section" key={item.list.id}>
                            <label className="skills-section-title">{item.type}</label>
                            <div className="skills-list">
                                {item.list.map((skill) => {
                                    return(
                                        <SkillCard skill={skill} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
