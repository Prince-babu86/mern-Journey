// Oops programming in javascript => Advance javascript 

// old method of making constructor function banane ka javascript me 

function User(){
  this.name = "Prince Babu"
  this.age = 18 
  this.email = "Princebabu4495@gmail.com"
}


 let user1 =  new User()


 // new method 


//  function Toffee(brand , price , expiry){
//     this.brand =  brand
//     this.price = price 
//     this.expiry = expiry
//  }



//  let t1 = new Toffee("ParleG" , 5 , "25-2-2024");
//  let t2 = new Toffee("Chocko" , 10 , "25-4-2025");


// console.log(t1);
// console.log(t2);


// Class Method 

class Toffee{
    constructor(brand , color , price , size){
        this.brand = brand
        this.color = color
        this.price = price 
        this.size = size
    }
}


let t1 = new Toffee("ParleG" , "red" , 3 , "small");
let t2 = new Toffee("Chocko" , "brown" , 3 , "large");
