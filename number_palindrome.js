function isNumber(n){
    const orgnum = n;
    let revnum = 0;

    while(n !== 0){
        revnum = revnum * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    if(orgnum === revnum){
        console.log(`is palindrome number`);
    }
    else{
        console.log(`s not a palindrome number`);
    }
}
console.log(isNumber(154));