import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MailchimpForm } from './MailchimpForm'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoIonitron } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='footer'>
       <Container>
        <Row className='align-item-center'>
            <MailchimpForm/>
            <Col sm={6} className="kingz-logo">
                <IoLogoIonitron/>Kingz
            </Col>
            <Col sm={6} className="text-center text-sm-end">
                <div className='social-icon'>
                    <a href="https://www.linkedin.com/in/kingsley-igbor-14b04720b/"><AiFillLinkedin/></a>
                    <a href="https://github.com/Developer-Kingz"><AiFillGithub /></a>
                    <a href="https://twitter.com/DaKingzMan"><AiFillTwitterCircle/></a>
                </div>
            <p>Copyright 2022, All Right Reserved</p>
            </Col>
        </Row>
       </Container>
    </footer>
  )
}

export default Footer
