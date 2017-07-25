
"use strict"
/*排序*/
function sortNumber(a,b)
    {
        return a - b
    }
/*计数*/
function calculate(collection) {
    var result=[];
    var key=collection[0];
    var count=0;
    result.push({key:count});
    for (let col of collection){
        if (key.toString().indexOf(col,0)==-1){
            key=col;
            count=0;
            result.push({key:count});
        }else {
            count++;
        }

    }
    return result;
}
let collection=[1,1,1,1,2,2,3,3,1,1];
let sort_result=collection.sort(sortNumber);
let calculate_result=calculate(sort_result);
console.log(calculate_result);