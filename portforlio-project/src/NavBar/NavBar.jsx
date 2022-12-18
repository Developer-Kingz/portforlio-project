import React from 'react'
import { Navbar, Container } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import {useState, useEfect} from "react"
import { useEffect } from 'react';
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoIonitron } from "react-icons/io";

function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);


    useEffect(()=>{
        const onScroll =()=>{
            if(windows.scrollY > 50){
                setScrolled(true);
            } else{
                setScrolled(false)
            }
        } 

        window.addEventListener("scroll", onScroll);
        return ()=> window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink =(value)=>{
        setActiveLink(value)
    }

  return (
    <Navbar expand="lg" className={scrolled? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <IoLogoIonitron/>Kingz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='nabvar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home'? 'active-navbar-link': "navbar-link"} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills'? 'active-navbar-link': "navbar-link"} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects'? 'active-navbar-link': "navbar-link"} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
               <a href="https://www.linkedin.com/in/kingsley-igbor-14b04720b/"><AiFillLinkedin/></a>
               <a href="https://github.com/Developer-Kingz"><AiFillGithub/></a>
               <a href="https://twitter.com/DaKingzMan"><AiFillTwitterCircle/></a>
               <button className='vvd' onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
            </div>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
