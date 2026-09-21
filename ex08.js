function MaxOfThree( a , b , c){
    max=a
    if(a<b){
     max=b
    }
    if(b<c){
        max=c
    }
    return max ;
    
}
console.log(MaxOfThree( 15 , 18 , 6))