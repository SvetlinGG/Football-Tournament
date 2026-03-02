import matchesRaw from '../data/matches.csv?raw';
import teamsRaw from '../data/teams.csv?raw';
import playersRaw from '../data/players.csv?raw';
import recordsRaw from '../data/records.csv?raw';


function parseCSV(text){
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());

    return lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim());
        const obj = {};
        headers.forEach((header, i) => {
            let val = values[i];
            if (val === 'NULL' || val === '') val = null;
            obj[header] = val;
        });
        return obj;
    });
}

export async function loadAllData() {
    
    const teams = parseCSV(teamsRaw);
    const players = parseCSV(playersRaw);
    const matches = parseCSV(matchesRaw).map(m => ({
        ...m,
        Date: m.Date ? new Date(m.Date) : null,
    }));
    const records = parseCSV(recordsRaw).map(r => ({
        ...r,
        fromMinutes: r.fromMinutes ? Number(r.fromMinutes) : 0,
        toMinutes: r.toMinutes !== null ? Number(r.toMinutes) : 90,
    }));

    return {
        teams,
        matches,
        players,
        records,
    };
    
}
