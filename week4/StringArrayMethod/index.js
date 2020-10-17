//PART ONE

function capitalizeAndLowerCase(a){ 
    var lower = a.toLowerCase()
    var upper = a.toUpperCase ()
    console.log (upper + lower)
}
capitalizeAndLowerCase("hello")
 
//PART TWO 

function halfString(a){ 
    var halfLength = a.length / 2
    console.log( halfLength);
    console.log(Math.floor(halfLength));
}

//PART THREE

const str = 'hello';
var halfLength = str.length / 2
var round = Math.round(halfLength)
console.log(str.slice(0,round))
console.log(round)

