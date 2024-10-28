function StringCalculator(input: string): number {
  let sum: number = 0;
  input.split(",").forEach((num) => {
    const number = Number(num);
    sum += number;
  });
  return sum;
}
export default StringCalculator;
