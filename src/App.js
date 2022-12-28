import React from "react";
import ValidChecker from "./utils/ValidChecker";

const App = () => {
  const brackets = "[({}){}]";
  const isValid = ValidChecker(brackets);
  return <div>The given bracket pairs are {isValid}</div>;
};

export default App;
