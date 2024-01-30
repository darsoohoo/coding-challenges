/*Problem: Two Sum

Given an array of integers nums and an integer target, return the indices of the two numbers in the array that add up to the target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Write a function twoSum(nums, target) that takes an array of integers nums and an integer target as input and returns an array containing the indices of the two numbers that add up to the target.
*/


const twoSum = (nums, target) => {
    console.log(nums)
    console.log(target)
    let indices = []
let index = 0
    nums.forEach(num => {
        let currentNum = num; console.log(currentNum)
        let nextNum = nums[index+1]; console.log(nextNum)

        if(currentNum + nextNum === target){
            indices.push(index)
            indices.push(index+1)
        }
        index++
    });

    return indices

}



console.log(twoSum([2, 7, 11, 15], 9))  // Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)