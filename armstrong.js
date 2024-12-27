function armStrong(n){
    let temp = n;
    let sum = 0;
    while(n > 0){
      let r = n%10;
       n = Math.floor(n/10);
       sum = sum+=r*r*r;
    }
    n = temp;
    if(temp==sum){
        console.log(`${n} is an armstrong number`);
    }
    else{
        console.log(`${n} is not an armstrong number`)
    }

}
let n = 370;
 console.log(armStrong(n));