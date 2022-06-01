//Convert each entry from miles to KM and return an object of those results and a total distance in KM
const milesToKm = arr => {
    const converted = [...arr].map(miles => miles * 1.609344);
    return {
        convertedKM: converted,
        totalKM: converted.reduce((a, b) => a + b)
    };
};

console.log(milesToKm([10, 5]));

//Filter an array of food objects based upon a given parameter
const filterFood = (arr, type) => {
    const filtered = [...arr].filter(obj => obj.foodType === type);
    return filtered;
};

console.log(filterFood([
     { img: "🍕", name: "pizza", foodType: "junk" },
     { img: "🍔", name: "burger", foodType: "junk" },
     { img: "🍟", name: "fries", foodType: "junk" },
     { img: "🌭", name: "hot dog", foodType: "junk" },
     { img: "🥗", name: "salad", foodType: "healthy" },
     { img: "🥙", name: "pita", foodType: "healthy" },
     { img: "🥪", name: "sandwich", foodType: "healthy" },
     { img: "🌯", name: "burrito", foodType: "healthy" },
     { img: "🥣", name: "soup", foodType: "healthy" },
    ], 'healthy'));

//Add an ID, change name to hero, and add a random power level to each hero
const heroes = arr => {
    const addedInfo = [...arr].map((heroOjb, index) => {
        return {
            id: index,
            hero: heroOjb.name,
            power: Math.floor(Math.random() * 10)
        };
    });
    return addedInfo
};

console.log(heroes([
     { name: "Spider-Man" },
     { name: "Thor" },
     { name: "Black Panther" },
     { name: "Captain Marvel" },
     { name: "Silver Surfer" },
    ]));