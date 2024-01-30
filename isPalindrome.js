/*

Problem: Palindrome Checker

Write a function isPalindrome(str) that takes a string str as input and returns true if it is a palindrome, and false otherwise.

A palindrome is a word, phrase, or sequence of characters that reads the same backward as forward, ignoring spaces, punctuation, and capitalization.
*/

const string1 ="racecar"; // Output: true
const string2 ="A man, a plan, a canal, Panama"; // Output: true
const string3 ="hello"; // Output: false

const isPalindrome = (str) => {

    // get regular string
    // get reverse string
    // compare regular string and reverse string
    let array = str.toLowerCase().split('')

   let arrayWithoutCommas = array.map((item) => {
    
       return (item !== "," && item !==" ") ? item: ""
   })
   console.log(arrayWithoutCommas)

    const compareStringOne = arrayWithoutCommas.join(""); console.log(compareStringOne)
    const compareStringTwo = arrayWithoutCommas.reverse().join(""); console.log(compareStringTwo)
    return compareStringOne === compareStringTwo
}

console.log(isPalindrome(string1))