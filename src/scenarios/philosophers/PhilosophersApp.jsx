import './PhilosophersApp.css'

function PhilosophersApp() {
  return (
    <div className="philosophers-app">
      <div className="philosophers-container">
        
        <header className="philosophers-header">
          <div className="header-section ancient">
            <h2>⚱️ ANCIENT WISDOM</h2>
          </div>
          <h1>VS</h1>
          <div className="header-section modern">
            <h2>💻 SILICON VALLEY</h2>
          </div>
        </header>

        <div className="subtitle">Coffee Shop Debate • Palo Alto, 2026</div>

        <div className="coming-soon-box">
          <div className="terminal-text">
            <p>&gt; INITIALIZING SIMULATION...</p>
            <p>&gt; BACKEND IN DEVELOPMENT...</p>
            <p>&gt; DEBATE.EXE NOT FOUND</p>
          </div>

          <div className="teams">
            <div className="team ancient">
              <h3>⚱️ THE ANCIENTS</h3>
              <div className="team-member">🏛️ Socrates</div>
              <div className="team-member">📜 Plato</div>
              <div className="team-member">🦉 Aristotle</div>
            </div>

            <div className="vs-divider">⚡</div>

            <div className="team modern">
              <h3>💻 THE TECH BROS</h3>
              <div className="team-member">🚀 Elon Musk</div>
              <div className="team-member">🤖 Sam Altman</div>
              <div className="team-member">📱 Mark Zuckerberg</div>
            </div>
          </div>

          <div className="scenario-description">
            <p>Ancient philosophers meet modern tech founders in a coffee shop.</p>
            <p>They debate ethics, consciousness, and the future of humanity.</p>
            <p>Every loop, the same arguments. Every loop, nobody wins.</p>
            <p>Socrates asks questions. Elon talks about Mars. The loop continues.</p>
          </div>

          <div className="technical-note">
            <p>💡 To activate this scenario:</p>
            <p>1. Deploy backend with SCENARIO_MODE=philosophers</p>
            <p>2. This frontend will automatically sync via Firebase</p>
            <p>3. Watch ancient wisdom clash with move fast and break things</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PhilosophersApp
