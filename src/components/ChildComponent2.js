import React from "react";

function ChildComponent2({ setSelectedOption }) {
  return (
    <div>
      Child Component 2
      <button onClick={() => setSelectedOption("option 2")}>option 2</button>
    </div>
  );
}

export default ChildComponent2;
