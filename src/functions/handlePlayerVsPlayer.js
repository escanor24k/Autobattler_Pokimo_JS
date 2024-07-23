import { handleDamageCalculator } from './handleDamageCalculator.js';

export const handlePlayerVsPlayer = (player1, player2) => {
    const player1Pokemons = player1.pokemons;
    const player2Pokemons = player2.pokemons;

    let p1Index = 0;
    let p2Index = 0;

    while (p1Index < player1Pokemons.length && p2Index < player2Pokemons.length) {
        let p1Pokemon = player1Pokemons[p1Index];
        let p2Pokemon = player2Pokemons[p2Index];

        let p1HP = p1Pokemon.pokiStats.pokiHP;
        let p2HP = p2Pokemon.pokiStats.pokiHP;

        while (p1HP > 0 && p2HP > 0) {

            const player1Attack = handleDamageCalculator(p1Pokemon.pokiStats, p1Pokemon.pokiType, p2Pokemon.pokiType);
            p2HP -= player1Attack.totalDamage;
            console.log(`Player 1's ${p1Pokemon.pokiName} attacks Player 2's ${p2Pokemon.pokiName} for ${player1Attack.totalDamage.toFixed(2)} damage. ${p2Pokemon.pokiName}'s HP is now ${p2HP.toFixed(2)}.`);

            if (p2HP <= 0) {
                console.log(`${p2Pokemon.pokiName} is knocked out!`);
                p2Index++;
                if (p2Index >= player2Pokemons.length) {
                    return { winner: player1, winningPokemon: p1Pokemon };
                }
                p2Pokemon = player2Pokemons[p2Index];
                p2HP = p2Pokemon.pokiStats.pokiHP;
                continue;
            }

            const player2Attack = handleDamageCalculator(p2Pokemon.pokiStats, p2Pokemon.pokiType, p1Pokemon.pokiType);
            p1HP -= player2Attack.totalDamage;
            console.log(`Player 2's ${p2Pokemon.pokiName} attacks Player 1's ${p1Pokemon.pokiName} for ${player2Attack.totalDamage.toFixed(2)} damage. ${p1Pokemon.pokiName}'s HP is now ${p1HP.toFixed(2)}.`);

            if (p1HP <= 0) {
                console.log(`${p1Pokemon.pokiName} is knocked out!`);
                p1Index++;
                if (p1Index >= player1Pokemons.length) {
                    return { winner: player2, winningPokemon: p2Pokemon };
                }
                p1Pokemon = player1Pokemons[p1Index];
                p1HP = p1Pokemon.pokiStats.pokiHP;
                continue;
            }
        }
    }

    return "It's a tie!";
};
