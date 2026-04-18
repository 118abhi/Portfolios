import './App.css'
import Contact from './components/Contact/Contact'
import Design from './components/Design'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import About from './components/about/About'
import Header from './components/header/Header'
import Qualification from './components/qualification/Qualification'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Scrollup from './components/scrollup/Scrollup'
import Work from './components/Work/Work'
import ScrollProgress from './components/ScrollProgress'

function App() {

  return (
    <>
      <ScrollProgress />
      <Design/>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        {/* <Work/> */}
        {/* <Testimonials/> */}
        <Contact/>
      </main>
      <Footer/>
      <Scrollup/>
    </>
  )
}

export default App
