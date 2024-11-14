let cars = {
    Mercedes: 20,
    Lexus: 40,
    Hyundai: 30
}
//destructuring
const {Lexus, Mercedes} = cars
console.log(Lexus, Mercedes);


let arrayName= [12, null, {
    name:"John Wick",
    dog:true,
    age:30
}, "Hello"]

const [a, ,b] = arrayName
console.log(a,b.name);

let family = ["dad", "mum", "jazzy"]

let arrayThree = [...arrayName, ...family]
console.log(arrayThree);

export const name = "John Wick"

const boy = "obi"
export default boy
