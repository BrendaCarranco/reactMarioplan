import React from 'react';
import ProjectSummary from './ProjectSummary';

//Si tenemos projects, has project.map, sino no hagas el map xq no hay nada que output
const ProjectList = ({projects}) =>{
    return(
        <div className='project-list section'>
            {projects && projects.map(project => {
                return (
                    <ProjectSummary project={project} key={project.id} />
                )
            })}

        </div>
    )
}

export default ProjectList;