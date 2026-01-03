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
console.log(reverseString("HELLO")); // OLLEH
console.log(reverseString("TypeScript")); // tpircSepyT
