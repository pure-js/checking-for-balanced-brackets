function isParanthesis(char) {
  const parenthesis = '{}[]()';
  if (parenthesis.indexOf(char) > -1) return true;
  return false;
}

function isOpenParenthesis(parenthesisChar, tokens) {
  const { length } = tokens;
  for (let i = 0; i < length; i += 1) {
    if (tokens[i][0] === parenthesisChar) {
      return true;
    }
  }
  return false;
}

function matches(topOfStack, closedParenthesis, tokens) {
  const { length } = tokens;
  for (let i = 0; i < length; i += 1) {
    if (tokens[i][0] === topOfStack
       && tokens[i][1] === closedParenthesis) {
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
    const char = expression[i];
    if (isParanthesis(char)) {
      if (isOpenParenthesis(char, tokens)) {
        stack.push(char);
      } else {
        if (stack.length === 0) return false;
        const topOfStack = stack.pop();
        if (!matches(topOfStack, char, tokens)) return false;
      }
    }
  }
  return true;
}

export default isBalancedParentheses;
