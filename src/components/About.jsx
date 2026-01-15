import React, { useState } from 'react'

function PhotoPlaceholder() {
  const [photoError, setPhotoError] = useState(false);
  
  if (photoError) {
    return (
      <div className="w-40 h-40 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center flex-shrink-0">
        <div className="text-slate-400 text-sm">Photo</div>
      </div>
    );
  }
  
  return (
    <div className="w-40 h-40 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
      <img 
        src="/calvin.png" 
        alt="Yoonho Kim"
        className="w-full h-full object-cover"
        onError={() => setPhotoError(true)}
      />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section-container border-t border-slate-200 pt-20">
      <h2 className="section-title">About</h2>
      <div className="max-w-3xl">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          <PhotoPlaceholder />
          <div className="space-y-6 text-slate-700 leading-relaxed flex-1">
            <p>
              Hello, my name is Yoonho! I'm a 3rd year Engineering Science student at the University of Toronto with hands-on experience in backend and full-stack development, and I enjoy solving challenging problems while growing as an engineer.
            </p>
            <p>
              In my free time, I enjoy bowling and playing basketball. Even though I'm from Toronto, I'm a bigger fan of the Knicks than the Raptors.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
