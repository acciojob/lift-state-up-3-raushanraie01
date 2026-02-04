import React from "react";

function ChildComponent2({ setSelectedOption }) {
  return (
    <div>
      Child Component 2
      <button onClick={() => setSelectedOption("Option 2")}>Option 2</button>
    </div>
  );
}

export default ChildComponent2;
