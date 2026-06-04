
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
// main.js
import { add, subtract } from './mathUtils.js';

console.log("Kết quả phép cộng (5 + 3):", add(5, 3));
console.log("Kết quả phép trừ (10 - 4):", subtract(10, 4));