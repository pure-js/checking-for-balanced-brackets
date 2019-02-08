import isBalancedParentheses from './isBalancedParentheses';

test('() to be true', () => {
  expect(isBalancedParentheses('()')).toBe(true);
});

test('()) to be false', () => {
  expect(isBalancedParentheses('())')).toBe(false);
});

test('(){} to be true', () => {
  expect(isBalancedParentheses('(){}')).toBe(true);
});

test('((){}) to be true', () => {
  expect(isBalancedParentheses('((){})')).toBe(true);
});

test('((b){a}) to be true', () => {
  expect(isBalancedParentheses('((b){a})')).toBe(true);
});

test('{[(])} to be false', () => {
  expect(isBalancedParentheses('{[(])}')).toBe(false);
});

test('((){(}) to be false', () => {
  expect(isBalancedParentheses('((){(})')).toBe(false);
});
