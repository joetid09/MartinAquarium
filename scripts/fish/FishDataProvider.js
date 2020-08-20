const fishCollection = [
    {
        image: "jelly.jpg",
        name: "chatreuse",
        species: "Blue Yellow Tang",
        Length: "3 in",
        diet: "Shrimp",
        location: 'the Ocean',
                
    },
    {
        image: "jelly.jpg",
        name: "jethro",
        species: "Jelly Fish",
        length: "Microscopic to 6 ft",
        diet: "Krill",
        harvestLocation: "Gulfs",
                
    },
    {
        image: "jelly.jpg",
        name: "tilly",
        species: "Sunkissed Grapefruit",
        length: "6 inches",
        diet: "Sea Cucumber Salad",
        harvestLocation: "Reefs",
                
    },

    {
        image: "jelly.jpg",
        name: "bully",
        species: "Blue Tang",
        length: "4 in",
        diet: "shrimp",
        harvestLocation: "6th Sea",
                
    },
    {
        image: "jelly.jpg",
        name: "Gary",
        species: "Butter Fish",
        length: "6 in",
        diet: "Biscuits",
        harvestLocation: "4th Sea",
                
    },
    {
        image: "jelly.jpg",
        name: "Susan",
        species: "Orangello",
        length: "21 in",
        diet: "Sugar",
        harvestLocation: "The Sea",
                
    },
    {
        image: "jelly.jpg",
        name: "Ted",
        species: "Aussie Slippery",
        length: "13 in",
        diet: "small fish",
        harvestLocation: "3rd Sea",
                
    },
    {
        image: "jelly.jpg",
        name: "Dory",
        species: "Royal Blue Tang",
        length: "18 cm",
        diet: "crustaceans",
        harvestLocation: ""
    },
    {
        image: "jelly.jpg",
        name: "Archy",
        species: "Arc-Eye Hawkfish",
        length: "20 cm",
        diet: "shrimp and other small fishes",
        harvestLocation: "Seaward reefs in the pacific ocean"
    },
    {
        image: "jelly.jpg",
        name: "Pear",
        species: "Bartletts' Anthias",
        length: "9 cm",
        diet: "zooplankton",
        harvestLocation: "Coral reef in the western Pacific ocean"
    },
    {
        image: "jelly.jpg",
        name: "Axel Rose",
        species: "Axilspot Wrasse",
        length: "20 cm",
        diet: "mollusks",
        harvestLocation: "A clear lagoon"
    },
    {
        image: "jelly.jpg",
        name: "Angle",
        species: "Bicolor Angelfish",
        length: "15 cm",
        diet: "coral polyps",
        harvestLocation: "Coral and rubble areas"
    },
    {
        image: "jelly.jpg",
        name: "Patricia",
        species: "Bignose Unicornfish",
        length: "55 cm",
        diet: "zooplankton",
        harvestLocation: "Deep lagoon"
    },

]

export const useFish = () => {
    return fishCollection.slice()
}