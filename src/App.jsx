import { useEffect, useState } from 'react'
import { database } from './firebase'
import { ref, onValue } from 'firebase/database'
import './App.css'

const LEGENDS = {
  'bob_dylan': { emoji: '🎸', name: 'Bob Dylan', drink: '🥃 Whiskey' },
  'jimi_hendrix': { emoji: '🎵', name: 'Jimi Hendrix', drink: '🍺 Beer' },
  'chuck_norris': { emoji: '🥋', name: 'Chuck Norris', drink: '🥛 Milk' }
}

const LOCATIONS = [
  { name: "CBGB's", time: '10:00 PM', minutes: 0 },
  { name: 'Kettle of Fish', time: '12:30 AM', minutes: 150 },
  { name: 'Washington Square Park', time: '2:15 AM', minutes: 255 },
  { name: 'Waverly Diner', time: '3:30 AM', minutes: 330 }
]

function App() {
  const [stats, setStats] = useState({ loop_number: 1, total_comments: 0 })
  const [legends, setLegends] = useState([])
  const [comments, setComments] = useState([])
  const [loopTime, setLoopTime] = useState(0)

  useEffect(() => {
    // Listen to stats
    const statsRef = ref(database, 'stats')
    onValue(statsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) setStats(data)
    })

    // Listen to legends
    const legendsRef = ref(database, 'legends')
    onValue(legendsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const legendsList = Object.values(data)
        setLegends(legendsList)
      }
    })

    // Listen to comments
    const commentsRef = ref(database, 'comments')
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const commentsList = Object.values(data).sort((a, b) => 
          new Date(a.created_at) - new Date(b.created_at)
        )
        setComments(commentsList)
      }
    })
  }, [])

  // Calculate loop time and current location
  useEffect(() => {
    const interval = setInterval(() => {
      if (stats.loop_start_time) {
        const elapsed = (Date.now() - new Date(stats.loop_start_time).getTime()) / 1000 / 60
        setLoopTime(Math.floor(elapsed % 360))
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [stats.loop_start_time])

  const getCurrentLocation = () => {
    for (let i = LOCATIONS.length - 1; i >= 0; i--) {
      if (loopTime >= LOCATIONS[i].minutes) return LOCATIONS[i]
    }
    return LOCATIONS[0]
  }

  const formatLoopTime = () => {
    const hour = 22 + Math.floor(loopTime / 60)
    const minute = loopTime % 60
    const displayHour = hour >= 24 ? hour - 24 : hour
    const ampm = displayHour < 12 ? 'AM' : 'PM'
    const display12Hour = displayHour > 12 ? displayHour - 12 : displayHour === 0 ? 12 : displayHour
    return `${display12Hour}:${minute.toString().padStart(2, '0')} ${ampm}`
  }

  const currentLocation = getCurrentLocation()

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>🎸 LEGENDS NIGHT OUT</h1>
        <p className="subtitle">Greenwich Village, NYC • 1969</p>
      </header>

      {/* Status Bar */}
      <div className="status-bar">
        <div className="stat">
          <span className="label">LOOP</span>
          <span className="value">#{stats.loop_number}</span>
        </div>
        <div className="stat">
          <span className="label">TIME</span>
          <span className="value">{formatLoopTime()}</span>
        </div>
        <div className="stat">
          <span className="label">LOCATION</span>
          <span className="value">{currentLocation.name}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(loopTime / 360) * 100}%` }}
          />
        </div>
        <div className="progress-labels">
          <span>10 PM</span>
          <span>12 AM</span>
          <span>2 AM</span>
          <span>4 AM</span>
        </div>
      </div>

      {/* Legends Cards */}
      <div className="legends-grid">
        {Object.entries(LEGENDS).map(([id, legend]) => {
          const legendData = legends.find(l => l.legend_id === id)
          return (
            <div key={id} className="legend-card">
              <div className="legend-emoji">{legend.emoji}</div>
              <div className="legend-name">{legend.name}</div>
              <div className="legend-drink">{legend.drink}</div>
              {legendData && (
                <div className="legend-intro">{legendData.first_post}</div>
              )}
            </div>
          )
        })}
      </div>

      {/* Timeline */}
      <div className="timeline">
        {LOCATIONS.map((loc, idx) => (
          <div 
            key={idx} 
            className={`timeline-stop ${loopTime >= loc.minutes ? 'active' : ''}`}
          >
            <div className="timeline-dot" />
            <div className="timeline-label">
              <div>{loc.name}</div>
              <div className="timeline-time">{loc.time}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Conversation Feed */}
      <div className="conversation-feed">
        <h2>The Night Unfolds...</h2>
        {comments.map((comment, idx) => {
          const legend = LEGENDS[comment.legend_id]
          return (
            <div key={idx} className="comment">
              <div className="comment-header">
                <span className="comment-emoji">{legend?.emoji}</span>
                <span className="comment-name">{legend?.name}</span>
                <span className="comment-time">
                  {new Date(comment.created_at).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                  })}
                </span>
              </div>
              <div className="comment-text">{comment.comment_text}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
