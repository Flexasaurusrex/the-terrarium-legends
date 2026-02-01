import './ComediansApp.css'

function ComediansApp() {
  return (
    <div className="comedians-app">
      <div className="comedians-container">
        
        <div className="neon-sign">
          🎤 COMEDY CLUB 🎤 LIVE TONIGHT 🎤
        </div>

        <header className="comedians-header">
          <h1>🎤 COMEDIANS ROAST BATTLE 😂</h1>
          <div className="subtitle">THE COMEDY CELLAR • NEW YORK • AFTER HOURS</div>
        </header>

        <div className="coming-soon-box">
          <div className="stage-lights">
            <div className="spotlight"></div>
            <div className="spotlight"></div>
            <div className="spotlight"></div>
          </div>

          <div className="roster">
            <h2>TONIGHT'S LINEUP:</h2>
            
            <div className="comedian-card">
              <div className="comedian-icon">🔥</div>
              <div className="comedian-info">
                <div className="comedian-name">Richard Pryor</div>
                <div className="comedian-style">Raw. Honest. Fearless truth-teller.</div>
              </div>
            </div>

            <div className="comedian-card">
              <div className="comedian-icon">💀</div>
              <div className="comedian-info">
                <div className="comedian-name">George Carlin</div>
                <div className="comedian-style">Sharp. Political. Language surgeon.</div>
              </div>
            </div>

            <div className="comedian-card">
              <div className="comedian-icon">💎</div>
              <div className="comedian-info">
                <div className="comedian-name">Joan Rivers</div>
                <div className="comedian-style">Vicious. Quick. No mercy.</div>
              </div>
            </div>

            <div className="comedian-card">
              <div className="comedian-icon">🌟</div>
              <div className="comedian-info">
                <div className="comedian-name">Robin Williams</div>
                <div className="comedian-style">Manic. Brilliant. Rapid-fire genius.</div>
              </div>
            </div>

            <div className="comedian-card">
              <div className="comedian-icon">🎭</div>
              <div className="comedian-info">
                <div className="comedian-name">Dave Chappelle</div>
                <div className="comedian-style">Observant. Bold. Truth in comedy.</div>
              </div>
            </div>
          </div>

          <div className="scenario-description">
            <p>Five comedy legends trapped in the green room after hours.</p>
            <p>Roasting each other. Telling stories. Competing for laughs.</p>
            <p>Every loop, the same setup. Every loop, different punchlines.</p>
            <p>Nobody can leave until someone gets the perfect laugh.</p>
            <p>Nobody ever gets the perfect laugh.</p>
          </div>

          <div className="laugh-meter">
            <h3>LAUGH METER:</h3>
            <div className="meter-bar">
              <div className="meter-fill" style={{width: '0%'}}></div>
            </div>
            <div className="meter-label">AWAITING BACKEND ACTIVATION</div>
          </div>

          <div className="technical-note">
            <p>💡 ACTIVATE: SCENARIO_MODE=comedians</p>
            <p>Warning: May contain offensive humor. That's the point.</p>
          </div>
        </div>

        <div className="neon-sign bottom">
          🎤 TWO DRINK MINIMUM 🎤 NO HECKLING 🎤
        </div>

      </div>
    </div>
  )
}

export default ComediansApp
