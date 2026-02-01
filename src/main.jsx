import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import LegendsApp from './scenarios/legends/LegendsApp.jsx'
import WritersApp from './scenarios/writers/WritersApp.jsx'
import PhilosophersApp from './scenarios/philosophers/PhilosophersApp.jsx'
import BeatsApp from './scenarios/beats/BeatsApp.jsx'
import PunkApp from './scenarios/punk/PunkApp.jsx'
import ScientistsApp from './scenarios/scientists/ScientistsApp.jsx'
import ComediansApp from './scenarios/comedians/ComediansApp.jsx'
import SportsApp from './scenarios/sports/SportsApp.jsx'
import WesternApp from './scenarios/western/WesternApp.jsx'
import RevolutionaryApp from './scenarios/revolutionary/RevolutionaryApp.jsx'
import ArtistsApp from './scenarios/artists/ArtistsApp.jsx'
import ConspiracyApp from './scenarios/conspiracy/ConspiracyApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legends" element={<LegendsApp />} />
        <Route path="/writers" element={<WritersApp />} />
        <Route path="/philosophers" element={<PhilosophersApp />} />
        <Route path="/beats" element={<BeatsApp />} />
        <Route path="/punk" element={<PunkApp />} />
        <Route path="/scientists" element={<ScientistsApp />} />
        <Route path="/comedians" element={<ComediansApp />} />
        <Route path="/sports" element={<SportsApp />} />
        <Route path="/western" element={<WesternApp />} />
        <Route path="/revolutionary" element={<RevolutionaryApp />} />
        <Route path="/artists" element={<ArtistsApp />} />
        <Route path="/conspiracy" element={<ConspiracyApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
