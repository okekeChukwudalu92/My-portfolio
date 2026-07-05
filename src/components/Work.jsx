import { projects } from '../data.js'

const rows = [
  { title: 'Apps & Platforms', category: 'app' },
  { title: 'Web Projects', category: 'web' },
  { title: 'Design & Graphics', category: 'graphic' },
]

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="container">
        <p className="eyebrow">Work</p>
        <h2 className="section-title">Browse Projects</h2>
        {rows.map((row) => {
          const items = projects.filter((p) => p.category === row.category)
          if (items.length === 0) return null
          return (
            <div className="work-row" key={row.category}>
              <h3 className="work-row-title">{row.title}</h3>
              <div className="work-row-track">
                {items.map((project) => (
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
                      <span className="work-link">▶ Visit site</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
