// oops practise programming in javascript 

// function User(){
//     this.name = "Prince babu"
//     this.age = 18
//     this.username = "@itz_kallukaliya"
//     this.email = "prince@gmail.com"
//     this.sayHello = function(){
//         console.log("hello ji");
//     }
// }



// let u1 = new User()
// let u2 = new User()



function User(name , age , username , id){
    this.name = name
    this.age = age
    this.username = `@${username}` 
   this.id =  function(){
    console.log(id);
}
}

// User.prototype.id = 5505202
// User.prototype.id = function(){
//     console.log(this.id);
// }



User.prototype.details = function(){
    console.log(`Hey my name is ${this.name} and usernme is ${this.username} and my age is ${this.age} `);

    document.querySelector("h1").innerHTML = `hey my name is ${this.name} and username is ${this.username} and my age is ${this.age}`
}


let u1 = new User("Prince babu" , 18 ,  "itz_kallkaliya" , 10458)
let u2 = new User("pavani kumari", 12 , "pavanikaumari00" , 14442)



 class Jajaja{
    constructor(){

    }
}

class OppsParty {
    constructor(times) {
      this.times = times;
    }
  
    startParty() {
      for (let i = 1; i <= this.times; i++) {
        console.log(`Opps #${i}! 🎉`);
      }
    }
  }
  
  // Create an instance and start the party
  const myParty = new OppsParty(5);
  myParty.startParty();
  