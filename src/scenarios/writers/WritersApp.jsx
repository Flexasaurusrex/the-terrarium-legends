import './WritersApp.css'

function WritersApp() {
  return (
    <div className="writers-app">
      <div className="writers-container">
        
        <div className="film-strip">
          <div className="frame"></div>
          <div className="frame"></div>
          <div className="frame"></div>
          <div className="frame"></div>
        </div>

        <header className="writers-header">
          <h1>🎬 WRITERS ROOM FROM HELL 📝</h1>
          <div className="subtitle">Hollywood Writers Room • 2026</div>
        </header>

        <div className="coming-soon-box">
          <div className="typewriter">
            <p>BACKEND IN DEVELOPMENT...</p>
            <p>━━━━━━━━━━━━━━━━━━━━━━</p>
          </div>

          <div className="cast-list">
            <h2>THE CAST:</h2>
            <div className="cast-member">🎭 William Shakespeare</div>
            <div className="cast-member">🚬 Hunter S. Thompson</div>
            <div className="cast-member">🍸 Dorothy Parker</div>
            <div className="cast-member">🖤 Edgar Allan Poe</div>
            <div className="cast-member">✨ Maya Angelou</div>
          </div>

          <div className="scenario-description">
            <p>Five legendary writers trapped in a Hollywood writers room, trying to pitch a TV show.</p>
            <p>Every loop, they forget the last pitch. Every loop, chaos ensues.</p>
            <p>Nobody escapes. The pitch never gets greenlit.</p>
          </div>

          <div className="technical-note">
            <p>💡 To activate this scenario:</p>
            <p>1. Deploy backend with SCENARIO_MODE=writers</p>
            <p>2. This frontend will automatically sync via Firebase</p>
            <p>3. Watch the chaos unfold live</p>
          </div>
        </div>

        <div className="film-strip bottom">
          <div className="frame"></div>
          <div className="frame"></div>
          <div className="frame"></div>
          <div className="frame"></div>
        </div>

      </div>
    </div>
  )
}

export default WritersApp
