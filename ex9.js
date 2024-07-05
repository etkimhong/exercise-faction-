function median(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    const len = arr.length;
    if (len % 2 === 1) {
        return arr[Math.floor(len / 2)];
    } else {
        const mid1 = len / 2 - 1;
        const mid2 = len / 2;
        return (arr[mid1] + arr[mid2]) / 2;
    }
}
const arr1 = [3, 1, 4, 2, 5];
console.log(median(arr1)); 
const arr2 = [6, 1, 3, 2, 4, 5,7];
console.log(median(arr2)); 
