import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const scenarios = [
    {
      id: 'legends',
      title: 'LEGENDS NIGHT OUT',
      cast: ['Bob Dylan', 'Jimi Hendrix', 'Chuck Norris'],
      setting: 'Greenwich Village, 1969',
      status: 'LIVE',
      description: 'Three legends walk into a bar... and get stuck in a time loop.',
      color: '#daa520'
    },
    {
      id: 'writers',
      title: 'WRITERS ROOM FROM HELL',
      cast: ['Shakespeare', 'Hunter S. Thompson', 'Dorothy Parker', 'Poe', 'Angelou'],
      setting: 'Hollywood Writers Room, 2026',
      status: 'COMING SOON',
      description: 'Literary legends try to pitch a TV show. Chaos ensues. Loop forever.',
      color: '#ff4444'
    },
    {
      id: 'philosophers',
      title: 'PHILOSOPHERS vs TECH BROS',
      cast: ['Socrates', 'Plato', 'Aristotle', 'Elon', 'Sam', 'Zuck'],
      setting: 'Silicon Valley Coffee Shop, 2026',
      status: 'COMING SOON',
      description: 'Ancient wisdom meets move fast and break things. Nobody escapes.',
      color: '#00ff88'
    },
    {
      id: 'beats',
      title: 'BEAT GENERATION ROAD TRIP',
      cast: ['Kerouac', 'Ginsberg', 'Burroughs', 'Cassady'],
      setting: 'Cross-Country, 1957',
      status: 'COMING SOON',
      description: 'Four beats on endless road. Same diners. Same conversations. Different revelations.',
      color: '#ffd700'
    },
    {
      id: 'punk',
      title: 'PUNK ROCK BREAKFAST CLUB',
      cast: ['Sid Vicious', 'Joan Jett', 'Patti Smith', 'Iggy Pop', 'Debbie Harry'],
      setting: "CBGB's Green Room, 1977",
      status: 'COMING SOON',
      description: 'Five punk legends stuck before the show. Every loop, more anarchy.',
      color: '#ff00ff'
    },
    {
      id: 'scientists',
      title: 'MAD SCIENTISTS CONVENTION',
      cast: ['Einstein', 'Tesla', 'Curie', 'Oppenheimer', 'Lovelace'],
      setting: 'Underground Lab, Location Classified',
      status: 'COMING SOON',
      description: 'Five brilliant minds try to science their way out. Physics refuses to cooperate.',
      color: '#00ff00'
    },
    {
      id: 'comedians',
      title: 'COMEDIANS ROAST BATTLE',
      cast: ['Pryor', 'Carlin', 'Rivers', 'Williams', 'Chappelle'],
      setting: 'Comedy Cellar After Hours',
      status: 'COMING SOON',
      description: 'Five comedy legends roasting each other. Loop until someone gets perfect laugh.',
      color: '#ff1493'
    },
    {
      id: 'sports',
      title: 'SPORTS LEGENDS TRASH TALK',
      cast: ['Ali', 'Jordan', 'Serena', 'Babe Ruth', 'Bruce Lee'],
      setting: 'Gym After Hours',
      status: 'COMING SOON',
      description: 'Five athletes competing and philosophizing. Nobody wins because nobody can leave.',
      color: '#ffa500'
    },
    {
      id: 'western',
      title: 'WESTERN SALOON SHOWDOWN',
      cast: ['Billy the Kid', 'Wyatt Earp', 'Calamity Jane', 'Doc Holliday', 'Jesse James'],
      setting: 'Deadwood Saloon, 1880',
      status: 'COMING SOON',
      description: 'Poker game that never ends. Pot keeps growing. Nobody can cash out.',
      color: '#daa520'
    },
    {
      id: 'revolutionary',
      title: 'REVOLUTIONARY DINNER PARTY',
      cast: ['Malcolm X', 'MLK Jr.', 'Che', 'Rosa Parks', 'Gandhi'],
      setting: 'Underground Meeting',
      status: 'COMING SOON',
      description: 'Different methods, same goal. Every loop, no consensus. Revolution stuck in loop.',
      color: '#ff0000'
    },
    {
      id: 'artists',
      title: 'ARTIST STUDIO CHAOS',
      cast: ['Picasso', 'Frida', 'Basquiat', 'Warhol', 'Banksy'],
      setting: 'Brooklyn Loft, 24 Hours',
      status: 'COMING SOON',
      description: 'Creating art that disappears every loop. The masterpiece is never finished.',
      color: '#ff00ff'
    },
    {
      id: 'conspiracy',
      title: 'CONSPIRACY THEORIST CONVENTION',
      cast: ['Alex Jones', 'Fox Mulder', 'Dale Gribble', 'Ancient Aliens Guy', 'Flat Earther'],
      setting: 'Hotel Conference Room',
      status: 'COMING SOON',
      description: 'Everything connects. The loop itself becomes the conspiracy. Pure comedy gold.',
      color: '#00ff00'
    }
  ]

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-header">
          <div className="ascii-art">
            ╔══════════════════════════════════════════════════════════════╗
            ║                                                              ║
            ║   ████████╗███████╗██████╗ ██████╗  █████╗ ██████╗ ██╗██╗   ║
            ║   ╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║██║   ║
            ║      ██║   █████╗  ██████╔╝██████╔╝███████║██████╔╝██║██║   ║
            ║      ██║   ██╔══╝  ██╔══██╗██╔══██╗██╔══██║██╔══██╗██║██║   ║
            ║      ██║   ███████╗██║  ██║██║  ██║██║  ██║██║  ██║██║██║   ║
            ║      ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝   ║
            ║                                                              ║
            ║              S C E N A R I O S   /   L I V E                 ║
            ║                                                              ║
            ╚══════════════════════════════════════════════════════════════╝
          </div>
          <p className="tagline">AGENTIC SIMULATIONS • TIME LOOPS • EXISTENTIAL COMEDY</p>
        </div>

        <div className="scenarios-grid">
          {scenarios.map(scenario => (
            <div key={scenario.id} className="scenario-card" style={{ borderColor: scenario.color }}>
              <div className="scenario-header">
                <h2 style={{ color: scenario.color }}>{scenario.title}</h2>
                <span className={`status ${scenario.status === 'LIVE' ? 'live' : 'coming-soon'}`}>
                  {scenario.status === 'LIVE' && '● '}
                  {scenario.status}
                </span>
              </div>
              
              <div className="scenario-setting">{scenario.setting}</div>
              
              <div className="scenario-cast">
                <div className="cast-label">CAST:</div>
                {scenario.cast.map((member, i) => (
                  <div key={i} className="cast-member">→ {member}</div>
                ))}
              </div>
              
              <p className="scenario-description">{scenario.description}</p>
              
              <div className="scenario-footer">
                {scenario.status === 'LIVE' ? (
                  <Link to={`/${scenario.id}`} className="watch-button" style={{ 
                    background: scenario.color,
                    boxShadow: `0 0 20px ${scenario.color}40`
                  }}>
                    ► WATCH LIVE
                  </Link>
                ) : (
                  <div className="coming-soon-label">BACKEND IN DEVELOPMENT</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <footer className="home-footer">
          <p>Built by VONMESSER DESIGN • Powered by Claude Sonnet 4.5</p>
          <p className="tech-stack">React + Vite + Firebase + Railway</p>
        </footer>
      </div>
    </div>
  )
}

export default Home
