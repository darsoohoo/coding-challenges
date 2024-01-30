/*
Problem: Longest Palindromic Substring

Write a function longestPalindromicSubstring(s) that finds and returns the longest palindromic substring in a given string s.

A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
*/




const string1 = "babad"; // Output: "bab" or "aba" (both are valid)
const string2 = "cbbd"; // Output: "bb"
const string3 = "a"; // Output: "a"



const longestPalindromicSubstring = (str) => {

    const isPalindrome = (stringWord) => {

        // get regular string
        // get reverse string
        // compare regular string and reverse string
        let array = stringWord.toLowerCase().split('')

        let arrayWithoutCommas = array.map((item) => {

            return (item !== "," && item !== " ") ? item : ""
        })
        console.log(arrayWithoutCommas)

        const compareStringOne = arrayWithoutCommas.join(""); console.log(compareStringOne)
        const compareStringTwo = arrayWithoutCommas.reverse().join(""); console.log(compareStringTwo)
        return compareStringOne === compareStringTwo
    }


    let allPalindromes = []
    let characters = ""
    for(i = 0; i < str.length; i++){
        characters += str[i]; console.log(characters)
        const isThisPalindrome = isPalindrome(characters); console.log(isThisPalindrome)
       
       if(isThisPalindrome){
           allPalindromes.push(characters) 
       } 
        console.log(allPalindromes)
    }

    let maxLength = 0;
    let indexOfMaxLength = 0
    for(i = 0; i < allPalindromes.length; i++) {
        let currentLength = allPalindromes[i].length;
        if(currentLength > maxLength) {
            indexOfMaxLength = i
        }
    }

return allPalindromes[indexOfMaxLength]

}

console.log(longestPalindromicSubstring(string1))