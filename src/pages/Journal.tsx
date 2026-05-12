import { useState } from 'react'
import './Journal.css'

function Journal() {
  const [entry, setEntry] = useState('')
  const [gratitude, setGratitude] = useState(['', '', ''])
  const [mood, setMood] = useState(0)

  const handleGratitude = (index: number, value: string) => {
    const updated = [...gratitude]
    updated[index] = value
    setGratitude(updated)
  }

  return (
    <div className="journal-layout">

      <aside className="sidebar">
        <span className="sidebar-logo">here to hear</span>
        <nav className="sidebar-nav">
          <div className="sidebar-item active">✎ today</div>
          <div className="sidebar-item">◎ timeline</div>
          <div className="sidebar-item">♡ gratitude</div>
          <div className="sidebar-item">↗ reflect</div>
        </nav>
        <div className="sidebar-bottom">
          <div className="sidebar-item">⊗ sign out</div>
        </div>
      </aside>

      <main className="journal-main">
        <div className="journal-header">
          <h1 className="journal-greeting">good morning</h1>
          <p className="journal-date">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        <div className="journal-section">
          <label className="section-label">how are you feeling?</label>
          <div className="mood-selector">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <button
                key={num}
                className={`mood-btn ${mood === num ? 'selected' : ''}`}
                onClick={() => setMood(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="mood-labels">
            <span>struggling</span>
            <span>amazing</span>
          </div>
        </div>

        <div className="journal-section">
          <label className="section-label">write freely</label>
          <textarea
            className="journal-textarea"
            placeholder="What's on your mind today?"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
          />
        </div>

        <div className="journal-section">
          <label className="section-label">three things you're grateful for</label>
          <div className="gratitude-list">
            {gratitude.map((item, index) => (
              <input
                key={index}
                type="text"
                className="gratitude-input"
                placeholder={`grateful for...`}
                value={item}
                onChange={(e) => handleGratitude(index, e.target.value)}
              />
            ))}
          </div>
        </div>

        <button className="submit-btn">save & get reflection</button>

        <div className="ai-response">
          <div className="ai-label">✦ here to hear</div>
          <p className="ai-text">
            Your reflection will appear here after you save your entry.
          </p>
        </div>
      </main>
    </div>
  )
}

export default Journal