import { createRandomPokimoLevel } from "./createRandomPokimoLevel.js";

export const createRandomPokimoStats = (level) => {
    const pokimoStats = {
        pokiHP: 0,
        pokiDEF: 0,
        pokiATK: 0
    };

    const basePoints = Math.floor(level / 3);

    pokimoStats.pokiHP = basePoints * 2;
    pokimoStats.pokiDEF = basePoints;
    pokimoStats.pokiATK = basePoints;

    const remainingPoints = level - (pokimoStats.pokiHP + pokimoStats.pokiDEF + pokimoStats.pokiATK);
    
    const extraHP = Math.ceil(remainingPoints / 2);
    const extraDEF = Math.floor(remainingPoints / 4);
    const extraATK = Math.floor(remainingPoints / 4);

    pokimoStats.pokiHP += extraHP;
    pokimoStats.pokiDEF += extraDEF;
    pokimoStats.pokiATK += extraATK;

    const totalStats = pokimoStats.pokiHP + pokimoStats.pokiDEF + pokimoStats.pokiATK;
    if (totalStats > level) {
        const excessPoints = totalStats - level;
        
        pokimoStats.pokiHP = Math.max(pokimoStats.pokiHP - excessPoints, 0);
        const newTotalStats = pokimoStats.pokiHP + pokimoStats.pokiDEF + pokimoStats.pokiATK;
        
        if (newTotalStats > level) {
            const excessAfterHP = newTotalStats - level;
            pokimoStats.pokiDEF = Math.max(pokimoStats.pokiDEF - excessAfterHP, 0);
        }
    }

    return pokimoStats;
}
