// console.log("hello world!");
// console.log(typeof false);

// //undefined
// //null

// //const cannot be changed
// const name = "Rohit";
// const last_name = "Razdan";

// console.log(name+" "+last_name);

// //Variable which can change the value
// let new_name = "rohit";
// new_name = "new Rohit";

// console.log(new_name);

// //null is defined by programmmer
// //undefined is defined by javascript

// const a = 4;
// const b = 45;

// if(a>b)
// {
//     console.log("Hey I am a");
// }else{
//     console.log("Hey I am b");
// }

// //non-zero value is true
// //0 is false value
// //undefined/null are always false

// if(null)
// {
//     console.log("Hey I am a");
// }else{
//     console.log("Hey I am b");
// }


// //LOOPS
// //repetitive tasks => for LOOPS

// //Initialisation
// //condition
// //Increment/decrement
// const n = 10;
// for(let i=1; i<=n; i++)
// {
//     console.log(2+"x"+i+"="+(2*i));
// }



// //Array
// //JSON = objects

// const a = [12,13,"rohit",null,undefined];

// for(let i=0; i<5; i++)
// {
//     console.log(a[i]);
// }

// // But we dont use for loop for production

// //We use something called map => Executes the program one by one

// //Key value pair
// const person_details = {
//     name: "Rohit",
//     surname: "Razdan",
//     age: 20,
//     cartoons_liked: ["Shinchan","doraemon"],
//     schools:[
//         {
//             name: "SHCHS",
//             class: "KG"
//         },
//         {
//             name: "SJCHS",
//             class: "1-10"
//         },
//     ]
// };

// Dot(.) Operator

//console.log(person_details);

//ERROR HANDLING

// try{
//     //const a = 10;
    
//     throw new error('a is a const');
// }catch(err){
//     console.log(err);
// }

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));