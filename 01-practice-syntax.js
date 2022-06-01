const capitaliseNames = arr => {
    const capitalised = [...arr].map(name => name.charAt(0).toUpperCase() + name.slice(1));
    return capitalised;
};

console.log(capitaliseNames(['charlie', 'rob']));

const removeVowels = arr => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const noVowels = [...arr].filter(letter => !vowels.includes(letter.toLowerCase()));
    return noVowels;
};

console.log(removeVowels(['c', 'r', 'a']));

const meanCoaches = arr => {
    const sum = [...arr].reduce((a, b) => a + b);
    return sum / arr.length;
}

console.log(meanCoaches([25, 50, 175, 50]));