//ADVANCED ARRAY METHODS

// map - forEach

let numbers = [1, 2, 3, 4, 5];
// const result = document.getElementsByClassName("result");

// numbers.forEach((x, y, z) => {
//   console.log(x);

//   document.write(x)
// });

// numbers.map ((num)=>{
//     return(
//         console.log(num)
//     )

// })

// numbers.map(num => console.log(num)
// )

numbers.map((num) => console.log(num));

//filter
let orderNumbers = numbers.filter((x) => x % 2 !== 0);
console.log(orderNumbers);

//find
let two = numbers.find((x) => x % 2 === 0);
const rest = document.getElementsByClassName("result");
document.write(two);
console.log(two);

// //sort
// // let fruit = ["grape", "apple", "orange", "banana"]
// let fruit = [100, 65, 73]

// let sortedItems = fruit.sort(
//     (b,a) => a-b
// )
// console.log(sortedItems);

let num = [5, 7, 8, 10, 12];

let outCome = num.map((a) => a * a).filter(a => a <=50).sort( (x,y) => x-y)
console.log(outCome);
