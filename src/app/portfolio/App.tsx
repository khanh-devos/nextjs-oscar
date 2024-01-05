'use client'

import { useEffect, useState } from "react"
import ErrorBoundary from "../ErrorBoundary"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navigation from "./components/Navigation"
import Projects from "./components/Projects"
import typo1 from "../../imgs/portfolio/typo1.png"

const App = () => {
  const [show, setShow] = useState([1, 0, 0, 0]);

  return (
    <div className="w-full h-screen" style={{background: `url(${typo1.src}) repeat`}}>
    <ErrorBoundary>
      <Navigation setShow={setShow} />

      {Boolean(show[0]) && <Home />}
      {Boolean(show[1]) && <Projects />}
      {Boolean(show[2]) && <About />}
      {Boolean(show[3]) && <Contact />}



    </ErrorBoundary>
    </div>
  )
}

export default App;