function StringCalculator(input: string): number {
  let sum: number = 0;
  const negatives: number[] = [];

  input.split(/[,|\n]/).forEach((num) => {
    const number = Number(num);
    if (number < 0) {
      negatives.push(number);
    } else {
      sum += number;
    }
  });

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }
  return sum;
}
export default StringCalculator;
