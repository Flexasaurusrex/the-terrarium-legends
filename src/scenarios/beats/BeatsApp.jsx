import './BeatsApp.css'

function BeatsApp() {
  return (
    <div className="beats-app">
      <div className="beats-container">
        
        <div className="road-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <header className="beats-header">
          <h1>🚗 BEAT GENERATION ROAD TRIP 📚</h1>
          <div className="subtitle">ON THE ROAD • CROSS-COUNTRY • 1957</div>
        </header>

        <div className="coming-soon-box">
          <div className="typewriter-text">
            <p>...the only people for me are the mad ones, the ones who are mad to live,</p>
            <p>mad to talk, mad to be saved, desirous of everything at the same time...</p>
            <p className="status">[ BACKEND IN DEVELOPMENT ]</p>
          </div>

          <div className="cast-section">
            <h2>THE TRAVELERS:</h2>
            <div className="beat-poet">
              <span className="emoji">📖</span>
              <span className="name">Jack Kerouac</span>
              <span className="vibe">The chronicler, seeking experience</span>
            </div>
            <div className="beat-poet">
              <span className="emoji">🌟</span>
              <span className="name">Allen Ginsberg</span>
              <span className="vibe">The mystic, seeing visions</span>
            </div>
            <div className="beat-poet">
              <span className="emoji">💊</span>
              <span className="name">William S. Burroughs</span>
              <span className="vibe">The outlaw, cutting up reality</span>
            </div>
            <div className="beat-poet">
              <span className="emoji">🚙</span>
              <span className="name">Neal Cassady</span>
              <span className="vibe">The driver, always moving</span>
            </div>
          </div>

          <div className="scenario-description">
            <p>Four beat legends in a car, driving cross-country.</p>
            <p>Stopping at diners. Talking about everything. Going nowhere and everywhere.</p>
            <p>Every loop, the same road. Every loop, different revelations.</p>
            <p>The road goes on forever. The conversation never stops.</p>
          </div>

          <div className="route-section">
            <h3>THE ROUTE:</h3>
            <div className="stops">
              <span>San Francisco</span> → <span>Reno</span> → <span>Denver</span> → <span>Chicago</span> → <span>New York</span>
            </div>
          </div>

          <div className="technical-note">
            <p>💡 To activate: Deploy backend with SCENARIO_MODE=beats</p>
          </div>
        </div>

        <div className="road-lines bottom">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

      </div>
    </div>
  )
}

export default BeatsApp
