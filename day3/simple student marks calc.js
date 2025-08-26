// Student Marks Calculator

// Example marks (you can change or take input dynamically)
let marks = [90, 85, 78, 88, 92];

// Calculate total and percentage
let total = marks.reduce((a, b) => a + b, 0);
let percentage = total / marks.length;

// Find grade
let grade;
if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 70) {
  grade = "B";
} else if (percentage >= 60) {
  grade = "C";
} else if (percentage >= 50) {
  grade = "D";
} else {
  grade = "F";
}

// Show result
console.log("Marks:", marks);
console.log("Total:", total);
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Grade:", grade);
