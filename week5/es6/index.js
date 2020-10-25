const nameOwner = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "Spot"
        }
        console.log("pet name", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name ", nameOwner)
    return petObjects
};


runForLoop(["cat", "dog"]);


//PART TWO

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot){
        return {type: "carrot", name: carrot}
    })
}

//PART THREE

const people = [
    {name: "Princess Peach", friendly: false},
    {name: "Luigi", friendly: true},
    {name: "Mario", friendly: true},
    {name: "Bowser", friendly: false}
]

function filterForFriendly(arr){
    return arr.filter(function(person) {
        return person.friendly
    })
}


//PART FOUR

function doMathSum(a, b){
    return a + b
}
var produceProduct = function (a,b) {
    return a * b
}

//PART FIVE

// write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100


//PART SIX

// Use template literals to build the string from #5

//PART SEVEN

const animals = [
    {
    type: "dog", 
    name: "theodore",
},
{
    type: "cat", 
    name: "whiskers",
},
{
    type: "pig", 
    name: "piglette",
},
{
    type: "dog", 
    name: "sparky",
}
];

function filterForDogs(arr) {
    return arr.filter(animal => {
        if (animal.type === "dog") {
            return true 
        } else { 
            return false
        }
        }
    })


//PART EIGHT

// Hi Janice!

// Welcome to Hawaii.Hawaii

// I hope you enjoy your stay.
// Please ask the president of Hawaii if you need anything.