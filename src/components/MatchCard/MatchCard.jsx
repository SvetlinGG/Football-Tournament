import { useContext } from "react";
import { TournamentContext } from '../../context/TournamentContext';
import { Link } from "react-router-dom";
import './MatchCard.module.css';

export default function MatchCard({match}){

    const {teams} = useContext(TournamentContext);

    if (!match) return null;

    const teamA = teams.find(t => t.ID === match.ATeamID);
    const teamB = teams.find(t => t.ID === match.BTeamID);

    const getTeamName = (team) => team ? team.Name : '???';
    const score = match.Score || '- : -';

    return (
        <Link to={`/match/${match.ID}`} className="match-card" >
            <div className="match-date" >{formatDate(match.Date)}</div>

            <div className="match-teams" >
                <div className="team home" >
                    <span className="team-name" >{getTeamName(teamA)}</span>
                </div>

                <div className="score" >
                    {score}
                </div>

                <div className="team away" >
                    <span className="team-name" >{getTeamName(teamB)}</span>
                </div>
            </div>
        </Link>
    );
}

function formatDate(date) {
    if (!date || isNaN(date)) return 'Date unknown';
    return date.toLocaleDateString('en-EN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }