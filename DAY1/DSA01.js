// A BASIC ALGORITHM TO REVERSE A STRING
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
// TWO SUM PROBLEM
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
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));
