import { useContext } from "react";
import { TournamentContext } from "../context/TournamentContext";
import MatchCard from '../components/MatchCard/MatchCard';
import './Home.module.css';


export default function Home(){

    const {matches, loading, error} = useContext(TournamentContext);

    if ( loading) {
        return <div className="loading" >Loading matches...</div>;
    }

    if ( error) {
        return <div className="error" >Error...</div>;
    }

    const sortedMatches = [...matches].sort((a, b) => {
        return new Date(a.Date) - new Date(b.Date);
    });

    return (
        <div className="home-page" >
            <h1>European Football Championship 2024</h1>
            <h2>All matches</h2>

            {sortedMatches.length === 0 ? (
                <p>No matches loaded.</p>
            ) : (
                <div className="matches-list" >
                    {sortedMatches.map(match => {
                        <MatchCard key={match.ID} match={match} />
                    })}
                </div>
            )}
        </div>
    );
}