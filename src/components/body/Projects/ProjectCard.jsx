import React from 'react'
// import { ProjectData } from '../../data/projects'
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
                    <a className="prjoect-link" href={project.demo} target="_blank" rel="noreferrer">
                            <div className="link-button">
                                <BsGlobe/> Demo
                            </div>
                        </a>
                )}
                {project.github && (
                        <a className="prjoect-link" href={project.github} target="_blank" rel="noreferrer">
                        <div className="link-button">
                            <BsGithub/> Github
                        </div>
                    </a>
                )}  
                </div>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tags.map((tag)=> {
                        return (
                        <label className="tag">
                            {tag}
                        </label>)
                    })}
                </div>
            </div>
            <img src={project.image} className='project-photo' alt='Project Michael Bartek created'/>
        </div>
    )
}

export default ProjectCard
