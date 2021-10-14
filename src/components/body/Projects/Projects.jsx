import React from 'react'
import ProjectCard from './ProjectCard';
import './Projects.css';
import {ProjectData} from '../../data/projects'

function Projects() {

    const data = ProjectData;

    return (
        <div className='projects'>
            <label>Projects</label>
            <div>
                {data.map((project) => {
                    return <ProjectCard/>
                })}
            </div>
        </div>
    )
}

export default Projects
