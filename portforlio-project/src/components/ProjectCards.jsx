import React from 'react'
import { Tab, Col, Container, Row, Nav } from "react-bootstrap";

const ProjectCards = ({title, description, imgUrl, url}) => {
  return (
    <Col sm={6} md={4}>
    <div className='proj-imgbx'> 
      <Nav.Link href={url}>
      <img src={imgUrl} className="proj-imgbx-img" alt="" />
        <div className='proj-txtx'>
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
      </Nav.Link>
    </div>
    </Col>
  )
}

export default ProjectCards
