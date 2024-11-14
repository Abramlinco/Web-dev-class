// Arrays

let x = [12, 32, "hello", true, null]
console.log(x);

console.log(
    x[3]
);

console.log(
    x.push (3001), x
);

console.log(
    x.pop (), x
);

// console.log(
//     x.shit(), x
// );

console.log(
    x.unshift(5000), x
);

console.log(
    x.includes("fam"), x
);

let car ={
    brand:"Mercedes",
    type:"saloon",
    color: "silver",
    engine: "2.5l turbo V6",
    Milege: 150000
}

console.log(car);
console.log(car.engine);

// functions

function greet() {
    console.log("hello guys!");
    
}
greet()

// callback or arrow function

let greet2 = () => {
    console.log("hello my people");
    
}
greet2()

// parameters and arguments

let greeting = (user) => {
    console.log("Hello" + user);
    
}
greeting("wick")




let vechicles = {
    cars: 50,
    trucks: 90,
    ships: 5,
    others: 100
}
console.log(vechicles);


// function oddOrEven(num){
//     console.log(oddOrEven);
    
//     return num%2 === 1 ? 'an odd number' : 'An even number';
// }

// oddOrEven(7)