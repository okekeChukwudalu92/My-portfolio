import { useEffect, useRef, useState } from 'react'
import { stats, traits } from '../data.js'

export default function About() {
  const [filled, setFilled] = useState(false)
  const sheetRef = useRef(null)

  useEffect(() => {
    const el = sheetRef.current
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
          <h2 className="section-title">Character Sheet</h2>
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
        <div className="stat-sheet" ref={sheetRef}>
          <div className="stat-sheet-title">// Skill Tree</div>
          {stats.map((stat) => (
            <div className="stat-row" key={stat.name}>
              <div className="stat-row-top">
                <span className="stat-name">{stat.name}</span>
                <span className="stat-level">LVL {stat.level}</span>
              </div>
              <div className="stat-track">
                <div
                  className={`stat-fill ${filled ? 'filled' : ''}`}
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
