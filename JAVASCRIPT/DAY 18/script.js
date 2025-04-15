// hoisting in javascript => js declartion ko automatic upper kar deta hai wala part upper kar deta hai

// var a ;
// console.log(a);
// a = 12 ;

// iife => imedently invoked function  expression

//  var ans = (function abcd(){
//    var a = 12 ;

//    return {
//     set : function(val){
//         a = val
//     } ,
//     get: function(){
//         console.log(a)
//     }
//    }

//  })();

// var shery = (function sherlibrary(){
//     return {
//         imageEffect : function (){
//             console.log("image effect");

//         },

//         mouseFollower : function(){
//             console.log("Mouse follower");

//         }
//     }

// })();

// hofs => higher order function || ek aisa function jo yaa to return kare function and accept kare function in parameter , ya fir dono

function abcd() {
    return function () {
        console.log("heyheyheyheyheyheyhey");
        return function () {
            console.log("heyheyheyheyheyheyhey");
        };
    };
}

abcd()()();



function abcd2(fnc) {
    fnc()
}


abcd2(function () {
    console.log("heyheyhey");

});


// callback function => kisi function me jo function pass hota hai call kark wakt use function usey cd function kahte hai


function abcd3(val){

}


abcd3(function(){
    console.log("hello world");
    
})

