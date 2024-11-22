import React from "react";
import { Tab, Col, Container, Row, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import colorSharp2 from "../assets/color-sharp2.png";
import projImg1 from "../assets/project-img1.png";
import projImg2 from "../assets/project-img2.png";
import projImg3 from "../assets/project-img3.png";
import oculus from "../assets/oculus.jpeg"
import imageSlider from "../assets/image-slider.jpeg"
import bloodbank from "../assets/bloodbank.png"
import wastex1 from "../assets/wastex1.jpeg"
import wastex2 from "../assets/wastex2.jpeg"
import youtube from "../assets/youtube.jpeg"
import mainstack from "../assets/mainstack.png"
import gitquerix from "../assets/gitquerix.png"
import Yuboclone from "../assets/Yuboclone.png"
import notch from "../assets/notch.png"
import notchChat from "../assets/notch-chat.png"
import notchLeave from "../assets/notch-leave.png"
import notchAttendance from "../assets/notch-attendance.png"
import countries from "../assets/countries.png"
import skillup from "../assets/skillup.png"
import Crypto from "../assets/36crypto.png"
import 'animate.css'
import TrackVisibility from 'react-on-screen'

const Projects = () => {
    const projects = [
        {
            title: "Notch Hr Website",
            description:
                "A robust HR application (designed the UI of the website)",
            imgUrl: notch,
            url: 'https://notchhr.io/'
        },
        {
            title: "Chat and Announcement Feature (Notch hr)",
            description:
                "Chat with colleagues one-on-one or in groups, instantly answer questions, and collaborate seamlessly",
            imgUrl: notchChat,
            url: 'https://notchhr.io/chats/'
        },
        {
            title: "Attendance Module (Notch Hr)",
            description: "This seamless integration ensures accurate and timely payroll processing by aligning attendance data with payroll, thereby eliminating manual data entry errors and enhancing overall accuracy.",
            imgUrl: notchAttendance,
            url: 'https://notchhr.io/attendance-management/'
        },
        {
            title: "Skillup Website",
            description: "worked on the website of a tech training hub located in lagos",
            imgUrl: skillup,
            url: 'https://skillupafrica.com.ng/'
        },
        {
            title: "36Crypto",
            description: "A crypto Blog (wordpress)",
            imgUrl: Crypto,
            url: 'https://36crypto.com/'
        },
        {
            title: "analytics dashboard (personal project)",
            description: "Just a landing page that displays some random dynamic data",
            imgUrl: mainstack,
            url: 'https://mainstack-admin-dashboard.netlify.app/'
        },
        {
            title: "GitQuerix",
            description:
                "enables users to search for any developers profile and portforlio from Github (Personal project)",
            imgUrl: gitquerix,
            url: 'https://gitquarix.netlify.app/'
        },
        {
            title: "Country search (personal project)",
            description:
            "Allows user to search details of any country (personal project)",
            imgUrl: countries, 
            url: 'https://searching-countries.onrender.com/'
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({isVisible})=> 
                    <div className={isVisible? "animate__animated animate__bounce": ""}>
                    <h2>Projects</h2>
                        <p>
                            • Below are a few from the numerous live / personal projects i've worked on. For projects relating to Notchhr,
                            a review of the features described on the screenshot is available on request and can be demonstrated live, as they are paid features and currently used by thousands of users (it requires a personalized login) 
                        </p>
                    
                        
                        <Tab.Container
                            id="projects-tabs"
                            defaultActiveKey="first"
                        >
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Tab One
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Tab Two
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav><br/><br/><br/>
                            <Tab.Content id="slideInUp" className={isVisible? "animate__animated animate__slideInUp" : ""}>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectCards
                                                    key={index}
                                                    {...project}
                                                />
                                            );
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at quasi magnam nisi eaque dicta rerum nobis est sequi quidem!</p> */}
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe dolor odit ipsum, tempora quam qui ad pariatur quasi maiores quod repellat dolorum esse explicabo reprehenderit blanditiis voluptate libero ipsam? Quaerat.</p> */}
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    );
};

export default Projects;
