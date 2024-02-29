import { getFish } from './database.js'
import { getHolyFish } from "./database.js"
import { getSoldierFish } from "./database.js"
import { getDemonFish } from "./database.js"
// Import the FishList function from the correct module
import { holyFishList, soldierFishList, demonFishList } from './fish/FishList.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}



/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
let parentHTMLElement = document.querySelector(".fishInfo")


parentHTMLElement.innerHTML = holyFishList() + soldierFishList() + demonFishList();