import {useFish} from './fish/FishDataProvider.js'
import { FishList } from './fish/Fishlist.js'

import {useTips} from './tips/TipDataProvider.js'
import { TipList} from './tips/Tiplist.js'

import {useLocations} from './locations/LocationDataProvider.js'
import { LocationList } from './locations/Locationlist.js'

const allTheFish = useFish()
const allTheTips = useTips()
const allTheLocations = useLocations()

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