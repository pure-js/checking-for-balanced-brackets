function isParanthesis(char) {
  const parenthesis = '{}[]()';
  if (parenthesis.indexOf(char) > -1) return true;
  return false;
}

function isOpenParenthesis(parenthesisChar, tokens) {
  for (let i = 0; i < tokens.length; i += 1) {
    if (tokens[i][0] === parenthesisChar) {
      return true;
    }
  }
  return false;
}

function matches(topOfStack, closedParenthesis, tokens) {
  for (let k = 0; k < tokens.length; k += 1) {
    if (tokens[k][0] === topOfStack
       && tokens[k][1] === closedParenthesis) {
      return true;
    }
  }
  return false;
}

function isBalancedParentheses(expression) {
  const stack = [];
  const tokens = [['{', '}'], ['[', ']'], ['(', ')']];
  const { length } = expression;
  for (let i = 0; i < length; i += 1) {
    const currentChar = expression[i];
    if (isParanthesis(currentChar)) {
      if (isOpenParenthesis(currentChar, tokens)) {
        stack.push(currentChar);
      } else {
        if (stack.length === 0) return false;
        const topOfStack = stack.pop();
        if (!matches(topOfStack, currentChar, tokens)) return false;
      }
    }
  }
  if (stack.length === 0) return true;
}

export default isBalancedParentheses;
