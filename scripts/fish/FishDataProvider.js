const fishCollection = [
    {
        image: "jelly.jpg",
        name: "chatreuse",
        species: "Blue Yellow Tang",
        size: 3,
        diet: "Shrimp",
        location: 'the Ocean',
                
    },
    {
        image: "jelly.jpg",
        name: "jethro",
        species: "Jelly Fish",
        size: 6,
        diet: "Krill",
        harvestLocation: "Gulfs",
                
    },
    {
        image: "jelly.jpg",
        name: "tilly",
        species: "Sunkissed Grapefruit",
        size: 6,
        diet: "Sea Cucumber Salad",
        harvestLocation: "Reefs",
                
    },

    {
        image: "jelly.jpg",
        name: "bully",
        species: "Blue Tang",
        size: 4,
        diet: "shrimp",
        harvestLocation: "6th Sea",
                
    },
    {
        image: "jelly.jpg",
        name: "Gary",
        species: "Butter Fish",
        size: 6,
        diet: "Biscuits",
        harvestLocation: "4th Sea",
                
    },
    {
        image: "jelly.jpg",
        name: "Susan",
        species: "Orangello",
        size: 21,
        diet: "Sugar",
        harvestLocation: "The Sea",
                
    },
    {
        image: "jelly.jpg",
        name: "Ted",
        species: "Aussie Slippery",
        size: 13,
        diet: "small fish",
        harvestLocation: "3rd Sea",
                
    },
    {
        image: "jelly.jpg",
        name: "Dory",
        species: "Royal Blue Tang",
        size: 18,
        diet: "crustaceans",
        harvestLocation: ""
    },
    {
        image: "jelly.jpg",
        name: "Archy",
        species: "Arc-Eye Hawkfish",
        size: 20,
        diet: "shrimp and other small fishes",
        harvestLocation: "Seaward reefs in the pacific ocean"
    },
    {
        image: "jelly.jpg",
        name: "Pear",
        species: "Bartletts' Anthias",
        size: 9,
        diet: "zooplankton",
        harvestLocation: "Coral reef in the western Pacific ocean"
    },
    {
        image: "jelly.jpg",
        name: "Axel Rose",
        species: "Axilspot Wrasse",
        size: 20,
        diet: "mollusks",
        harvestLocation: "A clear lagoon"
    },
    {
        image: "jelly.jpg",
        name: "Angle",
        species: "Bicolor Angelfish",
        size: 15,
        diet: "coral polyps",
        harvestLocation: "Coral and rubble areas"
    },
    {
        image: "jelly.jpg",
        name: "Patricia",
        species: "Bignose Unicornfish",
        size: 55,
        diet: "zooplankton",
        harvestLocation: "Deep lagoon"
    },

]

export const useFish = () => {
    return fishCollection.slice()
}

export const holyFish = () => {
    let mostHolyFishArray = [];

    for (const theFish of fishCollection){
        if(theFish.size % 3 ===0 ) {
            mostHolyFishArray.push(theFish)
        }
    
    }
    return mostHolyFishArray
}

export const soldierFish = () => {
    let soldierFishArray = [];

    for (const theFish of fishCollection){
        if(theFish.size % 5 === 0) {
            soldierFishArray.push(theFish);
        }
    }
    return soldierFishArray;
}

export const nonHolyFish = () => {
    let nonHolyFishArray = [];

    for (const theFish of fishCollection){
        if(theFish.size % 5 !== 0 && theFish.size % 3 !==0 ) {
            nonHolyFishArray.push(theFish);
        }
    }
    return nonHolyFishArray;
}