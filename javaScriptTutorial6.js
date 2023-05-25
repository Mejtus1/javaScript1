//Record Collection (coding challenge)
var collection = {
    "2548": { //each record has an ID 
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": 
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
        }
    };

    var collectionCopy = JSON.parse(JSON.stringify(collection)); //this is just instance to make an copy of an object

    function updateRecords(id, ) { // we can pass in ID, property and value - it is going to update our record collection 
    // if we pass in the ID 2468 and property aritst and we set different value from Prince to Quincey
    // we will be changing the collection object, but we want a copy of the original object that is the JSON refference for 
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop]
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection; 
    }
    updateRecords(5439, "artist", "ABBA");

