import { useState } from "react";
import ValidChecker from "../utils/ValidChecker";
import "./BracketInput.css";

function BracketInput() {
  const [bracket, setBracket] = useState("[({}){}]");
  const isValid = ValidChecker(bracket);
  function changeHandler(e) {
    setBracket(e.target.value);
  }
  return (
    <div className="container">
      <h2>Enter the brackets combination</h2>
      <input type="text" placeholder={bracket} onChange={changeHandler} />
      <br />
      <br />
      The given bracket pairs are {isValid}
    </div>
  );
}

export default BracketInput;
