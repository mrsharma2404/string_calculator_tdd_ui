module.exports = {
  preset: "ts-jest", // Use ts-jest preset
  testEnvironment: "node", // Set the test environment
  moduleFileExtensions: ["ts", "js", "json", "node"], // Allow .ts and .js files
  transform: {
    "^.+\\.ts$": "ts-jest", // Transform TypeScript files
  },
};
