import React, { useState, useEffect } from 'react'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm border-b border-slate-200' : 'bg-white border-b border-slate-200'
    }`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <a href="#about" className="text-xl sm:text-2xl font-semibold text-slate-900 hover:text-indigo-600 transition-colors" onClick={closeMobileMenu}>
            Yoonho Kim
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">About</a>
            <a href="#experience" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#contact" className="text-sm text-slate-600 hover:text-indigo-600 transition-colors">Contact</a>
          </div>
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200 mt-2 pt-4">
            <a href="#about" className="block py-2 text-slate-600 hover:text-indigo-600 transition-colors" onClick={closeMobileMenu}>About</a>
            <a href="#experience" className="block py-2 text-slate-600 hover:text-indigo-600 transition-colors" onClick={closeMobileMenu}>Experience</a>
            <a href="#contact" className="block py-2 text-slate-600 hover:text-indigo-600 transition-colors" onClick={closeMobileMenu}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
