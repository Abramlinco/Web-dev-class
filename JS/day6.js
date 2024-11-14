document.write("Hello")

// console.log(
//     document.getElementsByTagName('h1')
// );

// let u =  document.getElementsByTagName('h1') 
// console.log(u);

// console.log(
//     document.getElementsByClassName('two')
// );

// console.log(
//     document.getElementById('one')
// );

let g = document.querySelector('h1')
g.classList.add('box')

console.log(
    g
);

g.classList.toggle('box')

let z = document.getElementsByClassName('three')

console.log(z[0].innerText);

let z0 = z[0]  //object

console.log(z0);

let z1 = z0.innerText
console.log(z1);


let button = document.querySelector('.good')

// p.textContent = "good"

button.innerHTML = `<span>Hello Again</span>`
console.log(button);

button.innerHTML = new Date()

setTimeout(()=>{
    button.innerHTML = "welcome to today's class"
}, 3000)

setInterval(()=>{
    button.innerHTML = "Always stay focused"
}, 5000)