import React from "react";

// React.memo prevents re-render if props don't change
const ReactMemo = React.memo(({ todo }) => {
  console.log("Rendering todo:", todo); 
  return <li>{todo}</li>;
});

export default ReactMemo;
