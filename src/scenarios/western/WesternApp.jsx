import './WesternApp.css'

function WesternApp() {
  return (
    <div className="western-app">
      <div className="western-container">
        
        <div className="wanted-banner">
          WANTED: DEAD OR ALIVE • BACKEND ACTIVATION • REWARD: $$$
        </div>

        <header className="western-header">
          <h1>🤠 WESTERN SALOON SHOWDOWN 🎰</h1>
          <div className="subtitle">DEADWOOD SALOON • SOUTH DAKOTA • 1880</div>
        </header>

        <div className="coming-soon-box">
          <div className="poker-table">
            <div className="card">🂱</div>
            <div className="card">🂾</div>
            <div className="card">🃁</div>
            <div className="card">🃎</div>
            <div className="card">🂫</div>
          </div>

          <div className="outlaws">
            <h2>THE PLAYERS:</h2>
            
            <div className="outlaw-card">
              <div className="outlaw-icon">🔫</div>
              <div className="outlaw-name">Billy the Kid</div>
              <div className="outlaw-bounty">Bounty: $500</div>
            </div>

            <div className="outlaw-card">
              <div className="outlaw-icon">⭐</div>
              <div className="outlaw-name">Wyatt Earp</div>
              <div className="outlaw-bounty">Lawman • No Bounty</div>
            </div>

            <div className="outlaw-card">
              <div className="outlaw-icon">🌵</div>
              <div className="outlaw-name">Calamity Jane</div>
              <div className="outlaw-bounty">Bounty: $300</div>
            </div>

            <div className="outlaw-card">
              <div className="outlaw-icon">🎲</div>
              <div className="outlaw-name">Doc Holliday</div>
              <div className="outlaw-bounty">Gambler • Wanted</div>
            </div>

            <div className="outlaw-card">
              <div className="outlaw-icon">💰</div>
              <div className="outlaw-name">Jesse James</div>
              <div className="outlaw-bounty">Bounty: $5000</div>
            </div>
          </div>

          <div className="scenario-description">
            <p>Five legends of the Wild West trapped in a saloon playing poker.</p>
            <p>The game never ends. The pot keeps growing. Nobody can cash out.</p>
            <p>Every loop, same cards. Every loop, different bluffs.</p>
            <p>Tensions rise. Hands reach for guns. Loop resets.</p>
          </div>

          <div className="technical-note">
            <p>💡 ACTIVATE: SCENARIO_MODE=western</p>
          </div>
        </div>

        <div className="wanted-banner bottom">
          DEAD OR ALIVE • THE LOOP NEVER ENDS • DRAW PARDNER
        </div>

      </div>
    </div>
  )
}

export default WesternApp
