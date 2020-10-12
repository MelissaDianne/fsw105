
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    } ,
    {
        name: "Madeline",
        age: 80,
        gender: "male"
    },
    {
        name: "Cheryl",
        age: 22,
        gender: "female"
    },
    {
        name: "Sam",
        age: 30,
        gender: "male"
    },
    {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];

// age


function isOldEnough(){
    for (i = 0; peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log("is old enough");
    }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log("is not old enough");
        }
    }
}
isOldEnough()


//name

function isOldEnoughWithName(){
    for (i = 0; peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough");
    }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough");
        }
    }
}
isOldEnoughWithName()

//gender

function isOldEnoughWithNameAndGender(){
    for( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
        if( peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            var xGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female" ? "SHE'S" : "HE'S";
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. " + xGender + " good to see Mad Max Fury Road.");
        } else {
            var xGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female" ? "SHE'S" : "HE'S";
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let "+ xGender + " in.");
    }
}
}

isOldEnoughWithNameAndGender()



for (var x=0; x<=100; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}


var arrayOfArrays = [
[2, 5, 435, 4, 3]
[1, 1, 1, 1, 3]
[9, 3, 4, 2]
]


function lightOnOrOff(){
    for (i = 0; peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log("is old enough");
    }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log("is not old enough");
        }
    }
}