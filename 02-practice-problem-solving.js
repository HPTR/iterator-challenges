const spotTheDifference = arr => {
    const filteredWords = [...arr].filter(word => word.length > 6);
    return filteredWords;
};

console.log(spotTheDifference(["spray", "limit", "disco", "exuberant", "destruction", "present"]));

const discoShoes = arr => {
    const camelCased = [...arr].map(entry => {
        const splitEntry = entry.split(' ');
        splitEntry[1] = splitEntry[1].charAt(0).toUpperCase() + splitEntry[1].slice(1);
        return splitEntry.join('');
    });
    return camelCased;
}

console.log(discoShoes(["please camel", "join casing", "these disco", "with shoes"]));

const scrabble = arr => {
    const values = [...arr].map(object => object.value);
    const score = values.reduce((a, b) => a + b);
    return score;
};

console.log(scrabble([{ letter: "a", value: 1}, { letter: "k", value: 5}, { letter: "c", value: 3}]));