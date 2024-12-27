function isperfectNum(n){
    if(n < 1){
        console.log(`${n} is not a perfect number`)
    }
    let sum = 1;
    for( let i=2;i<n;i++){
       if(n % i == 0){
        sum += i;
       }
    }
    return sum == n;
}
console.log(isperfectNum(6));