import StringCalculator from "../helpers/StringCalculator";

test("should calculate the sum of positive numbers", () => {
  expect(StringCalculator("1,2,3")).toBe(6);
});

test("should return 0 if empty string", () => {
  expect(StringCalculator("")).toBe(0);
});

test("should return 0 if only blankspace is present", () => {
  expect(StringCalculator("  ")).toBe(0);
});
test("should return 0 if comma with blankspace is present", () => {
  expect(StringCalculator("  ,  ")).toBe(0);
});

test("should handle newline characters", () => {
  expect(StringCalculator("1\n2,3")).toBe(6);
});

test("should throw an error for negative numbers", () => {
  expect(() => StringCalculator("1,-2,-3,4")).toThrow(
    "negative numbers not allowed: -2, -3"
  );
});
