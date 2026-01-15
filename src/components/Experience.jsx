import React, { useState } from 'react'

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Auvik Networks Inc.",
    location: "Toronto, ON",
    period: "September 2025 -- Present",
    description: "Developed and maintained Go-based microservices processing millions of device records, and led large-scale backend migration refactoring that significantly improved system performance and reduced operational costs.",
    logo: "/logos/auvik.com.png",
    website: "https://www.auvik.com"
  },
  {
    title: "Software Engineer Intern",
    company: "SEW Eurodrive of Canada",
    location: "Toronto, ON",
    period: "Sept 2024 -- August 2025",
    description: "Built real-time software systems for autonomous guided vehicles, including communication, perception, control APIs, and operator dashboards.",
    logo: "/logos/sew-euro.webp",
    website: "https://sewcan.ca/"
  },
  {
    title: "Software Developer Intern (Contract)",
    company: "Saige",
    location: "Toronto, ON",
    period: "February 2025 -- April 2025",
    description: "Created an automated property flyer generator that transforms address data into downloadable, map-rich PDFs through a scalable full-stack web system.",
    logo: "/logos/saige.jpeg",
    website: "https://www.realsaige.com/"
  },
  {
    title: "Software Research Intern",
    company: "University of Toronto - HFASt Laboratory",
    location: "Toronto, ON",
    period: "May 2023 -- Aug 2023",
    description: "Developed a full-stack research participant data platform and built an automated computer vision-based drowsiness detection system.",
    logo: "/logos/uoft-logo.webp",
    website: "https://hfast.mie.utoronto.ca/"
  }
]

function CompanyLogo({ logo, company }) {
  const [logoError, setLogoError] = useState(false);
  
  if (logoError) {
    return (
      <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm font-medium rounded-lg">
        {company.charAt(0)}
      </div>
    );
  }
  
  return (
    <img 
      src={logo} 
      alt={`${company} logo`}
      className="w-full h-full object-cover rounded-lg"
      onError={() => setLogoError(true)}
    />
  );
}

function Experience() {
  return (
    <section id="experience" className="section-container border-t border-slate-200">
      <h2 className="section-title">Experience</h2>
      <div className="space-y-8 max-w-3xl">
        {experiences.map((exp, index) => (
          <a
            key={index}
            href={exp.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 sm:p-6 shadow-sm relative hover:shadow-md transition-shadow cursor-pointer"
          >
            <span className="absolute top-4 right-4 sm:top-6 sm:right-6 text-xs sm:text-sm text-slate-500 font-mono">
              {exp.period}
            </span>
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-lg bg-white">
                <CompanyLogo logo={exp.logo} company={exp.company} />
              </div>
              <div className="flex-1 min-w-0 pr-16 sm:pr-20">
                <div className="mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-0.5">{exp.company}</h3>
                  <p className="text-sm sm:text-base text-slate-700">{exp.title}</p>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  {exp.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Experience
