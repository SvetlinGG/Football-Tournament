
import { useTournamentContext } from '../../context/TournamentContext';
import { Link } from "react-router-dom";
import styles from './MatchCard.module.css';

export default function MatchCard({match}){

    const {teams} = useTournamentContext();

    if (!match) return null;

    const teamA = teams.find(t => t.ID === match.ATeamID);
    const teamB = teams.find(t => t.ID === match.BTeamID);

    const getTeamName = (team) => team ? team.Name : '???';
    const score = match.Score || '- : -';

    return (
        <Link to={`/match/${match.ID}`} className={styles['match-card']} >
            <div className={styles['match-date']} >{formatDate(match.Date)}</div>

            <div className={styles['match-teams']} >
                <div className={styles.team} >
                    <span className={styles['team-name']} >{getTeamName(teamA)}</span>
                </div>

                <div className={styles.score} >
                    {score}
                </div>

                <div className={styles.team} >
                    <span className={styles['team-name']} >{getTeamName(teamB)}</span>
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