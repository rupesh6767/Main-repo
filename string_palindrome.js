function isPalindrome(n){
    let org = n;
    let revstr = "";
    for(let i = n.length-1; i>=0;i--){
        revstr += n.charAt(i);
    }
    if(org === revstr){
        console.log(` string ${n} is a palindrome`);
    }
    else{
        console.log(` string ${n} is not a palindrome`)
    }
}
let n ="nitin";
console.log(isPalindrome(n));