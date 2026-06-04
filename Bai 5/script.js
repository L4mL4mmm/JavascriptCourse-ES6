function sumAllNumbers(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sumAllNumbers(5, 10, 15));
console.log(sumAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(sumAllNumbers(42));
console.log(sumAllNumbers());