import { useEffect, useRef, useState } from 'react'
import { stats, traits } from '../data.js'

export default function About() {
  const [filled, setFilled] = useState(false)
  const panelRef = useRef(null)

  useEffect(() => {
    const el = panelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-text">
          <p className="eyebrow">About</p>
          <h2 className="section-title">More Info</h2>
          <p>
            I'm a software engineer who treats shipping products a lot like clearing levels:
            plan the run, build the thing, fix what breaks, and go again.
          </p>
          <p>
            Outside of code, I'm usually deep in a game or a film — both have taught me more
            about pacing, feedback loops, and good design than most tutorials ever did.
          </p>
          <div className="trait-grid">
            {traits.map((trait) => (
              <div className="trait-card" key={trait.label}>
                <div className="trait-label">{trait.label}</div>
                <div className="trait-value">{trait.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="match-panel" ref={panelRef}>
          <div className="match-panel-title">Skills Match</div>
          {stats.map((stat) => (
            <div className="match-row" key={stat.name}>
              <div className="match-row-top">
                <span className="match-name">{stat.name}</span>
                <span className="match-pct">{stat.xp}% Match</span>
              </div>
              <div className="match-track">
                <div
                  className={`match-fill ${filled ? 'filled' : ''}`}
                  style={{ transform: filled ? `scaleX(${stat.xp / 100})` : 'scaleX(0)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
