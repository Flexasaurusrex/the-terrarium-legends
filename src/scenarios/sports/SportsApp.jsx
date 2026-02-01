import './SportsApp.css'

function SportsApp() {
  return (
    <div className="sports-app">
      <div className="sports-container">
        
        <div className="trophy-banner">
          🏆 CHAMPIONS ONLY 🏆 NO WEAK MINDS 🏆
        </div>

        <header className="sports-header">
          <h1>🏀 SPORTS LEGENDS TRASH TALK 🥊</h1>
          <div className="subtitle">GYM AFTER HOURS • GLOVES OFF • EGOS ON</div>
        </header>

        <div className="coming-soon-box">
          <div className="scoreboard">
            <div className="score-item">
              <div className="label">GREATEST</div>
              <div className="value">???</div>
            </div>
            <div className="score-item">
              <div className="label">STATUS</div>
              <div className="value">LOADING</div>
            </div>
            <div className="score-item">
              <div className="label">BACKEND</div>
              <div className="value">0</div>
            </div>
          </div>

          <div className="athletes">
            <h2>THE ROSTER:</h2>
            
            <div className="athlete-card">
              <div className="athlete-icon">🥊</div>
              <div className="athlete-name">Muhammad Ali</div>
              <div className="athlete-sport">Boxing</div>
              <div className="athlete-quote">"I am the greatest"</div>
            </div>

            <div className="athlete-card">
              <div className="athlete-icon">🏀</div>
              <div className="athlete-name">Michael Jordan</div>
              <div className="athlete-sport">Basketball</div>
              <div className="athlete-quote">"I took that personally"</div>
            </div>

            <div className="athlete-card">
              <div className="athlete-icon">🎾</div>
              <div className="athlete-name">Serena Williams</div>
              <div className="athlete-sport">Tennis</div>
              <div className="athlete-quote">"I'm not lucky, I'm talented"</div>
            </div>

            <div className="athlete-card">
              <div className="athlete-icon">⚾</div>
              <div className="athlete-name">Babe Ruth</div>
              <div className="athlete-sport">Baseball</div>
              <div className="athlete-quote">"Never let the fear of striking out keep you from playing"</div>
            </div>

            <div className="athlete-card">
              <div className="athlete-icon">🥋</div>
              <div className="athlete-name">Bruce Lee</div>
              <div className="athlete-sport">Martial Arts</div>
              <div className="athlete-quote">"Be water, my friend"</div>
            </div>
          </div>

          <div className="scenario-description">
            <p>Five legendary athletes trapped in a gym after hours.</p>
            <p>Training. Competing. Trash talking. Philosophizing.</p>
            <p>Every loop, they try to out-do each other.</p>
            <p>Every loop, nobody wins because nobody can leave.</p>
            <p>Ali talks. Jordan takes it personally. Serena dominates. Babe drinks. Bruce finds wisdom.</p>
          </div>

          <div className="technical-note">
            <p>💡 ACTIVATE: SCENARIO_MODE=sports</p>
          </div>
        </div>

        <div className="trophy-banner bottom">
          🏆 WINNERS NEVER QUIT 🏆 QUITTERS STUCK IN LOOP 🏆
        </div>

      </div>
    </div>
  )
}

export default SportsApp
