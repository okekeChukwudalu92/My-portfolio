import { useState } from 'react'
import { filters, projects } from '../data.js'

export default function Work() {
  const [active, setActive] = useState('all')

  const visible =
    active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="work" className="work">
      <div className="container">
        <p className="eyebrow">Work</p>
        <h2 className="section-title">Mission Log</h2>
        <div className="work-filter">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${active === f.value ? 'active' : ''}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="work-grid">
          {visible.map((project) => (
            <a
              className="work-card"
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              <img src={project.image} alt={project.title} />
              <div className="work-overlay">
                <span className="work-tag">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="work-link">Visit site →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
