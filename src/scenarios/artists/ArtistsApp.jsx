import './ArtistsApp.css'

function ArtistsApp() {
  return (
    <div className="artists-app">
      <div className="artists-container">
        
        <div className="paint-splatter">
          🎨 ART IS A LIE THAT MAKES US REALIZE TRUTH 🎨
        </div>

        <header className="artists-header">
          <h1>🎨 ARTIST STUDIO CHAOS 🖼️</h1>
          <div className="subtitle">BROOKLYN LOFT • 24 HOURS • CREATIVE MAYHEM</div>
        </header>

        <div className="coming-soon-box">
          <div className="canvas-preview">
            <div className="color-block" style={{background: '#ff0000'}}></div>
            <div className="color-block" style={{background: '#00ff00'}}></div>
            <div className="color-block" style={{background: '#0000ff'}}></div>
            <div className="color-block" style={{background: '#ffff00'}}></div>
            <div className="color-block" style={{background: '#ff00ff'}}></div>
          </div>

          <div className="artists-grid">
            <h2>THE STUDIO:</h2>
            
            <div className="artist-card">
              <div className="artist-icon">🎭</div>
              <div className="artist-name">Pablo Picasso</div>
              <div className="artist-medium">Cubism • Painting</div>
              <div className="artist-quote">"I am always doing that which I cannot do"</div>
            </div>

            <div className="artist-card">
              <div className="artist-icon">🌺</div>
              <div className="artist-name">Frida Kahlo</div>
              <div className="artist-medium">Surrealism • Painting</div>
              <div className="artist-quote">"I paint myself because I am so often alone"</div>
            </div>

            <div className="artist-card">
              <div className="artist-icon">👑</div>
              <div className="artist-name">Jean-Michel Basquiat</div>
              <div className="artist-medium">Neo-Expressionism • Street Art</div>
              <div className="artist-quote">"I don't think about art when I'm working"</div>
            </div>

            <div className="artist-card">
              <div className="artist-icon">🥫</div>
              <div className="artist-name">Andy Warhol</div>
              <div className="artist-medium">Pop Art • Silkscreen</div>
              <div className="artist-quote">"In the future, everyone will be famous for 15 minutes"</div>
            </div>

            <div className="artist-card">
              <div className="artist-icon">🎭</div>
              <div className="artist-name">Banksy</div>
              <div className="artist-medium">Street Art • Stencil</div>
              <div className="artist-quote">"Art should comfort the disturbed and disturb the comfortable"</div>
            </div>
          </div>

          <div className="scenario-description">
            <p>Five visionary artists trapped in a Brooklyn loft studio.</p>
            <p>Creating. Competing. Critiquing each other's work.</p>
            <p>Every loop, they create new art. Every loop, it disappears.</p>
            <p>Picasso argues with Basquiat. Warhol documents everything. Banksy stays anonymous.</p>
            <p>The masterpiece that escapes the loop is never finished.</p>
          </div>

          <div className="technical-note">
            <p>💡 ACTIVATE: SCENARIO_MODE=artists</p>
          </div>
        </div>

        <div className="paint-splatter bottom">
          🎨 EVERY CHILD IS AN ARTIST • STUCK IN A LOOP 🎨
        </div>

      </div>
    </div>
  )
}

export default ArtistsApp
