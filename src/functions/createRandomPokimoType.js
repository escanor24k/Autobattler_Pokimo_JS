export const createRandomPokimoType = () => {
    const pokimoTypeIndex = ['Fire', 'Water', 'Grass', 'Electric', 'Earth'];
    const pokimoType = pokimoTypeIndex[Math.floor(Math.random() * pokimoTypeIndex.length)];

    // Water is strong against Fire
    // Fire is strong against Grass
    // Grass is strong against Water
    // Electric is strong against Water
    // Earth is strong agains Electric

    // Earth is unaffected by Electric

    // Water is weak against Grass



    return pokimoType;
}