function sum(num1, num2){
    return num1 + num2
}

var result = sum(1, 2)
console.log(result)



function numbers(num1, num2, num3) {
    var greatest;
    if (num1 > num2) { 
        greatest = 1
        console.log("num1 is greater than num2");
    }  if(num1 > num3) {
        console.log("num1 is greater than num3");
    } else if(num2 > num3){
        console.log("num2 is greater than num3");
    }
    return num1 + num2 + num3
}

var result = numbers(20, 10, 15)
console.log(result)

function findOddEven(num){
    if ( num % 2 === 0) {
        console.log(num + ' is an even number')
    }else{
        console.log(num + ' is an odd number')
    }
    return num
}


findOddEven(6)

function findString(string){
    if (string.length > 20){
        console.log(string)
    }
    else if(string.length < 20){
        console.log(string + string)
    }
}

findString("fishingfishing")
findString("rod")