function calculateGrade(marks) {
    // assign an "A" grade if the marks are greater than 79.
    if (marks > 79) {
        return "A";
    // assign an "B" grade if the marks are between 60 and 79.
    } else if (marks >= 60) {
        return "B";
    // assign an "C" grade if the marks are between 50 and 59.
    } else if (marks >= 50) {
        return "C";
    // assign an "D" grade if the marks are between 40 AND 49.
    } else if (marks >= 40) {
        return "D";
    // assign an "E" grade if the marks are below 40.
    } else {
        return "E";
    }
}
// Test cases with console.log
console.log(calculateGrade(23));