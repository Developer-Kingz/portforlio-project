import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/meter1.svg"
import meter2 from "../assets/meter2.svg"
import meter3 from "../assets/meter3.svg"
import colorSharp from "../assets/color-sharp.png"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='skill' id='skills'>
           <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                   <h2>Skills</h2>
                   <p>• JavaScript   •  React.js    •  Bootstrap   • HTML5   • CSS    • Chakra UI    • Tailwind CSS  • Material UI  • WordPress (Elementor) • Git/GitHub • Geomodelling and petrophysicsl analysis (using Petrel Geophysical Software).</p>
                   <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    <div className='item'>
                       <img src={meter1} alt="image" />
                       <h5>ReactJS</h5>
                    </div>
                    <div className='item'>
                       <img src={meter2} alt="image" />
                       <h5>JavaScript</h5>
                    </div>
                    <div className='item'>
                       <img src={meter3} alt="image" />
                       <h5>CSS & Frameworks</h5>
                    </div>
                    <div className='item'>
                       <img src={meter1} alt="image" />
                       <h5>Wordpress</h5>
                    </div>
                    <div className='item'>
                       <img src={meter2} alt="image" />
                       <h5>Git/Github</h5>
                    </div>
                   </Carousel>
                </div>
                </Col>
            </Row>
           </Container>
           <img className='background-image-left' src={colorSharp} alt="" />
        </section>
      )
}

export default Skills
