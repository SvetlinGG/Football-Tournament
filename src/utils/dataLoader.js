
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

