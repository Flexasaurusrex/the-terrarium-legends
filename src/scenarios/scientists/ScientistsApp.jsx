import './ScientistsApp.css'

function ScientistsApp() {
  return (
    <div className="scientists-app">
      <div className="scientists-container">
        
        <div className="voltage-warning">
          ⚡ HIGH VOLTAGE ⚡ CAUTION ⚡ GENIUS AT WORK ⚡
        </div>

        <header className="scientists-header">
          <h1>🔬 MAD SCIENTISTS CONVENTION ⚡</h1>
          <div className="subtitle">UNDERGROUND LABORATORY • LOCATION CLASSIFIED • TIME IRRELEVANT</div>
        </header>

        <div className="coming-soon-box">
          <div className="terminal-output">
            <p>&gt; INITIALIZING EXPERIMENT...</p>
            <p>&gt; LOADING GENIUS PROTOCOLS...</p>
            <p>&gt; ERROR: BACKEND NOT FOUND</p>
            <p>&gt; RETRY? [Y/N]_</p>
          </div>

          <div className="scientists-grid">
            <h2>THE MINDS:</h2>
            
            <div className="scientist-card">
              <div className="scientist-icon">🧠</div>
              <div className="scientist-name">Albert Einstein</div>
              <div className="scientist-field">Theoretical Physics</div>
              <div className="scientist-quote">"Imagination is more important than knowledge"</div>
            </div>

            <div className="scientist-card">
              <div className="scientist-icon">⚡</div>
              <div className="scientist-name">Nikola Tesla</div>
              <div className="scientist-field">Electrical Engineering</div>
              <div className="scientist-quote">"The present is theirs; the future is mine"</div>
            </div>

            <div className="scientist-card">
              <div className="scientist-icon">☢️</div>
              <div className="scientist-name">Marie Curie</div>
              <div className="scientist-field">Radioactivity</div>
              <div className="scientist-quote">"Nothing in life is to be feared, only understood"</div>
            </div>

            <div className="scientist-card">
              <div className="scientist-icon">💣</div>
              <div className="scientist-name">J. Robert Oppenheimer</div>
              <div className="scientist-field">Theoretical Physics</div>
              <div className="scientist-quote">"Now I am become Death, destroyer of worlds"</div>
            </div>

            <div className="scientist-card">
              <div className="scientist-icon">💻</div>
              <div className="scientist-name">Ada Lovelace</div>
              <div className="scientist-field">Computer Science</div>
              <div className="scientist-quote">"The Analytical Engine weaves algebraic patterns"</div>
            </div>
          </div>

          <div className="scenario-description">
            <p>Five brilliant minds trapped in an underground laboratory.</p>
            <p>Debating theories. Testing hypotheses. Arguing over equations.</p>
            <p>Every loop, they try to science their way out.</p>
            <p>Every loop, the laws of physics refuse to cooperate.</p>
            <p>Einstein suggests time dilation. Tesla builds a machine. Nothing works.</p>
          </div>

          <div className="experiment-log">
            <h3>EXPERIMENT LOG:</h3>
            <div className="log-entry">Loop #1: Attempted time reversal - FAILED</div>
            <div className="log-entry">Loop #2: Electromagnetic escape - FAILED</div>
            <div className="log-entry">Loop #3: Quantum tunneling - FAILED</div>
            <div className="log-entry">Loop #4-∞: Variables exhausted. Recursion detected.</div>
          </div>

          <div className="technical-note">
            <p>💡 ACTIVATE: SCENARIO_MODE=scientists</p>
          </div>
        </div>

        <div className="voltage-warning bottom">
          ⚡ EXPERIMENT IN PROGRESS ⚡ DO NOT DISTURB ⚡
        </div>

      </div>
    </div>
  )
}

export default ScientistsApp
