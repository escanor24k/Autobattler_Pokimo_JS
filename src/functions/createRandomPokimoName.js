export const createRandomPokimoName = () => {
    const vocal = 'aeiou';
    const consonant = 'bcdfghjklmnpqrstvwxyz';
    let pokiName = '';
    for (let i = 0; i < 6; i++) {
        if (i % 2 == 0) {
            pokiName += consonant[Math.floor(Math.random() * consonant.length)];
        } else {
            pokiName += vocal[Math.floor(Math.random() * vocal.length)];
        }
    }
    pokiName = pokiName.charAt(0).toUpperCase() + pokiName.slice(1);
    return pokiName;
}