function greatestCommonDivisorGCD(num1, num2) {
    let divisors = [];
    let start = Math.min(num1, num2);
    for (let i = 1; i <= start; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            divisors.push(i);
        }
    }
   
    let maxDivisor = Math.max(...divisors);
    console.log(maxDivisor);
}
greatestCommonDivisorGCD(15, 5);