// function add () {
//     x=6,
//     y=5
//     console.log(
//         x + y
//     );
    
// // }
// add ()

const greet = () => {
    return("Hello")
    
}
// alert (greet())
// // console.log(greet());

let x = 8
let v = 7

const user = () => {
   if(true) {
    console.log("hello");
    
   }
}
user ()

let g = 8
let z = 7

const numCheck = () => {
   if(g&2 ==1) {
    console.log("odd number");
    
   }
   else {
    console.log("even number");
    
   }
}
numCheck ()

let food = "Bole"
if (food == "Bole"){
    console.log("give me bole");
    
}
else if (food == "rice") {
    console.log("please give me some rice");
    
}

else {
    console.log("Never mind");   
}

let scoreOfUser = 80

if (scoreOfUser <=39) {
    console.log("You've failed the course");
}

else if (scoreOfUser >=40 && scoreOfUser <=49) {
    console.log(
        "you have a D"
    );
}

else if (scoreOfUser >=50 && scoreOfUser<=60) {
    console.log("You have a c"); 
}

// else if (scoreOfUser >=  ) {
//     console.log();
    
// }

function getGrade(score) {
    if (score >= 0 && score <= 40) {
      return "Fail";
    } else if (score > 40 && score <= 49) {
      return "D";
    } else if (score >= 50 && score <= 60) {
      return "C";
    } else if (score >= 66 && score <= 70) {
      return "B";
    } else if (score >= 71 && score <= 100) {
      return "A";
    } else {
      return "Invalid score"; 
    }
  }
  
  // Test the function
  console.log(getGrade(45));  
  console.log(getGrade(72));  
  console.log(getGrade(30));  
  