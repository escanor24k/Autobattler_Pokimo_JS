import fs from 'fs';
import chalk from 'chalk';
import readline from 'readline-sync';
import { pokimoCreatures, handlePlayerVsPlayer, writeLogs } from './imports/imports.js';

console.clear();

const path = './logs';
const file = 'battleLogs.log';

if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
   
}
if (!fs.existsSync(path + '/' + file)){
    fs.writeFileSync(path + '/' + file, '');
}

function start() {
    console.log(chalk.bold('Welcome to Pokimo Battle!'));

    const player1Name = readline.question(chalk.green('Enter Player 1 name: '));
    const player2Name = readline.question(chalk.blue('Enter Player 2 name: '));

    if (!player1Name || !player2Name) {
        console.log('Player names cannot be empty.');
        return start();
    }

    console.log(chalk.yellow(`Welcome, ${player1Name} and ${player2Name}! Let's get started!`));

    startGame(player1Name, player2Name);
}

function startGame(player1Name, player2Name) {
    const numCreatures = 5;
    const creatures = pokimoCreatures(numCreatures * 2);

    if (creatures.length < numCreatures * 2) {
        console.log('Not enough creatures to start a battle.');
        return;
    }

    const player1Creatures = creatures.slice(0, numCreatures);
    const player2Creatures = creatures.slice(numCreatures, numCreatures * 2);

    const player1 = { name: player1Name, pokemons: player1Creatures };
    const player2 = { name: player2Name, pokemons: player2Creatures };

    console.log(chalk.green(`Player 1's Pokémon:`));
    player1Creatures.forEach(pokemon => {
        console.log(`- ${pokemon.pokiName} (${pokemon.pokiType})`);
    });

    console.log(chalk.blue(`Player 2's Pokémon:`));
    player2Creatures.forEach(pokemon => {
        console.log(`- ${pokemon.pokiName} (${pokemon.pokiType})`);
    });

    const result = handlePlayerVsPlayer(player1, player2);

    if (result === "It's a tie!") {
        console.log(chalk.yellow(result));
        writeLogs(result);
    } else if (result.winner) {
        console.log(chalk.blue(`${result.winner.name} wins the battle with ${result.winningPokemon.pokiName}!`));
        writeLogs(result);
    } else {
        console.log(chalk.yellow(result));
        writeLogs(result);
    }
    
}

start();
