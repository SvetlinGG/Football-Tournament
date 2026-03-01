
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Team from './pages/Team';
import Match from './pages/Match';
import { loadData } from './utils/dataLoader'


export const  DataContext = createContext();




function App() {
  const [data, setData] = useState({ teams: [], players: [], matches: [], records: [] });

  useEffect(() => {
    const fetchData = async () => {
      const loadedData = await loadData();
      setData(loadedData);
  };
  fetchData();
}, []);

  return (
    <DataContext.Provider value={data}>
      <Router>
        <div className="App">
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/match/:id" element={<Match />} />
            <Route path="/team/:id" element={<Team />} />
          </Routes>
          {/* <Footer />*/}
        </div>
      </Router>
    </DataContext.Provider>
  );
}

export default App
