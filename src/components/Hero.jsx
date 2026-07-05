import { profile } from '../data.js'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="eyebrow">Featured Profile</p>
          <h1 className="hero-title">
            {profile.name.split(' ')[0]} <span className="accent">{profile.name.split(' ')[1]}</span>
          </h1>
          <div className="hero-meta">
            <span className="hero-match">98% Match</span>
            <span>Software Engineer</span>
            <span>Full-Stack</span>
          </div>
          <p className="hero-subtitle">{profile.tagline}</p>
          <div className="hero-buttons">
            <a href="#work" className="btn btn-primary">▶ View Work</a>
            <a href="#about" className="btn btn-secondary">ⓘ More Info</a>
          </div>
        </div>
      </div>
      <div className="hero-photo-badge">
        <img src={profile.photo} alt={profile.name} />
      </div>
    </section>
  )
}
