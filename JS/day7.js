// let date = new Date()
// console.log(date);

// console.log(
//     date.getFullYear()
// );

// console.log(
//     date.getMonth()
// );

// console.log(
//     date.getDate()
// );

// console.log(
//     date.getDay()
// );

// console.log(
//     date.getMilliseconds()
// );

// // timestamp, jan 1 1970
// // let now = date.getTime()

// // console.log(now);

// let timestamp = date.getTime()
// console.log(timestamp);

// let date2 = new Date (1730297892008)
// console.log(date2);

// // timeout, intervals

// setTimeout(() =>{
//     console.log("Work had");
//     }, 3000)

// setTimeout(() =>{
//     console.log("Don't relent in your work");
//     }, 5000)

// let timing = setInterval(() =>{
//     console.log("Keep pushing");
    
// }, 6000)

// setTimeout(()=>{
//     clearInterval(timing)
//     console.log("Now you can go");
    
// }, 15000)

let clock = new Date()

console.log(clock);


 setTimeout(()=>{
        console.log(clock);
        
    }, 5000)

    let button = document.querySelector('.fun')

setTimeout(()=>{
    button.innerHTML="Click here for more suprises"
}, 4000)

setTimeout(()=>{
    button.innerHTML="It's a fun day"
}, 7000)
