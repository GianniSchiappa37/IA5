import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});



const { div, containsNumbers } = mut;

describe('div()', () => {
  test('divides two positive numbers', () => {
    expect(div(10, 2)).toBe(5);
  });

  test('divides negative by positive', () => {
    expect(div(-10, 2)).toBe(-5);
  });

  test('divides positive by negative', () => {
    expect(div(10, -2)).toBe(-5);
  });

  test('divides two negative numbers', () => {
    expect(div(-10, -2)).toBe(5);
  });

  test('dividing zero returns zero', () => {
    expect(div(0, 10)).toBe(0);
  });

  test('division by zero returns Infinity or -Infinity', () => {
    expect(div(10, 0)).toBe(Infinity);
    expect(div(-10, 0)).toBe(-Infinity);
  });
});

describe('containsNumbers()', () => {
  test('string with one number returns true', () => {
    expect(containsNumbers("abc1def")).toBe(true);
  });

  test('string with multiple numbers returns true', () => {
    expect(containsNumbers("123abc456")).toBe(true);
  });

  test('string with no numbers returns false', () => {
    expect(containsNumbers("abcdef")).toBe(false);
  });

  test('empty string returns false', () => {
    expect(containsNumbers("")).toBe(false);
  });

  test('string with symbols but no digits returns false', () => {
    expect(containsNumbers("!@#$.")).toBe(false);
  });

  test('string with whitespace returns false', () => {
    expect(containsNumbers("   ")).toBe(false);
  });

  test('string with a decimal point returns false', () => {
    expect(containsNumbers(".")).toBe(false);
  });

  test('string with minus sign only returns false', () => {
    expect(containsNumbers("-")).toBe(false);
  });
});