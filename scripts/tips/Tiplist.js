import { useTips } from "./TipDataProvider.js"
import { Tip } from "./Tip.js"

export const TipList = () => {

    const contentElement = document.querySelector(".tipList")
    const tips = useTips()

    let tipHTMLRepresentations = ""
    for (const tip of tips) {
       tipHTMLRepresentations += Tip(tip)
    }

contentElement.innerHTML += `
    <article class = "tipsList">
        ${tipHTMLRepresentations}
    </article>`
}

