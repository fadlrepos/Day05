function isEven(n){
 return n %2 === 0
}

function isOdd(n){
    return !isEven

}


function describeParity(n){
   if (isEven(n)) {
        return "even";
    }

    return "odd";

}


console.log(describeParity(7))