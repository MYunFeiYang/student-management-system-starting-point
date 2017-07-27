"use strict"
function ugly_number(number) {
    if (number%7==0){
        return false;
    }else {
        return true;
    }
}
console.log(ugly_number(8));
console.log(ugly_number(14))
function calculate(number) {
    var j=0;
    for (let i=1;i<100;i++){
        if (i%7!=0){
            j++;
            if (j==number){
                return i;
            }
        }

    }
}
console.log(calculate(9));