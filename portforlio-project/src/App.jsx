import { useState } from 'react'
import './App.css'
// import '../../portforlio-project/src/NavBar/test.css'
import NavBar from './NavBar/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectCards from './components/ProjectCards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projectss from './components/Projectss'

function App() {

  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    {/* <Projectss/> */}
    <ProjectCards/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
