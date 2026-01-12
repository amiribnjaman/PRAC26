const linearSearch = (arr: number[], target: number): number => {
    let result: number = -1;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] == target) {
            result = i
        }
    }

    return result;
}

console.log(linearSearch([1,2,3,4,5], 3)); // 2
console.log(linearSearch([10,20,30,40,50], 25)); // -1