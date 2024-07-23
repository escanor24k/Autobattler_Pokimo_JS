import { handleWeakTypes } from '../imports/imports.js';

export const handleDamageCalculator = (attackerStats, attackerType, defenderType) => {
    const weakMultiplier = 0.5;
    const strongMultiplier = 2;

    const { strongAgainst, weakAgainst } = handleWeakTypes(attackerType);

    let damageMultiplier = 1;
    if (defenderType === strongAgainst) {
        damageMultiplier = strongMultiplier;
    } else if (defenderType === weakAgainst) {
        damageMultiplier = weakMultiplier;
    }

    const baseDamage = attackerStats.pokiATK;

    const damage = baseDamage * damageMultiplier;

    const defense = attackerStats.pokiDEF;
    const damageReduction = defense / (defense + 50); // Modified to be more realistic
    const totalDamage = Math.max(damage * (1 - damageReduction), 0);

    return {
        baseDamage,
        damage,
        totalDamage
    };
}
