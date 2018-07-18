import isBalancedParentheses from './isBalancedParentheses';

test('() to equal true', () => {
  expect(isBalancedParentheses('()')).toBe(true);
});

test('()) to equal false', () => {
  expect(isBalancedParentheses('())')).toBe(false);
});

test('(){} to equal true', () => {
  expect(isBalancedParentheses('(){}')).toBe(false);
});

test('((){}) to equal true', () => {
  expect(isBalancedParentheses('((){})')).toBe(false);
});

test('((){(}) to equal false', () => {
  expect(isBalancedParentheses('((){(})')).toBe(false);
});
