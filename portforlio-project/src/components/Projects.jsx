import React from "react";
import { Tab, Col, Container, Row, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import colorSharp2 from "../assets/color-sharp2.png";
import projImg1 from "../assets/project-img1.png";
import projImg2 from "../assets/project-img2.png";
import projImg3 from "../assets/project-img3.png";
import oculus from "../assets/oculus.jpeg"
import imageSlider from "../assets/image-slider.jpeg"
import wastex1 from "../assets/wastex1.jpeg"
import wastex2 from "../assets/wastex2.jpeg"
import youtube from "../assets/youtube.jpeg"
import Yuboclone from "../assets/Yuboclone.png"
import 'animate.css'
import TrackVisibility from 'react-on-screen'

const Projects = () => {
    const projects = [
        {
            title: "Waste management Application",
            description:
            "platform allows people to know how waste is disposed off",
            imgUrl: wastex1,
        },
        {
            title: "E-commerce webpage",
            description: "Simple E-commerce webpage",
            imgUrl: oculus,
        },
        {
            title: "Youtube Clone",
            description: "Youtube homepage clone",
            imgUrl: youtube,
        },
        {
            title: "Interior decor webpage",
            description:
                "An interior decor business page with a sliding image carousel",
            imgUrl: imageSlider,
        },
        {
            title: "Yubo Clone",
            description:
                "a website clone using React and chakra UI ",
            imgUrl: Yuboclone,
        },
        {
            title: "Wastex Dashboard",
            description:
                "user dashboard of a platform allows people to know how waste is disposed off ",
            imgUrl: wastex2,
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
                            • Building Frontend Interfaces with ReactJS •<br/>
                            collaborated with a group of 4 developers (fellow
                            trainees) in mapping out the userflow of a waste
                            management web application as well as developing it.<br/>
                            • colaborated with fellow trainees to build a blood
                            bank web application from start to finish.
                        </p>
                    </div>}
                    </TrackVisibility>
                        
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
                            <Tab.Content>
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
                                    Lorem Ipsum
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Lorem Ipsum
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    );
};

export default Projects;
