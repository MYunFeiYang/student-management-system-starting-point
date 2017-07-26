"use strict"
function output_prime() {
    var result=[];
    for (let i=1;i<=100;i++)
    {
        if (i%2!=0 && i%3!=0 && i%5!=0 &&i%7!=0)
        {
            result.push(i);
        }
    }
    return result;
}
console.log(output_prime());