// src/App.jsx
import { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { loadAllData } from './utils/dataLoader';

import Header from './components/common/Header';
import Home from './pages/Home';
import MatchPage from './pages/MatchPage';
import TeamPage from './pages/TeamPage';

import './App.css';

export const TournamentContext = createContext({
  teams: [],
  matches: [],
  players: [],
  records: [],
  loading: true,
  error: null,
});

function App() {
  const [data, setData] = useState({
    teams: [],
    matches: [],
    players: [],
    records: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const loaded = await loadAllData();
        setData({
          ...loaded,
          loading: false,
          error: null,
        });
      } catch (err) {
        setData(prev => ({
          ...prev,
          loading: false,
          error: err.message || 'Failed to load data.',
        }));
      }
    }
    fetchData();
  }, []);

  return (
    <TournamentContext.Provider value={data}>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <main className="main-content">
            {data.loading ? (
              <div className="loading">Loading Euro 2024 data...</div>
            ) : data.error ? (
              <div className="error">Error: {data.error}</div>
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/match/:matchId" element={<MatchPage />} />
                <Route path="/team/:teamId" element={<TeamPage />} />
              </Routes>
            )}
          </main>
        </div>
      </BrowserRouter>
    </TournamentContext.Provider>
  );
}

export default App;