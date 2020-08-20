import {useLocations} from "./LocationDataProvider.js"
import {Location} from "./Location.js"

export const LocationList = () => {
    const contentElement = document.querySelector(".places")
    const locations = useLocations()

let locationHTMLRepresentations = ""
for (const location of locations) {
    locationHTMLRepresentations += Location(location)
}

    contentElement.innerHTML += `
    <article class = "locationList">
        ${locationHTMLRepresentations}
    </article>`
}