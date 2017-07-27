
"use strict"
let collection_A=[1,2,3];
let collection_B=[100,2,1,10];
console.log(union(collection_A,collection_B));
function union(collection_A,collection_B) {
    for (let col of collection_A){
        if (collection_B.toString().indexOf(col,0)==-1){
            collection_B.push(col);
        }
    }
    return collection_B;
}