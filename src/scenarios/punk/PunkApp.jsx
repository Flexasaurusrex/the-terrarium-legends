import './PunkApp.css'

function PunkApp() {
  return (
    <div className="punk-app">
      <div className="punk-container">
        
        <div className="safety-pins">
          <span>🔗</span><span>🔗</span><span>🔗</span><span>🔗</span><span>🔗</span>
        </div>

        <header className="punk-header">
          <h1>🎸 PUNK ROCK BREAKFAST CLUB 🔥</h1>
          <div className="subtitle">CBGB's GREEN ROOM • NEW YORK • 1977</div>
        </header>

        <div className="coming-soon-box">
          <div className="anarchy-text">
            <p>NO RULES • NO FUTURE • NO ESCAPE</p>
            <p className="status">[ BACKEND NOT READY ]</p>
          </div>

          <div className="lineup">
            <h2>THE LINEUP:</h2>
            
            <div className="punk-card">
              <div className="punk-icon">🎤</div>
              <div className="punk-info">
                <div className="punk-name">Sid Vicious</div>
                <div className="punk-attitude">Chaotic. Unpredictable. Doesn't care.</div>
              </div>
            </div>

            <div className="punk-card">
              <div className="punk-icon">⚡</div>
              <div className="punk-info">
                <div className="punk-name">Joan Jett</div>
                <div className="punk-attitude">Tough. Direct. Takes no shit.</div>
              </div>
            </div>

            <div className="punk-card">
              <div className="punk-icon">🖤</div>
              <div className="punk-info">
                <div className="punk-name">Patti Smith</div>
                <div className="punk-attitude">Poetic. Intense. Spiritual rebel.</div>
              </div>
            </div>

            <div className="punk-card">
              <div className="punk-icon">🦅</div>
              <div className="punk-info">
                <div className="punk-name">Iggy Pop</div>
                <div className="punk-attitude">Wild. Raw. Pure energy.</div>
              </div>
            </div>

            <div className="punk-card">
              <div className="punk-icon">💋</div>
              <div className="punk-info">
                <div className="punk-name">Debbie Harry</div>
                <div className="punk-attitude">Cool. Sharp. Effortlessly punk.</div>
              </div>
            </div>
          </div>

          <div className="scenario-description">
            <p>Five punk legends trapped in the CBGB's green room before a show.</p>
            <p>Drinking. Fighting. Bonding. Repeating.</p>
            <p>Every loop they get angrier about being stuck.</p>
            <p>Every loop they try to smash their way out.</p>
            <p>The door never opens. The show never starts.</p>
          </div>

          <div className="setlist">
            <h3>TONIGHT'S SETLIST (THAT NEVER HAPPENS):</h3>
            <div className="songs">
              <div>1. Anarchy in the U.K.</div>
              <div>2. Blitzkrieg Bop</div>
              <div>3. Because the Night</div>
              <div>4. I Wanna Be Your Dog</div>
              <div>5. Heart of Glass</div>
            </div>
          </div>

          <div className="technical-note">
            <p>💡 ACTIVATE: SCENARIO_MODE=punk</p>
          </div>
        </div>

        <div className="safety-pins bottom">
          <span>🔗</span><span>🔗</span><span>🔗</span><span>🔗</span><span>🔗</span>
        </div>

      </div>
    </div>
  )
}

export default PunkApp
