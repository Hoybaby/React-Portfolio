import React from 'react'
import { ProjectData } from '../../data/projects'
import './ProjectCard.css'

function ProjectCard({project}) {
    return (
        <div className="project-card">
            <div className="project-info">
                <label className='project-title'>{project.title}</label>
                <div className="project-links">
                    {/* if true then render */}
                    {project.demo && 
                        <a class="prjoect-link">
                            <div>
                                <i class="fas fa-globe">Demo</i>
                            </div>
                        </a>}
                </div>
            </div>
            <img src={project.image} className='project-photo'/>
        </div>
    )
}

export default ProjectCard
