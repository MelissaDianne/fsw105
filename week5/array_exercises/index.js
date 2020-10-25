//section A
//Part 1

function fiveAndGreaterOnly(arr){
    const result = arr.filter(function(num){
        if (num >= 5){
            return true;
        }
    });
    return result;
};

console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//A.2
function evensOnly(arr){
    const result = arr.filter(function(num){
        if (num % 2 == 0){
            return true;
        }
    });
return result;
};

console.log(evensOnly([3, 6, 8, 2]));

// //Extra Credit
// const list = 

function ofAge(arr){
     const result = arr.filter(function(canSee){
        if (canSee.age >= 17){
            return true;
        }
        
    });
    return result;
};

console.log(ofAge([
    { name:"Angelina Jolie", age: 80 },
    { name:"Eric Jones", age: 2 },
    { name:"Paris Hilton", age: 5 },
    { name:"Kanye West", age: 16 },
    { name:"Bob Ziroll", age: 100 }
]));

// Section B
// Part One

function doubleNumbers(arr){
    const result = arr.map(function(num){
        return num * 2;
    });
    return result;
};

console.log(doubleNumbers([2, 5,100]));

// Part Two

function stringItUp(arr){
    const result = arr.map(function(num){
        return num + "";
    })
    return result;
}

console.log(stringItUp([2, 5, 100], ));


//Part Three

function capitalizeNames(arr){
    const result = arr.map(function(word){
        return word[0].toUpperCase() + word.substring(1).toLowerCase()
    })
    return result;
};

console.log(capitalizeNames(["john", "JACOB", "jinGlenHeimer", "schmidt"]));

//Extra Credit One

function namesOnly(arr){
    const result = arr.map(function(word){
        return word.name; 
   });
   return result;
};

console.log(namesOnly([
   { name:"Angelina Jolie", age: 80 },
   { name:"Eric Jones", age: 2 },
   { name:"Paris Hilton", age: 5 },
   { name:"Kanye West", age: 16 },
   { name:"Bob Ziroll", age: 100 }
]));

//Extra Credit Two

function makeStrings(arr){
    const result = arr.map(function(canSee){
        if (canSee.age >= 17) {
            return canSee.name + " can see The Matrix";
        } else (canSee.age < 17) 
            return canSee.name + " cannot see the Matrix";
        });
    return result;
};

console.log(makeStrings([
    { name:"Angelina Jolie", age: 80 },
    { name:"Eric Jones", age: 2 },
    { name:"Paris Hilton", age: 5 },
    { name:"Kanye West", age: 16 },
    { name:"Bob Ziroll", age: 100 }
 ]));

//Section C
//Part One

function total(arr){
    const result = arr.reduce(function(num1, num2){
        num2 = num2 + num1;
        return num2;
    });
    return result;
};

console.log(total([1, 2, 3]));


//Part Two

function stringConcat(arr){
    const result = arr.reduce(function(total, num){
        return total.concat(num);
    }, "" );
    return result;
};

console.log(stringConcat([1, 2, 3]));


//Part Three

var voters = [
    {Name: "Bob", age: "30", voted: true },
    {Name: "Jake", age: "32", voted: true },
    {Name: "Kate", age: "25", voted: false },
    {Name: "Sam", age: "20", voted: false },
    {Name: "Phil", age: "21", voted: true },
    {Name: "Ed", age: "55", voted: true },
    {Name: "Tami", age: "54", voted: true },
    {Name: "Mary", age: "31", voted: false },
    {Name: "Becky", age: "43", voted: false },
    {Name: "Joey", age: "41", voted: true },
    {Name: "Jeff", age: "30", voted: true },
    {Name: "Zack", age: "19", voted: false }
];

function totalVoters(arr){
    const result = voters.reduce(function(final, voter){
        if(voter.voted == true){
            final++
        }
        return final
    }, 0)

    return result
}

console.log(totalVoters(voters));



// //Extra Credit One

// function shoppingSpree(arr){
//     const result = arr.reduce(function(num1, num2){
//         ;
//         return num2;
//     });
//     return result;
// };


// console.log(shoppingSpree.price([
//         { title: "Tesla Model S", price: 90000 },
//         { title: "4 Carat Diamond Ring", price: 45000 },
//         { title: "Fancy Hacky Sack", price: 5 },
//         { title: "Gold fidgit spinner", price: 2000 },
//         { title: "A Second Tesla Model S", price: 90000 }
//     ])); //227005







//Section D
//Part One

function leastToGreatest(arr){
    const result = arr.sort(function(num1, num2){
         return num1 - num2;
    });
        return result;
    }


 console.log(leastToGreatest([1, 2 ,3, 5, 90, 20]));


//Part 2

function greatestToLeast(arr){
    const result = arr.sort(function(a,b){
        return b - a;
    });
    return result;
}


console.log(greatestToLeast([1, 2, 3, 5, 90, 20]));
;

//Part Three

function lengthSort(arr){
    const result = arr.sort(function(a,b){
        return a.length - b.length;
    });
    return result;
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

//Extra Credit


function alphabetical(arr){
    const result = arr.sort(function(word){
        word.sort
    });
    return result;
};

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));