function sortNumbers(numbers) {
    let n = numbers.length;
    
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (numbers[j] < numbers[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = numbers[i];
            numbers[i] = numbers[minIndex];
            numbers[minIndex] = temp;
        }
    } 
    return numbers;
}

const exampleNumbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = sortNumbers(exampleNumbers);
console.log(sortedNumbers); 