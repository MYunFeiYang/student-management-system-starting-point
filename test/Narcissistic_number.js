"use strict"
function Narcissistic_number() {
    var result=[];
    for (let i=100;i<=999;i++){
        /*百位数*/
        let a=parseInt(i/100);
        /*个位数*/
        let c=(i%100)%10;
        /*十位数*/
        let b=parseInt((i%100)/10);
        if (i==Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3)){
            result.push(i);
        }
    }
    return result;
}
console.log(Narcissistic_number());