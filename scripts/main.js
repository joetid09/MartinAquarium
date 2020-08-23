import {useFish} from './fish/FishDataProvider.js'
import { FishList } from './fish/Fishlist.js'

import {useTips} from './tips/TipDataProvider.js'
import { TipList} from './tips/Tiplist.js'

import {useLocations} from './locations/LocationDataProvider.js'
import { LocationList } from './locations/Locationlist.js'

import {holyFish, soldierFish, nonHolyFish} from './fish/FishDataProvider.js'

const allTheFish = useFish()
const allTheTips = useTips()
const allTheLocations = useLocations()


/*invoking fish array functions to sort and add fish by divisible sizes to array*/

const holyFishes = holyFish()
const soldierFishes = soldierFish()
const nonHolyFishes = nonHolyFish()
/*console logging to ensure fish are properly being added to array*/

console.log(holyFishes)
console.log(soldierFishes)
console.log(nonHolyFishes)
/*for (const fish of allTheFish) {
    console.log(fish)
}

for (const tip of allTheTips) {
    console.log(tip)
}*/

for (const location of allTheLocations) {
    console.log(location)
}

FishList()
TipList()
LocationList()