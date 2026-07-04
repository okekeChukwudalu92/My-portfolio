import { useEffect, useState } from 'react'
import { bootLines, profile } from '../data.js'

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState([])

  useEffect(() => {
    let cancelled = false

    async function typeLines() {
      for (let i = 0; i < bootLines.length; i++) {
        if (cancelled) return
        // reveal each line after a short delay to mimic a boot log
        await new Promise((r) => setTimeout(r, i === 0 ? 300 : 550))
        if (cancelled) return
        setVisibleLines((prev) => [...prev, bootLines[i]])
      }
    }

    typeLines()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="eyebrow">Available for work</p>
          <h1 className="hero-title">
            Hi, I'm <span className="accent">{profile.name.split(' ')[0]}</span>
          </h1>
          <p className="hero-subtitle">{profile.tagline}</p>
          <div className="hero-buttons">
            <a href="#work" className="btn btn-primary">View Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="terminal">
          <div className="terminal-bar">
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="terminal-dot" />
          </div>
          <div className="terminal-body">
            {visibleLines.map((line, i) => (
              <div className="terminal-line" key={i}>
                <span className="prompt">&gt;</span>
                <span>{line}</span>
              </div>
            ))}
            {visibleLines.length < bootLines.length ? (
              <span className="terminal-cursor" />
            ) : (
              <div className="terminal-line">
                <span className="prompt">&gt;</span>
                <span>
                  welcome<span className="terminal-cursor" />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
