function ValidChecker(str) {
  const arr = [];

  const mappedPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (const element of str) {
    if (element === "(" || element === "{" || element === "[") {
      arr.push(element);
    } else {
      const lastBracket = arr.pop();
      if (element !== mappedPairs[lastBracket]) {
        return "not valid.";
      }
    }
  }
  if (str.length !== 0) {
    return "valid";
  }
}

export default ValidChecker;
