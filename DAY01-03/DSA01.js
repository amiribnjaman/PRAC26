// A BASIC ALGORITHM TO REVERSE A STRING
// TIME COMPLEXITY O(n) SPACE COMPLEXITY O(n)
var reverseString = function (str) {
    var _a;
    var left = 0;
    var right = str.length - 1;
    var arr = str.split('');
    // [H, E, L, L, O]
    while (left < right) {
        _a = [arr[right], arr[left]], arr[left] = _a[0], arr[right] = _a[1];
        left++;
        right--;
    }
    return arr.join('');
    // OLLEH
};
// console.log(reverseString("HELLO")); // OLLEH
// console.log(reverseString("TypeScript")); // tpircSepyT
// TWO SUM PROBLEM TIME 
// COMPLEXITY O(n^2) SPACE COMPLEXITY O(1)
var twoSum = function (nums, target) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var comlement = target - nums[i];
        for (var j = 0; j < nums.length; j++) {
            if (comlement === nums[j]) {
                result = [j, i];
            }
        }
    }
    return result;
};
// OPTIMIZED TWO SUM PROBLEM
// TIME COMPLEXITY O(n) SPACE COMPLEXITY O(n)
var twoSumOptimized = function (nums, target) {
    var numMap = {};
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (complement in numMap) {
            result = [numMap[complement], i];
        }
        else {
            numMap[nums[i]] = i;
        }
    }
    return result;
};
// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSumOptimized([2, 7, 11, 15], 18)); // [0, 1]
// console.log(twoSumOptimized([3, 2, 4, 6,8,9], 14));
// REMOVE DUPLICATES FROM SORTED ARRAY
// TIME COMPLEXITY O(n) SPACE COMPLEXITY O(1)
var removeDulicates = function (nums) {
    var uniqueNums = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            uniqueNums.push(nums[i]);
        }
    }
    return uniqueNums;
};
console.log(removeDulicates([1, 1, 2])); // [1, 2]
console.log(removeDulicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // [0,1,2,3,4]
