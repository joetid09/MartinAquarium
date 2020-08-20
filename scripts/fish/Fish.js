export const Fish = (fish) => {
    return `
    <section class="fishcard">
    <div><img  class="fish__image image--card" src="../image/${fish.image}" width="100" height = "150"/></div>
        <ul>
        <li><div class="fish_name">${fish.name}</div></li>
        <li><div class="fish_species">${fish.species}</div></li>
        <li><div class="fish_length">${fish.length}</div></li>
        <li><div class="fish_location">${fish.harvestLocation}</div></li>
       <li> <div class="fish_diet">${fish.diet}</div></li>
       </ul>
    </section>
    `
}   