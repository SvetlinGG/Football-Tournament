import { useContext } from "react";
import { TournamentContext } from '../../context/TournamentContext';
import { Link } from "react-router-dom";

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