import React from 'react';

const ProjectSummary = ({project}) =>{
    return(
        <div className='card z-depth-0 project-summary'>
                <div className='card-content grey-text text-darken-3'>
                    <span className='card-title'>{project.title}</span>
                    <p>{project.content}</p>
                    <p>Posted by bren</p>
                    <p className='greay-texr'>martes 6</p>
                </div>
            </div>
    )
}

export default ProjectSummary;
