function StringCalculator(input: string): number {
  let sum: number = 0;
  const negatives: number[] = [];

  const [regex, filteredInput] = extractDelimiter(input);
  filteredInput.split(regex).forEach((num) => {
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

function extractDelimiter(input: string): [RegExp, string] {
  let regex = /[,\n]/; // Default delimiters are comma and newline
  // Check for custom delimiter
  if (input.startsWith("//")) {
    const delimiterLine = input.substring(2, input.indexOf("\n"));
    // Escape any special regex characters in the delimiter
    const escapedDelimiter = delimiterLine.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );
    regex = new RegExp(escapedDelimiter); // Create a regex for the string delimiter
    input = input.substring(input.indexOf("\n") + 1); // Get the rest of the input after the delimiter line
  }
  return [regex, input];
}
export default StringCalculator;
