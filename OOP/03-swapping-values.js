let x = 10;
let y = 20;

console.log(`Before swapping: x=${x}, y=${y}`);

// Swap values using destructuring
[y, x] = [x, y];

console.log(`After swapping: x=${x}, y=${y}`);
