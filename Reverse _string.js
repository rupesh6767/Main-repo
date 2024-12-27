function Revstr(str){
    let revstr = "";
    for(let i = str.length-1;i>=0;i--){
        revstr += str.charAt(i); 
    }
      console.log('"' + revstr + '"');

}
console.log(Revstr("Rupesh"));