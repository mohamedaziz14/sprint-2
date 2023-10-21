// Functions-Extra-Material
// Mubashir created a function that takes two numbers a and b and an operator o. His function should return the result of the corresponding mathematical function on both numbers. If the operator is not one of the specified characters +, -, /, *, or if there is a division by zero, the function should return null. Help him by fixing the code in the code tab to pass this challenge.

// Look at the examples below to get an idea of what the function should do:

// Examples
// basicCalculator(2, '+',  4) ➞ 6

// basicCalculator(6, '-', 5) ➞ 1

// basicCalculator(12, '/', 3) ➞ 4

// basicCalculator(3, '*', 4) ➞ 12

// basicCalculator(1, '/', 0) ➞ null
// Division by zero is not possible

// basicCalculator(1, 'x', 0) ➞ null
// 'x' is not an operator


// Booleans-Extra
// Write a function called isLeapYear that takes a year as input and returns true if the year is a leap year (i.e., it's divisible by 4, but not divisible by 100 unless it's also divisible by 400), and false otherwise.

// Write a function called isValidPassword that takes a string as input and returns true if it meets the following criteria:
// It has at least 8 characters
// It contains at least one uppercase letter, one lowercase letter, and one number
// It does not contain any spaces
// The function should return false otherwise.

// Write a function called hasUniqueCharacters that takes a string as input and returns true if all the characters in the string are unique (i.e., none of the characters repeat), and false otherwise.

// Write a function called isPrimeProduct that takes two positive integers as input and returns true if their product is a prime number, and false otherwise.



///////////////////////exercice1
function calculator(a,o,b) {
    if (o === '+') {
        return a + b
  }else    if (o === '-') {
        return a - b
}else    if (o === '') {
        return a * b
    }
}
/////////////exercice2
function isLeapYear(year){
    return (year%4===0&&year%100!==0)||(year%400===0)
        
    }
    //////////exercice3
    function isValidPassword(string){
        if (string.lengt>=8){
            return true
        }
        return false
    }























//////////////////////exercice2
