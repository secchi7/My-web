import { useState } from "react"
import Sidenav from "./components/Sidenav"
import Main from "./components/Main"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact"

function App(){
  return (
    <div className="bg-slate-200">
      <Sidenav/>
      <Main/>
      <Resume/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App

