import React from 'react'
import { useState, useEffect } from "react"
import {Container, Row, Col} from "react-bootstrap"
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import background from "../assets/background.jpeg"
import developer from "../assets/developer.png"
import mydeveloper2 from "../assets/mydeveloper2.png"
import 'animate.css'
import TrackVisibility from 'react-on-screen'

const Banner = () => {

 const [loopNum, setLoopNum] = useState(0);
 const [isDeleting, setIsDeleting] = useState(false);
 const toRotate  = ["Web Developer", "Frontend Developer"];
 const [text, setText] = useState('');
 const [delta, setDelta] = useState(300 - Math.random() * 100)
 const period = 2000

 useEffect(()=>{
  let ticker = setInterval(()=>{
    tick()
  },delta)

  return ()=> {clearInterval(ticker)};
 },[text])

 const tick =()=>{
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  setText(updatedText);

  if(isDeleting){
  setDelta(prevDelta => prevDelta / 2)
  }
  if(!isDeleting && updatedText === fullText){
    setIsDeleting(true);
    setDelta(period);
  } else if(isDeleting && updatedText === ''){
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setDelta(500)
  }
 }



  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                  <TrackVisibility>
                  {({ isVisible })=>
                  <div className={isVisible? "animate__animated animate__fadeIn": ""}>
                    <span className='tagline'>Welcome to my Portforlio</span>
                    <h1>{`Hi I'm Kingsley Igbor `}<span className='wrap'>{text}</span></h1>
                    <p>A solution-driven web developer that enjoys working in collaborative environment and help finding solution to problems. Good knowledge of frontend development technologies such as HTML, CSS, JavaScript and React.js as well as some CSS frameworks (Chakra UI, Tailwind and Bootstrap). </p>
                    <button onClick={()=> console.log('connect')}>Let's Connect <BsFillArrowRightCircleFill size={25 }/></button>
                  </div>}
                  </TrackVisibility>

                </Col>

                <Col xs={12} md={6} xl={5}>
                    <img src={developer} alt="" className='banner-img' />
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Banner
