import React, { useState } from "react";

export const Counter = () => {
  const [count, setcount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>Increment</button>
    </div>
  );
};
