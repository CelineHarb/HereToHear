import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="auth">
      <nav className="auth-nav">
        <span className="auth-logo" onClick={() => navigate('/')}>
          here to hear
        </span>
      </nav>

      <main className="auth-main">
        <div className="auth-card">
          <h1 className="auth-title">
            {isSignUp ? 'create your account' : 'welcome back'}
          </h1>
          <p className="auth-subtitle">
            {isSignUp
              ? 'start your journaling journey'
              : 'continue your journey'}
          </p>

          <div className="auth-form">
            <input
              type="email"
              placeholder="email address"
              className="auth-input"
            />
            <input
              type="password"
              placeholder="password"
              className="auth-input"
            />
            <button className="auth-submit">
              {isSignUp ? 'create account' : 'sign in'}
            </button>
          </div>

          <p className="auth-toggle">
            {isSignUp ? 'already have an account?' : "don't have an account?"}
            <span onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? ' sign in' : ' sign up'}
            </span>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Auth