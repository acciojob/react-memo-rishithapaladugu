import React, { useMemo } from 'react';

const UseMemo = ({ counter }) => {
  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    return counter * 10000;
  }, [counter]);

  return (
    <div>
      <h3>Expensive Calculation: {expensiveValue}</h3>
    </div>
  );
};

export default UseMemo;
