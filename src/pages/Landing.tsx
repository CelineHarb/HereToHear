import { useNavigate } from 'react-router-dom'
import './Landing.css'

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="landing">
      <nav className="landing-nav">
        <span className="landing-logo">here to hear</span>
        <button className="nav-signin" onClick={() => navigate('/auth')}>
          sign in
        </button>
      </nav>

      <main className="landing-main">
        <div className="landing-tag">✦ your daily companion</div>
        <h1 className="landing-title">a space to feel heard</h1>
        <p className="landing-subtitle">
          Write freely, reflect deeply, and grow — with an AI that remembers
          your journey and reflects your progress back to you.
        </p>
        <button className="landing-cta" onClick={() => navigate('/auth')}>
          start journaling
        </button>

        <div className="landing-cards">
          <div className="landing-card">
            <span className="card-icon">✎</span>
            <span className="card-label">daily journal</span>
          </div>
          <div className="landing-card">
            <span className="card-icon">♡</span>
            <span className="card-label">gratitude</span>
          </div>
          <div className="landing-card">
            <span className="card-icon">◎</span>
            <span className="card-label">AI reflection</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Landing