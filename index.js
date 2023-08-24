"use strict";
// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
let evenNum = 7;
function sumOfEvenNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * 2;
    }
    return sum;
}
const result = sumOfEvenNumbers(evenNum);
console.log(`The sum of the first ${evenNum} even numbers is: ${result}`);
// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let numArray = [2, 4, 9, 6, 7, 37, 83, 7, 2];
for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 == 0) {
        console.log(numArray[i]);
    }
}
// Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let num1Array = [2, 4, 7, 3, 5, 8, 43, 82, 93, 925, 95, 85];
for (let i = num1Array.length - 1; i >= 0; i--) {
    if (num1Array[i] % 2 === 0) {
        num1Array.splice(i, 1);
    }
}
console.log(num1Array);
// - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
let radius = 10;
const calculateArea = (r) => {
    const pi = Math.PI;
    let area = pi * r ** 2;
    return area;
};
let areaCircle = calculateArea(radius);
console.log(areaCircle);
// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
let marks = [56, 39, 70, 60, 99, 40, 50, 82, 58, 69];
const removeGrades = (grade) => {
    for (let i = grade.length - 1; i >= 0; i--) {
        if (grade[i] < 50) {
            grade.splice(i, 1);
        }
    }
    return grade;
};
let gradesResult = removeGrades(marks);
console.log(gradesResult);
// Write a program that uses a function to find the largest element in an array of numbers.
let randomArray = [20, 40, 330, 500, 534, 220, 443, 60, 220, 440];
const largestNumber = (value) => {
    let largest = value[0];
    for (let i = 0; i < value.length; i++) {
        if (value[i] > largest) {
            largest = value[i];
        }
    }
    return largest;
};
let largestValue = largestNumber(randomArray);
console.log(largestValue);
