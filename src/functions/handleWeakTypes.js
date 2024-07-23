// Water is strong against Fire
// Fire is strong against Grass
// Grass is strong against Water
// Electric is strong against Water
// Earth is strong agains Electric

// Earth is unaffected by Electric
// Water is weak against Grass

export const handleWeakTypes = (pokimoType) => {
    switch (pokimoType) {
        case 'Fire':
            return {
                strongAgainst: 'Grass',
                weakAgainst: 'Water'
            };
        case 'Water':
            return {
                strongAgainst: 'Fire',
                weakAgainst: 'Grass'
            };
        case 'Grass':
            return {
                strongAgainst: 'Water',
                weakAgainst: 'Fire'
            };
        case 'Electric':
            return {
                strongAgainst: 'Water',
                weakAgainst: 'Earth'
            };
        case 'Earth':
            return {
                strongAgainst: 'Electric',
                weakAgainst: 'Water'
            };
        default:
            return {
                strongAgainst: '',
                weakAgainst: ''
            };
    }
};
