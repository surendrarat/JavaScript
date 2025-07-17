// // we can store theh multiple type value
// let firstArr=["suru" ,"rath", 1 , true];
// // remember the position of the vlaue because we are use the index for access or  find out these .
// // not have key for value 
// console.log(typeof firstArr[0]);
// console.log(typeof firstArr[1]);
// console.log(typeof firstArr[2]);
// console.log(typeof firstArr[3]);
 
// let secondArr=["start" ,23]
// secondArr[1]
 

// the best practice of the declare the array is the using the const keyword 
// because it is provide abiliy of not changing referenc of array but change it's element or values
const hello=["harry" , "code" ,1];
hello[1]="with";
console.log( typeof hello);
console.log( typeof hello[2]);

// this is also allowed  that in block and out array are defferent
{
    const hello =[];
    hello[0]="my name"
    hello[1]=" suru"
    console.log(hello);
}


