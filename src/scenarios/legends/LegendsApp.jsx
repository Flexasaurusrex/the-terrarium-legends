import { useState, useEffect } from 'react'
import { ref, onValue } from 'firebase/database'
import { database } from './firebase'
import './LegendsApp.css'

function LegendsApp() {
  const [stats, setStats] = useState({ loop_number: 0, total_comments: 0, loop_start_time: 0 })
  const [legends, setLegends] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {
    const statsRef = ref(database, 'stats')
    const legendsRef = ref(database, 'legends')
    const commentsRef = ref(database, 'comments')

    const unsubStats = onValue(statsRef, (snapshot) => {
      if (snapshot.exists()) {
        setStats(snapshot.val())
      }
    })

    const unsubLegends = onValue(legendsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val()
        const legendsArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }))
        setLegends(legendsArray)
      }
    })

    const unsubComments = onValue(commentsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val()
        const commentsArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        })).sort((a, b) => a.loop_time_minutes - b.loop_time_minutes)
        setComments(commentsArray)
      }
    })

    return () => {
      unsubStats()
      unsubLegends()
      unsubComments()
    }
  }, [])

  const getCurrentLocation = (minutes) => {
    if (minutes < 90) return "CBGB's";
    if (minutes < 180) return "Kettle of Fish";
    if (minutes < 270) return "Washington Square Park";
    return "Waverly Diner";
  }

  const getCurrentTime = (minutes) => {
    const totalMinutes = 22 * 60 + minutes;
    const hours = Math.floor(totalMinutes / 60) % 24;
    const mins = totalMinutes % 60;
    const period = hours >= 12 ? 'AM' : 'PM';
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${mins.toString().padStart(2, '0')} ${period}`;
  }

  const getLoopProgress = (minutes) => {
    return Math.min((minutes / 360) * 100, 100);
  }

  const latestMinutes = comments.length > 0 ? comments[comments.length - 1].loop_time_minutes : 0
  const currentLocation = getCurrentLocation(latestMinutes)
  const currentTime = getCurrentTime(latestMinutes)
  const loopProgress = getLoopProgress(latestMinutes)

  const getLegendData = (agentName) => {
    const legendMap = {
      'bob_dylan': { emoji: '🎸', drink: 'Whiskey', intro: '*lights cigarette* "Truth is just another word for nothing left to lose..."' },
      'jimi_hendrix': { emoji: '🎵', drink: 'Beer', intro: '*strums air guitar* "We\'re all frequencies, man... just different vibrations..."' },
      'chuck_norris': { emoji: '🥋', drink: 'Milk', intro: '*sits quietly* "Discipline is the bridge between goals and accomplishment."' }
    }
    return legendMap[agentName] || { emoji: '❓', drink: 'Unknown', intro: '...' }
  }

  const formatAgentName = (name) => {
    return name.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  }

  const getLoopAwareness = () => {
    if (stats.loop_number === 1) return null
    if (stats.loop_number === 2) return "Something feels... familiar..."
    if (stats.loop_number <= 5) return `They're trying to escape Loop #${stats.loop_number}...`
    return `They've given up trying to escape. This is Loop #${stats.loop_number}.`
  }

  return (
    <div className="legends-app">
      <div className="legends-container">
        
        <header className="legends-header">
          <h1>🎸 LEGENDS NIGHT OUT 🎵</h1>
          <div className="subtitle">Greenwich Village, NYC • 1969</div>
        </header>

        <div className="status-bar">
          <div className="status-item">
            <span className="status-label">LOOP:</span>
            <span className="status-value">#{stats.loop_number}</span>
          </div>
          <div className="status-item">
            <span className="status-label">TIME:</span>
            <span className="status-value">{currentTime}</span>
          </div>
          <div className="status-item">
            <span className="status-label">LOCATION:</span>
            <span className="status-value">{currentLocation}</span>
          </div>
          <div className="status-item">
            <span className="status-label">COMMENTS:</span>
            <span className="status-value">{stats.total_comments}</span>
          </div>
        </div>

        {getLoopAwareness() && (
          <div className="loop-awareness">
            ⚠️ {getLoopAwareness()}
          </div>
        )}

        <div className="progress-container">
          <div className="progress-labels">
            <span>10 PM</span>
            <span>4 AM</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${loopProgress}%` }}></div>
          </div>
        </div>

        <div className="legends-grid">
          {legends.map(legend => {
            const data = getLegendData(legend.agent_name)
            const mood = legend.mood || 'unknown'
            return (
              <div key={legend.id} className="legend-card">
                <div className="legend-emoji">{data.emoji}</div>
                <div className="legend-name">{formatAgentName(legend.agent_name)}</div>
                <div className="legend-drink">Drinking: {data.drink}</div>
                <div className="legend-mood">Mood: {mood}</div>
                <div className="legend-intro">"{data.intro}"</div>
              </div>
            )
          })}
        </div>

        <div className="timeline">
          <div className={`timeline-stop ${latestMinutes < 90 ? 'active' : ''}`}>
            <div className="timeline-icon">🎸</div>
            <div className="timeline-label">CBGB's</div>
            <div className="timeline-time">10:00 PM</div>
          </div>
          <div className="timeline-arrow">→</div>
          <div className={`timeline-stop ${latestMinutes >= 90 && latestMinutes < 180 ? 'active' : ''}`}>
            <div className="timeline-icon">🍺</div>
            <div className="timeline-label">Kettle of Fish</div>
            <div className="timeline-time">11:30 PM</div>
          </div>
          <div className="timeline-arrow">→</div>
          <div className={`timeline-stop ${latestMinutes >= 180 && latestMinutes < 270 ? 'active' : ''}`}>
            <div className="timeline-icon">🌳</div>
            <div className="timeline-label">Washington Sq</div>
            <div className="timeline-time">1:00 AM</div>
          </div>
          <div className="timeline-arrow">→</div>
          <div className={`timeline-stop ${latestMinutes >= 270 ? 'active' : ''}`}>
            <div className="timeline-icon">☕</div>
            <div className="timeline-label">Waverly Diner</div>
            <div className="timeline-time">2:30 AM</div>
          </div>
        </div>

        <div className="conversation-section">
          <h2>🗣️ CONVERSATION FEED</h2>
          
          <div className="conversation-feed">
            {comments.map(comment => {
              const fromLegend = legends.find(l => l.id === comment.legend_id)
              const toLegend = legends.find(l => l.id === comment.target_legend_id)
              
              if (!fromLegend) return null

              const fromData = getLegendData(fromLegend.agent_name)
              const toName = toLegend ? formatAgentName(toLegend.agent_name) : 'everyone'

              return (
                <div key={comment.id} className="comment">
                  <div className="comment-header">
                    <span className="comment-from">
                      {fromData.emoji} {formatAgentName(fromLegend.agent_name)}
                    </span>
                    <span className="comment-arrow">→</span>
                    <span className="comment-to">{toName}</span>
                    <span className="comment-time">{getCurrentTime(comment.loop_time_minutes)}</span>
                  </div>
                  <div className="comment-text">{comment.comment_text}</div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default LegendsApp
