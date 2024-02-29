const database = {
    fish: [
    {
        imgurl: "https://i.ytimg.com/vi/ZIfGvOCqTFo/maxresdefault.jpg",
        species: "Carrier Crab Gigantica",
        name: "Bart",
        length: 301,
        harvestLocation:"Hell",
        diet:"Smaller things", 
        tip: "Do not approach Bart, as he would like to eat you."
    },
    //Demonic
    {
    imgurl: "https://wiki.godvillegame.com/images/thumb/9/90/Picturizer_Demonic_Angelfish.jpg/298px-Picturizer_Demonic_Angelfish.jpg",
    species: "Infernal Angelfish",
    name: "Lucifer",
    length: 127,
    harvestLocation: "Abyssal Abyss",
    diet: "Lost souls",
    tip: "Lucifer, the ruler of the underworld seas, swims in darkness."
    },
    // Holy
    {
        imgurl: "https://static01.nyt.com/images/2006/05/30/dining/31fish.1.600.jpg",
        species: "Celestial Seraphin",
        name: "Ariel",
        length: 27,
        harvestLocation: "Heavenly Haven",
        diet: "Divine algae",
        tip: "Ariel, the guardian of celestial waters, brings blessings to all."
    },
    // Warrior
    {
        imgurl: "https://static.wikia.nocookie.net/shovelknight/images/0/04/Fish_Head_Artwork.png",
        species: "Aqua Knightmare",
        name: "Sir Splashalot",
        length: 125,
        harvestLocation: "Kingdom of Ripples",
        diet: "Water beetles",
        tip: "Sir Splashalot, a valiant knight of the aquatic realm, defends the waters."
    },
    // Joking Demonic
    {
        imgurl: "https://i.ebayimg.com/images/g/LToAAOSwwpdW~DDt/s-l1200.webp",
        species: "Prankster Demonfish",
        name: "Mischief",
        length: 17,
        harvestLocation: "Trickster Trench",
        diet: "Giggles and chaos",
        tip: "Mischief loves playing tricks on unsuspecting swimmers."
    },
    // Joking Holy
    {
        imgurl: "https://i.etsystatic.com/12143341/r/il/c1d3be/1861557698/il_570xN.1861557698_c73t.jpg",
        species: "Hallelujah Herring",
        name: "Divine Nice Finny",
        length: 69,
        harvestLocation: "Praise Pond",
        diet: "Sacred seaweed",
        tip: "Divine Finny spreads joy with every shimmering scale."
    },
    // Joking Warrior
    {
        imgurl: "https://www.shutterstock.com/image-vector/samurai-koi-fish-260nw-81806269.jpg",
        species: "Swordfish Samurai",
        name: "Blade Fin",
        length: 25,
        harvestLocation: "Swordfish Stronghold",
        diet: "Seaweed snacks",
        tip: "Blade Fin practices the way of the swordfish with finesse."
    },
    // Normal Demonic
    {
        imgurl: "https://pics.craiyon.com/2023-09-24/1f5d05b008f64a80b622c8b281f5a848.webp",
        species: "Dark Abyssal Cod",
        name: "Shadow",
        length: 61,
        harvestLocation: "Eternal Darkness",
        diet: "Lost hopes",
        tip: "Shadow, a mysterious fish from the depths, lurks in shadows."
    },
    // Normal Holy
    {
        imgurl: "https://i.seadn.io/gae/o2tclDkIjR32Of9AoGD5PEZXqIzU6lMxwI-ZQJe0x4wC6FGcCnOyYWteDDPPAWO90uZPFxgKoSHT8ZBs_xmqD_opXdPol7sOPrZyMw?auto=format&dpr=1&w=1000",
        species: "Serene Seraph Shark",
        name: "Harmony",
        length: 33,
        harvestLocation: "Harmony Haven",
        diet: "Harmonious plankton",
        tip: "Harmony brings tranquility to the underwater realms. He's depressed, though."
    },
    // Normal Warrior
    {
        imgurl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/42344a43-4f03-4926-bdd4-f3798bc13b46/deugt9j-7cabe916-c0eb-4d61-a163-c03541e12a2b.jpg/v1/fill/w_1920,h_1309,q_75,strp/tigerfish_kaiju_by_hagazzo_deugt9j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMwOSIsInBhdGgiOiJcL2ZcLzQyMzQ0YTQzLTRmMDMtNDkyNi1iZGQ0LWYzNzk4YmMxM2I0NlwvZGV1Z3Q5ai03Y2FiZTkxNi1jMGViLTRkNjEtYTE2My1jMDM1NDFlMTJhMmIuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hciXDF4zIwCmn4YxeDX8KWOwxKiyUP9rxQ0SX7yANTI",
        species: "Fierce Trident Tigerfish",
        name: "Razorjaw",
        length: 50,
        harvestLocation: "Trident Territory",
        diet: "Sea snakes",
        tip: "Razorjaw, a fearless warrior, rules the seas with a trident in hand."
    }
    ],
    tipArray: []
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const holiestFish of database.fish) {
        if (holiestFish.length % 3 === 0) {
            holyFish.push(holiestFish)
        }
    }
    return holyFish
}

export const getSoldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const soldierFish of database.fish) {
        if (soldierFish.length % 5 === 0) {
            soldiers.push(soldierFish)
        }
    }
    return soldiers
}

export const getDemonFish = () => {
    // Any fish not a multiple of 3 or 5
    const demonFish = []
    for (const demons of database.fish) {
        if (demons.length % 5 !== 0 && demons.length % 3 !== 0) {
            demonFish.push(demons)
        }
    }
    return demonFish
}