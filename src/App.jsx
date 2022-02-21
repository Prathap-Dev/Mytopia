import React, { useContext, useEffect, useState } from 'react'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import Productlist from './components/Productlist/Productlist'
import Contact from './components/contact/Contact'
import Start from './components/Start/Start'
import Toggle from './components/Toggle/Toggle'
import { ThemeContext } from './context'

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },5000)
  },[])

  return (
    <div
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}
  >
     {
       loading ?
       <Start/>
       : 
     <>
     
     <Toggle/>
      <Intro/>
      <About/>
      <Productlist/>
      <Contact/>
      </>
     }
   </div> 
  )
}

export default App
