// Arrays and object in javascript 

// Arey => one and more valuse stores 



// what is Array => array is a data structures which can store multiple value all at one place
// why we use array store to use in  

var arr = [1,2,3,4,5,6,7]

// indexing in array => arr[0] index start from 0 

var arr2 = new Array(100); // this is a different way to create Array 
arr2[0] = 12;
arr2[1] = 32;


var arr3 = new Array(30);

for(let i = 0 ; i<30 ; i++){
    arr3[i] = i
}

// javascript me arrey homogenous nahi hota hai 

var arr4 = [1,2.2,true,"Prince babu" , {},[],undefined,NaN,null,function(){}];

// objects in javascript 

// what is object => sirf ek tareeka hai key value pairs ko hold karta hai 


var obj = {
    name:"Prince babu",
    age:18,
    email:"Princebabu4495@gmail.com",
}

var biodata = {
    name:"Prince babu",
    age:18,
    email:"Princebabu@gmail.com"
}


var obj2 = new Object();