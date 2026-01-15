import React from 'react'

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="section-container">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-normal text-slate-900 mb-6 leading-tight">
            Hi, I'm Yoonho Kim
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
            Software Engineer and Robotics Engineering Student at the University of Toronto. 
            Currently working as a Software Engineer Intern at Auvik Networks.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/yamhokim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 transition-colors underline underline-offset-4"
            >
              GitHub
            </a>
            <span className="text-slate-300">/</span>
            <a
              href="https://www.linkedin.com/in/yoonho-kim-b6042a229/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 transition-colors underline underline-offset-4"
            >
              LinkedIn
            </a>
            <span className="text-slate-300">/</span>
            <a
              href="mailto:yoonho.luke.kim@gmail.com"
              className="text-indigo-600 hover:text-indigo-800 transition-colors underline underline-offset-4"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
