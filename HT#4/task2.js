

const averageGrade = 69; // variable to determine the average strudents score
let performanceLevel; // variable for showing the output

// determine the students academic success with the switch statement
switch (true) {
    case (averageGrade < 60):
        performanceLevel = "Unsatisfactory";
        break;
    case (averageGrade >= 60 && averageGrade <= 70):
        performanceLevel = "Satisfactory";
        break;
    case (averageGrade >= 71 && averageGrade <= 80):
        performanceLevel = "Good";
        break;
    case (averageGrade >= 81 && averageGrade <= 90):
        performanceLevel = "Very Good";
        break;
    case (averageGrade >= 91 && averageGrade <= 100):
        performanceLevel = "Excellent";
        break;

}
//results output
console.log("Student's average grade:", averageGrade);
console.log("Performance level:", performanceLevel);
