// A BASIC ALGORITHM TO REVERSE A STRING
// TIME COMPLEXITY O(n) SPACE COMPLEXITY O(n)
const reverseString = (str: string): string => {
    let left = 0;
    let right = str.length - 1
    let arr = str.split('')

    // [H, E, L, L, O]

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;

    }

    return arr.join('');
    // OLLEH
}

// console.log(reverseString("HELLO")); // OLLEH
// console.log(reverseString("TypeScript")); // tpircSepyT



// TWO SUM PROBLEM TIME 
// COMPLEXITY O(n^2) SPACE COMPLEXITY O(1)
const twoSum = (nums: number[], target: number): number[] | null => {

    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        const comlement = target - nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (comlement === nums[j]) {
                result = [j, i]
            }
        }
    }

    return result;
}

// OPTIMIZED TWO SUM PROBLEM
// TIME COMPLEXITY O(n) SPACE COMPLEXITY O(n)
const twoSumOptimized = (nums: number[], target: number): number[] | null => {
    const numMap: { [key: number]: number } = {}

    let result: number[] = []
    for (let i = 0; i < nums.length; i++) { 
        const complement = target - nums[i];
        if (complement in numMap) {
            result = [numMap[complement], i];
        }

        else {
            numMap[nums[i]] = i;
        }
    }

    return result;
 }

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 2, 4], 6));

// console.log(twoSumOptimized([2, 7, 11, 15], 18)); // [0, 1]
// console.log(twoSumOptimized([3, 2, 4, 6,8,9], 14));


// REMOVE DUPLICATES FROM SORTED ARRAY
// TIME COMPLEXITY O(n) SPACE COMPLEXITY O(1)
const removeDulicates = (nums: number[]): number[] => {
    const uniqueNums: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            uniqueNums.push(nums[i]);
        }
    }

    return uniqueNums;
}
console.log(removeDulicates([1, 1, 2])); // [1, 2]
console.log(removeDulicates([0,0,1,1,1,2,2,3,3,4])); // [0,1,2,3,4]