import { createRandomPokimoName, createRandomPokimoType, createRandomPokimoLevel, createRandomPokimoStats } from "../imports/imports.js";

export const pokimoCreatures = (numCreatures) => {
    const pokimoCreatures = [];

    for (let i = 0; i < numCreatures; i++) {
        const pokimoName = createRandomPokimoName();
        const pokimoLevel = createRandomPokimoLevel();
        const pokimoType = createRandomPokimoType();
        const pokimoStats = createRandomPokimoStats(pokimoLevel);

        const pokimoCreature = {
            pokiName: pokimoName,
            pokiLevel: pokimoLevel,
            pokiType: pokimoType,
            pokiStats: pokimoStats
        };

        pokimoCreatures.push(pokimoCreature);
    }

    return pokimoCreatures;
}
