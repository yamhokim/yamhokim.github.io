import React, { useState, useEffect } from 'react'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm border-b border-slate-200' : 'bg-white border-b border-slate-200'
    }`}>
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center py-4">
          <a href="#about" className="text-2xl font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
            Yoonho Kim
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">About</a>
            <a href="#experience" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#contact" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
