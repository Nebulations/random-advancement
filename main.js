function advancement() {
    var list = new Array();

    // Challenges
    if (document.getElementById("cat-challenges").checked) {
        if (document.getElementById("cat-end").checked) {
            list.push("Great View From Up Here");
        }

        if (document.getElementById("cat-adventure").checked) {
            list.push("Arbalistic");
            list.push("Two Birds, One Arrow");
            list.push("Adventuring Time");
            list.push("Smithing with Style");
            list.push("Hero of the Village");
            list.push("It Spreads");
            list.push("Monsters Hunted");
            list.push("Bullseye");
            list.push("Sniper Duel");
        }

        if (document.getElementById("cat-nether").checked) {
            list.push("Hot Tourist Destinations");
            list.push("Return to Sender");
            list.push("Uneasy Alliance");
            list.push("A Furious Cocktail");
            list.push("How Did We Get Here?");
            list.push("Subspace Bubble");
            list.push("Cover Me in Debris");
        }

        if (document.getElementById("cat-husbandry").checked) {
            list.push("Two by Two");
            list.push("A Balanced Diet");
            list.push("Serious Dedication");
            list.push("A Complete Catalogue");
            list.push("With Our Powers Combined!");
        }
    }

    // Minecraft 
    if (document.getElementById("cat-minecraft").checked) {
        list.push("Stone Age");
        list.push("Getting an Upgrade");
        list.push("Acquire Hardware");
        list.push("Suit Up");
        list.push("Hot Stuff");
        list.push("Isn't It Iron Pick");
        list.push("Not Today, Thank You");
        list.push("Ice Bucket Challenge");
        list.push("Diamonds!");
        list.push("We Need to Go Deeper");
        list.push("Cover Me with Diamonds!");
        list.push("Enchanter");
        list.push("Eye Spy");
        list.push("Zombie Doctor");
        list.push("The End?");
    }

    // End
    if (document.getElementById("cat-end").checked) {
        list.push("Free the End");
        list.push("The Next Generation");
        list.push("You Need a Mint");
        list.push("The End... Again...");
        list.push("Remote Getaway");
        list.push("The City at the End of the Game");
        list.push("Sky's the Limit");
    }

    // Adventure
    if (document.getElementById("cat-adventure").checked) {
        list.push("Ol' Betsy");
        list.push("Who's the Pillager Now?");
        list.push("Surge Protector");
        list.push("Is It a Bird?");
        list.push("Is It a Balloon");
        list.push("Is It a Plane");
        list.push("Sound of Music");
        list.push("Sweet Dreams");
        list.push("Sneak 100");
        list.push("Light as a Rabbit");
        list.push("Caves & Cliffs");
        list.push("Sticky Situation");
        list.push("The Power of Books");
        list.push("Respecting the Remnants");
        list.push("Careful Restoration");
        list.push("Star Trader");
        list.push("What a Deal!");
        list.push("Hired Help");
        list.push("Crafting a New Look");
        list.push("Voluntary Exile");
        list.push("Postmortal");
        list.push("Monster Hunter");
        list.push("A Throwaway Joke");
        list.push("Very Very Frightening");
        list.push("Take Aim");
    }

    // Nether
    if (document.getElementById("cat-nether").checked) {
        list.push("This Boat Has Legs");
        list.push("Feels Like Home");
        list.push("A Terrible Fortress");
        list.push("Into Fire");
        list.push("Spooky Scary Skeleton");
        list.push("Local Brewery");
        list.push("Withering Heights");
        list.push("Bring Home the Beacon");
        list.push("Beaconator");
        list.push("Those Were the Days");
        list.push("War Pigs");
        list.push("Oh Shiny");
        list.push("Who is Cutting Onions?");
        list.push("Not Quite \"Nine\" Lives");
        list.push("Hidden in the Depths");
        list.push("Country Lode, Take Me Home");
    }

    // Husbandry
    if (document.getElementById("cat-husbandry").checked) {
        list.push("The Parrots and the Bats");
        list.push("Smells Interesting");
        list.push("Little Sniffs");
        list.push("Planting the Past");
        list.push("You've Got a Friend in Me");
        list.push("Birthday Song");
        list.push("A Seedy Place");
        list.push("Bee Our Guest");
        list.push("Wax On");
        list.push("Wax Off");
        list.push("Glow and Behold");
        list.push("Fishy Business");
        list.push("Tactical Fishing");
        list.push("The Cutest Predator");
        list.push("The Healing Power of Friendship");
        list.push("Best Friends Forever");
        list.push("Whatever Floats Your Goat!");
        list.push("Total Beelocation");
        list.push("Bukkit Bukkit");
        list.push("When the Squad Hops into Town");
    } 

    if (list.length > 0) {
        return list[Math.floor(Math.random() * list.length)];
    } else {
        return "No Advancement";
    }
}