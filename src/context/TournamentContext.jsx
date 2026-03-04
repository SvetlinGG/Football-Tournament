

import { createContext, useContext } from 'react';


export const TournamentContext = createContext({
  teams: [],
  matches: [],
  players: [],
  records: [],
  loading: true,
  error: null,
});


export const useTournamentContext = () => {
  const context = useContext(TournamentContext);
  if (!context) {
    throw new Error('useTournamentContext must be used within a TournamentProvider');
  }
  return context;
};


export const TournamentProvider = ({ children, value }) => {
  return (
    <TournamentContext.Provider value={value}>
      {children}
    </TournamentContext.Provider>
  );
};