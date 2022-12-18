import React from 'react'
import { Tab, Col, Container, Row } from "react-bootstrap";

const ProjectCards = ({title, description, imgUrl}) => {
  return (
    <Col sm={6} md={4}>
    <div className='proj-imgbx'>
        <img src={imgUrl} className="proj-imgbx-img" alt="" />
        <div className='proj-txtx'>
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
    </div>
    </Col>
  )
}

export default ProjectCards
