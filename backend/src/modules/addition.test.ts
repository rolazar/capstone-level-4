import { addition } from "./addition";

describe("The addition function...", () => {
  it("adds positive numbers", addPositives);
  it("adds a positive and negative number", addPositiveNegative);
  it("adds negative numbers", addNegatives);
  it("return NaN when strings are used", addStrings);
  it("adds number strings", addNumberStrings);
});

function addPositives() {
  //ARRANGE: Set the variables for the test
  const x = 3;
  const y = 4;

  //ACT: Use the unit with the variables
  const result = addition(x, y);

  //ASSERT: Check if the unit works as expected
  expect(result).toBe(7);
}

function addPositiveNegative() {
  //ARRANGE
  const x = 3;
  const y = -4;

  //ACT
  const result = addition(x, y);

  //ASSERT
  expect(result).toBe(-1);
}

function addNegatives() {
  //ARRANGE
  const x = -3;
  const y = -4;

  //ACT
  const result = addition(x, y);

  //ASSERT
  expect(result).toBe(-7);
}

function addStrings() {
  //ARRANGE
  const x = "dog";
  const y = "cat";

  //ACT
  const result = addition(x, y);

  //ASSERT
  expect(result).toBeNaN();
  // expect(result).toBe(NaN);
}

function addNumberStrings() {
  //ARRANGE
  const x = "3";
  const y = "4";

  //ACT
  const result = addition(x, y);

  //ASSERT
  expect(result).toBe(7);
}
