'use client'

import { useEffect, useState } from "react"
import ErrorBoundary from "../ErrorBoundary"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navigation from "./components/Navigation"
import Projects from "./components/Projects"
import typo1 from "../../imgs/portfolio/typo1.png"
import { MySlidingShow } from "../styledComponents"
import Footer from "./components/Footer"



const App = () => {
  const [show, setShow] = useState<Array<number>>([0, 0, 0]);
  const [image, setImage] = useState<string>('lavender');
  

  
  useEffect(() => {
    setImage('lavender');
    setTimeout(() => {
      setShow([1, 0, 0])
    }, 300);
  }, [])
  
  return (
    <div className="w-full relative" 
      style={{
        background: `${image} url(${typo1.src}) repeat`,
        transitionDuration: '1s',
        backgroundBlendMode: 'multiply',
        minHeight: '100vh',
      }}>
    <ErrorBoundary>

      <Navigation show={show} setShow={setShow} />

      <MySlidingShow show={show[0]}>
        {Boolean(show[0]) && <Home />}
      </MySlidingShow>
    

      <MySlidingShow show={show[1]}>
        {Boolean(show[1]) && <Projects />}
      </MySlidingShow>
      
      <MySlidingShow show={show[2]}>
        {Boolean(show[2]) && <Contact />}
      </MySlidingShow>

      <Footer />

      
    </ErrorBoundary>

    </div>
  )
}

export default App;