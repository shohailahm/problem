
let n = 200000;
let primeNums = [2];
let prime;
let sum;
for (let i = 3; i < n; i++) {
  prime = true;
  primeNums.forEach(primeNum => {
    if (i % primeNum === 0) {
      prime = false;
    }
  });
if (prime) {
    primeNums.push(i);
  }
}
sum = primeNums.reduce((a, b) => a + b);
console.log(sum);