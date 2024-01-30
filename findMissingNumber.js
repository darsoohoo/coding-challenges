/*
Problem: Find the Missing Number

You are given an array containing n distinct numbers taken from 0, 1, 2, ..., n. However, one number is missing from the array. Your task is to find the missing number.

Write a function findMissingNumber(nums) that takes an array nums as input and returns the missing number.

*/

const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1]

const findMissingNumber = (nums) => {
    let missingNumber
  
    console.log(nums)

    //31 sort the array
 const sortedArray =  nums.sort((a, b) => {
        return a - b
   })
   console.log(sortedArray)

const largestNumber = sortedArray[sortedArray.length-1]
console.log(largestNumber)
const smallestNumber = sortedArray[0]

for(i = 0; i < sortedArray.length-1; i++){
    
    let currentNumber = sortedArray[i]; console.log(currentNumber)
    let nextNumber =  sortedArray[i+1] ; console.log(nextNumber)

    if(currentNumber+1 !== nextNumber){
    
        missingNumber = currentNumber+1
    }

}
    // 2. find the lowest number of the array


   


    return missingNumber

}


console.log(findMissingNumber(numbers))