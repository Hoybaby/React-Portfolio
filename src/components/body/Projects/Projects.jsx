import React from 'react'
import ProjectCard from './ProjectCard';
import './Projects.css';
import {ProjectData} from '../../data/projects'
import Seperator from '../../common/Seperator/Seperator';



function Projects() {

    const data = ProjectData;

    return (
        <div className='projects'>
            <Seperator/>
            <label className="section-title">Projects</label>
            <div>
                {data.map((project) => {
                    return <ProjectCard project={project}/>
                })}
            </div>
        </div>
    )
}

export default Projects
