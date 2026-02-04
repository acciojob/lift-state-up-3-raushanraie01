import React from "react";

function ChildComponent1({ selectedOption, setSelectedOption }) {
  return (
    <div>
      Child Component 1
      <button onClick={() => setSelectedOption("option 1")}>option 1</button>
    </div>
  );
}

export default ChildComponent1;
