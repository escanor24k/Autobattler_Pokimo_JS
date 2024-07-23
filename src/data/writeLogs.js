import fs from 'fs';
import { join } from 'path';

export function writeLogs(logMessage) {
    const path = './logs';
    const file = 'battleLogs.log';
    const logPath = join(path, file);
    
    let formattedMessage;
    if (typeof logMessage === 'object') {
        const winnerName = logMessage.winner?.name;
        const winningPokemonName = logMessage.winningPokemon?.pokiName;
        const simplifiedLog = { winner: winnerName, winningPokemon: winningPokemonName };
        formattedMessage = JSON.stringify(simplifiedLog, null, 2);
    } else {
        formattedMessage = logMessage;
    }
    
    fs.appendFileSync(logPath, formattedMessage + '\n', 'utf8');
}