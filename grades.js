// this is the array of grades from which we will loop
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// these are variables for each possible letter grade, set to 0 as a filler
let gradeA = 0;
let gradeB = 0;
let gradeC = 0;
let gradeD = 0;
let gradeE = 0;

// i research Mathmin and Mathmax in order to get a lowest and highest grade
let lowestScore = Math.min.apply(null, scores);
let highestScore = Math.max.apply(null, scores);

// for loop that runs through the array to check for number of letter grades
for (i = 0; i < scores.length; i ++) {
    //console.log(typeof scores[i]);
// if/else statements to determine what score goes with what grade
if (scores[i] <= 100 && scores[i] >= 91) {
    gradeA++;

} else if (scores[i] <= 90 && scores[i] >= 81) {
    gradeB++;

} else if (scores[i] <= 80 && scores[i] >= 71) {
    gradeC++;

} else if (scores[i] <= 70 && scores[i] >= 61) {
    gradeD++;

} else (scores[i] <= 60 && scores[i] >= 51) 
    gradeE++;

}

console.log("there were ", + gradeA + " A's, " + gradeB + " B's, " + gradeC + " C's, " + gradeD + " D's, and " + gradeE + " F's. ");

console.log("The highest grade is: " + (highestScore));
console.log("The lowest grade is: " + (lowestScore));