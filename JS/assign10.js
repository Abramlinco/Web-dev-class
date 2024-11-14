function getGrade(score) {
    let grade;

    if (score >= 90 && score <= 100) {
        grade = "A";
    } else if (score >= 80 && score < 90) {
        grade = "B";
    } else if (score >= 70 && score < 80) {
        grade = "C";
    } else if (score >= 60 && score < 70) {
        grade = "D";
    } else if (score >= 0 && score < 60) {
        grade = "F";
    } else {
        grade = "Invalid score";
    }

    return grade;
}

const userScore = parseInt(prompt("Enter your score:"), 10);

if (!isNaN(userScore)) {
    alert(`Your grade is: ${getGrade(userScore)}`);
} else {
    alert("Please enter a valid number.");
}

setTimeout(()=>{
    console.log(userScore);
    
}, 4000)

