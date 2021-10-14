import React from 'react'
import { ProjectData } from '../../data/projects'
import './ProjectCard.css'
import {BsGlobe, BsGithub} from 'react-icons/bs'

function ProjectCard({project}) {
    return (
        <div className="project-card">
            <div className="project-info">
                <label className='project-title'>{project.title}</label>
                <div className="project-links">
                    {/* if true then render */}
                    {project.demo && (
                    <a class="prjoect-link" href={project.demo}>
                            <div className="link-button">
                                <BsGlobe/> Demo
                            </div>
                        </a>
                    )}
                    {project.github && (
                        <a class="prjoect-link" href={project.github}>
                        <div className="link-button">
                            <BsGithub/> Github
                        </div>
                    </a>
                )}
                    )}
                        
                </div>
            </div>
            <img src={project.image} className='project-photo'/>
        </div>
    )
}

export default ProjectCard
