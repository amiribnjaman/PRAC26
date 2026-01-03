// A BASIC ALGORITHM TO REVERSE A STRING
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

console.log(reverseString("HELLO")); // OLLEH
console.log(reverseString("TypeScript")); // tpircSepyT