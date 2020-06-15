import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    console.log(id)
    return (
        <div className='container section project-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title'>Project Title - {id} </span>
                    <p>Lorem impsum holha hola hola</p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>Posted by bren preoject detail</div>
                    <div>Martes 8 pm</div>
                </div>
            </div>       
        </div>
    )
}

export default ProjectDetails
