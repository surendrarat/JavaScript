// the best practice of the declare the array is the using the const keyword 
// because it is provide abiliy of not changing referenc of array but change it's element or values

const gamechanger={
    name:"bot",
    'some chai':"this is for chai", //this is space when allow when we anclose in quates('')
    lastName:"machine",
    work:'calculation',
    duration: 1,
}
gamechanger.second="my name" //the const is not affect the value changing its affect when the memory reference is change
console.log(gamechanger);
// fist way to access the data using period (.)
console.log(gamechanger.name)
console.log(gamechanger.lastName)

// another method for access the object vlaue

const obj=new Object();

   obj.person="this is the best ";
    obj.go="come on";
    
    
    console.log(`this is ${3*4}`+obj);
    