import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({title, imgUrl, link}) => {
  return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx" onClick={() => window.location.href=`${link}`}>
            <img className='img-fluid' src={imgUrl} alt='project images'/>
            <div className="proj-txtx">
                <h4>{title}</h4>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard