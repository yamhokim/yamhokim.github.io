import React from 'react'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <About />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
