'use client'

import { useState } from "react"
import ErrorBoundary from "../ErrorBoundary"
import { MyBtn1, MyNavigation } from "../styledComponents"
import Home from "./components/Home"
import Navigation from "./components/Navigation"


const App = () => {
  const [home, setHome] = useState(true)

  

  return (
    <div>
    <ErrorBoundary>
      <Navigation />
      {home && <Home />}



    </ErrorBoundary>
    </div>
  )
}

export default App;