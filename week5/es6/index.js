//PART ONE
let nameOwner = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
            let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "Spot"
        }
        console.log("pet name: ", name)
        pet.name = petObjects.push(pet)
    }
    console.log("man name: ", nameOwner)
    return petObjects
};


runForLoop(["cat", "dog"]);
 ;
;


//PART TWO

const carrots = ["bright orange", "ripe", "rotten"];

mapVegetables = arr =>
     arr.map(carrot => 
        ({ type: "carrot", name: carrot})
    );


console.log(mapVegetables([carrots]));



//PART THREE

const people = [
    {name: "Princess Peach", friendly: false},
    {name: "Luigi", friendly: true},
    {name: "Mario", friendly: true},
    {name: "Bowser", friendly: false}
]

const filterForFriendly = arr =>
    arr.filter(person => person.friendly)
    


console.log(filterForFriendly(people));


//PART FOUR

const doMathSum = (a, b) => a + b

const produceProduct = (a, b) => a * b

console.log(doMathSum(5,2))
console.log(produceProduct(5,2))


//PART FIVE

 let a = "Jane"
 let b = "Doe"
 let c = 100

 console.log("Hi " + a + " " + b + ", how does it feel to be " + c + '?')


//PART SIX


const printString = (a, b, c) => `Hi ${a} ${b}, how does it feel to be ${c}?`

console.log(printString("Jane", "Doe", 100))



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

 const filterForDogs = (arr) => 
    arr.filter(animal => {
        if (animal.type === "dog") {
            return true 
        } else { 
            return false
        }
    })


console.log(filterForDogs(animals));

//PART EIGHT

const location = "Hawaii"
const name = "Janice"

console.log("Hi " + name + "! " + "\n" + "Welcome to " + location + "." + "\n" + "I hope you enjoy your stay." + "\n" + 
"Please ask the president of " + location + " if you need anything!")

