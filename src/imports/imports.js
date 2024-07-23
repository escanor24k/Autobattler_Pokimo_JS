import { createRandomPokimoName } from "../functions/createRandomPokimoName.js";
import { createRandomPokimoType } from "../functions/createRandomPokimoType.js";
import { createRandomPokimoLevel } from "../functions/createRandomPokimoLevel.js";
import { createRandomPokimoStats } from "../functions/createRandomPokimoStats.js";
import { handleWeakTypes } from "../functions/handleWeakTypes.js";
import { handleDamageCalculator } from "../functions/handleDamageCalculator.js";
import { handlePlayerVsPlayer } from "../functions/handlePlayerVsPlayer.js";
import { pokimoCreatures } from "../data/pokimoCreatures.js";
import { writeLogs } from "../data/writeLogs.js";

export {
    createRandomPokimoName,
    createRandomPokimoType,
    createRandomPokimoLevel,
    createRandomPokimoStats,
    pokimoCreatures,
    handleWeakTypes,
    handleDamageCalculator,
    handlePlayerVsPlayer,
    writeLogs
}
