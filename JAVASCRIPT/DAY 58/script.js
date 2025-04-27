//


// function User(){
//     this.name = "Prince babu"
//     this.age = 18 
//     this.class = 12
// }


// let u1 =  new User();




// class User{
//     constructor(){
//         this.name = "Prince babu"
//     }
// }


// let u1 =   new User()



// function Toffee(name){
//     this.name = name
//     // this.price = 10;
// }


// Toffee.prototype.price  = 3 ;



// let t1 = new Toffee("ParleG")
// let t2 = new Toffee("Chocko")


// function User(name , age , isHandsome ){
//     this.name = name
//     this.age = age
//     this.isHandsome = isHandsome
//     // this.sayHello = function(){
//     //     console.log("Hellow");
//     // }

// }



// User.prototype.sayHello = function(){
//     console.log("hello");
// }

// let h1  = new User("Prince babu" , 18 , true);


// function User(name , age){

//     this.name = "@" + name
//     this.age = age
//     this.PrintMyname = function(){
//         console.log(this.name);
//     }
//     this.printMyAge = function(){
//         console.log(age);
//     }
// }



// let t1 = new User("Prince babu" , 18);
// let t2 = new User("Pavani babu" , 13);



function Employee(name , age , id , salary){
    this.name = name
    this.age = age
    this.id = id
    this.salary = salary
}


Employee.prototype.printDetails = function(){
    console.log(`${this.name} is my name and I am ${this.age} years old and my ID id ${this.id} and my salary is ${this.salary}`);
}


let e1 = new Employee("Prince babu" , 18 , 8248627 , 0);


