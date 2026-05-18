import { useNavigate } from 'react-router-dom'
import './Landing.css'

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="landing">

      {/* Navigation */}
      <nav className="landing-nav">
        <span className="landing-logo">
          here <span className="logo-to">to</span> hear
        </span>
        <button className="nav-signin" onClick={() => navigate('/auth')}>
          sign in
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-tag">✦ your daily companion</div>
        <h1 className="hero-title">a space to<br />feel heard</h1>
        <p className="hero-sub">
          journal. reflect. grow.
        </p>
        <button className="hero-cta" onClick={() => navigate('/auth')}>
          start journaling →
        </button>
        <div className="hero-pills">
          <div className="hero-pill">✎ daily journal</div>
          <div className="hero-pill">♡ gratitude</div>
          <div className="hero-pill">✦ AI memory</div>
          <div className="hero-pill">🎵 worship</div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="section-eyebrow">how it works</div>
        <h2 className="section-title">write it. feel it. grow.</h2>
        <p className="section-sub">
          Here to Hear listens to you every day, remembers what you share,
          and reflects your growth back to you over time.
        </p>
        <div className="preview-wrap">
          <div className="preview-left">
            <div className="preview-label">today's entry</div>
            <div className="preview-card">
              <div className="preview-date">Friday, May 15 · mood 6/10</div>
              <div className="preview-mood">
                {[1,2,3,4,5,6,7,8,9,10].map(n => (
                  <div key={n} className={`mood-dot ${n <= 6 ? 'on' : ''}`}>{n}</div>
                ))}
              </div>
              <p className="preview-text">
                "I've been feeling really overwhelmed lately. The move is coming
                up and I don't know if I'm ready..."
              </p>
            </div>
            <div className="ai-bubble">
              <div className="ai-bubble-label">✦ here to hear</div>
              <p className="ai-bubble-text">
                It sounds like you're carrying a lot right now. Two weeks ago
                you felt the same way before your interview — and you showed up
                beautifully. You have more strength than you realise.
              </p>
            </div>
          </div>
          <div className="preview-right">
            <div className="preview-point">
              <div className="preview-icon">✎</div>
              <div>
                <div className="preview-point-title">write freely every day</div>
                <p className="preview-point-desc">
                  No prompts, no structure. Just you and a blank page — and an
                  AI that actually listens.
                </p>
              </div>
            </div>
            <div className="preview-point">
              <div className="preview-icon">◎</div>
              <div>
                <div className="preview-point-title">AI that remembers</div>
                <p className="preview-point-desc">
                  Every entry builds context. The AI references your past and
                  notices patterns you might have missed.
                </p>
              </div>
            </div>
            <div className="preview-point">
              <div className="preview-icon">♡</div>
              <div>
                <div className="preview-point-title">gratitude every day</div>
                <p className="preview-point-desc">
                  Log three things you're grateful for. Watch your streaks and
                  mindset shift over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faith Section */}
      <section className="section section-gray">
        <div className="section-eyebrow">faith-based support</div>
        <h2 className="section-title">never alone in it</h2>
        <p className="section-sub">
          When you're ready, Here to Hear can offer a Bible verse and a worship
          song that speaks to exactly where you are.
        </p>
        <div className="faith-wrap">
          <div className="faith-card">
            <div className="faith-card-top">
              <div className="faith-icon">✦</div>
              <div>
                <div className="faith-card-title">a verse for this moment</div>
                <div className="faith-card-sub">offered gently, only when you want it</div>
              </div>
            </div>
            <div className="faith-verse">
              "Cast all your anxiety on him because he cares for you."
              <div className="faith-verse-ref">— 1 Peter 5:7</div>
            </div>
          </div>
          <div className="faith-card">
            <div className="faith-card-top">
              <div className="faith-icon">🎵</div>
              <div>
                <div className="faith-card-title">a song to carry you through</div>
                <div className="faith-card-sub">worship recommendations that match your mood</div>
              </div>
            </div>
            <div className="faith-song">
              <div className="faith-song-art">♪</div>
              <div>
                <div className="faith-song-title">Waymaker</div>
                <div className="faith-song-artist">Sinach · recommended for you today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section">
        <div className="section-eyebrow">everything included</div>
        <h2 className="section-title">built for your whole journey</h2>
        <p className="section-sub">
          From your first entry to months of growth — Here to Hear grows with you.
        </p>
        <div className="features-grid">
          <div className="feat-card">
            <div className="feat-icon">✎</div>
            <div className="feat-title">daily journal</div>
            <p className="feat-desc">Write anything, in any language, any time</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">♡</div>
            <div className="feat-title">gratitude log</div>
            <p className="feat-desc">Three things daily with streak tracking</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">◎</div>
            <div className="feat-title">AI memory</div>
            <p className="feat-desc">References past entries and notices growth</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">📈</div>
            <div className="feat-title">mood timeline</div>
            <p className="feat-desc">See your emotional journey over time</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">✦</div>
            <div className="feat-title">Bible verses</div>
            <p className="feat-desc">Contextual scripture offered gently</p>
          </div>
          <div className="feat-card">
            <div className="feat-icon">🎵</div>
            <div className="feat-title">worship songs</div>
            <p className="feat-desc">Music that meets you where you are</p>
          </div>
        </div>
      </section>

      {/* Multilingual */}
      <section className="section section-gray">
        <div className="section-eyebrow">multilingual</div>
        <h2 className="section-title">journal in your language</h2>
        <p className="section-sub">
          Here to Hear responds in whatever language you write in — no setup needed.
        </p>
        <div className="lang-wrap">
          {['English', 'Español', 'Français', 'Português', 'العربية', '中文', 'हिन्दी', 'Deutsch', '+ many more'].map(lang => (
            <div key={lang} className="lang-pill">{lang}</div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <h2 className="cta-title">ready to feel heard?</h2>
        <p className="cta-sub">Start your journey today. Free, private, and always here for you.</p>
        <button className="cta-btn" onClick={() => navigate('/auth')}>
          create your account →
        </button>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <span className="footer-logo">
          here <span className="logo-to">to</span> hear
        </span>
        <span className="footer-text">built with care · always free</span>
      </footer>

    </div>
  )
}

export default Landing