// Import the function that returns a copy of the fish array
import { getFish } from "../database.js"

import { getHolyFish } from "../database.js"
import { getSoldierFish } from "../database.js"
import { getDemonFish } from "../database.js"




export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        //Backtick is used so that we can use variables inside the string.
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.imgurl}" width="500" height="400"/></div>
            <aside>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.harvestLocation}</div>
            <div class="fish__diet">${fish.diet}</div>
            <div class="fish__tip">${fish.tip}</div>
            </aside>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

export const holyFishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getHolyFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        //Backtick is used so that we can use variables inside the string.
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.imgurl}" width="500" height="400"/></div>
            <aside>
            <div class="fish__name">Divine Name :${fish.name}</div>
            <div class="fish__species">Divine Species : ${fish.species}</div>
            <div class="fish__length">Divine Length :${fish.length}</div>
            <div class="fish__location">Divine Location${fish.harvestLocation}</div>
            <div class="fish__diet">Divine Diet : ${fish.diet}</div>
            <div class="fish__tip">Divine Tip :${fish.tip}</div>
            </aside>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

export const soldierFishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getSoldierFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        //Backtick is used so that we can use variables inside the string.
        htmlString += `<section class="soldierFishCard">
            <div><img  class="fish__image image--card" src="${fish.imgurl}" width="500" height="400"/></div>
            <aside>
            <div class="fish__name">name :${fish.name}</div>
            <div class="fish__species">spec : ${fish.species}</div>
            <div class="fish__length">leng:${fish.length}</div>
            <div class="fish__location">harv spot:${fish.harvestLocation}</div>
            <div class="fish__diet">diet:${fish.diet}</div>
            <div class="fish__tip"> tip :${fish.tip}</div>
            </aside>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

export const demonFishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getDemonFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        //Backtick is used so that we can use variables inside the string.
        htmlString += `<section class="demonFishCard">
            <div><img  class="fish__image image--card" src="${fish.imgurl}" /></div>
            <aside>
            <div class="fish__name">Demon name:${fish.name}</div>
            <div class="fish__species">Demon species:${fish.species}</div>
            <div class="fish__length">Demon length:${fish.length}</div>
            <div class="fish__location">Demon habitat:${fish.harvestLocation}</div>
            <div class="fish__diet">Demon diet:${fish.diet}</div>
            <div class="fish__tip">Demon tip:${fish.tip}</div>
            </aside>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}